// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {OceanToken} from "../src/OceanToken.sol";
import {OceanTokenDeployer} from "../script/OceanTokenDeployer.s.sol";

contract OceanTokenTest is Test {
    OceanToken token;
    address owner;
    uint256 constant INITIAL_SUPPLY = 1000000 * 10 ** 18; // 1 million tokens

    // ---------------------------- Variables ----------------------------
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");
    uint256 public USER_INITIAL_BALANCE = 10 * 10 ** 18; // 10 OCT

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
}
