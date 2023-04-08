<script>
import axios from 'axios'
export default {
    data(){
      return {
        questions:[],
        answers : "",
        score : 0
      }
    },
    computed: {
      dialogId(){
        return this.$store.state.dialog?.id
      },
      isSubmitted(){
        return this.$store.state.isSubmitted
      }
    },
    methods: {
       async sumbit(){
        const response = await axios.post(`/api/dialog/test/check`,{
          dialogId: this.dialogId,
          answers: this.answers 
        })
        console.log("submit:", response.data)
        this.score = response.data
        this.$store.dispatch('CHANGE_IS_SUBMITTED', true)
       }
    },
    created(){
      axios.get(`/api/dialog/test/${this.dialogId}`)
          .then(response => { 
            console.log("response data:", response.data)
            this.questions = response.data
            this.answers = this.questions.questionList.map(e => "")
          })
    }
};
</script>

<template>
  <div> 
    <div v-if="isSubmitted" style="display: flex; flex-direction: row;justify-content: center; align-items: center;margin-top: 250px;">
      <h1>
        你的得分: {{this.score}}分 
      </h1>
    </div>
    <div v-else>
      <div class="card">
          <header>
              <p class="name"> {{ this.questions.title }}</p>
          </header>
      </div>
      <div v-for="(item,index) in this.questions.questionList" v-bind:key="index">
            <p>{{ item.question }}</p>
            <el-radio-group style="display: block; margin: 10px;" v-model="answers[index]">
              <el-radio v-for="(qitem,qindex) in item.options" v-bind:key="qindex" :label="qitem">{{ qitem }}</el-radio>
            </el-radio-group>
      </div>
      
      <div style="display: flex; flex-direction: row;justify-content: center; align-items: center;margin-top: 150px;">
        <el-button  type="primary" @click="sumbit" > 提交 </el-button>
      </div>
  </div>
</div>
</template>

<style scoped lang="less">
.card {
    padding: 12px;
    border-bottom: solid 1px #24272C;
    margin-left: 50px;
    footer {
        margin-top: 10px;
    }

    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
        font-size: 16px;
    }
    .search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: solid 1px #3a3a3a;
        border-radius: 4px;
        outline: none;
        background-color: #26292E;
    }
}
</style>