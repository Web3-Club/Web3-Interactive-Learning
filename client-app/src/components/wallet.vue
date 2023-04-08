<script>
import {ethers} from 'ethers'
import scoreAdd from '../../deployments/dev/Web3ClubScore.json'
import scoreAbi from '../../deployments/abi/Web3ClubScore.json'

import sbtAdd from '../../deployments/dev/Web3ClubSBT1155.json'
import sbtAbi from '../../deployments/abi/Web3ClubSBT1155.json'
// import { type } from 'os';

export default {
    data(){
      return {
        provider: null,
        account: null,
        //图片拉伸相关
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        //图片url
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        loading: true
      };
    },
    computed:{
      isSubmitted(){
        return this.$store.state.isSubmitted
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
        //调用mint时判断chainId
        let network = await this.provider.getNetwork();
        if(network.chainId != "534353"){
          return
        }
        //调用mint
        await (await this.Score.mint(this.account,0)).wait();
        this.open(0);
      },
      //初始化合约
      initContract(){
        this.Score = new ethers.Contract(scoreAdd.address,scoreAbi,this.signer);
        this.SBT = new ethers.Contract(sbtAdd.address,sbtAbi,this.signer);
      },
      //获得sbt的json地址
      async getSBTaddress(id){
        const jsonAddress = await this.SBT.soulURI(id);
        return jsonAddress;
      },
      //获得sbt图片地址
      getSBTgraphAddress(){
        return "https://i.ibb.co/2W5KYsL/seen.png";
      },
      //html消息弹窗
      async open(id) {
        this.$notify({
          title: '恭喜你获得了SBT',
          dangerouslyUseHTMLString: true,
          message: `<img src=${this.getSBTgraphAddress()} alt="Aleq" width="200" height="185"/>`//${this.getSBTaddress(0)}
          //`<img src=${this.url} alt="Aleq" width="200" height="185"/>`
        });
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
    <!-- && isSubmitted -->
    <el-button v-if="account"  @click="mint">Mint</el-button>
    <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>x
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
