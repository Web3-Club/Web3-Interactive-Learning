<script>
import {ethers} from 'ethers'
import scoreAdd from '../../deployments/dev/Web3ClubScore.json'
import scoreAbi from '../../deployments/abi/Web3ClubScore.json'
// import { type } from 'os';

export default {
    data(){
      return {
        provider: null,
        account: null,
        //图片拉伸相关
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        //图片url
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
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
        // await (await this.Score.mint(this.account,1)).wait(); //======为测试，先不执行======
        this.open2();
      },
      //初始化合约
      initContract(){
        this.Score = new ethers.Contract(scoreAdd.address,scoreAbi,this.signer);
      },
      //消息弹窗
      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
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
    <!-- 图片 -->
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"></el-image>
    </div>
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