<template>
    <div class="login">
        <div class="navber">
            <div class="left" @click="go_back">
                <van-icon name="arrow-left" />
            </div>
        </div>
        <div class="logo">
            <img src="../../../static/img/floweer_logo.png" alt="">
        </div>
        <div class="center_content">
            <ul>
                <!-- <li  @click="facebookLogin">
                    <img src="../../../static/img/flower_login_facebook.png" alt="">
                    <div class="line">
                        Sign in with Facebook
                    </div>
                </li> -->
                 <li  id="customBtn" @click="googleLogin"  >
                   <img src="../../../static/img/flower_login_gmail.png" alt="">
                    <div >Sign in with Google</div>
                </li>
            </ul>
        </div>
        <div class="bottom_btn"  @click="lookAround" >
           <span >Look Around</span>  
        </div>
       
    </div>
</template>
<script> 
export default {
    name:"login",
  data() {
    return {
      isLogin: false
    }
  },
  created(){ 
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    var apisGoogle =  document.createElement("script")
    apisGoogle.src = "https://apis.google.com/js/api:client.js"
    apisGoogle.setAttribute("async","");
    apisGoogle.type = "text/javascript" 
    document.documentElement.appendChild(apisGoogle) 
  }, //
  mounted(){ 
    this.googleLogin()
  },
  methods: {
    go_back(){
      this.$router.go(-1)
    },
    // 登录facebook的函数
    facebookLogin() {
      var _this = this
      FB.init({
        // appId: '2365249366868374',
        appId: '2422819691309531',   
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2'
      }) 
      FB.login(function() {
        var fbToken
        FB.getLoginStatus(function(response) {  
          let myObjUser = {
            expires_in : response.authResponse.expiresIn,
            token : response.authResponse.accessToken
          }
          if (response.status === 'connected') {
            FB.api('/me', function(response) { 
              myObjUser.username = response.name;
              myObjUser.email = null;
              myObjUser.imageurl = ` https://graph.facebook.com/${response.id}/picture?type=large`;
              myObjUser.userId = response.id;
              myObjUser.theUserTypes = 1;  
              var user_id = response.id
              var username = response.name
              var imageurl = `https://graph.facebook.com/${
                response.id
              }/picture?type=large`
              _this.$axios
                .get('/user/input', {
                  params : myObjUser
                })
                .then(response => {
                     let userinfo = {}
                    userinfo.user_id = user_id
                    userinfo.username = username
                    userinfo.imageurl = imageurl
                    userinfo.theUserTypes = 1
                    localStorage.setItem('userinfo', JSON.stringify(userinfo))
                    var url = _this.getQueryVariable('reurl')
                    var newsid = _this.getQueryVariable('newsid')
                    localStorage.setItem("gologin",true)
                    // _this.$Toast('Login successful')
                    setTimeout(() => {
                      if (url) {
                        location.href = `${url}?&userid=${user_id}&newsid=${newsid}`
                        
                      } else { 
                        history.back(-1)           
                      }
                    }, 2000)
                  
                })
            })
          } else if (response.status === 'not_authorized') {
            console.log('facebook未经授权')
          } else {
            console.log('不是登陆到Facebook;不知道是否授权')
          }
        })
      })
    },
    lookAround() {
      this.$router.push({path:"/"})
    },
    getQueryVariable(name) {
      return (
        decodeURIComponent(
          (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            location.href
          ) || [, ''])[1].replace(/\+/g, '%20')
        ) || null
      )
    },
    // 登录google
    googleLogin() {
      var _this = this;
      var googleUser = {};
      var auth2;
      star();
      // 初始化
      function star() {
        gapi.load('auth2', function() {
          auth2 = gapi.auth2.init({
            client_id:
              // '242214139661-sssh53vaph6lsqlg679efqvqvplhdmma.apps.googleusercontent.com',
              // '571304941915-52ngqsgkmmdslkatl9f0kq6ja9jhrci3.apps.googleusercontent.com', 
              '314574146859-4rj4n2307tp3ao2l8njmole7tsoccj9n.apps.googleusercontent.com',
              
            cookiepolicy: 'single_host_origin',
            scope: 'profile'
          })
          //绑定登陆按钮 调用attachSignin的函数
          attachSignin(document.getElementById('customBtn'))
        })
      }
      function attachSignin(element) {
        // 调用auth2中的attachClickHandler方法
        auth2.attachClickHandler(
          element,
          {},
          googleUser => {
            var profile = auth2.currentUser.get().getBasicProfile()  
            // let formData = new FormData() 
            // formData.append('username', profile.getName())
            // formData.append('email', profile.getEmail())
            // formData.append('imageurl', profile.getImageUrl()) 
            // formData.append('token', googleUser.xc.access_token)
            // formData.append('userId', profile.getId()) 
            // formData.append('expires_in', googleUser.xc.expires_in)
            // formData.append('theUserTypes', 2)

            let myObjUser = {
                username : profile.getName(),
                email : profile.getEmail(),
                imageurl : profile.getImageUrl(),
                token : googleUser.xc.access_token,
                userId : profile.getId(),
                expires_in : googleUser.xc.expires_in,
                theUserTypes : 2
            }
            _this.$axios
              .get('/user/input', {
                params : myObjUser
              })
              .then(response => {
                  let userinfo = {}
                  userinfo.user_id = profile.getId()
                  userinfo.username = profile.getName()
                  userinfo.imageurl = profile.getImageUrl()
                  userinfo.theUserTypes = 2
                  localStorage.setItem('userinfo', JSON.stringify(userinfo))
                  var url = _this.getQueryVariable('reurl')
                  var newsid = _this.getQueryVariable('newsid')
                  // _this.$Toast('Login successful') 
                  setTimeout(() => {
                    if (url) {
                      location.href = `${url}?&userid=${profile.getId()}&newsid=${newsid}`  
                    } else {
                      history.back(-1)   
                                     
                    }
                  }, 2000)
              })
          },
          function(error) {
            console.log(JSON.stringify(error, undefined, 2))
          }
        )
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navber{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2019;
  padding: .3125rem .625rem;
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
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
.logo{
  width:55%;
  height:3.75rem;
  margin: 5.125rem auto 3.875rem auto;
  img{
      width: 100%;
      height: 100%;
  }
}
.account{
  display: flex;
  width: 70%;
  margin: 0 auto;
  padding: .625rem 0;
  img{
    width: 1.5rem;
    height: 1.5rem;
  }
  div{
    line-height: 1.5rem;
    margin-left: .625rem;
  }
}
.go_home{
  display: flex;
  width: 70%;
  margin: 0 auto;
  padding: .625rem 0;
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
    display: flex;
    
    img{
      margin-top: 0.3125rem;
      width: 1.875rem;
      height: 1.875rem;
    }
    div{
      margin-left: .9375rem;
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
</style>


