<template>
    <div id="center" class="mine" >
      <div v-if="userMassage.username">
        <div class="navber">
          <div class="left" @click="go_back">
              <van-icon name="arrow-left" />
          </div>
          <div class="title">
           Personal Center 
          </div>
          <div class="right">
          </div>
        </div>
        <div class="center_box">
          <div class="user_name">
            <div class="img_box">
              <img  :src="userMassage.imageurl">
            </div>
            <div class="name">
              {{userMassage.username}}
            </div>
          </div>
          <div class="center_nav">
            <ul>
              <router-link tag="li" to="/collection">
                <p class="iconfont icon-shoucang"></p>
                <p>Collection</p>
              </router-link>
              <router-link tag="li" to="/publish" >
                <p class="iconfont icon-fabiaolunwen"></p>
                <p>My Post</p>
              </router-link>
              <router-link tag="li" to="/work"  >
                <p class="iconfont icon-xiepinglun"></p>
                <p>Write</p>
              </router-link>
              <router-link tag="li" to="/message"  >
                <p class="iconfont icon-xiaoxi"></p>
                <p>Message</p>
              </router-link>
            </ul>
          </div>
          <div class="center_content">
            <ul>
              <router-link to="/aboutus" tag="li">
                <span class="iconfont icon-guanyuwomen"></span>
                <span>About us</span>
              </router-link>
              <router-link to="/feedback" tag="li" >
                <span class="iconfont icon-fankui"></span>
                <span>Feedback</span>
              </router-link>
              <router-link to="/contactus" tag="li" >
                <span class="iconfont icon-mail"></span>
                <span>Contact us</span>
              </router-link>
              <router-link to="/security" tag="li" >
                <span class="iconfont icon-fuwutiaokuanjiyinsi"></span>
                <span>Security and Privacy</span>
              </router-link>
            </ul>
          </div>
          <div class="bottom_btn" @click="login_out">
            LOGIN OUT
          </div>
        </div>
      </div>
      <div  v-if="!userMassage.username"  class="cartNull" > 
        <img src="../../../static/img/floweer_loading.gif" alt="">
      </div>
  </div>
</template>



<script> 
export default {
    name:"mine",
  data() {
    return {
      username: '',
      userMassage:{},
    }
  },
  created() {   
    if(localStorage.getItem('userinfo') != null){
      this.getUserById()
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
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  methods: {
    go_back(){
      this.$router.push({path:"/"})
    },
    getUserById(){
      let userinfo = JSON.parse(localStorage.getItem('userinfo'))
      // let url= 'user!getUserinfo.action'
      let url= '/user/getUserinfo'
      // let formData = new FormData()
      // formData.append('userId',userinfo.user_id)
    
      this.$axios.get(url,{
        params : {
          userId : userinfo.user_id
        }
      })
      .then(response => { 
        this.userMassage=response.data.data
      })
    },
    login_out() {
      var _this = this; 
      localStorage.removeItem("userinfo")
      _this.$router.push("/")
       
    },
  }
}
</script>
<style lang="scss" scoped>
.navber{
  height: 2.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2019;
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
.center_box{
  margin-top: 2.5rem;
  .user_name{
    background-image: url(../../../static/img/flower_mine_bg.png);
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    .img_box{
      margin-top:1.875rem;
      width: 3.75rem;
      height:3.75rem;
      border-radius: 50%;
      img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .name{
      width: 100%;
      text-align: center;
      line-height: 3.125rem;
      font-size: .75rem;
      color: #999;
    }
  }
  .center_nav{
    background: #f6f6f6;
    border-radius: .625rem;
    margin: .625rem;
    ul{
      display: flex;
      justify-content: space-around;
      padding: .625rem 0;
      li{
        text-align: center;
        .iconfont{
          font-size: 1.25rem;
          line-height: 1.875rem;
        }
        p{
          font-size: .75rem;
          color: #999;
          line-height: 1.875rem;
        }
      }
    }
  }
  .center_content{
    background: #f6f6f6;
    border-radius: .625rem;
    margin: .625rem;
    padding: .625rem;
    li{
      color: #999;
      line-height: 2.5rem;
      font-size: .875rem;
      border-bottom: .0625rem solid #cccccc;
      .iconfont{
        font-size: 1rem;
      }
    }
  }
  .bottom_btn{
    background: #f6f6f6;
    color: #999;
    border-radius: .625rem;
    margin: .625rem;
    text-align: center;
    line-height:2.5rem;
    margin: 1.25rem .625rem;
  }
}
.cartNull{
  margin-top: 2.1875rem;
  padding: 0 .9375rem;
  img{
    width: 100%;
  }
}
</style>