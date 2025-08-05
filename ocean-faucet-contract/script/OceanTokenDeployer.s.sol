// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script, console2} from "forge-std/Script.sol";
import {OceanToken} from "../src/OceanToken.sol";

/**
 * @title OceanTokenDeployer
 * @author Kavinda Rathnayake
 * @notice This script deploys the OceanToken contract.
 * @dev It uses Forge's Script functionality to deploy the contract.
 */
contract OceanTokenDeployer is Script {
    function run() external returns (OceanToken) {
        console2.log("Deploying OceanToken contract...");

        // Start broadcasting the transaction
        vm.startBroadcast();
        OceanToken token = new OceanToken();
        vm.stopBroadcast();

        // summary of the deployment
        console2.log("===================================");
        console2.log("Deployment Summary:");
        console2.log("OceanToken Contract Address: ", address(token));
        console2.log("===================================");

        return token;
    }
}
