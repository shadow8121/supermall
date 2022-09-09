<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="caption">
      <span>用户评价</span>
      <a href="javascript:;" class="right">更多</a>
    </div>
    <div class="user">
      <h5><img :src="commentInfo.user.avatar" alt=""> {{ commentInfo.user.uname }}</h5>
    </div>
    <p class="content">{{ commentInfo.content }}</p>
    <div class="record">
      <span>{{commentInfo.created | showTime}}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
    <div class="imgs">
      <img v-for="item in commentInfo.images" :src="item" alt="">
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
  name: 'CommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showTime(value) {
      return formatDate(new Date(value*1000), 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 8px 12px;
  border-top: 6px solid #eee;
}

.caption {
  padding: 6px 0;
  border-bottom: 1px solid #eee;
  color: #333;
  font-size: 14px;
}

.caption a {
  color: #333;
  vertical-align: middle;
}

.user {
  padding: 5px 0;
}

.user img {
  width: 42px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
}

.content {
  color: #777;
  font-size: 14px;
}

.record {
  padding: 5px 0;
  color: #999;
  font-size: 10px;
}

.record span:nth-child(2) {
  margin-left: 12px;
}

.imgs img {
  width: 20%;
  margin-right: 10px;
}
</style>