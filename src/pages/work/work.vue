
<template>
  <div class="work">
    <!-- <van-popup class="hintShow"  v-model="hintShow">{{markedWords}}</van-popup>  -->
    <div class="video-cover-window" v-show="videoCoverWindowa" > 
        <div class="select-video-cove">
            <van-dropdown-menu>
              <van-dropdown-item v-model="selectVideoCoveValue"  @change =selectVideoCoveType :options="selectVideoCoveTypeVal" /> 
            </van-dropdown-menu>
            <div v-if="selectVideoCoveValue == 0" class="my-video-cove1"> 
                <div class="my-video-cove1-value">
                  <!-- x5-playsinline="" playsinline="" webkit-playsinline controls="false"-->
                  <video id="videoCove"  preload="auto" :src="videoUrl"  controls></video> 
                  <div id="outPutVideoCove"></div>
                </div> 
                <div class="my-range">
                  <span class="video-ss-timer">{{currentTime}}</span>
                  <input type="range" class="my-range-value" min="0" max="100"   @change="myRangeValue()" value="0">
                  <span class="video-ss-timer">{{lengthOfTime}}</span>
                </div>
                <input class="submit1" type="button" value="sure" @click="judgeVideoCove1()">
            </div>
            <div v-if="selectVideoCoveValue == 1" class="my-video-cove2">
              <div class="my-video-cove2-small-img"> 
                  <img  v-for="(item,index) in VideoCove" :key="index"  :src="item" > 
              </div>
              <div class="scl-img">  
                  <div class="my-video-cove2-img-updata">File upload</div>
                  <input name="myImg" id="filepickerVideoCove" @change="chooseVideoCove" type="file"  class="upload_icon"  accept="image/*" >
              </div>  
              <input class="submit1" type="button" value="sure" @click="judgeVideoCove2()">
            </div> 
        </div> 
        
    </div>
    
    <div class="navber1">
      <div class="left" @click="go_back">
          <van-icon name="arrow-left" />
      </div>
      <div class="title">
        Write
      </div>
      <div class="right">
      </div>
    </div>
    <!-- <div class="cartNull" >
      <img src="../../static/img/floweer_loading.gif" alt="">
    </div> -->
    <div class="publication-type">
        <van-tabs title-active-color="#ee0a24">
          <van-tab title="Video">  
            
            <div class="my-video" v-show="videoShow">
                <video id="video"   :src="videoUrl"  controls></video> 
            </div>
            <div class="scl-video">
                <div class="video-updata">File upload</div>
                <input type="file" name="myVideo" id="filepicker" accept="video/*" @change="chooseVideoInput">
            </div>
            <div class="publication-title">
              <input class="publication-title-value" type="text" placeholder= "title(Within 120 characters)" v-model="videoTitle" maxlength="120">
              <textarea name="videoTextarea" rows="10" v-model="videoTextarea" placeholder="Please enter video content(Within 1000 characters)" maxlength="1000"></textarea>
            </div>

            <div class="my-video-cover">
                <!-- 选择的是默认 -->
                <div class="sure-video-cover defaultThumbnailVideoCover" v-show="defaultThumbnailVideoCover">
                    <img  v-for="(item,index) in VideoCove1" :key="index"  :src="item" > 
                </div>
                <!-- 选择的是自定义视频封面 -->
                <div class="sure-video-cover customizedThumbnailVideoCover" v-show="customizedThumbnailVideoCover">
                  <img  v-for="(item,index) in VideoCove" :key="index"  :src="item" > 
                </div>
                <div class="upload-thumbnail" >
                  <div @click="upVideoCover()">
                    Upload thumbnail
                  </div> 
                </div>
            </div>
            
            <input class="submit judgeVideoSubmit" type="button" value="submit" @click="judgeVideo()"> 
          </van-tab>
          <van-tab title="Article">  
                <div class="select-upload-type">
                    <van-dropdown-menu>
                      <van-dropdown-item v-model="selectUploadTypeValue"  @change =selectType :options="selectUploadType" /> 
                    </van-dropdown-menu>
                </div>
                <!-- 无图 -->
                <div v-show="selectUploadTypeValue == 0">
                    <div class="publication-title0" >
                      <input class="publication-title-value" type="text" placeholder= "title(Within 120 characters)" v-model="imgTitle0" maxlength="120">
                       
                      <vue-editor id="imgTextarea0" :editor-toolbar="customToolbar0" placeholder="Please enter the article content" v-model="imgTextarea0"> </vue-editor> 
                    </div> 
                </div>
                <!-- 小图 -->
                <div v-show="selectUploadTypeValue == 1">
                    <div class="publication-title1" >
                      <input class="publication-title-value" type="text" placeholder= "title(Within 120 characters)" v-model="imgTitle1" maxlength="120">
                      
                       <vue-editor id="imgTextarea1" placeholder="Please enter the article content" :editor-toolbar="customToolbar1"  v-model="imgTextarea1"> </vue-editor> 
                       
                    </div> 
                    <div class="my-img">
                      <div class="my-small-img">
                          <img  v-for="(item,index) in imgUrlArr1" :key="index"  :src="item" > 
                      </div>
                    </div> 
                    <div class="scl-img">  
                        <div class="img-updata">File upload</div>
                        <input name="myImg" id="filepicker_1" @change="chooseImgInput1" type="file"  class="upload_icon"  accept="image/*" >
                    </div> 
                </div>
                
                <!-- 大图 -->
                <div v-show="selectUploadTypeValue == 2">
                    <div class="publication-title1" >
                      <input class="publication-title-value" type="text" placeholder= "title(Within 120 characters)" v-model="imgTitle2" maxlength="120">
                       
                      <vue-editor id="imgTextarea2" :editor-toolbar="customToolbar1" placeholder="Please enter the article content" v-model="imgTextarea2"> </vue-editor> 
                    </div> 
                    <div class="my-img">
                      <div class="my-img-1">
                          <img  v-for="(item,index) in imgUrlArr2" :key="index"  :src="item" > 
                      </div>
                    </div> 
                    <div class="scl-img">  
                        <div class="img-updata">File upload</div>
                        <input name="myImg" id="filepicker_2" @change="chooseImgInput2" type="file"  class="upload_icon"  accept="image/*" >
                        
                    </div> 
                </div>
                <!-- 三张图 -->
                <div v-show="selectUploadTypeValue == 3">
                    <div class="publication-title3" >
                      <input class="publication-title-value" type="text" placeholder= "title(Within 120 characters)" v-model="imgTitle" maxlength="120">
                       
                      <vue-editor id="imgTextarea3" placeholder="Please enter the article content" :editor-toolbar="customToolbar1"  v-model="imgTextarea"> </vue-editor> 
                    </div> 
                    <div class="my-img" v-if="imgShow" >
                      <div class="my-img-1" v-if="imgUrlArr.length == 1">
                          <img  v-for="(item,index) in imgUrlArr" :key="index"  :src="item" > 
                      </div>
                      <div class="my-img-2" v-if="imgUrlArr.length == 2">
                          <img  v-for="(item,index) in imgUrlArr" :key="index"  :src="item" > 
                      </div>
                      <div class="my-img-3" v-if="imgUrlArr.length == 3">
                          <img  v-for="(item,index) in imgUrlArr" :key="index"  :src="item" > 
                      </div>
                    </div>
                    <div class="hint">Choose only three pictures at most</div>
                    <div class="scl-img">  
                        <div class="img-updata">File upload</div>
                        <input name="myImg" id="filepicker1" @change="chooseImgInput" type="file" multiple  class="upload_icon"  accept="image/*" >
                    </div> 
                     
                </div>
                <input class="submit judgeImgSubmit"  type="button" value="submit" @click="judgeImg()">   
          </van-tab> 
        </van-tabs> 
    </div>  
    
  </div>
