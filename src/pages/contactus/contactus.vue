
<template>
  <div class="contactus">
    <div class="navber">
      <div class="left" @click="go_back">
          <van-icon name="arrow-left" />
      </div>
      <div class="title">
          contactus
      </div>
      <div class="right">
      </div>
    </div>
    <div class="contactus_box">
       <div class="center_content">
        <ul>
          <li>
            <span>Company : </span>
            <span>Duola Flower</span> 
          </li>
          <li>
            <span>Email : </span>
            <span>IceAlanD307@gmail.com</span> 
          </li>
          <li>
            <span>Address : </span>
            <span class="address">
              D307, Huachuangda Center Business 
              Building, Xinghua 1st Road, Block 42, 
              Baoan Center, Shenzhen, China.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactus',
  data () {
    return {
    }
  },
  methods:{
    go_back(){
      this.$router.go(-1)
    },
  },
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
.contactus_box{
  margin:  9.375rem .625rem 0 .625rem;
  .center_content{
    background: #f6f6f6;
    border-radius: .625rem;
    margin: .625rem;
    padding: .75rem;
    li{
      
      line-height: 3rem;
      font-size: 1.2rem;
      border-bottom: .0625rem solid #cccccc;
     word-break:break-all;
      .iconfont{
        font-size: 1.2rem;
      }
      :nth-of-type(1){
        color: #666666;
      }
      :nth-of-type(2){
        font-size: 1rem;
        color: #999999;
        word-break: keep-all;
        line-height: 2rem;
      }
    }
    :nth-of-type(3){
      line-height: 1.5rem;
    }
  }
}
</style>