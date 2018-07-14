<template>
  <div id="app">
    <router-view/>
    <!-- <button class="is-button" @click="test">xxxxxxxx</button>
    <button class="is-button" @click="login">login</button> -->
  </div>
</template>

<script>
import Upload from '@/components/Upload'
import Test from '@/components/Test'
// import {Message, MessageBox} from 'element-ui';

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
};
</script>

<style>
</style>
