<template>
  <div class="hello">
    <h1>test</h1>
  </div>
</template>

<script>
import VueCoreImageUpload from "vue-core-image-upload";
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            data: { test: 121321 }
        };
    },
    components: {
        "vue-core-image-upload": VueCoreImageUpload
    },
    methods: {
        upload: function(e) {
            console.log(e);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
