<template>
  <div id="app">
    <router-view/>
        <ul>
            <li v-for="item in list" :key="item.id" @click="pickTag(item)" class="tag" v-bind:class="{'is-warning':tagsId.includes(item.id)}">
                <a>{{item.name}}</a>
            </li>
        </ul>
        <p>{{tagsId}}</p>
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
    computed: {
        // isWarning: function() {
        //     this.isWarning = !this.isWarning
        // }
    },
    methods: {
        pickTag: function(item) {            
            let id = item.id
            let idIndex = this.tagsId.indexOf(id)

            if(-1 === idIndex) {
                this.tagsId.push(id)
            }else {
                this.tagsId.splice(idIndex,1)
            }           

            // if(typeof item.checked == 'undefined') {
            //     this.$set(item, 'checked', true)
            // } else {
            //     item.checked = !item.checked
            // }
        }
    }
};
</script>

<style>

</style>
