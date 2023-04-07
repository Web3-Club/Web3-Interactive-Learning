const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    const [account,second] = await hre.ethers.getSigners();
    const web3club1155 = await hre.ethers.getContractAt("Web3ClubSBT1155","0xc4f9b79225f43b6f94Ae85EEDccAf61C9931dED3");
    // await (await web3club1155.setScoreContract(account.address)).wait();

    // await (await web3club1155.setSoulName(1,"第二章")).wait();
    // await (await web3club1155.mint(account.address,1)).wait();
    // console.log(await web3club1155.getSoulName(1));
    // console.log(await web3club1155.isSoulbound(0));
    // console.log(await web3club1155.isSoulbound(1));
    // console.log(await web3club1155.soulURI(0));
    // console.log(await web3club1155.soulURI(1));
    // await (await web3club1155.setURI(0,"ipfs://QmcyJH7kzXcXwUoYiAKUuhJfgNfceKsUfqpCS9FCwJ5jZo")).wait();
    // console.log(await web3club1155.soulURI(0));
    // await (await web3club1155.setURI(1,"ipfs://QmcUALoAhSLZyXHQroW21pVBbAjoXYtXLMFDi8ZsFcb7tA")).wait();
    // console.log(await web3club1155.soulURI(1));
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})