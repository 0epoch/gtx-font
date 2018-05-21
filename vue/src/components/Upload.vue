<template>
    <div class="field">
        <!-- <div class="file is-primary">
            <label class="file-label">
                <form enctype="multipart/form-data" method="POST" name="file-upload" >
                    <input class="file-input" type="file" name="file" @click="inSelect" id="file-input" multiple="true">
                </form>            
                <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">
                        选择文件
                    </span>
                </span>
            </label>
        </div> -->
        <img :src="preview" alt="预览" id="preview" v-show="preview">  
        <input type="button" @click="uploaded" value="button">                                      
        <form enctype="multipart/form-data" method="POST" name="file-upload" >
            <input class="" type="file" name="file" @click="inSelect" id="file-input" multiple />
        </form>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "test upload",
            preview: false
        };
    },
    methods: {
        inSelect: function(e) {
            // console.log(e)
            //  var input = document.getElementById("file-input"); 
            // input.addEventListener('change',this.readFile,false);
        },
        readFile: function(e) {
            var file = e.target.files[0]
            // console.log(e.target.files[0]);return
            // let formData = new FormData()
            // formData.append("files[]", file)
            // console.log(formData.get('files[]'))
        },
        select: function(e) {            
            // var form = document.forms.namedItem("file-upload");
            let file = e.target.files
            console.log(file);return;
            let formData = new FormData()
            formData.append(files, file);
            var reader = new FileReader();            
            reader.readAsDataURL(formData.get('file'));

            self = this
            reader.onload = function (e) {
                //把得到的base64赋值到img标签显示
                self.preview = this.result;
            }
        },
        start: function(e) {            
            var form = document.forms.namedItem("file-upload");
            let formData = new FormData(form)
            this.axios.post('/api/create', formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        uploaded: function() {
            var input = document.getElementById("file-input");
            console.log(input.files.length);return
            // for(i=0;i<input.files.length;i++) {

            // }
            let formData = new FormData(form)
            console.log(formData.get('file'))
        }
        
    }
};
</script>

