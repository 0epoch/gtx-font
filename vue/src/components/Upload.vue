<template>
    <div class="field">
        <div class="files">
            <section  class="file-item" v-for="(item, index) of files" :key="index">
                <img  :src="item.src" alt="" ondragstart="return false;">
                <span class="file-remove" @click="removeFile(index)"></span>
            </section>

            <section class="file-item">
                <div @click="add" class="add">
                    <span>+</span>
                </div>
            </section>
            <input class="" accept="image/*" type="file" name="file" @change="changed" ref="file" multiple="true">
        </div>
        <button class="button is-info" @click="startUpload">Go!</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            files: [],
        };
    },
    methods: {
        add: function(e) {
            // console.log(e)
            // if(this.files.length >= 3) {
            //     e.target.hidden = true
            //     alert('3');return
            // }
            this.$refs.file.click()
        },
        changed: function(e) {  
            // self = this

            let files = e.target.files
            for(let i=0; i<files.length; i++) {
                const thisFile = {
                    name: files[i].name,
                    size: files[i].size,
                    file: files[i],                    
                }
                //是否有相同文件
                if(!this.isContain(thisFile)) {
                    var reader = new FileReader();                                  
                    reader.readAsDataURL(files[i]);
                    reader.onload = (e) => {
                        this.$set(thisFile, 'src', e.target.result)
                    }
                    
                    this.files.push(thisFile)
                    this.$refs.file.value = ''
                }
                if(this.files.length >= 3) {
                    let add = document.getElementsByClassName('add')[0]
                    add.style.display="none"
                    return
                }
            }
        },
        isContain: function(item) {
            return this.files.find((file) => {
                return file.name === item.name && item.size === file.size
            })
        },
        removeFile: function(index) {
            this.files.splice(index, 1)
            let add = document.getElementsByClassName('add')[0]
            if('none' === add.style.display) {
                console.log('none')
                add.style.display="block"
            }         
        },
        startUpload: function() {

            if(this.files.length <= 0) {
                alert('[]');return
            }

            let formData = new FormData()
            this.files.forEach(file => {
                formData.append('files[]', file.file)
            });

            this.axios.post('/api/create', formData)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }        
    }
};
</script>

<style>

.file-item img{
    width: 80px;
    height: 80px;
    border: 1px solid #ececec;
}

.files > input[type="file"] {
    display: none;
}
.add {
    width: 80px;
    height: 80px;
    margin-left: 20px;
    float: left;
    text-align: center;
    line-height: 80px;
    border: 1px dashed #ececec;
    font-size: 30px;
    cursor: pointer;
}

/* 删除按钮效果 */
.files .file-item {
    float: left;
    position: relative;
    width: 100px;
    text-align: center;
}

.file-item:hover .file-remove{
    display: inline;
}

.file-item .file-remove {
    
    -webkit-appearance: none;
    background-color: rgba(10, 10, 10, 0.2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: none;
    /* position: relative; */
    vertical-align: top;
    right: 14px;
    display: none;
    top: 4px; 
    position: absolute;

    /* position: absolute;
    right: 12px;
    display: none;
    top: 4px;
    width: 14px;
    height: 14px;
    color: white;
    cursor: pointer;
    line-height: 12px;
    border-radius: 100%;
    transform: rotate(45deg);
    background: rgba(0, 0, 0, 0.5);     */
    
} 

.file-item .file-remove::before {
    height: 2px;
    width: 50%;

    background-color: white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
}

.file-item .file-remove::after {
    height: 50%;
    width: 2px;

    background-color: white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
}

.file-item .file-remove {
    display: inline;
    background-color: #ff0000;
}

</style>
