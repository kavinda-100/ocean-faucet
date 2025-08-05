// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title OceanToken
 * @author Kavinda Rathnayake
 * @notice This contract is a Faucet for Ocean Tokens (OCT) to users.
 * @dev It inherits from OpenZeppelin's ERC20 and Ownable contracts.
 */
contract OceanToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("OceanToken", "OCT") Ownable(initialOwner) {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
