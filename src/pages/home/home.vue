<template>
    <div class="home"> 
         <universal></universal>  
         <!-- 轮播 :initial-swipe="startPage"--> 
         <div v-if="swipeImages.length > 0" style="margin-top: 3.1rem;">
             <van-swipe :autoplay="3000"   :height="200" indicator-color="#e3e2de" > 
                <van-swipe-item v-for="(item) in swipeImages" :key="item.id"> 
                    <div  @click="toType(item)" style="height:100%;">
                        <img v-lazy="item.icon" alt="" style="height:100%;">
                    </div>
                    
                </van-swipe-item>
            </van-swipe>  
         </div>
        <div  class="googleList refreshAdv" style="margin-top: 3.1rem;">
                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-7936490518220507"
                    data-ad-slot="9072808225"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
        </div>
        <div class="content">
            <van-pull-refresh v-model="dropDownRefresh"  @refresh="refreshData()" loading-text="loading" loosing-text="release and refresh" pulling-text="Pull down to refresh">
            <ul>
                 <!-- 广告 --> 
                <li v-for="(item,index) in sortArrData" :key="index">
                    <div  @click="toType(item)">
                         <div>
                            <img v-lazy="item.icon" alt="">
                            <img v-if="item.belong=='Video'" class="videos-icon" src="../../../static/img/shipin.png" alt="" >
                         </div> 
                         <div>{{item.title}}</div>
                         <div>
                             <div>Read More</div>
                         </div>
                    </div>    
                </li> 
                <div class="load-more" v-if="!more">
                    <div @click="LoadMore()">
                        <div>LOAD MORE </div> <van-icon name="replay" />
                    </div> 
                </div>
                <div class="no-more"  v-if="more">
                      No More
                </div>
                
            </ul>
            </van-pull-refresh>
        </div> 
    </div>
</template>