</template>

<script> 

export default { 
  name: 'work',
  data () {
    return {   
      myToastShow : '',
      videoUrl: "",    //视频路径
      videoShow : false,
      videoTitle : "", // 视频title
      videoTextarea: "", // 视频内容
      videoFile: "", // 视频文件
      VideoCoverWindow1: false, //视频封面的弹窗
      videoCoverWindowa: false,
      VideoCove1: [], // 默认视频缩略图
      currentTime : 0,  //当前时间进度
      lengthOfTime: 0,  // 视频时长
      VideoCoveFileArr: [], // 自定义视频封面文件
      defaultThumbnailVideoCover : false, // 选择视频封面是默认形式
      customizedThumbnailVideoCover : false,// 选择视频封面是自定义形式
      imgUrl: "",  //
      imgUrlArr : [],  // 三张图数量 
      imgShow: false,  // 三张图的显示
      imgTextarea: "",  // 三张图的内容
      imgFileArr: "", // 三张图文件
      imgTitle : "", // 三张图的标题
      hintShow : false, // 选择图片超过三张弹出提示
      
      imgTextarea0: "",  // 无图的内容
      imgTitle0: "", // 无图的标题
      
      imgTextarea1: "",  // 小图的内容
      imgTitle1: "", // 小图的标题
      imgUrlArr1: [], //小图路径
      imgFileArr1: "", // 小图文件

      imgTextarea2: "",  // 大图的内容
      imgTitle2: "", // 大图的标题
      imgUrlArr2: [], //大图路径
      imgFileArr2: "", // 大图文件 
      selectUploadTypeValue: 0,  // 选择发表的类型
      selectUploadType: [
        { text: 'no picture', value: 0 },
        { text: 'small picture', value: 1 },
        { text: 'big picture', value: 2 },
        { text: 'three picture', value: 3 }
      ],
      selectVideoCoveValue: 0, // 选择视频封面类型
      selectVideoCoveTypeVal: [
        { text: 'Default Thumbnail', value: 0 },
        { text: 'Customized Thumbnail', value: 1 }, 
      ],
      VideoCove : [],  // 视频封面图片路径
      userID : "", // 用户ID  
      markedWords: "",
      customToolbar0: 
     [
        [{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
        ['bold', 'italic', 'underline'],  
         ["image", "br"]
     ],  //无图片富文本
      customToolbar1: 
      [ 
        [{'header': [false, 1,2,3,4,5,6]}], 
        ['bold', 'italic', 'underline'],
        ["image", "br"]
      ],  //富文本
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      },
    }
  },
  created() {
    
    if(localStorage.getItem('userinfo')){ 
      this.userID = JSON.parse(localStorage.getItem('userinfo')).user_id
    }else{
      this.$dialog.confirm({
        title: 'You are not login .',
        cancelButtonText:"Go Home",
        confirmButtonText:"Login",
        confirm:'ss',
        cancel:""
      }).then(() => {
        this.$router.push({path:"/login"})
      }).catch(() => {
        this.$router.push({ path: '/' })
      });
    }
  },
  mounted() {
 
  },
  methods:{
    go_back(){
      this.$router.push({path:"/mine"})
    },
     // input 进度条改变时触发
     myRangeValue() {
       var myrangVal = document.querySelector(".my-range-value").value
       var  video = document.getElementById("videoCove");  
       this.currentTime = parseInt( (parseInt(video.duration) / 100) * myrangVal /60) + ":" +  parseInt((parseInt(video.duration) / 100) * myrangVal) % 60
       video.currentTime = video.duration / 100 * myrangVal 
       
       setTimeout(()=> {
         var scale = 0.3;
        var output = document.getElementById("outPutVideoCove"); 
        output.innerHTML= "" 
          var canvas = document.createElement("canvas");
          canvas.width = video.videoWidth * scale;
          canvas.height = video.videoHeight * scale;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); 
          var img = document.createElement("img");
          img.src = canvas.toDataURL("image/png");
          output.appendChild(img);
        },1000)
       
     },
    // 选择视频封面
    upVideoCover () {
      if(this.videoFile == "") { 
        this.$Toast('Please upload the video file')
      }
      else { 
         this.videoCoverWindowa = true 
         var  video = document.getElementById("videoCove");
         this.lengthOfTime = parseInt(parseInt(video.duration) /60) + ":" + parseInt(video.duration) % 60
         var scale = 0.3;
        var output = document.getElementById("outPutVideoCove"); 
        output.innerHTML= "" 
          var canvas = document.createElement("canvas");
          canvas.width = video.videoWidth * scale;
          canvas.height = video.videoHeight * scale;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); 
          var img = document.createElement("img");
          img.src = canvas.toDataURL("image/png");
          output.appendChild(img); 
      } 
    },
    chooseVideoCove (event) {
      // 图片路径
      this.VideoCove = []
      // 图片文件
      this.VideoCoveFileArr  = [];  
       var that = this;   
      this.VideoCoveFileArr.push(event.target.files[0])
      var files = document.getElementById("filepickerVideoCove").files[0]; 
      this.fileName = files.name;
      var reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function(e) { 
            that.visible = true;
            that.VideoCove.push(this.result); 
        }  
    },
    // 小图
    chooseImgInput1(event) {  
      // 图片路径
      this.imgUrlArr1 = []
      // 图片文件
      this.imgFileArr1 = [];  
       var that = this;   
      this.imgFileArr1.push(event.target.files[0])
      var files = document.getElementById("filepicker_1").files[0]; 
      this.fileName = files.name;
      var reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function(e) { 
            that.visible = true;
            that.imgUrlArr1.push(this.result); 
        }  
    },
    // 大图
    chooseImgInput2(event) {  
      // 图片路径
      this.imgUrlArr2 = []
      // 图片文件
      this.imgFileArr2 = [];  
       var that = this;  
      this.imgFileArr2.push(event.target.files[0])
      var files = document.getElementById("filepicker_2").files[0]; 
      
      this.fileName = files.name;
      var reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function(e) { 
            that.visible = true;
            that.imgUrlArr2.push(this.result);  
        }  
    },
    // 三张图片
    chooseImgInput(event) {  
       // 图片路径
       this.imgUrlArr = []
       // 图片文件
       this.imgFileArr = [];  
       var that = this;
       var l = event.target.files.length  
       if(l > 3) { 
         this.$Toast('Choose three pictures at most and must choose three pictures')
       }
       else {
        for(let i =0; i< l; i++) {
          this.imgFileArr.push(event.target.files[i]) 
            var files = document.getElementById("filepicker1").files[i]; 
            var reader  = new FileReader(); 
            reader.readAsDataURL(files);
            reader.onload = function(e) {  
                that.imgUrlArr.push(this.result);
                that.imgShow = true; 
            } 
        }
       }  
    }, 
    // 视频
    chooseVideoInput(event) {
        var files = document.getElementById("filepicker").files[0]; 
        if(files.type.indexOf("video") == -1) {  
          this.$Toast("Invalid file format! Make sure you're using one of the following formats: mp4, flv, wmv, avi, mov, dat, asf, rm, rmvb, ram, mpg, mpeg, 3gp, m4v, dvix, dv, mkv, vob, qt, cpk, fli, flc, mod, ts, webm, m2ts")
          return
        }
        if(files.size > 100 * 1024 * 1024) { 
          this.$Toast("Video size does not exceed 100 MB")
        }
        else {
          this.videoFile = document.getElementById("filepicker").files[0]; 
          var url = URL.createObjectURL(files);
          this.videoUrl= url; 
          this.videoShow = true  
        }
        
    },
    //将base64转换为blob
    dataURLtoBlob(dataurl) {  
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      },
      //将blob转换为file
      blobToFile(theBlob, fileName){
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
      },
    myToast() {
      this.$Toast.loading({
        message: '',
        forbidClick: true,
        overlay: true,
        duration : 0,
      });
    },
    // 判断图片
    judgeImg() { 
      // 无图
      let that = this;
      if(this.selectUploadTypeValue == 0) { 
        if(this.imgTitle0 == "") { 
            this.$Toast("The title cannot be empty")
        }
        else if (this.imgTextarea0 == "") { 
            this.$Toast("Please enter a description")
        }
        else { 
          document.querySelector(".judgeImgSubmit").setAttribute("disabled","true")  
          
          let formData = new FormData()

          var src = this.imgTextarea0
          var imgTitle1Src0  = this.imgTextarea0
          var imgCodesArr = []
          // 判断富文本编辑器里是否有图片
            var imgCodes0 = []
              src.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                imgCodes0.push(capture)
                   
            }); 
            if(imgCodes0.length == 0) {
              
            }
            else { 
               //现在转成文件传给后台
              for(var i of imgCodes0){ 
                var blob = this.dataURLtoBlob(i) 
                var file = this.blobToFile(blob, new Date().getTime()); 
                formData.append('imgCodes1',file)
              }     
            } 

             var imgTitle1ImgArr0 =  src.match(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi)
              // 富文本编辑器里是否有图片,没有就不用替换, 这里是按后台需求替换
             if(imgTitle1ImgArr0 != null) {
                for (var i = 0; i <  imgTitle1ImgArr0.length; i++) {
                    imgTitle1Src0 = imgTitle1Src0.replace(imgTitle1ImgArr0[i],'<img src="wb3ovHTD' + i + '" />');
                } 
             }

          formData.append('imgTitle',this.imgTitle0)  
          formData.append('imgTextarea',imgTitle1Src0) 
          formData.append('modelType',1) 
          formData.append('userId',this.userID)
          var url = "/user/addMessage"
          this.myToast()  
          this.$axios.post(url,formData) 
          .then(res => { 
            this.$Toast.clear();
            document.querySelector(".judgeImgSubmit").removeAttribute("disabled")
            if(res.data.data == "yes") {
              this.$Toast('successful') 
              this.$router.push({path:"/mine"})
            }
            else {
              this.$Toast('failure')
            }
          })
          .catch((err)=>{
            this.$Toast.clear();
          })
        }
      } 
      // 小图
      else if (this.selectUploadTypeValue == 1) {     

          if(this.imgTitle1 == "") { 
            this.$Toast("The title cannot be empty")
          }
          else if (this.imgTextarea1 == "") { 
            this.$Toast("Please enter a description")
          }
          else if (this.imgUrlArr1.length == 0) { 
            this.$Toast("Please upload a small picture")
          }
          else { 
            document.querySelector(".judgeImgSubmit").setAttribute("disabled","true")
            let formData = new FormData()
            var src = this.imgTextarea1
            var imgTitle1Src1  = this.imgTextarea1
            var imgCodesArr = []
            // 判断富文本编辑器里是否有图片
            var imgCodes1 = []
              src.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) { 
                imgCodes1.push(capture) 
            }); 
            if(imgCodes1.length == 0) { 
            }
            else { 

                //现在转成文件传给后台
              for(var i of imgCodes1){ 
                var blob = this.dataURLtoBlob(i) 
                var file = this.blobToFile(blob, new Date().getTime()); 
                console.log(file)
                formData.append('imgCodes1',file)
              }  
            }
             var imgTitle1ImgArr1 =  src.match(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi)
              // 富文本编辑器里是否有图片,没有就不用替换, 这里是按后台需求替换
             if(imgTitle1ImgArr1 != null) {
                for (var i = 0; i <  imgTitle1ImgArr1.length; i++) {
                    imgTitle1Src1 = imgTitle1Src1.replace(imgTitle1ImgArr1[i],'<img src="wb3ovHTD' + i + '" />');
                    
                } 
             }
             
            formData.append('imgTitle',this.imgTitle1)  
            formData.append('imgTextarea',imgTitle1Src1) 
            formData.append('modelType',2) 
            formData.append('userId',this.userID)
            for(var i of this.imgFileArr1) {
              formData.append('myImg',i) 
            } 
            var url = "/user/addMessage"
            this.myToast() 
            this.$axios.post(url,formData) 
            .then(res => { 
              document.querySelector(".judgeImgSubmit").removeAttribute("disabled")
               if(res.data.data == "yes") {
                 this.$Toast('successful')
                 
                this.$router.push({path:"/mine"})
              }
              else {
                this.$Toast('failure')
              }
            })
            .catch((err)=>{
              this.$Toast.clear();
            })
          }
      }
      // 大图
      else if (this.selectUploadTypeValue == 2) {
          if(this.imgTitle2 == "") { 
            this.$Toast("The title cannot be empty")
          }
          else if (this.imgTextarea2 == "") { 
            this.$Toast("Please enter a description")
          }
          else if (this.imgUrlArr2.length == 0) { 
            this.$Toast("Please upload a big picture")
          }
          else {
             document.querySelector(".judgeImgSubmit").setAttribute("disabled","true") 
            let formData = new FormData()
             var src = this.imgTextarea2
             var imgTitle1Src2  = this.imgTextarea2
             var imgCodesArr = []
            // 判断富文本编辑器里是否有图片
            var imgCodes2 = []
            src.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) { 
              imgCodes2.push(capture) 
            }); 

            if(imgCodes2.length == 0) {  
            }
            else {  

              //现在转成文件传给后台
              for(var i of imgCodes2){ 
                var blob = this.dataURLtoBlob(i) 
                var file = this.blobToFile(blob, new Date().getTime()); 
                formData.append('imgCodes1',file)
              }  

            }
             var imgTitle1ImgArr2 =  src.match(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi) 
              if(imgTitle1ImgArr2 != null) {
                 for (var i = 0; i <  imgTitle1ImgArr2.length; i++) {
                    imgTitle1Src2 = imgTitle1Src2.replace(imgTitle1ImgArr2[i],'<img src="wb3ovHTD' + i + '" />');
                } 
              }  

            formData.append('imgTitle',this.imgTitle2) 
            formData.append('imgTextarea',imgTitle1Src2) 
            formData.append('modelType',3) 
            formData.append('userId',this.userID)
            for(var i of this.imgFileArr2) {
              formData.append('myImg',i)
            } 
            var url = "/user/addMessage"
            this.myToast() 
            this.$axios.post(url,formData) 
            .then(res => { 
              document.querySelector(".judgeImgSubmit").removeAttribute("disabled")
               if(res.data.data == "yes") { 
                 this.$Toast('successful')
                 
                  this.$router.push({path:"/mine"})
                }
                else {
                  this.$Toast('failure')
                }
            })
            .catch((err)=>{
            this.$Toast.clear();
          })
          }
      }
      // 三张图
      else { 
          
          if(this.imgTitle == "") { 
            this.$Toast("The title cannot be empty")
          }
          else if (this.imgTextarea == "") { 
            this.$Toast("Please enter a description")
          }
          else if (this.imgUrlArr.length < 3) { 
            this.$Toast("Please upload three pictures")
          } 
          else {  
             document.querySelector(".judgeImgSubmit").setAttribute("disabled","true") 
            let formData = new FormData()
             var src = this.imgTextarea
              var imgTitle1Src0  = this.imgTextarea
             var imgCodesArr = []
             // 判断富文本编辑器里是否有图片
            var imgCodes3 = []
            src.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) { 
              imgCodes3.push(capture) 
            }); 
             if(imgCodes3.length == 0) { 
            }
            else { 
              //现在转成文件传给后台
              for(var i of imgCodes3){ 
                var blob = this.dataURLtoBlob(i) 
                var file = this.blobToFile(blob, new Date().getTime()); 
                formData.append('imgCodes1',file)
              }  

            }
            var imgTitle1ImgArr0 =  src.match(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi) 
            if(imgTitle1ImgArr0 != null) {
              for (var i = 0; i <  imgTitle1ImgArr0.length; i++) {
                  imgTitle1Src0 = imgTitle1Src0.replace(imgTitle1ImgArr0[i],'<img src="wb3ovHTD' + i + '" />');
              } 
            } 
            formData.append('imgTextarea',imgTitle1Src0)  
             formData.append('imgTitle',this.imgTitle)  
            formData.append('modelType',4) 
            formData.append('userId',this.userID)
            for(var i of this.imgFileArr) {
              formData.append('myImg',i)
            } 
            var url = "/user/addMessage"
            this.myToast() 
            this.$axios.post(url,formData) 
            .then(res => {  
              document.querySelector(".judgeImgSubmit").removeAttribute("disabled")
              if(res.data.data == "yes") {  
                this.$Toast('successful')
                
                this.$router.push({path:"/mine"})
              }
              else {
                 this.$Toast('failure')
              }
            })
            .catch((err)=>{
            this.$Toast.clear();
          })
          }
      }
       
    },
    // 判断视频
    judgeVideo() {

      if(this.videoUrl.length == 0) { 
        this.$Toast('Please upload the video file')
      }
      else if(this.videoTitle == "") {  
        this.$Toast('Please enter video title')
      }
      else if (this.videoTextarea == "") {  
        this.$Toast('Please enter video content')
      }
      else if (this.VideoCoveFileArr.length == 0 && this.VideoCove1.length == 0) { 
        this.$Toast('Please upload video thumbnails')
      }
      else {  
        let formData = new FormData()
        formData.append('videoTitle',this.videoTitle)
        formData.append('videoTextarea',this.videoTextarea)
        formData.append('myVideo',this.videoFile)
        formData.append('userId',this.userID)
        if(this.VideoCoveFileArr.length > 0) {
          formData.append('videoThumbnailFile',this.VideoCoveFileArr[0]) 
        }
        else { 
          if(this.VideoCove1[0] == "data:,") { 
             this.$Toast("Your video encoding does not support playback please re-select video and thumbnails")
             return
          }
          var blob = this.dataURLtoBlob(this.VideoCove1[0]) 
          var file = this.blobToFile(blob, new Date().getTime()); 
          formData.append('videoThumbnail',file) 
        }
        var url = "/user/addMessage"
        this.myToast() 
        this.$axios.post(url,formData) 
        .then(res => { 
          document.querySelector(".judgeVideoSubmit").removeAttribute("disabled")
          if(res.data.data == "yes") {
            this.$Toast('successful')
            
            this.$router.push({path:"/mine"})
          }
          else {
            this.$Toast('failure')
          }
        })
        .catch((err)=>{
            this.$Toast.clear();
          })
      } 
    },  
    // 选择发表类型时触发
    selectType (value) {
      // console.log(value)
    }, 
    // 选择 视频封面时触发
    selectVideoCoveType(value) {
      if(value === 0) {   
        this.currentTime = 0
        setTimeout(()=> {  
           document.querySelector(".my-range-value").value = 0 
          var scale = 0.3;
          var output = document.getElementById("outPutVideoCove");  
          output.innerHTML= "" 
          var canvas = document.createElement("canvas");
          canvas.width = video.videoWidth * scale;
          canvas.height = video.videoHeight * scale;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); 
          var img = document.createElement("img");
          img.src = canvas.toDataURL("image/png");
          output.appendChild(img);  
        },1000)
       
      }
      else {
        this.VideoCove = [] 
        this.VideoCoveFileArr = []
      }
    },
    // 选择了默认
    judgeVideoCove1(){
      this.videoCoverWindowa = false
      this.VideoCove1 = []
      this.VideoCoveFileArr = []
       setTimeout(()=> {   
        this.defaultThumbnailVideoCover = true
        this.customizedThumbnailVideoCover = false 
        this.VideoCove1.push(document.querySelector("#outPutVideoCove>img").getAttribute("src"))  
       },1200)
    },
    // 选择了自定义视频封面
    judgeVideoCove2(){ 
      if(this.VideoCoveFileArr.length ==0) { 
        this.$Toast("Please upload video thumbnails")
        
      }
      else {
        this.VideoCove1 = []
        this.videoCoverWindowa = false
        this.defaultThumbnailVideoCover = false
        this.customizedThumbnailVideoCover = true 
      }
    }
  },
}
</script>
<style> 
.video-cover-window {

    position: fixed; 
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,.7);
    /* z-index: 22222222222; */
    z-index: 225;
}
.video-cover-window .submit1 {
  width: 90%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-left: 5%;
  /* position: absolute;
  bottom: 0rem;
  left: 0; */
  background-color: #ffd900;
  font-size: 1rem;
}
.select-video-cove {
  width: 90%;
  height: 70%;
  background-color: white;
  margin-top: 10%;
}
.select-video-cove .van-dropdown-item {
  width: 90%;
    position: fixed; 
    left: 5%;
    overflow: hidden;
}
.select-video-cove .van-dropdown-menu {
  width: 100%;
  display: flex;
  justify-content: center;
}
.select-video-cove .my-video-cove1{
  width: 100%;
  height: 10rem;
}
.select-video-cove .my-video-cove1-value{
  width: 100%;
  height: 8rem;
  position: relative; 
}
.my-video-cove1 #videoCove{

  position: absolute;
}
.select-video-cove .my-video-cove1,.select-video-cove .my-video-cove2 {

    margin-top: 2rem;
}
.select-video-cove .my-video-cove1 .my-video-cove1-value>video {
    width: 100%;
    height: 100%;
    padding: .2rem;
    object-fit:fill;
    display: none;
}


