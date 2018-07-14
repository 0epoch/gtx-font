<template>
    <div>
        <button class="button" @click="test">test</button>
    </div>
</template>

<script>
export default {
    methods: {
        // r: function() {
        //     // 路由页面跳转
        //     this.$router.push('/')
        // },
        test: function() {
            this.axios.get('/api/index')
            .then(function(rsp) {
                this.$message({
                    showClose: true,
                    message: 111,
                    type: 'error',
                    duration: 2000
            })
            })
            .catch(function(error) {

            })
        },        
    }
}
</script>
