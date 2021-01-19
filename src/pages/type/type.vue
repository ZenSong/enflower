<template>
    <div class="type">   
        <div class="navber">
            <div class="left" @click="goBack">
                <van-icon name="arrow-left" color="#F96F91" />
            </div>
             
            <div class="right">
                <div @click="goHome()">
                    <van-icon name="wap-home" color="#F96F91" size="1.5rem"/>
                </div>
                <div  @click="typeMenuShow=!typeMenuShow">
                     <van-icon name="wap-nav" color="#F96F91" size="1.5rem"/>
                </div>
                
            </div> 
              
        </div>
        <!-- flower  类型  -->
        <div class="details_box1" v-if="flowerType=='Flower' || flowerType=='flower'">
             
            <div class="content_list" id="content_list" >
                <ul>  
                    <li> 
                        <div  >  
                            <dt class="getAdvertiseTop" v-if="getAdvertiseData.sort == 'top'">
                                <div v-html="getAdvertiseData.instext"  class="googleList"></div>
                            </dt>
                            <h3 style="text-align: center; color: rgb(249, 111, 145); font-weight: bold; margin: 1rem 0;font-size: 1rem;">{{flowerData.flowerName}}</h3> 
                            <div v-if="myThumIcon!=''">
                                
                                <img class="flower-type-img" :src="myThumIcon" alt="">
                            </div>  
                            <!-- <div  v-if="!flowerData.details">
                                <div>
                                    Name: <span>{{flowerData.flower_name}} </span><br>
                                    Meaning: <span> {{flowerData.flower_text}}</span> <br>
                                    Source: <span> {{flowerData.code}}</span> <br> 
                                    Flowering: <span> {{flowerData.flowering}} </span><br> 
                                    Growth environment: <span> {{flowerData.climate}} </span> <br>  
                                </div>
                                <div  v-if="flowerData.message" >
                                    <a :href="flowerData.messageurl">{{flowerData.message}}</a>
                                </div>
                            </div> -->
                            
                            <div class="innerHtml"> 
                                <div  v-html="flowerData.htmlText"></div>
                            </div>
                            <li style="width:100%;" class="tolang" @click="tolang()" v-show="tolangShow">
                                <img src="../../../static/img/xiahua.png" alt="">
                            </li>
                        </div>
                    </li> 
                    <dt class="getAdvertiseTop " v-if="getAdvertiseData.sort == 'buttom'">
                        <div class="my-scroll-adv-bottom" ></div>
                    </dt>
                    <li class="bottmo">
                        <span class="iconfont icon-xiaoxi" v-if="reviewNum"><span >({{reviewNum}})</span></span>
                        <span :class="collection_show ?'active iconfont icon-shoucang':'iconfont icon-shoucang'" @click="collection()"></span>
                        <img class="twitter" src="../../../static/img/twitter.png" alt="" @click="facebookshare()">
                        <span class="iconfont icon-xiepinglun"  @click="writeComment('a')"></span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- video 类型 -->
        <div class="details_box2"  v-if="flowerType=='Video' || flowerType=='video'">
            <div class="content_list"  id="content_list"  >
                <ul>
                    <li class="getAdvertiseTop" v-if="getAdvertiseData.sort == 'top'">
                        <div v-html="getAdvertiseData.instext"  class="googleList"></div>
                    </li>
                    <li class='title' style="color: rgb(249, 111, 145);font-size: 1rem;font-weight: bold;">
                        {{flowerData.videoTitle}}
                    </li>
                    <li class="video">
                        <video :src="flowerData.videoAddr" controls :poster="flowerData.videoImgAddr"></video> 
                    </li>
                    <!-- <li class="descript">
                        {{flowerData.video_descript}}
                    </li> -->
                    <li class="getAdvertiseTop" v-if="getAdvertiseData.sort == 'buttom'">
                        <div    class="my-scroll-adv-bottom" ></div>
                    </li>
                    
                    <li class="bottmo">
                        <span class="iconfont icon-xiaoxi" v-if="reviewNum"><span >({{reviewNum}})</span></span>
                        <span :class="collection_show?'active iconfont icon-shoucang':'iconfont icon-shoucang'" @click="collection()"></span>
                        <img class="twitter" src="../../../static/img/twitter.png" alt="" @click="facebookshare()">
                        <span class="iconfont icon-xiepinglun"  @click="writeComment('a')"></span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- info 类型 -->
        <div class="details_box3"  v-if="flowerType=='Information' || flowerType=='info'">  
            
            <div class="content_list"  id="content_list"  >
                <ul>
                <!-- 广告 -->
                    <li class="getAdvertiseTop" v-if="getAdvertiseData.sort== 'top'">
                        <div v-html="getAdvertiseData.instext"  class="googleList"></div>
                    </li>
                    <li class="title">
                        <div class="top"> {{flowerData.title}}</div>
                        <dl>
                            <dt>
                                <img v-lazy="flowerData.imageurl" alt=""><span>{{flowerData.createBy}}</span> 
                            </dt>
                            <dd class="right">
                                <p >{{new Date(flowerData.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</p>
                            </dd>
                        </dl>
                    </li> 
                    <!--  v-html="flowerData.html_text" -->
                    <li class="innerHtml" v-html="flowerData.htmlText" ref="flowerHtml">
                            
                    </li>
                    <li class="tolang" @click="tolang()" v-show="tolangShow">
                        <img src="../../../static/img/xiahua.png" alt="">
                    </li>
                </ul> 
            </div> 
            <div  class="getAdvertiseButtom" v-if="getAdvertiseData.sort == 'buttom'">
                <div class="my-scroll-adv-bottom" ></div>
            </div>
            <div class="bottmo">
                <span class="iconfont icon-xiaoxi" v-if="reviewNum"><span >({{reviewNum}})</span></span>
                <span :class="collection_show?'active iconfont icon-shoucang':'iconfont icon-shoucang'" @click="collection()"></span> 
                <img class="twitter" src="../../../static/img/twitter.png" alt="" @click="facebookshare()">
                <span class="iconfont icon-xiepinglun"  @click="writeComment('a',flowerId)"></span>
            </div> 
        </div>
        
        <!-- 评论 -->
        <div class="comment">
            <div class="title">
                <p></p>
                <p>Comments</p>
                <p></p>
            </div>
            <div class="not_comment" v-if="!reviewNum">
                No comment for the time being.
            </div>
            <div class="comment_list" v-for="(item) in commentsData" :key="item.id">
                <dl>
                    <dt >
                        <img v-lazy="item.imageurl" alt="">
                    </dt>
                    <dd class="content">
                        <p class="name">{{item.username}}</p>
                    </dd>
                </dl>
                <div class="message_box">
                    <p class="message">{{item.comment}}</p>
                    <p class="time">
                        <span class="left"> {{new Date(item.addtime).toDateString()}}</span> 
                        <span v-if="commentChild.indexOf(item.id)=='-1'?true:false" class="right" @click="writeComment('b',item.id)"><span>Comment</span><van-icon name="comment-o" /></span>
                        <span v-if="item.answer.length?commentChild.indexOf(item.id)!='-1'?true:false :false " class="right"  @click="clickMore(item.id)"><span>Hidden</span><van-icon name="arrow-up" /></span>
                        <span v-if="item.answer.length?commentChild.indexOf(item.id)=='-1'?true:false :false " class="right" @click="unfoldMore(item.id)"><span>Unfold</span><van-icon name="arrow-down" /></span>
                    </p>
                </div>
                <div class="message_more" v-if="item.answer.length?commentChild.indexOf(item.id)!='-1'?true:false :false ">
                    <div v-for="(item2 , index2) in item.answer" :key="index2" >
                        <div v-if="!item2.apid">
                        <dl>
                            <dt >
                                <img v-lazy="item2.imageurl" alt="">
                            </dt>
                            <dd class="content">
                            <p class="name">{{item2.username}}</p>
                            </dd>
                        </dl>
                        <div class="message_box">
                            <p class="message">{{item2.acontent}}</p>
                            <p class="time">
                            <span class="left"> {{new Date(item2.addtime).toDateString()}}</span> 
                            <span v-if="true" class="right"  @click="writeComment('c',item.id,item2.id)"><span>Comment</span><van-icon name="comment-o" /></span>
                            </p>
                        </div>  
                        </div>
                        <div v-if="item2.apid">
                        <dl>
                            <dt >
                            <img v-lazy="item2.imageurl" alt="">
                            </dt>
                            <dd class="content">
                            <p class="name"><span>{{item2.username}}</span><span> Reply :{{item2.pname}}</span></p>
                            </dd>
                        </dl>
                        <div class="message_box">
                            <p class="message">{{item2.acontent}}</p>
                            <p class="time">
                            <span class="left" >{{new Date(item2.addtime).toDateString()}}</span>
                            <span v-if="true" class="right"  @click="writeComment('c',item.id,item2.id)"><span>Comment</span><van-icon name="comment-o" /></span>
                            </p>
                        </div>  
                        </div>
                    </div>
                    <div class="bottom">
                        <p v-if="true" class="right"  @click="writeComment('b',item.id)"><span>I also want to say.</span><van-icon name="comment-o" /></p>
                    </div>
                </div>
            </div>
            <div class="show_more" v-if="reviewNum>pagesize">
                <p @click="show_more" v-if="!showMore">
                <span class="iconfont icon-Group"></span>
                </p>
                <p  v-if="showMore">
                <span> No More </span>
                </p>
            </div>
        </div>

        <!-- 推荐 -->
        <div class="recommend" v-show="recommendedData.length > 0">
            <div class="recommend_top">
                <div>
                    Popular Posts
                </div>
                <div class="change_style"  @click="style_value=!style_value">
                    <span>Change Style</span> 
                    <span class="iconfont icon-moshiqiehuan"></span>
                </div>
            </div>  
            <!-- <a :href="item.web_url" class="recommend_list1" v-if="style_value"   v-for="(item ) in recommendedData" :key="item.id" > -->
                <router-link  :to="{path : `/plant/${item.type.replace(/\s+/g,'-')}/${item.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${recommendedBelong}/${item.id}`}"  class="recommend_list1" v-if="!style_value"   v-for="(item ) in recommendedData" :key="item.id"  > 
                        <div class="left">
                            <img v-lazy="item.icon" alt="">
                            <img v-if="recommendedBelong == 'Video'" class="videos-icon" src="../../../static/img/shipin.png" alt="" >
                        </div>
                        <div class="right">
                            <p class="title">{{item.title}}</p>
                            <dd  class="time" >
                                <div>
                                <van-icon name="eye-o" />
                                <span>{{item.num}}</span>
                                </div>
                                <span >{{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span>
                            </dd>
                        </div>
                </router-link>
                <div class="recommend_list" v-if="style_value">
                    <!--   <a :href="item.web_url"  v-for="(item ) in recommendedData" :key="item.id">-->
                    <router-link   :to="{path : `/plant/${item.type.replace(/\s+/g,'-')}/${item.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${recommendedBelong}/${item.id}`}" v-for="(item ) in recommendedData" :key="item.id"> 
                        <dl >
                            <dt>
                            <img v-lazy="item.icon" alt="">
                            <img v-if="recommendedBelong == 'Video'" class="videos-icon" src="../../../static/img/shipin.png" alt="" >
                            </dt>
                            <dd class="title">{{item.title}}</dd>
                            <dd  class="time" >
                            <div>
                                <van-icon name="eye-o" />
                                <span>{{item.num}}</span>
                            </div>
                            <span >{{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span>
                            </dd>
                        </dl>
                    </router-link> 
            </div>
        </div>

        <!-- 评论弹窗 -->
        <van-dialog v-model="writeShow" title="Write a Comment " :show-cancel-button="mywriteShow" :show-confirm-button	="mywriteShow" >
            <div class="content" style="width:100%;height:auto;padding:0.8rem;">
                <textarea name="textarea" id="" cols="30" rows="10" placeholder="Please enter comments." v-model="writeValue" style="width:100%;height:8rem;padding:0.8rem; border:none;" >
                </textarea>
                <div class="btn_box"  style="width:100%;height:3rem;display: flex;align-items: center;margin-bottom:0.5rem;justify-content:space-around">
                    <van-button plain hairline type="default"  @click="writeShow=false">cancel</van-button> 
                    <van-button plain hairline type="primary" @click="determine">determine</van-button>  
                </div>
            </div>
        </van-dialog>
        <!-- 分类菜单 :overlay="false"-->
        <van-popup v-model="typeMenuShow" position="top"   get-container=".type"   :style="{ height: 'auto',zIndex: '2222222', background: '#f5f5f5'}" round>
            <ul class="navber-menu"> 
                <li v-for="(item,index) in menuArr" :key="index" @click="sendOut(item.typeName)">
                    <router-link tag="div" :to="{path:`/category/${item.typeName.replace(/\s+/g,'-')}/${item.belong}/${item.id}`}" > 
                        {{item.typeName}}
                    </router-link>
                </li> 
            </ul>
        </van-popup>
        <div class="my-type-img-preview" v-if="showMaxImg">
            <div class = "type-img-preview-adv">
                <ins class="adsbygoogle"
                style="display:inline-block;width:100%; height:100%;"
                data-ad-client="ca-pub-7936490518220507"
                data-ad-slot="8268485993"></ins>
            </div>
            <div class="teleport-img-preview"></div>
        </div>
        <van-image-preview
                @change= "contentChange"
                className = "my-amplification"
                v-model="showMaxImg"
                :images="MaxImgArr" 
                :start-position = "startMaxImg"
                :show-index = false
                :style="{ height: '85vh',width : '100%' ,marginTop : '15vh',zIndex:'2000002'}"
                get-container=".teleport-img-preview"
                >   
        </van-image-preview>
          
    </div>
</template>
<script>
export default {
    data () {
        return {
            userinfo:{},//用户登录信息
            flowerType: "", //详情类型
            flowerId: "",//详情id
            flowerData: "", //详情数据
            getAdvertiseData : "", // 广告
            reviewNum : "",  // 评论总数
            collection_show : false,  // 收藏显示
            commentsData:[],//评论数据
            commentChild:[],//回复评论 
            pageindex:1,// 评论页数
            pagesize : 5, // 获取每页评论数量
            showMore:false,//是否加载更多评论
            writeShow:false,//是否显示写评论
            commentsID : "",  // 评论ID传参类型
            commentsPath : "",  // 评论接口的路径
            detailsPath : "" ,  // 详情接口的路径
            detailsID : "",    // 详情ID传参类型  
            style_value:"style_tpe1",
            recommendedData : [], // 推荐内容
            recommendedBelong : 'Flower', //  分类里的belong的属性值
            mywriteShow: false, // 
            writeShow:false, //评论弹窗
            writeValue:'',//评论的内容
            commentData:{},//评论提交数据
            typeMenuShow : false,
            menuArr: [],
            showMaxImg: false,  // 全屏显示图片
            MaxImgArr : [],    // 全屏需要显示图片的数据
            startMaxImg : 0,   // 图片预览位置  
            tolangShow : false,  
            myThumIcon : '',  // Flower类型里的顶部图片
        }
    },
    
    created () {   
        document.documentElement.scrollTop =0;
        document.body.scrollTop = 0
        // 向谷歌分析发送数据  
        gtag('event', 'click', { 
            'event_label':  window.location.href, 
            'event_callback': function(){ 
          }
        });
        this.userinfo = JSON.parse(localStorage.getItem('userinfo')) 
        // this.flowerType=this.$route.query.id.split("_")[1]
        // this.flowerId=this.$route.query.id.split("_")[0]   

        this.flowerType = this.$route.params.format 
        this.flowerId = this.$route.params.id 


        // 接口路径
        if(this.flowerType=="Flower" || this.flowerType=="flower"){
            // this.detailsPath = `user!getInfo.action`
            this.detailsPath = `/user/getInfo`
            this.commentsPath=`/user/getFlowerComment` 
            this.detailsID = 'flowerId'
            this.commentsID = 'flowerId' 
        }else if(this.flowerType=="Information" || this.flowerType=="info"){ 
            // this.detailsPath = `user!getNewsInfo.action`
            this.detailsPath = `/user/getNewsInfo`
            this.commentsPath=`/user/getNewsComment`
            this.detailsID = 'id'
            this.commentsID = 'newsId'  
        }else{
            // this.detailsPath = `user!getVideoInfo.action`
            this.detailsPath = `/user/getVideoInfo`
            this.commentsPath=`/user/getVideoComment`
            this.detailsID = 'videoId'
            this.commentsID = 'videoId' 
        }
        // 获取分类
        this.getMenu();
        // 获取详情数据
        this.getDetailData()
        // 获取评论数据
        this.getCommentsData(this.pageindex)
        //获取广告信息
        // this.getAdvertise(this.$route.query.id.split("_")[1]); 
        this.getAdvertise(this.flowerType);
        // 获取推荐列表  
        this.getRecommendedList()
    },
    watch : {
        $route(to,from) {
            this.$router.go(0)
        }
    },
    mounted () {
        document.documentElement.scrollTop =0;
        document.body.scrollTop = 0
         
    },
     // 离开时操作
    destroyed(){
        // 文章中的广告
        window.removeEventListener('scroll', this.scrollAdv, false);
        // 底部的广告
        window.removeEventListener('scroll', this.scrollAdvBotton, false);
    },
    methods : {
        // 滑到一定位置显示文章中的广告  
        scrollAdv () {
           let bodyScroll = document.documentElement.scrollTop || document.body.scrollTop;
           let myScrollAdv = Array.from(document.querySelectorAll('.my-scroll-adv'));
           
           
           if(myScrollAdv.length > 0) {
               myScrollAdv.forEach((e,i)=>{
                   var domTop =  e.offsetTop -350 ;  
                   if(bodyScroll >=  domTop) { 
                       this.dynamicInsertion(e)
                   }
               })
           }
        },
        // 动态加载谷歌广告 
        dynamicInsertion(dom){ 
            let myVar=setTimeout(() => {
                    var ss = dom.querySelectorAll(".my-scroll-adv-add");
                    if(ss.length > 0 && ss[0].innerHTML == '(adsbygoogle = window.adsbygoogle || []).push({});') {
                         
                    } 
                    else { 
                        var s = '<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-7936490518220507" data-ad-slot="2319868394"></ins>'
                        dom.innerHTML = s;
                        let script =document.createElement("script"); 
                        script.type='text/javascript';
                        let nHTML='(adsbygoogle = window.adsbygoogle || []).push({});';
                        script.setAttribute('class','my-scroll-adv-add');
                        script.innerHTML=nHTML
                        dom.appendChild(script);
                    }  
            }, 10);
        },
        // 底部广告
        scrollAdvBotton () { 
            let bodyScroll = document.documentElement.scrollTop || document.body.scrollTop;
            let myScrollAdvBotton = Array.from(document.querySelectorAll('.my-scroll-adv-bottom'));
            let bodyHeight = document.documentElement.clientHeight || document.body.clientHeight; 
            if(myScrollAdvBotton.length > 0) {
               myScrollAdvBotton.forEach((e,i)=>{
                   // 滑到底才能请求广告 
                   var domTop =  e.offsetTop -350 ; 
                   if(bodyScroll >=  domTop || domTop <= bodyHeight) { 
                       this.dynamicInsertion2(e)
                   }
               })
           }
        },
        dynamicInsertion2(dom){ 
            let that = this;
            let myVar=setTimeout(() => {
                    var ss = dom.querySelectorAll(".my-scroll-adv-add-botton");
                    if(ss.length > 0 && ss[0].innerHTML == '(adsbygoogle = window.adsbygoogle || []).push({});') {
                         
                    } 
                    else { 
                        dom.innerHTML = that.getAdvertiseData.instext
                        let script =document.createElement("script"); 
                        script.type='text/javascript';
                        let nHTML='(adsbygoogle = window.adsbygoogle || []).push({});';
                        script.setAttribute('class','my-scroll-adv-add-botton');
                        script.innerHTML=nHTML
                        dom.appendChild(script); 
                    }  
            }, 10);
        },
         // 向谷歌分析发送报告  
        sendOut (item) {  
            if(item != "") {
                gtag('event', 'click', { 
                'event_label':  item, 
                'event_callback': function(){ 
                    
                }
                }); 
            }
        },
        // 获取分类 
        getMenu(){
            var url = "/user/getTypeInfo";
            this.$axios.get(url)
            .then(res=>{
                this.menuArr=res.data.data;    
            })
            .catch(err=>{
                console.log(err)
            })
        },
        goBack () {
            this.$router.go(-1)
        },
        goHome(){
            this.$router.push("/")
        },
        tolang() {
            let that = this;
            this.$dialog.confirm({
                title: 'Open Flower Cultivation APP Read more',
                cancelButtonText:"No",
                confirmButtonText:"Yes", 
                cancel:""
                }).then(() => {
                    window.open("https://play.google.com/store/apps/details?id=com.duonami.funny.flower")
                }).catch(() => {
                    var tolang = document.querySelector(".innerHtml") 
                    tolang.style.height = "auto"
                    that.tolangShow = false;
                });
        },
        showContent() {
            
        },
        // 获取详情页
        getDetailData() { 
            var that = this;
            let myObjData = {} 
            if(this.userinfo){
                myObjData.userId = this.userinfo.user_id 
            }
            myObjData[this.detailsID] = this.flowerId  
            this.$axios.get(this.detailsPath,{
                params : myObjData
            })
            .then(res => {  
                document.documentElement.scrollTop =0;
                document.body.scrollTop = 0 
                this.flowerData=res.data.data; 
                if(this.flowerData.hasOwnProperty('thumIcon')) {
                    this.myThumIcon = this.flowerData.thumIcon.split(',')[0]
                }
                if(this.flowerData.hasOwnProperty('collect')) {
                    if(this.flowerData.collect == 'no') {
                        this.collection_show = false
                    }
                    else {
                        this.collection_show = true
                    } 
                }
                var inFlower = document.querySelector(".innerHtml") 
                if(inFlower != undefined) {
                    this.$nextTick( ()=> {
                        document.documentElement.scrollTop =0;
                        document.body.scrollTop = 0
                        this.tolangShow = true;
                        // 修改标题
                        var title = document.querySelector("title"); 
                        if(this.flowerType=="Flower" || this.flowerType=="flower"){
                            if(this.flowerData.hasOwnProperty("flowerName")) {
                                title.innerHTML = this.flowerData.flowerName
                            }
                            
                        }else if(this.flowerType=="Information" || this.flowerType=="info"){
                            if(this.flowerData.hasOwnProperty("title")) {
                                title.innerHTML = this.flowerData.title
                            }
                            
                        }else{
                            if(this.flowerData.hasOwnProperty("videoTitle")) {
                                title.innerHTML = this.flowerData.videoTitle 
                            } 
                        }
                        // 广告
                        var sons = Array.from(document.querySelectorAll(".innerHtml p"));
                        if(sons.length == 0) { 
                          var  sons = Array.from(document.querySelectorAll(".innerHtml div"));
                        }
                        var l = sons.length;
                        // 广告随机 
                        var d = parseInt(Math.random()*(l- parseInt((l/3)))); 
                        var div = document.createElement("div");
                        // div.setAttribute("class","googleList");
                        div.setAttribute("class","my-scroll-adv");
                        div.style.margin = '0' 
                        // var s = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="9762508091" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                        // div.innerHTML = s;
                        if(sons.length ==0) { 
                            document.querySelector(".innerHtml").insertBefore(div,document.querySelector(".innerHtml").firstChild)
                        }
                        else {
                            sons[d].parentNode.insertBefore(div, sons[d].nextSibling);
                        }  
                        // 内容中的
                        window.addEventListener('scroll', that.scrollAdv, false);
                        // 必须等待第一次资源加载完毕之后，才能拿底部广告的offsetTop的值
                        window.addEventListener('scroll', that.scrollAdvBotton, false); 


                       /*  var myVar=setTimeout(() => {
                            var oDom=document.getElementsByClassName("googleList");
                            for(var i=0;i<oDom.length;i++ ){
                                var script =document.createElement("script"); script.type='text/javascript'
                                var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
                                script.innerHTML=nHTML
                                oDom[i].appendChild(script);
                            }
                        }, 100); */
                    })
                    setTimeout(() => {
                       var aLIs = inFlower.querySelectorAll("a")
                       for(var a of aLIs) {
                           a.setAttribute("href","javascript:void(0)")
                       }
                       var imgs = inFlower.querySelectorAll("img") 
                       for(var t of imgs) { 
                            t.style.margin = "0 auto";
                            t.style.display = "block";
                       }
                    },500)
                    setTimeout(() => {
                        var arr = Array.from(inFlower.querySelectorAll("img")); 
                        //  flower类型数据里的图片 
                        if(this.flowerData.hasOwnProperty("thumIcon")) { 
                            if(this.flowerData.thumIcon) { 
                                if(this.flowerType=="flower" || this.flowerType=="Flower" ){
                                    arr.unshift(document.querySelector(".flower-type-img"))
                                } 
                            }
                        }    
                        arr.forEach((e,i) => {
                            // 往图片里添加 放大标签
                            var div = document.createElement("div") 
                            var divSon = document.createElement("img") 
                            div.setAttribute('class','myPositionImg')
                            div.style.position = 'relative'; 
                            divSon.setAttribute('class','myPositionSon')
                            divSon.src = require("../../../static/img/big2.png")  
                            e.parentNode.replaceChild(div, e)
                            div.appendChild(e)
                            div.appendChild(divSon) 
                            that.MaxImgArr.push(e.src);
                        })   
                        var myPosition = Array.from(document.querySelectorAll('.myPositionImg')) 
                        myPosition.forEach((e,i) => { 
                            e.addEventListener("click",() =>{  
                                that.showMaxImg = true 
                                that.startMaxImg = i  
                                console.log(i)

                                setTimeout(() => {

                                    that.$nextTick(()=> {
                                        let myAmplification = Array.from(document.querySelectorAll('.my-amplification .van-swipe-item'));  
                                        // 防止重复添加
                                        let repeatImg  =   Array.from(myAmplification[i].querySelectorAll('.myPositionSon'));
                                        if(repeatImg.length <= 0) {
                                            var myImg  = myAmplification[i].querySelector('img');  
                                            // 往图片里添加 缩小标签
                                            var div = document.createElement("div") 
                                            var divSon = document.createElement("img") 
                                            div.setAttribute('class','myPositionImg')
                                            div.style.position = 'relative'; 
                                            divSon.setAttribute('class','myPositionSon')
                                            divSon.src = require("../../../static/img/small.png")  
                                            div.style.display = 'flex';
                                            div.style.alignItems = 'center'; 
                                            div.style.width = '100%';  
                                            myImg.parentNode.style.display = 'flex';
                                            myImg.parentNode.style.alignItems = 'center';   
                                            myImg.style.height = 'auto';  
                                            myImg.style.objectFit = ''; 
                                            myImg.parentNode.replaceChild(div, myImg)
                                            div.appendChild(myImg)
                                            div.appendChild(divSon) 
                                        } 
                                    }) 

                                    var ads = document.querySelector(".type-img-preview-adv")
                                    let script =document.createElement("script"); 
                                    script.type='text/javascript';
                                    let nHTML='(adsbygoogle = window.adsbygoogle || []).push({});';
                                    script.setAttribute('class','mygoogleList1');
                                    script.innerHTML=nHTML
                                    ads.appendChild(script);  
                                }, 200); 
                            })
                        })  
                    },1000)
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        // 文章图片预览里的切换
        contentChange(i) { 
            setTimeout(()=>{
                let myAmplification = Array.from(document.querySelectorAll('.my-amplification .van-swipe-item'));  
                // 防止重复添加
                let repeatImg  =   Array.from(myAmplification[i].querySelectorAll('.myPositionSon'));
                if(repeatImg.length <= 0) {
                    var myImg  = myAmplification[i].querySelector('img');  
                    // 往图片里添加 缩小标签
                    var div = document.createElement("div") 
                    var divSon = document.createElement("img") 
                    div.setAttribute('class','myPositionImg')
                    div.style.position = 'relative'; 
                    divSon.setAttribute('class','myPositionSon')
                    divSon.src = require("../../../static/img/small.png")  
                    div.style.display = 'flex';
                    div.style.alignItems = 'center'; 
                    div.style.width = '100%';  
                    myImg.parentNode.style.display = 'flex';
                    myImg.parentNode.style.alignItems = 'center';   
                    myImg.style.height = 'auto';  
                    myImg.style.objectFit = ''; 
                    myImg.parentNode.replaceChild(div, myImg)
                    div.appendChild(myImg)
                    div.appendChild(divSon)
                } 
            },200)
        },
        // 获取评论数据
        getCommentsData (pageindex) { 
            // var formData=  new FormData();  
            // formData.append('pagesize',this.pagesize);
            // formData.append('pageindex',pageindex);
            // formData.append(this.commentsID,this.flowerId);
            let myObjData = {
                pagesize : this.pagesize,
                pageindex : pageindex
            }
            myObjData[this.commentsID] = this.flowerId
            this.$axios.get(this.commentsPath,{
                params : myObjData
            }).then(res=>{ 
                this.reviewNum=res.data.data.total;
                if(!res.data.data.list.length){
                    this.showMore = true;
                }else{
                    this.showMore = false;
                    this.commentsData.push(...res.data.data.list);
                } 
            }).catch(err=>{
                console.log(err);
            })
        },
        //facebook分享
        facebookshare() {  
            window.open("https://twitter.com/share?url= " + window.location.href);   
        },
        //收藏
        collection(){
            
            if (this.userinfo) {
                this.collection_show = !this.collection_show 

                let obj = {
                    userId : this.userinfo.user_id
                }
                if(this.flowerType=="flower" || this.flowerType=="Flower"){ 
                    obj.flowerId = this.flowerId
                }else if(this.flowerType=="info" || this.flowerType=="Information"){ 
                    obj.newsId = this.flowerId
                }else{ 
                    obj.videoId = this.flowerId
                } 
                if (this.collection_show) {
                this.$axios.get('/user/saveCollect', {
                    params : obj 
                })
                .then(response => {
                    
                })

                } else {
                this.$axios.get('/user/cancelCollect',{
                    params : obj 
                })
                .then(response => {
                })
                }
            } else {

                this.$dialog.confirm({
                title: 'You are not login .',
                cancelButtonText:"Close",
                confirmButtonText:"Login",
                confirm:'ss',
                cancel:""
                }).then(() => {
                    this.$router.push({path:"/login"})
                }).catch(() => {
                
                });
            }
        },
        //收起回复
        clickMore(id){
            this.commentChild.splice(this.commentChild.indexOf(id),1)
        },
        //展开回复
        unfoldMore(id){
            if(this.commentChild.indexOf(id)==-1){
                this.commentChild.push(id)
            }
        },
        //获取更多评论
        show_more(){
            this.pageindex++
            // this.getDetailData(this.pageindex);//获取详情数据
            this.getCommentsData(this.pageindex)
        },
        //回复评论
        writeComment(type,cpid,apid){ 
            if(this.userinfo){
                this.commentData.type=type;
                this.commentData.cpid=cpid;
                this.commentData.apid=apid;
                this.writeShow=true;
            }else{
                this.$dialog.confirm({
                title: 'You are not login .',
                cancelButtonText:"Close",
                confirmButtonText:"Login",
                confirm:'ss',
                cancel:""
                }).then(() => {
                this.$router.push({path:"/login"})
                }).catch(() => {
                
                });
            }
        },
        ss(){
        },
         //推荐信息
        getRecommendedList(){
            // let url=`user!getExternalNewsButtom.action`
            // this.$axios.post(url).then(res=>{
            //     this.recommendedData.push(...res.data)
            // }).catch(err=>{
            //     console.log(err)
            // })
            this.recommendedData = []
            var url='/user/searchInfo' 
            var index; 
            // 拿取四个分类中的id
            let typeIdArr = [1,2,10000,9999]
            var typeIdInx = parseInt(Math.random() * (3 - 0 + 1) + 0) 
            let setTypeId = typeIdArr[typeIdInx]
            if(setTypeId == 1) {
                this.recommendedBelong = "Information"
                index = parseInt(Math.random() * (22-1+1) + 1) 
            }
            else if (setTypeId == 2) {
                this.recommendedBelong = "Information"
                index = parseInt(Math.random() * (10-1+1) + 1) 
            }
            else if (setTypeId == 9999) {
                this.recommendedBelong = "Flower"
                index = parseInt(Math.random() * (4-1+1) + 1) 
            }
            else {
                this.recommendedBelong = "Video"
                index = 1 
            }  
            var recommendedDataArr = [] 
            this.$axios.get(url,{
                params : {
                   typeId : setTypeId,
                   pagesize : index
                }
            })
            .then(res=>{  
                // 不要三图和无图的
                for(var j =0; j < res.data.data.length; j++) {
                    if(res.data.data[j].model_type != "4" && res.data.data[j].model_type != "1") {
                        recommendedDataArr.push(res.data.data[j]) 
                        
                    }
                }  
                for(var k =0; k < 4; k++) {
                    var myArrInx = parseInt(Math.random() * (recommendedDataArr.length - 1-1+1) + 1)  
                    this.recommendedData.push(recommendedDataArr[myArrInx])  
                    recommendedDataArr.splice(myArrInx,1)  
                }  
                this.cont++     
            }).catch(err=>{
                console.log(err)
            })  
            
        },
        // 获取广告
        getAdvertise(adtype){ 
            let url=`/user/getAdvertisePage` 
            if(adtype== 'Information') {
                adtype = 'info'
            } 
            this.$axios.get(url,{
                params : {
                    adtype : adtype
                }
            }).then(res=>{  
                this.getAdvertiseData=res.data.data;  
                var myVar=setTimeout(() => {
                    var oDom=document.getElementsByClassName("googleList")
                    for(var i=0;i<oDom.length;i++ ){
                        var script =document.createElement("script"); script.type='text/javascript'
                        var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
                        script.innerHTML=nHTML
                        oDom[i].appendChild(script);
                    }
                }, 100);
                
            }).catch(err=>{
                console.log(err)
            })
        },
         //回复评论确定按钮
        determine(){
            var url='';
            // let formData = new FormData()
            if(!this.writeValue){
                this.$dialog.confirm({
                title: 'Please enter your comments.',
                cancelButtonText:"Close",
                confirmButtonText:"Yes",
                confirm:'ss',
                cancel:""
                }).then(() => {
                this.writeShow=true;
                }).catch(() => {
                this.writeShow=false;
                });
            }
            // formData.append('user_id',this.userinfo.user_id)

            let myObjData = {
                userId  : this.userinfo.user_id
            }
            if(this.commentData.type=='a'){
                // formData.append('comment',this.writeValue)
                myObjData.comment = this.writeValue
            }
            if(this.commentData.type=='b'){
                // formData.append('cpid',this.commentData.cpid)
                // formData.append('acontent',this.writeValue)
                myObjData.cpid = this.commentData.cpid
                myObjData.acontent = this.writeValue
            }
            if(this.commentData.type=='c'){
                // formData.append('cpid',this.commentData.cpid)
                // formData.append('apid',this.commentData.apid)
                // formData.append('acontent',this.writeValue) 
                myObjData.cpid = this.commentData.cpid
                myObjData.apid = this.commentData.apid
                myObjData.acontent = this.writeValue
            }
            if(this.flowerType=="Flower"){
                // formData.append('flower_id',this.flowerId)
                myObjData.flowerId = this.flowerId
                if(this.commentData.type=='a'){
                    url='/user/conTent'
                }else if(this.commentData.type=='b'){
                    url='/user/answer'
                }else{
                    url='/user/answer'
                }
            }else if(this.flowerType=="Information" || this.flowerType=="info"){
                // formData.append('news_id',this.flowerId)
                myObjData.newsId = this.flowerId
                if(this.commentData.type=='a'){
                    url='/user/addNewsComment'
                }else if(this.commentData.type=='b'){
                    url='/user/answer_news'
                }else{
                    url='/user/answer_news'
                }
            }else{
                // formData.append('video_id',this.flowerId)
                myObjData.videoId = this.flowerId
                if(this.commentData.type=='a'){
                    url='/user/addVideoComment'
                }else if(this.commentData.type=='b'){ 
                    url='/user/answer_video'
                }else{ 
                    url='/user/answer_video'
                }
            }
            this.$axios.get(url,{
                params : myObjData
            }).then(res=>{
                this.writeValue="";
                this.writeShow=false;
                // this.getDetailData(this.pageindex);//获取详情数据 
                this.pageindex = 1
                this.commentsData = []
                this.getCommentsData(this.pageindex)
            }).catch(err=>{
                console.log(err)
            }) 
        },
    },
}
</script>
 <style > 
    .innerHtml {
        height: 16rem;
        overflow: hidden;
    }
    .tolang{
        position: absolute;
        bottom:0;
        width: calc(100% - 1.2rem);
        height: 40px; 
        text-align: center; 
        background-image: linear-gradient(top,rgba(245,239,241,0),rgba(249, 111, 145,.8)); 
        display: flex;
        justify-content: center; 
        box-sizing: border-box;
    } 
    .tolang img{
        width: 40px;
        height: 40px; 
        animation: myanimation .5s linear infinite;
    }
    @keyframes myanimation
    {
        0%   {transform:translateY(0rem);} 
        80%  {transform:translateY(0.5rem);}  
        100% {transform:translateY(0.8rem);}
    }
    .innerHtml img,.myPositionImg img {  
        width: 100% !important;  
        /* max-height: 350px; */
    }
    .innerHtml .myPositionSon,.myPositionImg .myPositionSon{
        width: 30px !important; 
        height: 30px;
        position: absolute;
        right: 8px;
        bottom: 8px;
        margin: 0;
    }
    .innerHtml  * {
        word-spacing: 1px;
        line-height: 1.5rem; 
        margin: 1rem 0;
        font-size: 1.05rem;
        /* font-size: 3.9vw; */
        /* font-family:  Microsoft JhengHei;  */ 
    } 
    .my-adv-show{
        background-color: rgba(0,0,0,.9);
    }
    .my-type-img-preview{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 200000002;
    }
    .my-type-img-preview .type-img-preview-adv { 
        width: 100%;
        height: 15vh;  
        background-color: rgba(0,0,0,.9); 
        z-index: 200000008;
    }
    .my-type-img-preview .teleport-img-preview{
        width: 100%;
        height: 85vh;
        z-index: 200000002;
    }
    .teleport-img-preview * {
        height: 100%;
    }
    .teleport-img-preview img{
        height: auto;
    }
    .type .van-overlay{
        width: 100%;
        height: 85vh;
        margin-top: 15vh;

    }
    .type .van-image-preview{
        z-index: 200010002 !important;
    }
 </style>
<style lang="scss" scoped>
    .navber-menu{   
        width: 100%; 

        margin-top: 2.9rem;
        >li{
            width: 100%;
            height: 3rem;
            
            >div{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                font-weight: 600;
               
            }
        }
    }
    .type { 
        .navber{
            height: 2.5rem;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0; 
            padding: .3125rem .625rem;
            background: #f5eff1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 200000000;
            .left {
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
                display: flex;
                justify-content: center; 
                >div{
                    padding: 0.2rem;
                } 
            }
        }
        .details_box1{
            width: 100%;
            margin-top: 2.5rem;
            .content_list{
                width: 100%;
                ul{
                    width: 100%; 
                    padding: 0 10px 10px ;
                    // background-color: #f4f4f4;
                    display: inline-block; 
                    >li:nth-last-of-type(1){
                        margin-top: 10px;
                    }
                    >li{
                        width: 100%;
                        // margin: 25px 0 0 0; 
                        font-family: Avenir,Helvetica,Arial,sans-serif; 
                        background-color: #ffffff;
                        
                        >div{ 
                            border-radius: 5px;
                            box-shadow: 0 0 10px rgba(0,0,0,.05);
                            position: relative;
                            >div:nth-of-type(1){
                                width: 100%; 
                                border: none;
                                >img{ 
                                    width: 100%;
                                    height: 100%; 
                                    transition: all 0.5s;   
                                    border: none; 
                                } 
                            }  
                            >div:nth-of-type(2){   
                                
                                // font-size: 1rem;
                                text-align: left;   
                                line-height: 1.8rem;  
                                padding: 0.8rem 0.8rem 0;
                                margin-bottom: 0.5rem; 
                                // font-weight: 600;
                                 span{
                                    font-weight: 500;
                                    color: rgb(240, 134, 162);
                                    word-spacing: 3px;
                                }
                            } 
                            >div:nth-of-type(3){
                                color: #aaa;
                                background-color: #fff;
                                border-top: 1px solid #f4f4f4;
                                display: flex;
                                font-size: 12px;
                                font-weight: 500;
                                height: 37px;
                                justify-content: space-between;
                                line-height: 1;
                                padding: 12px 15px;
                            }
                        }
                    }
                    .bottmo{
                        height: 2.5rem;
                        display: flex;
                        justify-content: flex-end;
                        font-size: 1rem;
                        line-height:  2.5rem;
                        background: #f7f8fa;
                        .iconfont{
                            padding: 0 .3125rem;
                            line-height:  2.5rem;
                            font-size: 1.2rem;
                            span{
                            font-size: .5rem;
                            }
                        }
                        .active{
                            color: rgb(249, 111, 145);
                        }
                    }
                     
                }
            }
        }
        .details_box2{
            margin-top: 2.5rem;
            .content_list{
                width: 100%;
                ul{
                    li{
                        font-size: .75rem;
                        color: #666;
                        line-height: 1.25rem;
                        word-wrap:break-word;
                    }
                    .video{
                        padding:0  1.25rem 0 1.25rem; 
                        // background: #000;
                        height:12rem;
                        video{
                            height:12rem;
                            width: 100%;
                            // background: #000; 
                            // object-fit: fill;
                        }
                    }
                    .descript{
                        padding:0  1.25rem 0 1.25rem;
                    }
                    .title{
                        // height: 3rem;    
                        padding: 0.5rem;
                        line-height: 2.5rem;
                        font-size: 1rem;
                        text-align: center;
                    }
                    .bottmo{
                        display: flex;
                        justify-content: flex-end;
                        font-size: 1rem;
                        .iconfont{
                            padding: 0 .3125rem;
                            line-height: 2.5rem;
                            font-size: 1.2rem;
                            span{
                                font-size: .5rem;
                            }
                        }
                        .active{
                            color: rgb(249, 111, 145);
                        }
                    } 
                }
            }
        }
        .details_box3{
            margin-top: 2.5rem;
            .top_img{
                position: relative;
                z-index: -1;
                width: 100%;
                height:11.25rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .content_list{
                position: relative;
                margin-top: -2rem;
                width: 100%;
                padding-top:1.875rem;
                background: url(../../../static/img/flower_details_rectangle.png) no-repeat top left  / 100%;
                ul{
                    width: 100%;
                    position: relative; 
                    padding: 0 .6rem;
                    li{
                        font-size: 0.85rem;
                        color: #666;
                        line-height: 1.25rem;
                        word-wrap:break-word;
                    }
                    >.innerHtml { 
                        img {
                            width: 100% !important; 
                        } 
                        p { 
                            width: 100%;
                            word-spacing: 3px;
                            line-height: 1.5rem;
                            // font-size: 1rem; 
                            margin: 1rem 0;
                            font-family:  Microsoft JhengHei; 
                        }
                    }
                    .title{
                        .top{
                            text-align: center;
                           
                            // color: rgb(249, 111, 145); 
                            color: rgb(249, 111, 145);
                            font-weight:bold;
                            margin: 1rem 0;
                            font-size: 1rem; 
                        }
                        dl{
                            padding: 0 0 .3125rem 0;
                            display: flex;
                            justify-content: space-between;
                            dt{
                                img{
                                    width:1.5rem;
                                    height: 1.5rem;
                                    margin-right: .625rem;
                                }
                            }
                            dd{
                                font-size:  .5rem;
                                line-height:1.5rem;
                                word-wrap: break-word;
                            }
                        }
                    }
                    .bottmo{
                        display: flex;
                        justify-content: flex-end;
                        font-size: .875rem;
                        .iconfont{
                            padding: 0 .3125rem;
                            line-height: 1.875rem;
                            font-size: 1rem;
                            span{
                                font-size: .5rem;
                            }
                        }
                        .active{
                            color: rgb(249, 111, 145);
                        }
                    }
                    ins{
                        width: 100% !important;
                        max-height: 9.375rem;
                    }
                }
            }
            .bottmo{
                height: 2.5rem;
                display: flex;
                justify-content: flex-end;
                font-size: 1rem;
                line-height: 2.5rem;
                background: #f7f8fa;
                .iconfont{
                    padding: 0 .3125rem;
                    line-height: 2.5rem;
                    font-size: 1.2rem;
                    span{
                    font-size: .5rem;
                    }
                }
                .active{
                    color: rgb(249, 111, 145);
                }
            }
        }
        .bottmo{
            height: 2.5rem;
            display: flex;
            justify-content: flex-end;
            font-size: 1rem;
            font-weight: 600;
            line-height:  2.5rem;
            background: #f7f8fa;
            padding: 0 1.2rem;
            .iconfont{
                padding: 0 .3125rem;
                line-height:  2.5rem;
                font-size: 1.2rem;
                span{
                font-size: .5rem;
                }
            }
            .twitter{
                width: 32px;
                padding: 10px 5px;
            }
            .active{
                color: rgb(249, 111, 145);
            } 
        }
        .comment{
            border-bottom: .9375rem #f7f8fa solid;
            .title{
                background: #f5eff1;
                display: flex;
                justify-content: space-between;
                padding: 0 1.25rem;
                p{
                border-top: .0625rem solid #ababab;
                width:30%;
                margin-top: .875rem;
                height: 0rem;
                }
                p:nth-of-type(2){
                border: none;
                margin: 0;
                width: 40%;
                height:1.875rem;
                line-height:1.875rem;
                color: #474747;
                font-size: .875rem;
                text-align: center;
                color: rgb(249, 111, 145);
                font-weight:bold;
                }
            }
            .not_comment{
                background-color: #f7f8fa;
                line-height: 1.875rem;
                font-size: .625rem;
                text-align: center;
            }
            .comment_list{
                padding: .625rem;
                border-bottom: .0625rem solid #cccccc;
                background-color: #f7f8fa;
                color: #666;
                dl{
                padding: .3125rem 0;
                display: flex;
                
                dt{
                    width:2rem;
                    height: 2rem;
                    margin-right: .625rem;
                    overflow: hidden;
                    border-radius: 50%;
                    img{
                    width: 100%;
                    height: 100%;
                    }
                }
                dd{
                    font-size:  1rem; 
                    line-height: 2rem;
                    word-wrap: break-word;
                    display: flex;
                    align-content: center;
                }
                }
                .message_box{
                    font-size: 0.8rem;
                    line-height:.875rem;
                    word-wrap: break-word;
                    .message{
                        font-size: 1rem;
                        padding: 0.2rem 0.3rem;
                    }
                    .time{
                        display: flex;
                        justify-content: space-between;
                        .left{
                        font-size: .625rem;
                        line-height: 1.875rem;
                        color: #818181;
                        }
                        .right{
                        display: flex;
                        font-size: .625rem;
                        line-height: 1.875rem;
                        color: #818181;
                        .van-icon{
                            font-size: .875rem;
                            line-height: 1.875rem;
                            margin-left: .3125rem;
                        }
                        .active{
                        color: rgb(249, 111, 145);
                    }
                    }

                }
                }
            }
            .message_more{
                margin-left: 2.75rem;
                border: .0625rem dashed #999999;
                padding: .5rem;
                .bottom{
                p{
                    display: flex;
                    justify-content: flex-end;
                    font-size: .625rem;
                    line-height: 1.875rem;
                    color: #4d4d4d;
                    .van-icon{
                    font-size: .875rem;
                    line-height: 1.875rem;
                    margin-left: .3125rem;
                    }
                }
                }
            }
            .show_more{
                display: flex;
                justify-content: space-between;
                padding: 0 1.25rem;
                background-image: linear-gradient(top,rgba(245,239,241,0),rgba(	255,182,193,.8));
                background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(245,239,241,0)),to(rgba(	255,182,193,.8)));
                p{
                    width: 20%;
                    height:2.2rem;
                    text-align: center;
                    width: 100%;
                    .iconfont{
                    line-height:2.2rem;
                    color: 	#FFB6C1;
                    font-size: .75rem;
                    }
                    img{
                    width:  .75rem;
                    height:  .75rem;
                    margin-top: .625rem;
                    }
                    span{
                    line-height:1.875rem;
                    color:	#FFB6C1;
                    font-size: .75rem;
                    }
                }
            }
        }
        .recommend{
            margin-bottom: .625rem;
            .recommend_top{
                background: #f5eff1;
                display: flex;
                justify-content:space-between;
                padding: .625rem 1.25rem ;
                line-height: 1.5625rem;
                font-weight:bold;
                .change_style{
                // color: #f96f91;
                color: rgb(249, 111, 145);
                font-weight:bold;
                display: flex;
                .iconfont{
                    padding-left: .3125rem;
                    font-size: 1rem;
                }
                }
            }
            .recommend_list{
                display: flex;
                flex-wrap: wrap;
                padding: 0 .5rem;
                a{
                    width: 49.5%;
                    background: #f6f6f6;
                    border-top: .3125rem solid #fff;
                    dl{
                    dt{
                        height: 6.25rem;
                        position: relative;
                        img{
                        width: 100%;
                        height: 100%;
                        }
                        .videos-icon{
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            left: 40%;
                            top: 40%; 
                        } 
                    }
                    dd{
                        padding:0.4rem .3125rem;
                    }
                    .title{
                        height: 3.8rem;
                        line-height: 1.2rem;
                        font-size:.8rem;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        }
                        .btn{
                        margin-top: .625rem;
                        span{
                            text-align: center;
                            background: #f96f91;
                            color: #fff;
                            border-radius: .3125rem;
                            padding:0 .3125rem
                        }
                        }
                        .time{
                        display: flex;
                        justify-content: space-between;
                        line-height: 1.5rem;
                        color: #4d4d4d;
                        font-size: .5rem;
                        span{
                            line-height: 1.5rem;
                        }
                        div{
                            display: flex;
                            .van-icon{
                            line-height: 1.5rem;
                            margin-right: .3125rem;
                            }
                        }
                        }
                        
                    }
                    
                }
                :nth-of-type(2n+1){
                    margin-right: 1%;
                }
            }
            .recommend_list1{
                height: 5.5rem;
                background: #f6f6f6;
                margin: 0 .5rem;
                display: flex;
                justify-content: space-between;
                border-top: .3125rem solid #fff;
                .left{
                    width: 35%;
                    position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .videos-icon{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    left: 40%;
                    top: 40%; 
                } 
                }
                .right{
                width: 65%;
                }
            }
            .recommend_list1 .right {
                padding-left:  .5rem;
                font-size: .8rem;
                padding: .3125rem;
                .title{
                line-height: 1rem;
                height: 3rem;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                }
                .time{
                display: flex;
                justify-content: space-between;
                line-height: 1.5rem;
                font-size: .5rem;
                color: #4d4d4d;
                span{
                    line-height: 1.5rem;
                }
                div{
                    display: flex;
                    .van-icon{
                    line-height: 1.5rem;
                    margin-right: .3125rem;
                    }
                }
                }
                .big_img{
                height: 9.375rem;
                margin-top: .625rem;
                img{
                    width: 100%;
                    height: 100%;
                }
                }
                .img_list{
                display: flex;
                justify-content: space-around;
                margin-top: .625rem;
                div{
                    width: 30%;
                    height: 5rem;
                    img{
                    width: 100%;
                    height: 100%;
                    }
                }
                }
                .video_box{
                margin-top: .625rem;
                height: 12rem;
                video{
                    height: 12rem;
                    width: 100%;
                    background: #000;
                }
                iframe{
                    width: 100%;
                    height: 9.375rem;
                    background: #000;
                }
                }
                .btn{
                color: #4d4d4d;
                }
            }
        }
    }
</style>

