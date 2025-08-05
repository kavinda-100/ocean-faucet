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
    // ---------------------------- Errors ----------------------------
    error OceanToken_InvalidAddress();
    error OceanToken_ClaimIntervalNotElapsed();

    // ---------------------------- State Variables ----------------------------
    uint256 public constant CLAIM_AMOUNT = 10 * 10 ** 18; // Amount of tokens to claim per request (10 OCT)
    uint256 public constant CLAIM_INTERVAL = 1 hours; // Time interval between claims (1 hour)
    mapping(address user => uint256 last_time) private lastClaimed; // Tracks the last time a user claimed tokens

    // ---------------------------- Events ----------------------------
    event TokensClaimed(address indexed user, uint256 amount);

    // ---------------------------- Modifiers ----------------------------

    /**
     * @dev Check if the caller address is valid.
     * @param _address The address to check.
     */
    modifier validAddress(address _address) {
        if (_address == address(0)) {
            revert OceanToken_InvalidAddress();
        }
        _;
    }

    // ---------------------------- Constructor ----------------------------
    /**
     * @dev Constructor that initializes the token with a name and symbol.
     * The owner of the contract is set to the deployer.
     */
    constructor() ERC20("OceanToken", "OCT") Ownable(msg.sender) {
        // Mint an initial supply of tokens to the faucet owner
        _mint(msg.sender, 1000000 * 10 ** decimals()); // 1 million tokens
    }

    // ---------------------------- public functions ----------------------------

    /**
     * @notice Allows the owner to mint new tokens.
     * @param _to The address to which the minted tokens will be sent.
     * @param _amount The amount of tokens to mint.
     */
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

    /**
     * @notice Allows users to claim tokens from the faucet.
     * @dev Users can only claim tokens if they haven't claimed in the last hour.
     */
    function claim_tokens(address _user) public validAddress(_user) {
        // check the time since the last claim
        // lastClaimed[_user] = 0 means the user has never claimed before
        if (lastClaimed[_user] != 0 && block.timestamp < lastClaimed[_user] + CLAIM_INTERVAL) {
            revert OceanToken_ClaimIntervalNotElapsed();
        }

        // Update the last claimed time
        lastClaimed[_user] = block.timestamp;

        // Mint tokens directly to the user
        _mint(_user, CLAIM_AMOUNT);

        // Emit an event for the claim
        emit TokensClaimed(_user, CLAIM_AMOUNT);
    }

    // ---------------------------- View functions (getters) ----------------------------

    /**
     * @notice Returns the claim amount for the faucet.
     * @return The amount of tokens that can be claimed.
     */
    function getClaimAmount() public pure returns (uint256) {
        return CLAIM_AMOUNT;
    }

    /**
     * @notice Returns the claim interval for the faucet.
     * @return The time interval between claims in seconds.
     */
    function getClaimInterval() public pure returns (uint256) {
        return CLAIM_INTERVAL;
    }
}
