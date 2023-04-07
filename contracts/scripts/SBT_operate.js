const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){

    const [account,second] = await hre.ethers.getSigners();
    const web3club1155 = await hre.ethers.getContractAt("Web3ClubSBT1155","0x07f470F7793FeFb0F0602bAfC783023c81F5aE44");

    const web3clubscore = await hre.ethers.getContractAt("Web3ClubScore","0x4C48AC2C01aD33638C0F354A7Deb2C0FBb689048");

    await (await web3club1155.setScoreContract(web3clubscore.address)).wait();
    // await (await web3club1155.setScoreContract(account.address)).wait();
    // console.log(await web3club1155.scoreContract());


    // await (await web3club1155.setSoulName(1,"第二章")).wait();
    // await (await web3club1155.mint(account.address,1)).wait();
    // console.log(await web3club1155.getSoulName(0));
    // console.log(await web3club1155.isSoulbound(0));
    // console.log(await web3club1155.isSoulbound(1));
    // await (await web3club1155.setURI(0,"ipfs://QmVnBvBPy9hQGG7sSGB3LiT5ek16PR2ZCBfsKsZCs1KPNg")).wait();
    // console.log(await web3club1155.soulURI(0));
    // await (await web3club1155.setURI(1,"ipfs://QmWJQKxCX89ShW8W3rYGg3cArVK4Y97CHjboMic2NnnpnT")).wait();
    // console.log(await web3club1155.soulURI(1));
    // console.log(await web3club1155.soulURI(0));
    // console.log(await web3club1155.soulURI(1));

    // await (await web3club1155.connect(second).safeTransferFrom(account.address,second.address,0,1,"0x")).wait();
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})