.select-video-cove .scl-img{ 
  height: 2rem;
  position: relative; 
}
.select-video-cove #filepickerVideoCove{
  width: 6rem;
  height: 100%;
  position: absolute;
  left: 32%;
  z-index: 22222222222;
  opacity: 0;
  
} 
.select-video-cove .my-video-cove2-img-updata{
  width: 6rem;
  height: 100%;
  position: absolute;
  left: 32%;
  line-height: 2rem;
  text-align: center;
  background-color: #ffd900; 
}
#outPutVideoCove >img{
  width: 100%; 
  height: 8rem;
  position: absolute;
  padding: .2rem;
  /* z-index: 22; */
}
.my-range {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  height: 2rem;
}
.my-range .my-range-value {
  width: 85%;
  margin: 0 0.2rem;
}
 
 

.myhtml {
  width: 100%;
}
.myhtml  img{
  width: 100%;
}
.publication-type .van-tabs__wrap {
  width: 100%;
  z-index: 222;  
  /* height: 100%; */
}
.ql-editor img{
  width: 100%;
}
 
 .select-upload-type .van-ellipsis{
   height: 2rem;
   line-height: 2rem;
   font-size: 1rem;
   font-weight: 500;
   color: #1989fa;
  
 }

.my-video-cove2-small-img{
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.my-video-cove2-small-img >img{
  padding: 0.2rem;
  width: 100%;
  height: 100%; 
}
</style>

<style lang="scss" scoped>

.hintShow{
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: deeppink;
  border-radius: 0.4rem;
  z-index: 222222222233 !important;
  // line-height: 2rem;
  // text-align: center;
}
.work{
  width: 100%;
  height: 100%;
}
.navber1{
  height: 2.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 229;
  padding: .3125rem .625rem;
  background: #f5eff1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    height:1.5625rem;
    .van-icon{
      line-height:1.5625rem;
      font-size: 1.25rem;
      color: #969799;
    }
  }
  .title{
    color: #969799;
    line-height:1.5625rem;
  }
  .right{
    height: 1.5625rem;
    padding:0 .5rem;
    img{
      margin-top: .3125rem;
    }
  }
}
.cartNull{
  margin-top: 2.1875rem;
  padding: 0 .9375rem;
  img{
    width: 100%;
  }

}
.publication-type {
  width: 100%;
  height: 100%;
  margin-top: 2.5rem;
  box-sizing: border-box;
  margin-bottom: 4rem;
  z-index: 1;
}
.my-video-cover{
  width: 100%;
  height: 7rem;
  .upload-thumbnail{
      width: 100%;
       display: flex;
      justify-content: center;
    >div{
      width: auto;
      padding: 0 0.4rem; 
      height: 2rem;
      margin-top: 2rem;
      line-height: 2rem;
      text-align: center;
      background-color: #ffd900;
      margin-bottom: 5rem;
    }
  }
  >.sure-video-cover {
    // display: flex;
    // justify-content: center;
    padding: 0.2rem;
    width: 100%;
    height: 100%;
    >img{
      width: 100%;
      height: 100%;
    }
  }
}
.my-video{
  width: 100%;
  height: 8rem;
  margin-top: 1rem;
  padding: 0.2rem;
  video {
     object-fit:fill;
     width: 100%;
     height: 100%;
  }
}
.my-img{
  width: 100%;
  height: 7.5rem;
  margin-top: 1rem;
  padding: 0.2rem;
  >div{
    height: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .my-small-img{
    display: flex;
    justify-content: center;
    >img{
      width: 50%;
      height: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
    }
  }
  >.my-img-1 {
    >img {
      width: 100%;
      height: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
    }
  }
  >.my-img-2 {
    >img {
      width: 50%;
      height: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
      border: 1px solid rgb(226, 226, 226);
    }
  }
  >.my-img-3 {
    >img {
      width: 33.333%;
      height: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
      border: 1px solid rgb(226, 226, 226);
    }
  }
}
.scl-video{
  clear: both;
  margin-top: 2rem; 
  // display: flex;
  // justify-content: center; 
  height: 2rem;
  position: relative;
  >#filepicker{
    width: 6rem;
    height: 100%;
    position: absolute;
    left: 36%;
    z-index: 224;
    opacity: 0;
  }
  >.video-updata{
    width: 6rem;
    height: 100%;
    position: absolute; 
    left: 36%;
    line-height: 2rem;
    text-align: center;
    background-color: #ffd900; 
  }
}
.hint{
   margin-top: 1rem;
   display: flex;
   justify-content: center;
   height: 2rem;
}
.scl-img{
  // margin-top: 1rem;
  height: 2rem;
  position: relative; 
  >#filepicker1{
    width: 6rem;
    height: 100%;
    position: absolute;
    left: 36%;
    z-index: 222;
    opacity: 0;
    
  }
    >#filepicker_1{
    width: 6rem;
    height: 100%;
    position: absolute;
    left: 36%;
    z-index: 222;
    opacity: 0;
    
  }
   >#filepicker_2{
    width: 6rem;
    height: 100%;
    position: absolute;
    left: 36%;
    z-index: 222;
    opacity: 0;
    
  }
   >.img-updata{
    width: 6rem;
    height: 100%;
    position: absolute;
    left: 36%;
    line-height: 2rem;
    text-align: center;
    background-color: #ffd900; 
  }
}
.submit{
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0rem;
  left: 0;
  background-color: #ffd900;
  font-size: 1rem;
}
.publication-title{
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
  // height: 10rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
  font-size: 1rem;
  .publication-title-value{
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
  textarea{
    padding: 0.2rem;
    width: 100%;
    height: 6rem;
    border: none;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
}
.publication-title3{ 
  // height: 10rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1rem;
  .publication-title-value{
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
  textarea{
    padding: 0.2rem;
    width: 100%;
    height: 6rem; 
    border: none;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
}

.publication-title1{ 
  // height: 16rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1rem;
  .publication-title-value{
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
  textarea{
    padding: 0.2rem;
    width: 100%;
    height: 6rem; 
    border: none;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
}
.publication-title0{ 
  // height: 10rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1rem;
  .publication-title-value{
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
  textarea{
    padding: 0.2rem;
    width: 100%;
    height: 6rem; 
    border: none;
    border-bottom: 0.1px solid rgb(207, 207, 207);
  }
}
</style>