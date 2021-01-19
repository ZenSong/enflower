
<template>
  <div class="aboutus">
    <div class="navber">
      <div class="left" @click="go_back">
          <van-icon name="arrow-left" />
          
      </div>
      <div class="title">
          aboutus
      </div>
      <div class="right">
      </div>
    </div>
    <div class="aboutus_box">
        <p class="title">About us:</p> 
        <p class="content">
         www.enflower.info  is a professional flower website. We have over 6 years of experience in the gift basket and floral industry. We work with preferred gift basket vendors and floral suppliers worldwide to bring the highest level of service and satisfaction to our customers online. www.enflower.info is committed to offering exceptional service to our customers. We understand that the gifts that you send represent you both personally and professionally.We thank you for supporting us over the years. 
        
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutus',
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
.aboutus_box{
  margin:  9.375rem .625rem 0 .625rem;
  .title{
    font-size: 1rem;
    line-height:1.25rem;
    padding:.625rem  .625rem 0 .625rem;
  }
  .content{
    font-size: 0.8rem;
    line-height: 1.7rem;
    padding: .625rem;
    text-indent: 1.25rem;
    text-align: justify; 
  }
}
</style>