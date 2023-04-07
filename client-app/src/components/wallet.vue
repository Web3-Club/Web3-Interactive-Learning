<script>
import {ethers} from 'ethers'
import scoreAdd from '../../deployments/dev/Web3ClubScore.json'
import scoreAbi from '../../deployments/abi/Web3ClubScore.json'

export default {
    data(){
      return {
        provider: null,
        account: null,

      }
    },
    methods:{
      disconnect(){
          this.account = null
      },
      connect: async function(){
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
        if(!accounts || accounts.length == 0){
          return
        }
        this.account = accounts[0]
        this.signer = this.provider.getSigner()
        this.initContract();
      },
      mint: async function(){
        await (await this.Score.mint(this.account,0)).wait();
      },
      initContract(){
        this.Score = new ethers.Contract(scoreAdd.address,scoreAbi,this.signer);
      }
    },
    async created(){
      
    }
};
</script>

<template>
<div class="wallet">
    <div v-if="account">{{  account }}</div>
    <el-button v-if="!account" @click="connect">连接钱包</el-button>
    <el-button v-if="account"  @click="disconnect">断开连接</el-button>
    <el-button v-if="account"  @click="mint">Mint</el-button>
</div>
</template>

<style scoped lang="less">
.wallet {
    display: flex;
    flex-direction: row;
    margin: 5px;
    justify-content: right;
    align-items: center;

    div{
      font-size: 1.5rem;
      width: 30%;
      overflow:hidden; 
      text-overflow:ellipsis;
      white-space:nowrap; 
    }
}
</style>