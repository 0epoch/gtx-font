<template>
    <div>
        <button class="button" @click="login">login</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login: function() {
            var data = {email: '1@qq.com', password: 111111}
            var self = this
            this.axios.post('/api/login', data)
            .then(function(rsp) {
                let token = 'Bearer '+rsp.data.access_token
                console.log(token);return
                localStorage.setItem('access_token', 'Bearer '+rsp.data.access_token)
                self.$router.push('/')
                // window.location.href="/"
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    }
}
</script>

