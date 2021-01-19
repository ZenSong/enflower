
<template>
  <div class="security" >
    <div class="navber">
      <div class="left" @click="go_back">
          <van-icon name="arrow-left" />
      </div>
      <div class="title">
          security
      </div>
      <div class="right">
      </div>
    </div>
    <div class="security_box">
        <ul>
            <li>
                <p class="title">PRIVACY POLICY</p>
                <p>This Privacy Policy describes how your personal information is collected and  used, when you visit or make a purchase from www.enflower.info (the “Site”). </p>
            </li>
             <li>
                <p>PERSONAL INFORMATION WE COLLECT</p>
                <p>Automatic Data Collection. When you visit the site, we automatically collect certain information about your device, through our Services or other methods of web analysis, including information such as your Internet protocol (IP) address, cookie identifiers, mobile advertising identifiers, and other device identifiers that are automatically assigned to your computer or device Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.” </p>
                
            </li>
             <li>
                <p>We collect Device Information using the following technologies</p>
                <p>
                    “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit https://www.enflower.info <br>
                    “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps. <br>
                    - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                </p>
            </li>
            <li>
                <p>We collect the following types of personal information</p>
                <p>
                    Posting on the Site. We collect information you post through the Site. For example, when you posting a review ，the Site will collect the information you provide in such submissions, including any Personal Information.<br>
                    HOW DO WE USE YOUR PERSONAL INFORMATION? We use the collected information  to communicate with you via email. When in line with the preferences you have shared with us, we will provide you with information or advertising relating to our products or services.<br>
                    In addition, we will not disclose your personal information to the outside.
                    This interpretation is reserved by our company.
                </p>
            </li>
            <li>
                <p>CONTACT US </p>
                <p>
                    For more information about our privacy practices, if you have questions, please contact us by e-mail at
                </p> 
                <p>
                    IceAlanD307@gmail.com
                </p>
            </li>

        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'security',
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
.security_box{
    margin: 4rem .625rem 0 .625rem;
    ul{
        li{
            font-size: 0.8rem;
            text-align: justify; 
            p{
            line-height: 1.75rem;
            }
            .title{
                text-align: center;
                color: #333333;
                font-size: 1.2rem;
                line-height: 3.125rem;
            }
            :nth-of-type(1){
                color: #333;
                line-height: 1.875rem;
            }
            :nth-of-type(2){
                color: #999999;
                text-indent: 1.25rem;
            }
        }
    }
}
</style>