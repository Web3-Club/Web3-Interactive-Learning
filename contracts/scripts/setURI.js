const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    const web3club1155 = await hre.ethers.getContractAt("Web3Club1155","0x22ba6B33E47F0714A0fb7415d920A8d1d4D8A848");
    const account = await hre.ethers.getSigner();
    // console.log(await web3club1155.uri(0));
    await (await web3club1155.setURI(1,"ipfs://QmcyJH7kzXcXwUoYiAKUuhJfgNfceKsUfqpCS9FCwJ5jZo")).wait();
    console.log(await web3club1155.uri(1));
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})