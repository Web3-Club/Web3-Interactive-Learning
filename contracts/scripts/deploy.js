const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    const Web3Club1155 = await hre.ethers.getContractFactory("Web3Club1155");
    const web3club1155 = await Web3Club1155.deploy("","Web3Club","W3C");
    await web3club1155.deployed();

    const [first,second] = await hre.ethers.getSigners();

    console.log(web3club1155.address);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})