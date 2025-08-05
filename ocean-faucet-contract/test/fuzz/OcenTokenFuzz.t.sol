// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {OceanToken} from "../../src/OceanToken.sol";
import {OceanTokenDeployer} from "../../script/OceanTokenDeployer.s.sol";

contract OceanTokenFuzzTest is Test {
    OceanToken token;

    function setUp() public {
        OceanTokenDeployer deployer = new OceanTokenDeployer();
        token = deployer.run();
    }

    // Fuzz test for claiming tokens
    function test_Fuzz_ClaimTokens(address user) public {
        vm.assume(user != address(0));
        vm.deal(user, 10 ether);
        vm.startPrank(user);
        token.claim_tokens(user);
        vm.stopPrank();
    }
}
