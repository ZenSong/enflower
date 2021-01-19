<template>
    <div class="collection"  >
        <div class="navber">
            <div class="left" @click="go_back">
                <van-icon name="arrow-left" />
            </div>
            <div class="title">
            My Collections
            </div>
            <div class="right">
            </div>
        </div>
        <div class="list_box">
          <div class="content_box" >
            <div v-for="(item,index) in listData" :key="index">
              <router-link tag="div" :to="{path:`/plant/${item.typeName.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.type}/${item.id}`}" class="content_list0" v-if="item.modelType==1">
                <p class="title">{{item.name}}</p>
                <p class="message" v-if="item.message">{{item.message}}</p>
                <div class="time" >
                  <div>
                    <van-icon name="eye-o" />
                    <span>{{item.scanNum}}</span>
                  </div>
                  <span >{{new Date(item.addtime).toDateString()}}</span>
                </div>
              </router-link>
              <router-link tag="div" :to="{path:`/plant/${item.typeName.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.type}/${item.id}`}" class="content_list1" v-if="item.modelType==2">
                <div class="left">
                  <img v-lazy="item.imageurl[0]" alt="">
                </div>
                <div class="right">
                  <p class="title">{{item.name}}</p>
                  <p class="message" v-if="item.message">{{item.message}}</p>
                  <div class="time" >
                    <div>
                      <van-icon name="eye-o" />
                      <span>{{item.scanNum}}</span>
                    </div>
                    <span >{{new Date(item.addtime).toDateString()}}</span>
                  </div>
                
                </div>
              </router-link >
              <router-link tag="div" :to="{path:`/plant/${item.typeName.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.type}/${item.id}`}" class="content_list2"  v-if="item.modelType==3">
                <p class="title"> {{item.name}} </p>
                <p class="message" v-if="item.message">{{item.message}}</p>
                  <div class="big_img">
                    <img v-lazy="item.imageurl[0]" alt="">
                  </div>
                  <div class="time" >
                    <div>
                      <van-icon name="eye-o" />
                      <span>{{item.scanNum}}</span>
                    </div>
                    <span >{{new Date(item.addtime).toDateString()}}</span>
                  </div>
                
              </router-link>
              <router-link tag="div" :to="{path:`/plant/${item.typeName.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.type}/${item.id}`}" class="content_list3" v-if="item.modelType==4">
                <p class="title"> {{item.name}} </p>
                <p class="message" v-if="item.message">{{item.message}}</p>
                <div class="img_list" >
                  <div v-for="index2 in item.imageurl " :key="index2"> 
                    <img v-lazy="index2" alt="">
                  </div>
                </div>
                <div class="time" >
                  <div>
                    <van-icon name="eye-o" />
                    <span>{{item.scanNum}}</span>
                  </div>
                  <span >{{new Date(item.addtime).toDateString()}}</span>
                </div>
              
              </router-link>
              <div  class="content_list4" v-if="item.modelType==5">
                <router-link    tag="p" class="title" :to="{path:`/plant/${item.typeName.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-').replace(/[\+ | \? | \% | \& | \= | \# | \^ | \* | \! | \$]/g,'')}/${item.type}/${item.id}`}"> {{item.name}} </router-link >
                <div class="video_box">
                  <video :src="item.imageurl[0]" controls :poster="item.videoImgAddr"></video>
                  <!-- <iframe v-lazy="item.imageurl" frameborder="0"  width="100%" height="200px" autoplay=false></iframe> -->
                </div>
                <div class="time" >
                  <div>
                    <van-icon name="eye-o" />
                    <span>{{item.scanNum}}</span>
                  </div>
                  <span >{{new Date(item.addtime).toDateString()}}</span>
                </div>
              
              </div >
            </div>
          </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    name:"collection",
  data() {
    return {
      listData: [],
      user_id:null,
      pagesize:10,
      pageindex:1,
    }
  },
  created() {
    var userinfo = JSON.parse(localStorage.getItem('userinfo'))
    if (userinfo) {
      this.user_id = userinfo.user_id
    }
    this.getFlowersCollect()
  },
  methods: {
    go_back(){
      this.$router.push({path:"/mine"})
    },
    // 获取收藏的信息
    getFlowersCollect() {
      let userinfo = JSON.parse(localStorage.getItem('userinfo'))  
      let obj = {
         userId : userinfo.user_id
      } 
      let url ="/user/getCollect"
      this.$axios.get(url, {
        params : obj
      })
        .then(response => { 
          this.listData = response.data.data
        })
    }, 
  }
}
</script>
<style scoped lang="scss" scoped>
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
.list_box{
  margin-top: 2.1875rem;
}  
.show_more{
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;
  background-image: linear-gradient(top,rgba(245,239,241,0),rgba(	255,182,193,.8));
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(245,239,241,0)),to(rgba(	255,182,193,.8)));
  p{
    width: 20%;
    height:1.875rem;
    text-align: center;
    width: 100%;
    .iconfont{
      line-height:1.875rem;
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
.content_box{
  margin: 2.53rem 0 0.5rem 0;
  min-height: 100%;
  height: 100%;
  .content_list0{
    background: #f6f6f6;
    padding: .3125rem;
    margin:0 .125rem;
    border-top:  .125rem  solid #fff;
  }
  .content_list1{
    background: #f6f6f6;
    margin: 0 .125rem;
    display: flex;
    justify-content: space-between;
    border-top: .125rem  solid #fff;
    .left{
      width: 35%;
      padding: .125rem;
      height: 5.5rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      width: 65%;
      position: absolute;
      right: 0;
    }
  }
  .content_list2,.content_list3,.content_list4{
    margin: 0 .125rem;
    background: #f6f6f6;
    border-top: .125rem solid #fff;
  }
  .content_list1 .right{
    .title, .message{
      height: 1.9rem;
    }
  }
  .content_list0 , .content_list1 .right ,.content_list2  ,.content_list3 ,.content_list4{
    margin-bottom: 0.3rem;
    font-size: .625rem;
    padding: .5rem;
    padding-bottom: 0;
    .title, .message{
      width: 100%;
      word-wrap: break-word;
      line-height:   .9375rem;
      letter-spacing:-0.01rem;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; 
    }
    .message{
    }
    .title{
        line-height: 2rem;
      color: #333333;
      font-size: 1rem;
    }
    .time{
      display: flex;
      justify-content: space-between;
    //   line-height: 1.5rem;
      height: 2rem;
      font-size: .5rem;
      color: #cecece;
      align-items: center;
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
      margin-top: .25rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .img_list{
      display: flex;
      justify-content: space-around;
      margin-top: .25rem;
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
      margin-top: .25rem;
      height: 12rem;
      video{
        width: 100%;
        height: 12rem;
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
.content_list1 .right{
    .message{
    -webkit-line-clamp: 1 !important;
    height: .9375rem  !important;
    overflow: hidden  !important;
    }
}
.content_box2{
  .content_top{
    margin-top: .5rem;
    background: #f6f6f6;
    display: flex;
    justify-content:space-between;
    padding: .625rem 1.25rem ;
    line-height: 1.5625rem;
    span{
      padding:0 .25rem;
    }
    .active{
      background: #f96f91;
      color: #fff;
    }
  }
  .content_list{
    display: flex;
    flex-wrap: wrap;
    padding: 0 .5rem;
    dl{
      width: 49.5%;
      background: #f6f6f6;
      border-top: .125rem solid #fff;
      dt{
        height: 6.25rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      dd{
        padding:0 .3125rem;
      }
        .title, .message{
          width: 100%;
          line-height:   .9375rem;
          letter-spacing:-0.01rem;
          word-wrap: break-word;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .message{
          margin-top: .1875rem;
          height: 1.9rem;
          line-height: .9375rem;
          text-overflow: -o-ellipsis-lastline;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .title{
          color: #333333;
          font-size: .75rem;
        }
        .btn{
          margin-top: .625rem;
          span{
            text-align: center;
            background: #f96f91;
            color: #fff;
            border-radius: .3125rem;
            padding:0 .3125rem
          }
        }
        .time{
          display: flex;
          justify-content: space-between;
          line-height: 1.5rem;
          color: #cecece;
          font-size: .5rem;
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
    }
    :nth-of-type(2n+1){
      margin-right: 1%;
    }
  }

}
 
 
</style>
