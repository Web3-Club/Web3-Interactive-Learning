<script>

export default {
    computed: {
      selectedBrief(){
            return this.$store.state.selectedBrief
        },
    },
    methods: {
        onKeyup (e) {
            this.$store.dispatch("SET_FILTER_KEY",{
                    value: e.target.value
                })
        }
    }
};
</script>

<template>
<div class="card">
    <header>
        <p class="name">{{selectedBrief.title}}</p>
    </header>
</div>
</template>

<style scoped lang="less">
.card {
    padding: 12px;
    border-bottom: solid 1px #24272C;

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