<script>
import universal from '../universal/universal'
export default { 
    name : "home",
    components : {
        universal,
    },
    data () {
        return {  
            swipeImages: [], //轮播数据
            sortArr : [],  // 分类数据  
            myActive : 0, 
            ellipsis : false, // 是否省略过长的标题文字 
            ThePageNumber : 1 , // 获取数据的页码  
            cont: 0,   // 计数
            advertiseStr:{},//广告,
            record : false,  // 记录轮播
            firstMenu : "", // 第一个分类
            pageIndex: 1, // 第一页
            more : false, // 是否有更多数据
            typeName : "", // 第一个分类下的所属类型 
            firstPage: 1,     // 第一页数据从十页里按递增拿;
            dropDownRefresh :  false,  // 下拉刷新重新加载数据
        }
    },
    mounted() {
        this.dynamicInsertion()
    },
    created() {  
        // 轮播数据
        // this.swipeData() 
        // 获取第一个分类数据
        this.getRelativeClassification("no");
        // 获取广告
        // this.getAdvertiseData()
    }, 
    methods: { 
        // 广告统计
        recordAds(str) {
            console.log(str)
        }, 
        toType(item) {   
            this.$router.push(
                {path : `/plant/${item.type.replace(/\s+/g,'-')}/${item.title.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.belong}/${item.id}`}
            )
            
        },
        //轮播
        swipeData(){
            var url='/user/getBanner'
            this.$axios.get(url)
            .then(res=>{  
                this.swipeImages = JSON.parse(JSON.stringify(res.data.data));    
            })
            .catch(err=>{
                console.log(err)
            })
        },
         
        refreshData() { 
            let refreshAdv = document.querySelector('.refreshAdv')
            if(refreshAdv) {
                
                this.refreshMyAdv(refreshAdv)
            }  
            this.pageIndex++
            this.getRelativeClassification("unshift");
        },
        // 动态刷新广告
        refreshMyAdv(dom) {
            dom.classList.remove('googleList')
            setTimeout(() => {  
                    dom.innerHTML = ''   
                    dom.innerHTML = ' <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7936490518220507" data-ad-slot="9072808225" data-ad-format="auto" data-full-width-responsive="true"></ins>'
                    let script =document.createElement("script"); 
                    script.type='text/javascript';
                    let nHTML='(adsbygoogle = window.adsbygoogle || []).push({});';
                    script.setAttribute('class','refresh-my-adv');
                    script.innerHTML=nHTML
                    dom.appendChild(script);  
            }, 100);
        },
        LoadMore() { 
            this.pageIndex++
            this.getRelativeClassification("no");
        },
        //  加载分类下的数据 
        getRelativeClassification(s){  
            var currentPage = this.pageIndex;
            this.dynamicInsertion() 
            this.certainArr = []
            var url='/user/searchInfo'
            let formData = new FormData()
            // 传0 拿取 前面两个分类数据 服务端要求传0 
            let obj = {
                typeId : 0,
                pagesize : currentPage
            }
            this.$axios.get(url,{
                params : obj
            })
            .then(res=>{  
                if(res.data.data.length <=0) {
                    this.more = true;
                }
                else {
                    if(s == "first") {
                        this.sortArr = [];
                    }
                    this.more = false;
                    // 不要三图和无图的
                    if(s == 'unshift'){
                         this.sortArr.unshift(...res.data.data.filter( e => {
                            return e.model != "4" && e.model != "1"
                        })) 
                    }
                    else {
                         this.sortArr.push(...res.data.data.filter( e => {
                            return e.model != "4" && e.model != "1"
                        })) 
                    }
                }  
                this.dropDownRefresh = false;
                this.cont++    
            }).catch(err=>{
                console.log(err)
            }) 
        },  
         // 广告
        getAdvertiseData() {  
            var url=`/user/getAdvertisePage` 
            this.$axios.get(url,{
                params : {
                    adtype : "index"
                }
            }).then(res=>{ 
                this.advertiseStr=res.data.data
                this.dynamicInsertion()
            }).catch(err=>{
                console.log(err)
            }) 
        },
        // 谷歌广告的代码添加
        dynamicInsertion(){
            var myVar=setTimeout(() => {  
                var oDom=Array.from(document.querySelectorAll(".googleList")) 
                for(var i=0;i<oDom.length;i++ ){ 
                    var ss = oDom[i].querySelectorAll(".mygoogleList"); 
                    if(ss.length > 0 && ss[0].innerHTML == '(adsbygoogle = window.adsbygoogle || []).push({});') {
                    
                    } 
                    else {
                        var script =document.createElement("script"); 
                        script.type='text/javascript';
                        var nHTML='(adsbygoogle = window.adsbygoogle || []).push({});'
                        script.setAttribute('class','mygoogleList');
                        script.innerHTML=nHTML
                        oDom[i].appendChild(script);
                    } 
                }
            }, 100);
        }, 
        // 向谷歌分析发送数据
        sendOut (item) {  
            if(item != "") {
                gtag('event', 'click', { 
                'event_label':  item, 
                'event_callback': function(){ 
                    
                }
                }); 
            }
        },
         
    },
    computed : {
        sortArrData () {
            this.cont--; 
            return  this.sortArr
        }
    }
}
</script> 
<style >
.home .content .van-pull-refresh__loading{
  color: rgb(249, 111, 145);
  font-size: 0.8rem;
}
.home .content .van-loading.van-loading--circular.van-loading{
  color: rgb(249, 111, 145) !important;
}
</style>
<style lang="scss" scoped> 
    .home {
        .home-search {
            margin-top: 3.4rem;
            width: 100%;
            height: 3.2rem; 
            padding: .3125rem .5rem;
            >div{
                width: 100%;
                margin-top: 0.2rem;
            }
        }
        .van-swipe{
            // margin-top: 2.8rem; 
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            // margin-top: 3rem;
            width: 100%; 
            display: inline-block;
            ul {
                width: 100%; 
                padding: 1rem;
                
                >li{
                    width: 100%; 
                    margin-bottom: 1.8rem;
                    display: inline-block;
                    >div{
                        width: 100%;
                        >div:nth-of-type(1){
                            width: 100%;
                            position: relative;
                            img{
                                width: 100%;
                                
                                // max-height: 350px;
                                // height: 14rem;
                                // min-height: 240px;
                            }
                            .videos-icon{
                                width: 30px;
                                height: 30px;
                                position: absolute;
                                left: 47%;
                                top: 47%; 
                            } 

                        }
                         >div:nth-of-type(2){
                            text-align: center;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 4;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            line-height: 1.5rem;
                            padding: 0.5rem;
                            padding-bottom: 0;
                            margin-bottom: 0.5rem;
                            font-size: 1.2rem;
                         }
                        // >div:nth-of-type(2){
                        //    text-align: center;
                        //     overflow: hidden;
                        //     text-overflow: ellipsis;
                        //     -webkit-line-clamp: 4;
                        //     display: -webkit-box;
                        //     -webkit-box-orient: vertical; 
                        //     line-height: 1.5rem;
                        //     padding: 0.5rem;
                        //     padding-bottom: 0;
                        //     margin-bottom: 0.5rem;
                        //     font-size: 0.8rem;
                        //     color: #aaa;
                        // }
                        >div:nth-of-type(3){
                            display: flex;
                            justify-content: center;
                            margin-bottom: 1rem;
                            >div{ 
                                padding: 12px 24px;
                                background: #000;
                                border: 0;
                                border-radius: 18px;
                                color: #fff;
                                font-size: 0.6rem;
                                font-weight: 700;
                                line-height: 1;
                                text-transform: uppercase; 
                                letter-spacing: 0.075em;
                            }
                        }
                    }
                }
                .load-more{  
                    display: flex;
                    justify-content: center;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    >div{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border:1px solid #e1e1e1;
                        background: #fff;
                        font-size: 0.8rem; 
                        height: 40px; 
                        width: auto;
                        padding: 0 60px;
                        text-align: center; 
                        >div{
                            font-weight: 600;
                            padding-right: 10px;
                        }
                        >i{
                             font-weight: 800;
                             font-size: 0.8rem;
                        }
                    }
                }
                .no-more{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2rem; 
                    height: 40px;
                     
                }
            }
        }
    }
</style>
