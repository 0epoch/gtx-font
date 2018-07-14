<template>
    <div>
        <p v-if="!token">
        {{ hello }}
        </p>
        <p v-else-if="token">
            access_token
        </p>
        <ul>
            <li><a class="button" @click="home">home</a></li>
            <li><a class="button" @click="login">login</a></li>
            <li @click="user"><a class="button">user</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hello: 'home',
            loading: true,
        }
    },
    computed: {
        token : function() {
            return localStorage.getItem('access_token');
        }
    },
    methods: {
        user: function() {
            this.axios.get('/api/user')
            .then(rsp => {
                console.log(rsp)
            })
            .catch(error => {
                console.log(error)
            })
        },
        home: function() {
            this.axios.get('/api/index')
            .then(resp => {
                // console.log(resp)
            })
            .catch(error => {
                // console.log(error)
            })
        },
        login: function() {
            var data = {email: '2@qq.com', password: 111111}
            this.axios.post('/api/login',data)
            .then(resp => {
                localStorage.setItem('access_token', 'Bearer '+resp.data.access_token)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

