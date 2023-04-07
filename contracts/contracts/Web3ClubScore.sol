// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Web3ClubSBT1155.sol";

contract Web3ClubScore{
    mapping(address => mapping(uint256 => bool)) public passList;
    Web3ClubSBT1155 private sbt;

    constructor(address sbt_address){
        sbt = Web3ClubSBT1155(sbt_address);
    }

    function passCheck(address to,uint256 id) public view returns(bool){
        return passList[to][id];
    }

    function mint(address to,uint256 id) public {
        require(!passCheck(to,id),"you have got this sbt");
        sbt.mint(to,id);
        passList[to][id] = true;
    }
}
