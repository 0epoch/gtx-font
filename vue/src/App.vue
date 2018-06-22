<template>
  <div id="app">
    <router-view/>
    <button class="is-button" @click="test">xxxxxxxx</button>
    <button class="is-button" @click="login">login</button>
  </div>
</template>

<script>
import Upload from '@/components/Upload'
import Test from '@/components/Test'
export default {
    name: "App",
    data() {
        return {
            list: [
                {'id': 1, 'name': 'test1'},
                {'id': 2, 'name': 'test2'},
                {'id': 3, 'name': 'test3'},
                {'id': 4, 'name': 'test4'},
            ],
            tagsId: [],
        }
    },
    components: {
        "upload": Upload,
        "test": Test
    },
    methods: {
        test: function() {
            this.axios.get('/api/test')
            .then(function(rsp) {
                console.log(rsp)
            })
            .catch(function(error) {

            })
        },
        login: function() {
            var data = {email: '111@qq.com', password: 111111}
            this.axios.post('/api/login', data)
            .then(function(rsp) {
                console.log(rsp.data)
                localStorage.setItem('access_token', rsp.data.access_token);
            })
            .catch(function(error) {

            })
        }
        
    }
};
</script>

<style>
</style>
