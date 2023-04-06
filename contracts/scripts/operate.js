const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    const [account,second] = await hre.ethers.getSigners();
    const web3club1155 = await hre.ethers.getContractAt("Web3Club1155","0x22ba6B33E47F0714A0fb7415d920A8d1d4D8A848");
    await (await web3club1155.setScoreContract(account.address)).wait();
    console.log(await web3club1155.balanceOf(account.address,1));
    await (await web3club1155.mint(account.address,1)).wait();
    console.log(await web3club1155.balanceOf(account.address,1));
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})