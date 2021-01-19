
<template>
  <div class="message" >
    <div class="navber">
        <div class="left" @click="go_back">
            <van-icon name="arrow-left" />
        </div>
        <div class="title">
           Message Center
        </div>
        <div class="right">
        </div>
    </div>
    <van-tabs v-model="active"   color="#f96f91"   title-active-color="#f96f91" title-inactive-color="#cecece" @change="changeActive">
      <van-tab v-for="item in tabsList" :title="item" :key="item" >
        <div slot="default" v-if="!active">
          <div class="sent"  v-for="(item ,index ) in commensData" :key="index" >
          
            <router-link tag="div" :to="{path:`/plant/${item.type_name.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.type}/${item.id}`}" class="content_list1" >
              <div class="left">
                <img v-lazy="item.imageurl[0]" alt="">
              </div>
              <div class="right">
                <p class="title">{{item.name}}</p>
                <p class="message" v-if="item.message">{{item.message}}</p>
                <div class="time" >
                  <div>
                    <van-icon name="eye-o" />
                    <span>{{item.scan_num}}</span>
                  </div>
                  <span >{{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span>
                </div>
                <p class="btn" v-if="item.code">{{item.code }}</p>
              </div>
            </router-link >
            <div class="comment_list" v-if="!item.answername">
              <dl>
                <dt >
                  <img v-lazy="item.userurl" alt="">
                </dt>
                <dd class="content">
                  <span class="name">{{item.commentuser}}</span>
                </dd>
              </dl>
              <div class="message_box">
                <p class="message">{{item.commentcontent}}</p>
                <p class="time">
                  <span class="left"> {{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span> 
                </p>
              </div>
            </div>
            <div class="comment_list" v-if="item.answername">
              <dl>
                <dt >
                  <img v-lazy="item.userurl" alt="">
                </dt>
                <dd class="content">
                  <span  class="name">{{item.answername}}</span> <span> :  Answer </span> <span class="name">  {{item.commentuser}}</span>
                </dd>
              </dl>
              <div class="message_box">
                <p class="message">{{item.commentcontent}}</p>
                <p class="time">
                  <span class="left">{{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span> 
                </p>
              </div>  
            </div>
          </div>
          <div class="show_more" v-if="dataNum>10">
            <p @click="show_more" v-if="!showMore">
              <span class="iconfont icon-Group"></span>
            </p>
            <p  v-if="showMore">
              <span class="iconfont icon-apptubiao-"></span>
            </p>
          </div>
        </div>
        <div slot="default" v-if="active">
          <div class="received"  v-for="(item ,index ) in commensData" :key="index" >
            <router-link tag="div" :to="{path:`/plant/${item.type_name.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.type}/${item.id}`}" class="content_list1" >
              <div class="left">
                <img v-lazy="item.imageurl[0]" alt="">
              </div>
              <div class="right">
                <p class="title">{{item.name}}</p>
                <p class="message" v-if="item.message">{{item.message}}</p>
                <div class="time" >
                  <div>
                    <van-icon name="eye-o" />
                    <span>{{item.scan_num}}</span>
                  </div>
                  <span >{{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span>
                </div>
                <p class="btn" v-if="item.code">{{item.code }}</p>
              </div>
            </router-link >
            <div class="comment_list" v-if="!item.answername">
              <dl>
                <dt >
                  <img v-lazy="item.userurl" alt="">
                </dt>
                <dd class="content">
                  <span class="name">{{item.commentuser}}</span>
                </dd>
              </dl>
              <div class="message_box">
                <p class="message">{{item.commentcontent}}</p>
                <p class="time">
                  <span class="left"> {{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span> 
                </p>
              </div>
            </div>
            <div class="comment_list" v-if="item.answername">
              <dl>
                <dt >
                  <img v-lazy="item.userurl" alt="">
                </dt>
                <dd class="content">
                  <span  class="name">{{item.answername}}</span> <span> :  Answer </span> <span class="name">  {{item.commentuser}}</span>
                </dd>
              </dl>
              <div class="message_box">
                <p class="message">{{item.commentcontent}}</p>
                <p class="time">
                  <span class="left">{{new Date(item.addtime).toDateString().split(' ').splice(1,3).join(' ')}}</span> 
                </p>
              </div>  
            </div>
          </div>
          <div class="show_more" v-if="dataNum>10">
            <p @click="show_more" v-if="!showMore">
              <span class="iconfont icon-Group"></span>
            </p>
            <p  v-if="showMore">
              <span class="iconfont icon-apptubiao-"></span>
            </p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      tabsList:['Comments Sent','Comments Received'],//头部标题
      active:0,
      pageindex:1,
      pagesize:10,
      commensData:[],//消息列表
      dataNum:0,//数据总条数
      userInfo:null,//用户id
      showMore:false,//是否加载完毕
    }
  },
  mounted(){
    this.userInfo=JSON.parse(window.localStorage.userinfo);
    this.comments_list(this.pageindex);//获取消息
  },
  methods:{
    go_back(){
      this.$router.push({path:"/mine"})
    },
    comments_list(pageindex){
      var url="";
      if(this.active){
        url="/user/getUserReceiveComment";
      }else{
        url ='/user/getUserComment';
      }
      // let formData = new FormData()
      // formData.append('userId',this.userInfo.user_id)
      // formData.append('pageindex',pageindex)
      // formData.append('pagesize',this.pagesize)

      let myObjData = {
        userId : this.userInfo.user_id,
        pageindex : pageindex,
        pagesize : this.pagesize
      }
      this.$axios.get(url,{
        params : myObjData
      }).then(res=>{
       
        this.dataNum=res.data.data.total
        if(!res.data.data.list.length){
          this.showMore=true;
        }else{ 
          this.commensData.push(...res.data.data.list); 
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    show_more(){
      this.pageindex++
      this.comments_list(this.pageindex)
    },
    changeActive(){
      this.commensData=[];
      this.pageindex=1;
      this.showMore=false;
      this.comments_list(this.pageindex)
    },
  },
}
</script>
<style>
.message .van-tabs__wrap {
  width: 100%;
  /* z-index: 222;   */
  /* height: 100%; */
}
</style>

<style lang="scss" scoped>
.navber{
  height: 2.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2019;
  padding: .3125rem .625rem;
  background: #f6f6f6;
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
.van-tabs{
  margin-top: 2.6rem;
}
.sent,.received{
  margin:0 .625rem;
  color: #999999;
  background-color: #f7f8fa;
  margin-bottom: .5rem;
  .content_list1{
    padding:0 .625rem;
    margin-bottom: .3125rem;
    display: flex;
    justify-content: space-between;
    border-top: .3125rem solid #fff;
    .left{
      width: 35%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .right {
    width: 65%;
    padding-left:  .5rem;
    font-size: .625rem;
    padding: .3125rem;
    .message, .title{
      width: 100%;
      word-wrap: break-word;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 1.9rem;
      overflow: hidden;
      line-height: .9375rem;
    }
    .title{
      color: #333333;
      font-size: .75rem;
      -webkit-box-orient: vertical;
    }
    .time{
      display: flex;
      justify-content: space-between;
      line-height: 1.5rem;
      font-size: .5rem;
      color: #cecece;
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
      height: 9.375rem;
      video{
        width: 100%;
        height: 9.375rem;
        background: #000;
      }
      iframe{
        width: 100%;
        height: 9.375rem;
        background: #000;
      }
    }
    .btn{
      color: #cecece;
    }
    } 
  }
  .comment_list{
    border-top: #cccccc .0625rem dashed ;
    padding:0 .625rem;
    dl{
      padding: .3125rem 0;
      display: flex;
      dt{
        width:1.5rem;
        height: 1.5rem;
        margin-right: .625rem;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      dd{
        font-size:  .75rem;
        line-height:1.5rem;
        word-wrap: break-word;
      }
      .content{
        .name{
          color: #2d64b3;
        }
      }
    }
    .message_box{
      font-size: .75rem;
      line-height:.875rem;
      word-wrap: break-word;
      .message{
      }
      .time{
        display: flex;
        justify-content: space-between;
        .left{
          font-size: .625rem;
          line-height: 1.875rem;
          color: #cecece;
        }
        .right{
          display: flex;
          font-size: .625rem;
          line-height: 1.875rem;
          color: #cecece;
          .van-icon{
            font-size: .875rem;
            line-height: 1.875rem;
            margin-left: .3125rem;
          }
        .active{
          color: #ff4578;
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
  background-image: linear-gradient(top,rgba(245,239,241,0),rgba(	255,182,193,.8));
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(245,239,241,0)),to(rgba(	255,182,193,.8)));
  p{
    width: 20%;
    height:2.5rem;
    text-align: center;
    width: 100%;
    .iconfont{
      line-height:2.5rem;
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
</style>