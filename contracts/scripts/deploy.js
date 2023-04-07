const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    const Web3ClubSBT1155 = await hre.ethers.getContractFactory("Web3ClubSBT1155");
    const web3clubSBT1155 = await Web3ClubSBT1155.deploy("","Web3ClubSBT","W3CSBT");
    await web3clubSBT1155.deployed();

    const [first,second] = await hre.ethers.getSigners();

    console.log(web3clubSBT1155.address);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})