// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {OceanToken} from "../../src/OceanToken.sol";
import {OceanTokenDeployer} from "../../script/OceanTokenDeployer.s.sol";

contract OceanTokenFuzzTest is Test {
    OceanToken token;
    address owner;

    function setUp() public {
        OceanTokenDeployer deployer = new OceanTokenDeployer();
        token = deployer.run();
        owner = token.owner();
    }

    // ---------------------------- Fuzz Test ----------------------------

    /**
     * @notice Fuzz test for claiming tokens with random user addresses.
     * @dev This test ensures token claiming works correctly for any valid user address and
     *      verifies the balance increases by exactly CLAIM_AMOUNT for robustness.
     */
    function test_Fuzz_ClaimTokens(address user) public {
        vm.assume(user != address(0));
        vm.deal(user, 10 ether);
        vm.startPrank(user);

        uint256 balanceBefore = token.balanceOf(user);
        token.claim_tokens(user);
        uint256 balanceAfter = token.balanceOf(user);

        // Ensure balance increased by exactly CLAIM_AMOUNT
        assertEq(balanceAfter - balanceBefore, token.CLAIM_AMOUNT());
        vm.stopPrank();
    }

    /**
     * @notice Fuzz test for owner minting with random recipients and amounts.
     * @dev This test ensures minting works correctly for any valid address and amount,
     *      verifying both total supply and individual balance updates are accurate.
     */
    function test_Fuzz_OwnerMint(address to, uint256 amount) public {
        vm.assume(to != address(0));
        vm.assume(amount <= type(uint256).max / 2); // Prevent overflow

        vm.startPrank(owner);

        uint256 totalSupplyBefore = token.totalSupply();
        uint256 balanceBefore = token.balanceOf(to);

        token.mint(to, amount);

        uint256 totalSupplyAfter = token.totalSupply();
        uint256 balanceAfter = token.balanceOf(to);

        // Verify mint worked correctly
        assertEq(totalSupplyAfter - totalSupplyBefore, amount);
        assertEq(balanceAfter - balanceBefore, amount);

        vm.stopPrank();
    }

    /**
     * @notice Fuzz test ensuring non-owners can never mint tokens.
     * @dev This is a critical security test that verifies the onlyOwner modifier works correctly
     *      for any attacker address and mint amount combination, protecting against unauthorized minting.
     */
    function test_Fuzz_NonOwnerMintFails(address attacker, uint256 amount) public {
        vm.assume(attacker != owner);
        vm.assume(attacker != address(0));

        vm.startPrank(attacker);
        vm.expectRevert();
        token.mint(attacker, amount);
        vm.stopPrank();
    }

    /**
     * @notice Fuzz test for claim interval enforcement with random time offsets.
     * @dev This test ensures users cannot claim twice within the interval period by testing
     *      various time offsets less than CLAIM_INTERVAL, verifying the time-based security mechanism.
     */
    function test_Fuzz_ClaimIntervalEnforcement(address user, uint256 timeOffset) public {
        vm.assume(user != address(0));
        vm.assume(timeOffset < token.CLAIM_INTERVAL()); // Less than 1 hour

        vm.startPrank(user);

        // First claim should succeed
        token.claim_tokens(user);

        // Fast forward by less than claim interval
        vm.warp(block.timestamp + timeOffset);

        // Second claim should fail
        vm.expectRevert(OceanToken.OceanToken_ClaimIntervalNotElapsed.selector);
        token.claim_tokens(user);

        vm.stopPrank();
    }

    /**
     * @notice Fuzz test for independent claiming between different users.
     * @dev This test ensures user isolation - one user's claim doesn't affect another's ability to claim.
     *      Verifies the mapping-based user tracking works correctly for any two different addresses.
     */
    function test_Fuzz_MultipleUsersClaim(address user1, address user2) public {
        vm.assume(user1 != address(0) && user2 != address(0));
        vm.assume(user1 != user2);

        // User1 claims
        vm.startPrank(user1);
        token.claim_tokens(user1);
        assertEq(token.balanceOf(user1), token.CLAIM_AMOUNT());
        vm.stopPrank();

        // User2 claims (should work independently)
        vm.startPrank(user2);
        token.claim_tokens(user2);
        assertEq(token.balanceOf(user2), token.CLAIM_AMOUNT());
        vm.stopPrank();

        // Both users should have the same amount
        assertEq(token.balanceOf(user1), token.balanceOf(user2));
    }

    /**
     * @notice Fuzz test for claiming after the interval has passed with random extra time.
     * @dev This test ensures users can always claim again after sufficient time has elapsed,
     *      testing the time logic works correctly for any duration beyond the CLAIM_INTERVAL.
     */
    function test_Fuzz_ClaimAfterInterval(address user, uint256 extraTime) public {
        vm.assume(user != address(0));
        vm.assume(extraTime <= 365 days); // Reasonable upper bound

        vm.startPrank(user);

        // First claim
        token.claim_tokens(user);
        uint256 firstClaimBalance = token.balanceOf(user);

        // Fast forward past claim interval
        vm.warp(block.timestamp + token.CLAIM_INTERVAL() + extraTime);

        // Second claim should succeed
        token.claim_tokens(user);
        uint256 secondClaimBalance = token.balanceOf(user);

        // Should have exactly double the claim amount
        assertEq(secondClaimBalance, firstClaimBalance + token.CLAIM_AMOUNT());
        assertEq(secondClaimBalance, 2 * token.CLAIM_AMOUNT());

        vm.stopPrank();
    }
}
