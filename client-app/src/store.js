/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        dialog:{},
        briefs : [],
        selectedBrief:{},
        currentIndex:0,
        isEnd : false,
        isSubmitted: false,
        loading: false
    },
    mutations: {
        INIT_DATA (state) {
          axios.get('/api/dialog/briefs')
          .then(response => { 
            // console.log("response data:", response.data)
            state.briefs = response.data
            state.selectedBrief = state.briefs[0]
          })
        },
        // 选择会话
        SELECT_DIALOG (state, index) {
          console.log("index:",index)
          const id = state.briefs[index].id
          state.currentIndex = index
          state.isEnd = false
          state.isSubmitted = false
          axios.get(`/api/dialog/${id}`)
            .then(response => { 
              console.log("SELECT_DIALOG response data:", response.data)
              state.selectedBrief = state.briefs[index]
              state.dialog = []
              state.dialog = response.data
            })
        },
        CHANGE_IS_END (state, isEnd) {
            state.isEnd = isEnd
        },
        CHANGE_IS_SUBMITTED (state, isSubmitted) {
          state.isSubmitted = isSubmitted
        },
        CHANGE_LOADING (state, loading){
          state.loading = loading
        }
    }
});

store.watch(
    (state) => state.currentIndex,
    (val) => {
        console.log(val)
    },
    {
        deep: true
    }
);

export default store;

