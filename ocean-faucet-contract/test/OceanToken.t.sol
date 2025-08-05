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

    function test_InitialSupply() public view {
        uint256 initialSupply = token.totalSupply();
        console2.log("Initial Supply:", initialSupply);
        assertEq(initialSupply, INITIAL_SUPPLY, "Initial supply should be 1 million tokens");
    }
}
