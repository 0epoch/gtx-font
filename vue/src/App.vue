<template>
  <div id="app">
    <router-view/>
    <!-- <upload></upload>     -->
    <test :src="'/api/imgs'"></test>
  </div>
</template>

<script>
import Upload from '@/components/Upload'
import Test from '@/components/Test'
export default {
    name: "App",
    data() {
        return {

        }
    },
    components: {
        "upload": Upload,
        "test": Test
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
