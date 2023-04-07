const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    const [account,second] = await hre.ethers.getSigners();
    const web3club1155 = await hre.ethers.getContractAt("Web3ClubSBT1155","0xc4f9b79225f43b6f94Ae85EEDccAf61C9931dED3");
    //0xc4f9b79225f43b6f94Ae85EEDccAf61C9931dED3

    const web3clubscore = await hre.ethers.getContractAt("Web3ClubScore","0x3B7495685Ee4402702cf86775839f4f46D49BAB3");

    await (await web3club1155.setScoreContract(web3clubscore.address)).wait();

    console.log(await web3club1155.scoreContract());

    // await (await web3club1155.setScoreContract(web3clubscore.address)).wait();

    // await (await web3club1155.setSoulName(1,"第二章")).wait();
    // await (await web3club1155.mint(account.address,0)).wait();
    // console.log(await web3club1155.getSoulName(1));
    // console.log(await web3club1155.isSoulbound(0));
    // console.log(await web3club1155.isSoulbound(1));
    // console.log(await web3club1155.soulURI(0));
    // console.log(await web3club1155.soulURI(1));
    // await (await web3club1155.setURI(0,"ipfs://QmVnBvBPy9hQGG7sSGB3LiT5ek16PR2ZCBfsKsZCs1KPNg")).wait();
    // console.log(await web3club1155.soulURI(0));
    // await (await web3club1155.setURI(1,"ipfs://QmWJQKxCX89ShW8W3rYGg3cArVK4Y97CHjboMic2NnnpnT")).wait();
    // console.log(await web3club1155.soulURI(1));

    // await (await web3club1155.connect(second).safeTransferFrom(account.address,second.address,0,1,"0x")).wait();
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})