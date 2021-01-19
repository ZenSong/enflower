<template>
    <div class="public">
         <div class="navber">
            <div class="left"    @click="popupShow=!popupShow;menuShow=false;searchShow=false">
                <img src="../../../static/img/floweer_logo.png" alt="">
                
            </div>
            <!-- <div class="middle">
                <div class="gcse-searchbox-only"></div> 
            </div> -->
            <div class="right">
                <div   @click="changeSearch()"> 
                    <!-- <span class="iconfont icon-gengduo"></span> -->
                    <van-icon name="search" color="#F96F91" style="font-weight: 600" size="1.8rem" />
                </div> 
                <div @click="goHome()" v-if="homeIcon">
                    <van-icon name="wap-home" color="#F96F91" size="1.8rem"/>
                </div>
                
                <div @click="menuShow=!menuShow;popupShow=false;searchShow=false">
                    <van-icon name="wap-nav" color="#F96F91" size="1.8rem"/>
                </div> 
                
            </div>  
        </div> 
         <!-- 分类菜单 :overlay="false"-->
        <van-popup v-model="menuShow" position="top"   get-container=".home"   :style="{ height: 'auto',zIndex: '2222222', background: 'white'}" round>
            <ul class="navber-menu"> 
                <li v-for="(item,index) in menuArr" :key="index" @click="sendOut(item.typeName)">
                    <router-link tag="div" :to="{path: `/category/${item.typeName.replace(/\s+/g,'-')}/${item.belong}/${item.id}`}" > 
                        {{item.typeName}}
                    </router-link>
                </li> 
            </ul>
        </van-popup>
        <!-- 侧边栏 -->
            <van-popup v-model="popupShow" position="left"  get-container=".home"   :style="{ width:'55%', height: '100%',zIndex: '2222222', background: 'white'}"  >
                <div class="navber-features">
                    <router-link tag="p" to="/mine"> 
                        My Page
                    </router-link>
                    <router-link tag="p" to="/login" v-if="!isLogin" > 
                        LOGIN
                    </router-link>
                    <p v-if="isLogin" @click="loginOut" > 
                       LOGIN OUT
                    </p>
                    <router-link tag="p" to="/aboutus"> 
                        About us
                    </router-link>
                    <router-link tag="p" to="/contactus"> 
                        Contact us
                    </router-link>
                    <router-link tag="p" to="/feedback"> 
                        Feedback
                    </router-link>
                    <router-link tag="p" to="/security"> 
                        Security and privacy
                    </router-link>
                </div>
                
            </van-popup>

            <!-- 侧边栏 -->
            <van-popup v-model="searchShow" position="top"  get-container=".home"   :style="{ height: 'auto ',zIndex: '2222222', background: 'white'}" >
                <div class="navber-features navber-search" >
                    <div class="home-search"> 
                        <div class="gcse-searchbox-only"></div> 
                    </div>
                </div> 
            </van-popup>
    </div>
</template>
<script>
import {store} from '@/store/index.js'
export default {
    data () {
        return {
            popupShow:false,   // 头部右侧登录等弹出层是否显示 
            menuShow : false,  // 分类菜单弹出层是否显示
            searchShow :false,  // 搜索的显示
            menuArr: [],   // 菜单列表
            isLogin:false, //登录状态
            adSearchJs : false,
        }
    },
    created () {
        this.getMenu();
    },
     mounted() {
        if(window.localStorage.userinfo){
            this.isLogin = true;
        } 
    },
    watch : {
        '$route' (to, from) { 
            this.$router.go(0);
        }
    },
    methods: {
        changeSearch(){
            this.popupShow=false;
            this.menuShow=false;
            this.searchShow = !this.searchShow;
            if(this.searchShow) {
                if(!this.adSearchJs) {
                    var s = document.createElement("script") 
                    s.setAttribute("async","");
                    s.src = "https://cse.google.com/cse.js?cx=partner-pub-7936490518220507:bt14tqsrv1o"
                    document.documentElement.append(s); 
                    this.adSearchJs = true
                }
            }
            
        },
        goHome(){
            // document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.$router.push("/")
        },
         //退出登录
        loginOut() {
            var _this = this; 
            localStorage.removeItem("userinfo") 
            this.popupShow = false
            this.isLogin = false 
        },
        // 获取分类 
        getMenu(){
            // var url='user!getTypeInfo.action';
            var url = "/user/getTypeInfo";
            this.$axios.get(url)
            .then(res=>{  
                this.menuArr=res.data.data;   
                 
                
            })
            .catch(err=>{
                console.log(err)
            })
        },
        // 向谷歌分析发送报告  
        sendOut (item) {  
            this.menuShow=!this.menuShow;
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
        homeIcon () {
            return store.homeIcon
        }
    }
}
</script>
<style lang="scss" scoped>
     
    .navber-menu{   
        width: 100%; 
        background: #f5f5f5;
        margin-top: 2.85rem;
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
    .navber-features{
        width: 100%;
        margin-top: 2.9rem;
        >p{
            width: 100%;
            height: 2.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight:600;
        }
    }
    .navber-search{
        width: 100%;
        padding: 0 10px; 
        display: inline-block;
        >.home-search{
            margin: 10px 0;
        } 
    }
    .public{
        .navber{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 222222222;
            padding: .3rem .4rem;
            // background: #f5eff1;
            background: #f5f5f5;
            display: flex;
            justify-content: space-between;
            
            .left{
                width: 5.8rem;
                height:2rem;
                margin-top: .25rem;
                img{
                    width: 100%;
                    height: 100%;
                }
                 
            }
            .van-search{
                height: 1.5625rem;
                background: #f5eff1 !important;
            }
            .van-search__action{ 
                padding:0 0 0 10px; 
                color: #969799;
                background: #f5eff1;
            }
            .middle{
                width: calc(100% - 11rem);
            }
            .right{ 
                width: 6rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-right: 5px;
                >div:nth-of-type(1) {
                    margin-right: 0.4rem;
                    margin-top: 0.2rem;
                }
                >div:nth-of-type(2) {
                    margin-right: 0.4rem;
                    margin-top: 0.2rem;
                }
                >div:nth-of-type(3) {
                    margin-right: 0.4rem;
                    margin-top: 0.2rem;
                }
                .iconfont{
                    line-height:1.5625rem;
                    font-size: 1.5rem;
                    color: #f96f91;
                }
            }
            // .van-popup--right{
            //     margin-top: 2.9rem ;
            //     width: 100%;
            //     height: 100%;
            // }
            
            // .van-popup{ 
            //     background: rgba(0,0,0,0);
            //     color: #3a3a3a;
            //     .popup_top{
            //         text-align: right;
            //         .iconfont{
            //             font-size: 1rem;
            //         }
            //     }
            //     p{  
            //         width: 100%;
            //         padding: 0 0.5rem;
            //         background: #f5eff1; 
            //         height: 2rem;
            //         display: flex;
            //         align-items: center;
            //         justify-content: center;
            //         >span{
            //             display: inline-block;
            //             text-align: center;
            //         }
                        
            //         .iconfont{
            //             font-size: 1rem; 
            //             }
            //         }
            // }
        } 
        
    }
</style>
