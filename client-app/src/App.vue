<template>
<div id="app" v-loading="loading">
  <div>
    <wallet></wallet>
  </div>
 

    <div class="sidebar">
        <card></card>
        <list></list>
    </div>
    <div v-if="isEnd">
      <questionnaire></questionnaire>
    </div>
    <div v-else class="main">
        <message></message>
        <!-- <texts></texts> -->
    </div>
</div>
</template>

<script>

import Card from './components/card';
import List from './components/list';
import Message from './components/message';
import Wallet from './components/wallet';
import Questionnaire from './components/questionnaire';

export default {
    name: 'App',
    components: {
        Card,
        List,
        Message,
        Wallet,
        Questionnaire
    },
    created() {
        this.$store.dispatch("INIT_DATA")
    },
    computed: {
      isEnd(){
        return this.$store.state.isEnd
      },loading(){
        return this.$store.state.loading
      }
    }

}
</script>

<style lang="less" scoped>
#app {
    //     font-family: Avenir, Helvetica, Arial, sans-serif;
    //   -webkit-font-smoothing: antialiased;
    //   -moz-osx-font-smoothing: grayscale;
    //   text-align: center;
    //   color: #2c3e50;
    //   margin-top: 60px;
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar,
    .main {
        height: 100%;
    }

    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }

    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }

    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    .message {
        height: ~'calc(100% - 50px)';
    }
}
</style>
