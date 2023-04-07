<script>
export default {
    data(){
      return {
        currentDialogData:[],
        dialogGap: 400,  //动画效果时间
        displayTicker: null,
        lastDialogTime: null,
        options:null,
        from: null, 
        to: null,
        fromId:0,
        toId:1,
        isEnd: false
      }
    },
    computed: {
      dialog() {
            return this.$store.state.dialog
        },
      //id map dialogItem
      dialogMap(){
          const map = new Map()
          this.$store.state.dialog.dialog.forEach(e => map.set(e.id, e))
          return map
        }
    },
    methods:{
      displayDialog(){
        // console.log("displayDialog:", new Date().getTime()-this.lastDialogTime)
        // console.log("this.dialog:", this.dialog)

        if(this.isEnd){
          clearInterval(this.displayTicker)
          return
        }
        const now =  new Date().getTime();
        if(now - this.lastDialogTime < this.dialogGap){
          return
        }
        
        console.log("this.dialogMap:", this.dialogMap)
        const dialogItem = this.dialogMap.get(this.toId)
        if(!dialogItem){
          this.stopTicker()
          return
        }
        console.log("dialogItem:", dialogItem)
        if(this.currentDialogData.length > 0){
          this.fromId = this.currentDialogData[this.currentDialogData.length - 1].id
        }
        this.toId = this.toId + 1
        if(dialogItem?.path){
          this.toId = dialogItem?.path[0]?.to
        }
        const nextItem = this.dialogMap.get(this.toId)
        if(!nextItem){
          this.isEnd = true
        }
        if(dialogItem?.to){
          this.toId = dialogItem?.to
        }

        if(dialogItem.type === 'choices'){
          this.stopTicker()
        }
        this.currentDialogData.push(dialogItem)
        this.lastDialogTime = now

      },
      chooseOption(choices, index){
        // this.currentDialogData.push(choiceItem.choice)
        console.log("choices:",choices, ",index:", index)
        const knowledge = {
          id: choices.id,
          type: 'knowledge',
          choosed: true,
          data: choices.data[index].choice
        }
        this.currentDialogData.pop()
        const from = this.currentDialogData[this.currentDialogData.length - 1]
        this.currentDialogData.push(knowledge)
        const paths = choices.data[index].path
        console.log("chooseOption, paths:", paths)
        this.toId = paths[0].to
        const targetPath = paths.filter(e => e.from == from.id)[0]
        if(targetPath){
          this.toId = targetPath.to
        }
        console.log("chooseOption:", this.toId)
        this.resumeTicker()
      },
      startTicker(){
        this.isEnd = false
        this.fromId = 0
        this.toId = 1
        this.from = null
        this.to = null
        this.currentDialogData = []
        this.lastDialogTime = this.lastDialogTime ? 0 : new Date().getTime()
        if(this.displayTicker){
          clearInterval(this.displayTicker)
        }
        this.resumeTicker()
      },
      resumeTicker(){
        this.displayTicker = setInterval(this.displayDialog, 100)
      },
      stopTicker(){
        clearInterval(this.displayTicker)
      }
    },
    watch:{
      dialog(newV,oldV){
        this.startTicker()
        console.log("watch dialog: oldV:", oldV, "\nnewV:", newV)
      }
    },
    directives: {
        // 发送消息后滚动到底部
        'scroll-bottom': {
            bind(el, binding) { //binging是参数，也是一个对象
                console.log(el);
                console.log(binding);
                el.scrollTop = el.scrollHeight - el.clientHeight;
            }
        },
    }
};
</script>

<template>
<div class="message" v-scroll-bottom="dialog.dialog">
    <!-- <ul v-if="dialog"> -->
      <transition-group name="list">
        <li v-for="(item, index) in currentDialogData" v-bind:key="index">
            <div class="main">
              <div v-if="item.type == 'choices'" class="choices">
                <!-- <div class="text">{{ options }}</div> -->
                  <el-button v-for="(citem, cindex) in item.data" v-bind:key="cindex" 
                    type="primary" plain @click="chooseOption(item, cindex)">{{citem.choice}}</el-button>
              </div>
              <div v-else :class="item.choosed ? 'choosed-text' : 'text'">{{ item.data }}</div>
            </div>
          </li>
        </transition-group>
    <!-- </ul> -->
</div>
</template>

<style lang="less" scoped>
@transtion_time : 0.3s;

.list-enter-active, .list-leave-active {
  transition: all @transtion_time;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.message {
    padding: 10px 15px;
    overflow-y: scroll;

    li {
        margin-bottom: 15px;
        list-style-type: none;
    }

    
    .choosed-text{
      background-color:  #b3d8ff !important;
      &:extend(.message .text); 
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(100% - 40px)';
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;

        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }

    .self {
        text-align: right;

        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }

        .text {
            background-color: #b2e281;

            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
}
</style>
