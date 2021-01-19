<template>
    <div class="category">
        <universal></universal>
        <div class="classify">
            <van-pull-refresh v-model="dropDownRefresh"  @refresh="refreshData()" loading-text="loading" loosing-text="release and refresh" pulling-text="Pull down to refresh">
                <ul class="new-classify"> 
                    <!-- 数据列表 -->
                    <!-- <div class="getAdvertiseTop " v-if="advertiseData.top">
                        <div v-html="advertiseData.top" class="googleList"></div>
                    </div> -->
                     <div class="googleList refreshAdv" v-if="certainID == 1">
                         <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="8004479968"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                    </div>
                    <div class="googleList refreshAdv" v-else-if="certainID == 2">
                        <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="2938425232"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                    </div>
                    <div class="googleList refreshAdv" v-else-if="certainID == 10000">
                        <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="8681296412"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                    </div>
                    <div class="googleList refreshAdv" v-else-if="certainID == 9999">
                        <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="1070878630"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                    </div> 
                    <div class="googleList refreshAdv" v-else>
                        <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-7936490518220507"
                            data-ad-slot="1070878630"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                    </div>
                    <li v-for="(pro,inx) in certainArr" :key="inx"> 
                        <!-- 区分到底是我们自己的数据还是对接别人的数据 这里是根据是否有该web_name 属性做判断  -->
                        <!-- 无图 1 为无图   -->
                        <div class="no-graph" v-if="pro.model == '1'">
                            <!-- 跳转到我们的页面 -->
                            <router-link :to="{path : `/plant/${pro.type.replace(/\s+/g,'-')}/${pro.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${typeName}/${pro.id}`}">
                                    <div class="new-classify-title"> 
                                        
                                        {{pro.title}}
                                    </div>
                                    <div>
                                        <div>
                                            <van-icon name="eye-o" />
                                            {{pro.num}}
                                        </div>
                                        <div>{{new Date(pro.addtime.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                    </div>
                            </router-link> 
                        </div>
                        <!-- 小图 1 -->
                        <div class="small-picture" v-if="pro.model == '2'">
                            <!-- 跳转到我们的页面 --> 
                                <router-link :to="{path : `/plant/${pro.type.replace(/\s+/g,'-')}/${pro.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${typeName}/${pro.id}` }">
                                <div>
                                    <img   v-lazy="pro.icon"   alt="No pictures found" >
                                </div>
                                <div>
                                    <div class="new-classify-title"> 
                                        {{pro.title}}
                                    </div>
                                    <div>
                                        <div>
                                            <van-icon name="eye-o" />
                                            {{pro.num}}
                                        </div>
                                        <div>{{new Date(pro.addtime.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                    </div>
                                </div>
                                
                            </router-link>   
                                
                        </div>
                        <!-- 大图 2-->
                        <div class="big-picture" v-if="pro.model == '3'">
                            <!-- 跳转到我们的页面 -->
                            <router-link :to="{path : `/plant/${pro.type.replace(/\s+/g,'-')}/${pro.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${typeName}/${pro.id}` }"> 
                                <div>
                                    <img  v-lazy="pro.icon"   alt="No pictures found" >  
                                </div>
                                <div class="new-classify-title"> 
                                    {{pro.title}}
                                </div>
                                <div>
                                    <div>
                                        <van-icon name="eye-o" />
                                        {{pro.num}}
                                    </div>
                                    <div>{{new Date(pro.addtime.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                </div>
                            </router-link>   
                        </div>
                        <!-- 3图 -->
                        <div class="three-pictures" v-if="pro.model == '4'">
                            <!-- 跳转到我们的页面 --> 
                            <router-link :to="{path : `/plant/${pro.type.replace(/\s+/g,'-')}/${pro.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${typeName}/${pro.id}`}"> 
                                <div class="new-classify-title">{{pro.title}}</div>
                                <div>
                                    <img  v-for="(pro1,threeInx) in (pro.icon.split(','))" :key="threeInx"  v-lazy="pro1"   alt="No pictures found" > 
                                </div>
                                <div>
                                    <div>
                                        <van-icon name="eye-o" />
                                        {{pro.num}}
                                    </div>
                                    <div>{{new Date(pro.addtime.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                </div>
                            </router-link> 
                        </div>
                        <!-- 视频 -->
                        <div class="video-pictures" v-if="pro.model == '5'">
                            <!-- 跳转到我们的页面 --> 
                            <router-link :to="{path : `/plant/${pro.type.replace(/\s+/g,'-')}/${pro.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'') }/${typeName}/${pro.id}`}"> 
                               
                                <div> 
                                    <!-- <video :src="pro.video_addr" controls="controls" ></video> -->
                                    <img v-lazy="pro.icon" alt="No pictures found">
                                    <img class="videos-icon" src="../../../static/img/shipin.png" alt="" >
                                </div>
                                 <div class="new-classify-title">{{pro.title}}</div>
                                <div>
                                    <div>
                                        <van-icon name="eye-o" />
                                        {{pro.num}}
                                    </div>
                                    <div>{{new Date(pro.addtime.split(" ")[0]).toDateString().split(' ').splice(1,3).join(' ')}}</div>
                                </div>
                            </router-link> 
                        </div>
                        <!-- 文章内广告 -->
                        <div v-if="(inx+1) % 6 == 0 && inx !=0" class="my-scroll-adv">
                             
                            <!-- <div v-if="certainID == 1" >
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-7936490518220507"
                                    data-ad-slot="8004479968"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                                    
                            </div> 
                            <div v-else-if="certainID == 2"  >
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-7936490518220507"
                                    data-ad-slot="2938425232"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                            </div>
                            <div v-else-if="certainID == 10000"  >
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-7936490518220507"
                                    data-ad-slot="8681296412"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                            </div>
                            <div v-else-if="certainID == 9999"  >
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-7936490518220507"
                                    data-ad-slot="1070878630"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                            </div>
                            <div v-else  >
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-7936490518220507"
                                    data-ad-slot="1070878630"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                            </div> -->
                        </div>
                    </li>
                    
                    <!-- <div class="getAdvertiseTop" v-if="advertiseData.buttom">
                        <div v-html="advertiseData.buttom"  class="googleList"></div>
                    </div> -->

                    <!-- 底部广告 -->
                    <div class="my-scroll-adv-botton"></div> 

                    <!-- 加载数据动画 -->
                    <li class="my-loading"  v-if="myLoading && !noMoreData"> 
                        <van-loading color="#fc1919" />
                    </li>

                    <li class="show_more" v-if="noMoreData"> 
                        <p>
                            <span >  No More</span>
                        </p>
                    </li>  
                </ul>
            </van-pull-refresh>
        </div>
    </div>
</template>
<script>
import universal from '../universal/universal'
export default {
    name : "",
    components : {
        universal
    },
    data() {
        return {
            certainID: "",  // 该分类的ID
            typeName : "",  // 该分类所属的数据类型 
            certainArr : [], // 分类数据
            myLoading : false,   //  加载显示
            noMoreData : false , // 没有更多数据 
            ThePageNumber: 1,  // 页码
            advertiseData:{},//广告
            dropDownRefresh :  false,  // 下拉刷新重新加载数据
        }
    },
    created () { 
        document.documentElement.scrollTop =0;
        document.body.scrollTop = 0
        this.certainID = this.$route.params.id
        this.typeName = this.$route.params.format  
        this.getRelativeClassification(this.certainID)
        // 获取广告
        // this.getAdvertiseData()
    },
     mounted() { 
        document.documentElement.scrollTop =0;
        document.body.scrollTop = 0  
        this.dynamicInsertion()
        // 判断是否滑动到底部
        window.addEventListener("scroll", this.MyScroll, false)
    }, 
        
     // 离开时操作
    destroyed(){
        window.removeEventListener('scroll', this.MyScroll, false);
        // 内容中的广告
        window.removeEventListener('scroll', this.scrollAdv, false);
        // 底部的广告
        window.removeEventListener('scroll', this.scrollAdvBotton, false);  
    },
    methods : {
        // 滑到一定位置显示广告 
        scrollAdv () {
           let bodyScroll = document.documentElement.scrollTop || document.body.scrollTop;
           let myScrollAdv = Array.from(document.querySelectorAll('.my-scroll-adv'));
           // 中间广告
           if(myScrollAdv.length > 0) {
               myScrollAdv.forEach((e,i)=>{
                   var domTop =  e.offsetTop - 350 ;  
                   if(bodyScroll >=  domTop) { 
                       this.dynamicInsertion1(e)
                   }
               })
           }
        },
        // 动态加载谷歌广告 
        dynamicInsertion1(dom){ 
            let that = this;
            let myVar=setTimeout(() => {
                    var ss = dom.querySelectorAll(".my-scroll-adv-add");
                    if(ss.length > 0 && ss[0].innerHTML == '(adsbygoogle = window.adsbygoogle || []).push({});') {
                         
                    } 
                    else {  
                        switch(that.certainID) {
                            case 1 : 
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="8004479968" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            case 2 :
                                 dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="2938425232" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            case 10000 : 
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="8681296412" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            case 9999 : 
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="1070878630" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            default:
                                dom.innerHTML = ' <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="1070878630" data-ad-format="auto" data-full-width-responsive="true"></ins>'

                        }
                        let script =document.createElement("script"); 
                        script.type='text/javascript';
                        var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
                        script.setAttribute('class','my-scroll-adv-add');
                        script.innerHTML=nHTML
                        dom.appendChild(script);
                    }  
            }, 10);
        },
        // 底部广告
        scrollAdvBotton () { 
            let bodyScroll = document.documentElement.scrollTop || document.body.scrollTop;
            let myScrollAdvBotton = Array.from(document.querySelectorAll('.my-scroll-adv-botton'));
            let bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
            if(myScrollAdvBotton.length > 0) {
               myScrollAdvBotton.forEach((e,i)=>{
                   // 滑到底才能请求广告
                   var domTop =  e.offsetTop ;    
                   if((bodyScroll + bodyHeight) >=  domTop || domTop <= bodyHeight) {  
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
                        switch(that.certainID) {
                            case 1 : 
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="8004479968" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            case 2 :
                                 dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="2938425232" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            case 10000 : 
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="8681296412" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            case 9999 : 
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="1070878630" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                            break;
                            default:
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="1070878630" data-ad-format="auto" data-full-width-responsive="true"></ins>'

                        }
                        let script =document.createElement("script"); 
                        script.type='text/javascript';
                        let nHTML='(adsbygoogle = window.adsbygoogle || []).push({});';
                        script.setAttribute('class','my-scroll-adv-add-botton');
                        script.innerHTML=nHTML
                        dom.appendChild(script); 
                    }  
            }, 10);
        },
        
        // 获取相对应分类数据(第一页) 
        getRelativeClassification(id){  
            let that = this
            this.certainArr = []
            var url='/user/searchInfo'
            // let formData = new FormData()
            // formData.append('typeId',id)
            // formData.append('pagesize', 1)
            let myObjData = {
                typeId : id,
                pagesize : 1
            }
            this.$axios.get(url,{
                params : myObjData
            })
            .then(res=>{    

                this.certainArr = res.data.data ;  

                this.$nextTick(()=>{
                    document.documentElement.scrollTop =0;
                    document.body.scrollTop = 0
                    // 滑动监听广告  内容中的广告
                    window.addEventListener('scroll', that.scrollAdv, false);
                    // 必须等待第一次资源加载完毕之后，才能拿底部广告的offsetTop的值
                    window.addEventListener('scroll', that.scrollAdvBotton, false);
                })
                // this.dynamicInsertion()
            }).catch(err=>{
                console.log(err)
            }) 
        },
        // 广告
        getAdvertiseData() {  
            var url=`user!getAdvertise.action`
            var formData= new FormData();
            formData.append('adtype',"index") 
            this.$axios.post(url,formData).then(res=>{ 
                this.advertiseData=res.data 
                this.dynamicInsertion()
            }).catch(err=>{
                console.log(err)
            }) 
        },
        // 滑动监听
        MyScroll () {  
            var that = this
            var scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) -80; // body html的底部距离
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // body html的屏幕高度
            if(document.querySelector(".my-loading") != undefined) {
                var a = document.documentElement.clientHeight || document.body.clientHeight;
                var clientHeight = a + document.querySelector(".my-loading").clientHeight;
            }  
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滑动的距离
            var daodi = scrollTop + clientHeight  
            if(daodi >=  scrollHeight ) {   
                    window.removeEventListener('scroll', this.MyScroll, false);  
                    that.myLoading = true 
                    if(this.noMoreData) {
                        window.addEventListener("scroll", this.MyScroll, false)
                        that.myLoading = false
                    return
                    }
                    
                    that.timer = setTimeout((res)=> { 
                        that.getPagingData() 
                    },1200)  
                    
            }
            else {
                that.myLoading = false 
            } 
        }, 
        // 动态刷新广告
        refreshMyAdv(dom) {
            let that = this;
            dom.classList.remove('googleList')
            setTimeout(() => {  
                    dom.innerHTML = ''   
                    switch(that.certainID) {
                        case 1 : 
                            dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="8004479968" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                        break;
                        case 2 :
                                dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="2938425232" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                        break;
                        case 10000 : 
                            dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="8681296412" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                        break;
                        case 9999 : 
                            dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="1070878630" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                        break;
                        default:
                            dom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="1070878630" data-ad-format="auto" data-full-width-responsive="true"></ins>'

                    } 
                    let script =document.createElement("script"); 
                    script.type='text/javascript';
                    let nHTML='(adsbygoogle = window.adsbygoogle || []).push({});';
                    script.setAttribute('class','refresh-my-adv');
                    script.innerHTML=nHTML
                    dom.appendChild(script);  
            }, 100);
        },
        refreshData() { 
            let refreshAdv = document.querySelector('.refreshAdv')
            if(refreshAdv) { 
                this.refreshMyAdv(refreshAdv)
            }  
            this.ThePageNumber++
            var url='/user/searchInfo'
            // let formData = new FormData()  
            // formData.append('typeid',this.certainID)
            // formData.append('pagesize', this.ThePageNumber) 
            let obj = {
                typeId : this.certainID,
                pagesize  : this.ThePageNumber
            }
            this.$axios.get(url,{
                params : obj
            }).then(res=>{   
                if(res.data.data.length <= 0 ) {
                    this.noMoreData = true 
                }
                else {
                    this.certainArr.unshift(...res.data.data) 
                }   
                this.dropDownRefresh = false;
                // this.dynamicInsertion(); 
            })
            .catch(err=>{
                this.dropDownRefresh = false;
                console.log(err)  
            })
        },
        // 获取相对应分类数据(不是第一页) 
        getPagingData () { 
            // this.dynamicInsertion()
            this.ThePageNumber++
            this.noMoreData = false 
            var url='/user/searchInfo'
            // let formData = new FormData()  
            // formData.append('typeid',this.certainID)
            // formData.append('pagesize', this.ThePageNumber) 
            let obj = {
                typeId : this.certainID,
                pagesize : this.ThePageNumber
            }
            this.$axios.get(url,{
                params : obj
            }).then(res=>{  
                this.myLoading = false 
                if(res.data.data.length <= 0 ) {
                    this.noMoreData = true 
                }
                else {
                    this.certainArr.push(...res.data.data) 
                }   
                // this.dynamicInsertion();
                window.addEventListener("scroll", this.MyScroll, false) 
            })
            .catch(err=>{
                console.log(err)
                this.myLoading = false  
                window.addEventListener("scroll", this.MyScroll, false) 
            })
        },
        // 谷歌广告的代码添加
        dynamicInsertion(){
            var myVar=setTimeout(() => {
                var oDom=Array.from(document.getElementsByClassName("googleList"))   
                for(var i=0;i<oDom.length;i++ ){ 
                    var ss = oDom[i].getElementsByTagName("script")  
                    if(ss.length > 0 && ss[0].innerHTML == '(adsbygoogle = window.adsbygoogle || []).push({});') {
                    
                    } 
                    else {
                        var script =document.createElement("script"); script.type='text/javascript'
                        var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
                        script.innerHTML=nHTML
                        oDom[i].appendChild(script);
                    } 
                }
            }, 100);
        },
    },
    
}
</script>
<style lang="scss" scoped>
    .category{
            padding: 0 .25rem; 
            padding-bottom: 0.5rem;
            .classify {
                width: 100%; 
                margin-top: 3.2rem;
                .new-classify{
                    width: 100%;
                    z-index: 230;
                    .new-title{
                        padding: 0.2rem;
                        background: #F7F7F7; 
                        display: flex; 
                        justify-content: space-between;
                        height: 1.5rem;
                        box-sizing: border-box;
                        >p{
                            line-height: 1.25rem;
                            font-size: .8125rem;
                            font-weight: 900;
                        }
                        img{
                            width: 1.25rem;
                            height: 1.25rem;
                        }
                    }
                    .new-classify-title{
                        font-weight: bold;
                        font-size: 0.8rem !important;
                        // color: #07aae0;
                        color: rgb(249, 111, 145);
                    }
                    li{
                        width: 100%;
                        padding: 0.2rem; 
                        font-family: "Roboto";
                        word-spacing: 5px;
                        word-wrap: break-word;
                        border: 1px solid #f3f3f3;
                        border-radius: 4px;
                        margin-bottom: .2rem;
                        background-color: #f7f7f7;
                        .no-graph {
                            width: 100%;
                            font-weight: 600;
                            >a { 
                                width: 100%;
                                >div:nth-of-type(1) {
                                    text-align: left;
                                    line-height: 1.32rem;
                                    // height: 4rem; 
                                    height: 2.8rem; 
                                    overflow: hidden; 
                                    text-overflow: -o-ellipsis-lastline;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical; 
                                    font-size: 1rem;
                                    strong{
                                        margin-top: 0.2rem;
                                        font-weight: 500;
                                        width: auto;
                                        // padding:0 5px; 
                                        font-size: .45rem;
                                        color: rgb(0, 128, 255);
                                        // background: #ecf5ff;
                                        border: 1px solid #b3d8ff;
                                        border-radius: 3px; 
                                        height: 1rem;
                                        line-height: 0.95rem;
                                        padding: 0px 3px 3px 3px;
                                        box-sizing: border-box;
                                        vertical-align: text-bottom;
                                        display: inline-block;  
                                        text-align: center;
                                        >img{
                                        // vertical-align: text-bottom;
                                        margin-left: -5px;
                                        margin-top: -1px;
                                        // padding-bottom: 2px;
                                        }
                                    } 
                                }
                                
                                >div:nth-of-type(2) {
                                    width: 100%;
                                    // height: 1.5rem;
                                    height: 1.2rem; 
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    word-spacing: 0px;
                                    font-size: 0.6rem;
                                    font-weight: normal;
                                    .van-icon{
                                        padding-right: 0.4rem;
                                        color: #4d4d4d;
                                    }
                                    >div:nth-of-type(1){ 
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                        word-spacing: 0px;
                                        color: #4d4d4d;
                                        font-size: 0.4rem; 
                                    }
                                    >div:nth-of-type(2) {
                                        padding-left: 0.5rem;
                                        color: #4d4d4d;
                                        font-size: 0.4rem; 
                                    }
                                }
                            }
                        }
                        .small-picture {
                            width: 100%;
                            height: 5.5rem; 
                            >a {
                                width: 100%;
                                height: 100%;
                                display: flex; 
                                justify-content: space-around;
                                align-items: center;
                                >div:nth-of-type(2) {
                                    width: 70%;
                                    height: 100%; 
                                    padding-left: 0.5rem;
                                    >div:nth-of-type(1) {
                                        text-align: left;
                                        width: 100%;
                                        height: 4rem;  
                                        overflow: hidden; 
                                        line-height: 1.32rem;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 3;
                                        -webkit-box-orient: vertical;
                                        font-size: 1rem;
                                        font-weight: 600;
                                        strong{
                                        margin-top: 0.1rem;
                                        font-weight: 500;
                                        width: auto;
                                        font-size: .45rem;
                                        color: rgb(0, 128, 255);
                                        border: 1px solid #b3d8ff;
                                        border-radius: 3px; 
                                        height: 1rem;
                                        line-height: 0.95rem;
                                        padding: 0px 3px 3px 3px;
                                        box-sizing: border-box;
                                        vertical-align: text-bottom;
                                        display: inline-block;  
                                        text-align: center;
                                        >img{
                                        margin-left: -5px;
                                        margin-top: -1px;
                                        }
                                    }
                                        
                                    }
                                    >div:nth-of-type(2) {
                                        height: 1.5rem;
                                        display: flex; 
                                        justify-content: flex-start;
                                        align-items: center;
                                        padding-top: 0.2rem;
                                        word-spacing: 0px;
                                        font-size: 0.6rem;
                                        >div{  
                                            height: 100%;
                                            line-height: 1rem;
                                            overflow: hidden;
                                            text-overflow:ellipsis;
                                            white-space: nowrap;
                                            color: #4d4d4d;
                                        }
                                        .van-icon{
                                            padding-right: 0.4rem;
                                        }
                                        >div:nth-of-type(1){ 
                                            display: flex; 
                                            justify-content: flex-start;
                                            align-items: center;
                                            word-spacing: 0px;
                                            color: #4d4d4d;
                                            font-size: 0.4rem; 
                                        }
                                        >div:nth-of-type(2){ 
                                            padding-left: 0.5rem;
                                            color: #4d4d4d;
                                            font-size: 0.4rem;
                                            display: flex;
                                            align-items: center;
                                        }
                                    }
                                }
                                >div:nth-of-type(1) { 
                                    width: 30%; 
                                    
                                    height: 100%;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                        // border-radius: 10px;
                                    }
                                }
                            }
                        }
                        .big-picture {
                            width: 100%; 
                            >a {
                                width: 100%; 
                                >div:nth-of-type(2) { 
                                    text-align: left;
                                    // height: 4rem; 
                                    height: 2.8rem; 
                                    overflow: hidden;  
                                    font-size: 1rem;
                                    font-weight: 600;
                                    text-overflow: ellipsis;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical; 
                                    line-height: 1.32rem;  
                                    -webkit-box-align: start;

                                    display: -webkit-box;
                                    overflow: hidden;
                                    strong{
                                        margin-top: 0.2rem;
                                        font-weight: 500;
                                        width: auto;
                                        // padding:0 5px; 
                                        font-size: .45rem;
                                        color: rgb(0, 128, 255);
                                        // background: #ecf5ff;
                                        border: 1px solid #b3d8ff;
                                        border-radius: 3px; 
                                        height: 1rem;
                                        line-height: 0.95rem;
                                        padding: 0px 3px 3px 3px;
                                        box-sizing: border-box;
                                        vertical-align: text-bottom;
                                        display: inline-block;  
                                        text-align: center;
                                        >img{
                                        // vertical-align: text-bottom;
                                        margin-left: -5px;
                                        margin-top: -1px;
                                        // padding-bottom: 2px;
                                        }
                                    }
                                }
                                >div:nth-of-type(1) {
                                    width: 100%; 
                                    position: relative;
                                    img{
                                        width: 100%;
                                        // max-height: 350px;
                                        // height: 15rem;
                                        // min-height: 250px;
                                    }
                                    .videos-icon{
                                        width: auto;
                                        height: auto;
                                        position: absolute;
                                        left: 43%;
                                        top: 43%; 
                                    } 
                                }
                                >div:nth-of-type(3) {
                                    width: 100%;
                                    // height: 1.5rem;
                                    height: 1.2rem;
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    word-spacing: 0px;
                                    font-size: 0.6rem;
                                    .van-icon{
                                        padding-right: 0.4rem;
                                        color: #4d4d4d;
                                    }
                                    
                                    >div:nth-of-type(1){ 
                                        word-spacing: 0px;
                                       color: #4d4d4d;
                                        font-size: 0.4rem; 
                                        display: flex;
                                        justify-content: flex-start;
                                        align-items: center;
                                    }
                                    >div:nth-of-type(2) {
                                        padding-left: 0.5rem;
                                        color: #4d4d4d;
                                        font-size: 0.4rem;
                                    }
                                }
                            }
                        }
                        .three-pictures {
                            width: 100%;
                            >a{
                                width: 100%;
                                >div:nth-of-type(1) {
                                    text-align: left;
                                    // height: 4.2rem;
                                    font-size: 1rem;
                                    overflow: hidden; 
                                    padding-bottom: 0.3rem;
                                    font-weight: 600;
                                    line-height: 1.32rem;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 3;
                                    -webkit-box-orient: vertical;
                                } 
                                >div:nth-of-type(2) {
                                    width: 100%;
                                    height: 4.5rem;
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    
                                    img{
                                        width: 33.333333333%;
                                        padding-right: 0.2rem;
                                        height: 100%;
                                        // border-radius: 10px;
                                    }
                                    img:nth-of-type(3) {
                                        padding: 0;
                                    }
                                }
                                >div:nth-of-type(3) {
                                    width: 100%;
                                    height: 2rem;
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    word-spacing: 0px;
                                    font-size: 0.5rem;
                                    .van-icon{
                                        padding-right: 0.4rem;
                                        color: #4d4d4d;
                                    }
                                    >div:nth-of-type(1){ 
                                        word-spacing: 0px;
                                        color: #4d4d4d;
                                        font-size: 0.4rem;
                                        display: flex; 
                                        justify-content: flex-start;
                                        align-items: center;
                                    }
                                    >div:nth-of-type(2) {
                                        padding-left: 0.6rem;
                                       color: #4d4d4d;
                                        font-size: 0.4rem;
                                    }
                                }
                            }
                        }
                        .video-pictures{
                            width: 100%;
                            >a{
                                width: 100%;
                                >div:nth-of-type(2) {
                                    text-align: left;
                                    // height: 4.2rem;
                                    // height: 2.8rem;
                                    font-size: 1rem;
                                    overflow: hidden; 
                                    margin-bottom: 0.3rem;
                                    font-weight: 600;
                                    line-height: 1.32rem;
                                    text-overflow: ellipsis;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    line-height: 1.32rem;
                                    display: -webkit-box;
                                    overflow: hidden;
                                } 
                                >div:nth-of-type(1) {
                                    width: 100%; 
                                    padding-bottom: 0.3rem;
                                    position: relative;
                                    >img{
                                        width: 100%;
                                        max-height: 350px;
                                        height: 15rem;
                                        min-width: 250px;
                                    }
                                    >.videos-icon{
                                        width: auto;
                                        height: auto;
                                        position: absolute;
                                        left: 43%;
                                        top: 43%;  
                                        min-width: 48px;
                                        max-height: 48px;
                                    }
                                }
                                >div:nth-of-type(3) {
                                    width: 100%;
                                    height: 2rem;
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    word-spacing: 0px;
                                    font-size: 0.5rem;
                                    .van-icon{
                                        padding-right: 0.4rem;
                                        color: #4d4d4d;
                                    }
                                    >div:nth-of-type(1){ 
                                        word-spacing: 0px;
                                        color: #4d4d4d;
                                        font-size: 0.4rem;
                                        display: flex; 
                                        justify-content: flex-start;
                                        align-items: center;
                                    }
                                    >div:nth-of-type(2) {
                                        padding-left: 0.6rem;
                                        color: #4d4d4d;
                                        font-size: 0.4rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .show_more{
                display: flex;
                justify-content: space-between;
                padding: 0 1.25rem;
                background-image: linear-gradient(top,rgba(245,239,241,0),rgba(	248, 249, 249,.8));
                background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(245,239,241,0)),to(rgba(	248, 249, 249,.8)));
                p{
                    width: 20%;
                    height:1.875rem;
                    text-align: center;
                    width: 100%;
                
                    img{
                    width:  .75rem;
                    height:  .75rem;
                    margin-top: .625rem;
                    }
                    span{
                    line-height:1.875rem;
                    color:	#fc1919;
                    font-size: .75rem;
                    }
                }
            } 
            .my-loading{
                height: 2.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: white; 
            }
        }
</style>

