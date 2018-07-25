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
                <p class="level-item has-text-centered" @click="menu">
                    <a class="link is-info">Menu</a>
                    <div v-show="menuActive" class="favorite-menu">
                        <span>添加</span>
                        <ul>
                            <li>123123123</li>
                            <li>12313231</li>
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

        <div class="box">
            <div class="nav img">

            </div>
            <nav class="level">
                <p class="level-item has-text-centered">
                    <a class="link is-info">Home</a>
                </p>
                <p class="level-item has-text-centered" @click="menu">
                    <a class="link is-info">Menu</a>
                    <ul v-show="menuActive" class="favorite-menu">
                        <li>123123123</li>
                        <li>12313231</li>
                        <li>123fdafdasfdasfa</li>
                    </ul>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info">Reservations</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info">Contact</a>
                </p>
            </nav>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            hello: "home",
            loading: true,
            menuActive: false
        };
    },
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
    border: 1px solid #eceeef;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 10;
}

.favorite-menu {
    text-align: left;
}

.favorite-menu li {
    border-bottom: solid 1px red;
}
.favorite-menu li:last-child {
    border-bottom-style: none;
}

.nav {
    height: 800px;
    background-color: #eee;
}

nav {
    position: relative;
}
</style>
