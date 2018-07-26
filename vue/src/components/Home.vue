<template>
    <div>
        <p v-if="!token">
            {{ hello }}
        </p>
        <p v-else-if="token">
            access_token
        </p>
        <ul>
            <li>
                <a class="button" @click="home">home</a>
            </li>
            <li>
                <a class="button" @click="login">login</a>
            </li>
            <li @click="user">
                <a class="button">user</a>
            </li>
        </ul>
        <div class="box">
            <div class="nav img">

            </div>
            <nav class="level">
                <p class="level-item has-text-centered">
                    <a class="link is-info">Home</a>
                </p>
                <p class="level-item has-text-centered" v-clickOther="clickOther" @click="menu">
                    <a class="link is-info" id="favorite">Menu</a>
                    <div v-show="menuActive" class="favorite-menu">
                        <span>添加</span>
                        <ul>
                            <li>123123123</li>
                            <li>12313231</li>
                            <li>123fdafdasfdasfa</li>
                            <li>123fdafdasfdasfa</li>
                        </ul>

                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input class="input is-small" type="text" placeholder="嘿嘿嗨">
                            </p>
                            <p class="control">
                                <a>添加</a>
                            </p>
                        </div>
                    </div>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info">Reservations</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info">Contact</a>
                </p>
            </nav>
        </div>

        <!-- <div class="mask"></div> -->
    </div>
</template>

<script>
const clickOther = {
    bind: function(el, binding, vnode) {
        function documentHandler(e) {
            // 这里判断点击的元素是否是本身，是本身，则返回
            if (el.contains(e.target)) {
                return false;
            }
            // 判断指令中是否绑定了函数
            if (binding.expression) {
                // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                binding.value(e);
            }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);       
    },
    update() {},
    unbind(el, binding) {
        // 解除事件监听
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },    
};
export default {
    data() {
        return {
            hello: "home",
            loading: true,
            menuActive: false
        };
    },
    directives: { clickOther },
    computed: {
        token: function() {
            return localStorage.getItem("access_token");
        }
    },
    methods: {
        user: function() {
            this.axios
                .get("/api/user")
                .then(rsp => {
                    console.log(rsp);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        home: function() {
            this.axios
                .get("/api/index")
                .then(resp => {
                    // console.log(resp)
                })
                .catch(error => {
                    // console.log(error)
                });
        },
        login: function() {
            var data = { email: "2@qq.com", password: 111111 };
            this.axios
                .post("/api/login", data)
                .then(resp => {
                    localStorage.setItem(
                        "access_token",
                        "Bearer " + resp.data.access_token
                    );
                })
                .catch(error => {
                    console.log(error);
                });
        },
        menu: function() {
            this.menuActive = !this.menuActive;
            console.log(this.menuActive);
        },
        clickOther: function() {
            this.menuActive = false
            console.log('clickOther:'+this.menuActive)
        }
    }
};
</script>

<style>
.favorite-menu {
    position: absolute;
    top: 100%;
    left: 35%;
    width: 18rem;
    background-color: #fff;
    border: 1px solid #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 20;
}

.favorite-menu {
    padding: 0.7rem;
    text-align: left;
}

.favorite-menu li {
    border-bottom: solid 1px #eee;
    padding: 0.3rem;
}
.favorite-menu li:last-child {
    border-bottom-style: none;
}

.nav {
    height: 100px;
    background-color: #eee;
}

nav {
    position: relative;
}

/* 遮罩层 */
.mask {
    background: rgba(0, 0, 0, 0);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 20;
    filter: alpha(opacity=60);
    opacity: 0.5 !important;
}
</style>
