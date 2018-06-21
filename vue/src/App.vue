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
.bd-index-js-tweet .bd-tw {
    margin-left: auto;
    margin-right: auto;
}
.bd-tw {
    background-color: #fafafa;
    border-radius: 6px;
    color: #697882;
    flex-shrink: 0;
    font-family: Helvetica,Roboto,"Segoe UI",Calibri,sans-serif;
    font-size: 16px;
    max-width: 420px;
    padding: 20px;
}

.bd-has-drawing {
    position: relative;
}
article, aside, figure, footer, header, hgroup, section {
    display: block;
}


.bd-tw-header {
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
}

.bd-tw-author {
    align-items: center;
    color: #1c2022;
    display: flex;
    line-height: 1.2;
}

.bd-tw-avatar {
    flex-shrink: 0;
    height: 36px;
    margin-right: 9px;
    width: 36px;
}

.bd-tw-author {
    align-items: center;
    color: #1c2022;
    display: flex;
    line-height: 1.2;
}   

.bd-tw-avatar img {
    border-radius: 290486px;
    display: block;
    height: 36px;
    width: 36px;
}

img {
    height: auto;
    max-width: 100%;
}

.bd-tw-author {
    align-items: center;
    color: #1c2022;
    display: flex;
    line-height: 1.2;
}

a {
    color: #3273dc;
    cursor: pointer;
    text-decoration: none;
}

.bd-tw-content {
    color: #1c2022;
    font-size: 16px;
    line-height: 1.4;
    margin-top: 14px;
}

.bd-tw-date {
    font-size: 14px;
    line-height: 1.4;
    margin-top: 3.2px;
}

.Tweet-actions {
    align-items: center;
    display: flex;
    margin-top: 8.4px;
}
ul {
    list-style: none;
}

.Tweet-action {
    margin-right: 1.25rem;
}
</style>
