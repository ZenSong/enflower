
<template>
  <div class="feedback">
    <div class="navber">
      <div class="left" @click="go_back">
          <van-icon name="arrow-left" />
      </div>
      <div class="title">
          feedback
      </div>
      <div class="right">
      </div>
    </div>
    <div class="chatroom">
     <van-cell-group>
        <van-field
          v-model="message"
          label="feedback"
          type="textarea"
          placeholder="Please input feedback"
          rows="1"
          autosize
        />
      </van-cell-group>
      <van-cell-group>
      <van-field
        v-model="email"
        placeholder="Please input email"
        label="email"
      />
    </van-cell-group>
    </div>
    <div class="publish">
      <van-button type="primary" size="large" @click="send">Submit</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'feedback',
  data () {
    return { 
      message:"",
      email:""
    }
  },
  mounted(){
  },
  methods:{
    go_back(){
      this.$router.go(-1)
    },
    // 发送消息
    send() { 
      if(this.message==''){
        return
      }
      let userinfo = JSON.parse(localStorage.getItem('userinfo')) 
      let url = '/user/saveFeedBack' 
      let obj = {
        email : this.email,
        content : this.message
      }
      this.$axios.get(url,{
          params : obj
      })
      .then(response => {
        this.$dialog.confirm({
        title: 'Feedback Success.',
        cancelButtonText:"Go Home",
        confirmButtonText:"back",
        confirm:'ss',
        cancel:""
      }).then(() => {
        this.$router.go(-1)
      }).catch(() => {
        this.$router.push({ path: '/' })
      });
      })
    }, 
  },
}
</script>
<style lang="scss" scoped>
.van-field__label {
  max-width: 90px;
  line-height: 72px;
}
.van-button{
  background: #f5eff1;
  border: none;
}
.van-button::before{
  background: #f5eff1;
}
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
.chatroom{
  padding-top: 2.5rem;
  width: 100%;
  min-height:32rem;
  max-height:32rem;
  _height: 31.25rem;
  overflow:hidden;
  background: #fcfcfc;
  #massage_box{
    margin: 1.25rem 1.5625rem;
    border: .0625rem solid #f5eff1;
    min-height:26rem;
    max-height:26rem;
    background: #ffffff;
    overflow: auto;
    .van-pull-refresh__track{
      min-height: 26rem;
      div{
        margin: .625rem;
        span{
          padding: 0 .9375rem;
          font-size: .6875rem;
          line-height: 1.25rem;
          border-radius:.3125rem;
          max-width: 100%;
          word-wrap: break-word;
          color: #969799;
          background: #ececec;
        }
      }
      .right{
        display: flex;
        justify-content: flex-end;
        span{
          background: #f6f6f6;
        }
      }
      .left{
        display: flex;
        span{
          background: #ececec;
        }
      }
    }
  }
}
.publish{
  position: fixed;
  bottom: 0;
  left: 0;
  background: #f5eff1;
  width: 100%;
  input{
    line-height: 1.5rem;
    border-radius: .625rem;
    width: 80%;
    font-size: .625rem;
    text-indent: 1.25rem;
  }
  span{
    padding:0  .3125rem;
    color: #969799;
    line-height: 1.5rem;
  }
}
</style>