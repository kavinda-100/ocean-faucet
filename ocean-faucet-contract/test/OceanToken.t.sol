// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {OceanToken} from "../src/OceanToken.sol";
import {OceanTokenDeployer} from "../script/OceanTokenDeployer.s.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract OceanTokenTest is Test {
    OceanToken token;
    address owner;
    uint256 constant INITIAL_SUPPLY = 1000000 * 10 ** 18; // 1 million tokens

    // ---------------------------- Variables ----------------------------
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");
    uint256 public USER_INITIAL_BALANCE = 10 ether; // Initial balance for users

    function setUp() public {
        // Deploy the OceanToken contract using the deployer script
        OceanTokenDeployer deployer = new OceanTokenDeployer();
        token = deployer.run();
        // Set the owner
        owner = token.owner();

        vm.deal(user1, USER_INITIAL_BALANCE);
        vm.deal(user2, USER_INITIAL_BALANCE);
    }

    // ---------------------------- Tests ----------------------------

    /**
     * @notice Test the initial supply of the OceanToken contract.
     * @dev This test checks if the initial supply is set correctly to 1 million tokens
     */
    function test_InitialSupply() public view {
        uint256 initialSupply = token.totalSupply();
        console2.log("Initial Supply:", initialSupply);
        assertEq(initialSupply, INITIAL_SUPPLY, "Initial supply should be 1 million tokens");
    }

    /**
     * @notice Test the check new mint amount.
     * @dev This test checks if the owner can mint new tokens and the total supply updates accordingly.
     */
    function test_OwnerMint() public {
        vm.startPrank(owner);

        uint256 mintAmount = 100 * 10 ** 18; // 100 OCT

        // Mint tokens to the owner
        token.mint(owner, mintAmount);

        // Check the owner's balance after minting
        uint256 ownerBalance = token.balanceOf(owner);
        console2.log("Owner Balance after minting:", ownerBalance);
        assertEq(ownerBalance, INITIAL_SUPPLY + mintAmount, "Owner balance should be initial supply plus minted amount");

        // Check the total supply after minting
        uint256 totalSupplyAfterMint = token.totalSupply();
        console2.log("Total Supply after minting:", totalSupplyAfterMint);
        assertEq(
            totalSupplyAfterMint,
            INITIAL_SUPPLY + mintAmount,
            "Total supply should be initial supply plus minted amount"
        );

        vm.stopPrank();
    }

    /**
     * @notice This test check only the owner can mint new tokens.
     * @dev This test checks if a non-owner cannot mint new tokens.
     */
    function test_NonOwnerMint() public {
        vm.startPrank(user1);

        uint256 mintAmount = 100 * 10 ** 18; // 100 OCT

        // Try to mint tokens as a non-owner
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, user1));
        token.mint(user1, mintAmount);

        vm.stopPrank();
    }

    /// ------------------------------ test claim tokens ------------------------------

    /**
     * @notice Test the claim tokens functionality.
     * @dev This test checks if users can claim tokens from the faucet and if the claim interval is enforced.
     */
    function test_ClaimTokens() public {
        vm.startPrank(user1);

        // Check the initial balance of user1
        uint256 initialBalance = token.balanceOf(user1);
        console2.log("User1 Initial Balance:", initialBalance);
        assertEq(initialBalance, 0, "User1 should have an initial balance of 0");

        // Claim tokens
        token.claim_tokens(user1);

        // Check the balance after claiming
        uint256 balanceAfterClaim = token.balanceOf(user1);
        console2.log("User1 Balance after claiming:", balanceAfterClaim);
        assertEq(balanceAfterClaim, token.CLAIM_AMOUNT(), "User1 should have claimed the correct amount of tokens");

        vm.stopPrank();
    }

    /**
     * @notice This test checks if the claim interval is passed before claiming again.
     * @dev This test checks if users cannot claim tokens again before the claim interval has elapsed.
     * if not, it reverts with the `OceanToken_ClaimIntervalNotElapsed` error.
     */
    function test_ClaimTokens_IntervalNotElapsed() public {
        vm.startPrank(user1);

        // Claim tokens for the first time
        token.claim_tokens(user1);
        assertEq(token.balanceOf(user1), token.CLAIM_AMOUNT(), "User1 should have claimed tokens");

        // Try to claim tokens again before the claim interval has elapsed
        vm.expectRevert(OceanToken.OceanToken_ClaimIntervalNotElapsed.selector);
        token.claim_tokens(user1);

        vm.stopPrank();
    }

    /**
     * @notice This test checks if the user can claim tokens after the claim interval has elapsed.
     */
    function test_ClaimTokens_AfterInterval() public {
        vm.startPrank(user1);

        // Claim tokens for the first time
        token.claim_tokens(user1);
        assertEq(token.balanceOf(user1), token.CLAIM_AMOUNT(), "User1 should have claimed tokens");

        // Fast forward time to ensure the claim interval has elapsed
        vm.warp(block.timestamp + token.CLAIM_INTERVAL() + 1);

        // Claim tokens again after the interval
        token.claim_tokens(user1);
        assertEq(token.balanceOf(user1), 2 * token.CLAIM_AMOUNT(), "User1 should have claimed tokens again");

        vm.stopPrank();
    }
}
