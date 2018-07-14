// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Message, MessageBox, Loading } from 'element-ui';
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import axios from 'axios'

Vue.use(Loading)
Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    components: { App },
    template: '<App/>',
    created() {
        this.axios.interceptors.request.use(config => {
            let token = localStorage.getItem('access_token')
            if (token) {
                config.headers.Authorization = `bearer ${token}` 
                config.headers.Authorization = token
            }
            return config
        }, error => {
            return Promise.reject(error)
        })

        this.axios.interceptors.response.use(response => {
            // 请求成功，刷新token
            if(response.headers.authorization) {
                let token = response.headers.authorization
                localStorage.setItem('access_token', token)
            }
            return response
        }, error => {
            switch(error.request.status) {
                case 401:
                    console.log(error.response)
                    // return this.axios(originalRequest.url)
                    break
                case 500:
                    alert(500)
            }
            
            // this.$message.error('页面不存在');
            return Promise.reject(error)
        })
    }
})
