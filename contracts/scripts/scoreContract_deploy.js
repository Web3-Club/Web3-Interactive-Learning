const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    const Web3ClubScore = await hre.ethers.getContractFactory("Web3ClubScore");
    const web3clubscore = await Web3ClubScore.deploy("0x07f470F7793FeFb0F0602bAfC783023c81F5aE44");
    await web3clubscore.deployed();

    console.log(web3clubscore.address);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})