const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    const Web3ClubScore = await hre.ethers.getContractFactory("Web3ClubScore");
    const web3clubscore = await Web3ClubScore.deploy("0xc4f9b79225f43b6f94Ae85EEDccAf61C9931dED3");
    await web3clubscore.deployed();

    console.log(web3clubscore.address);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})