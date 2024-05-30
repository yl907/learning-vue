<script>
// 10.1.在导航完成前获取数据
// 这会使得在获取数据前, 该组件不显示template内容。
// 参考本组件的template部分, 然后测试这个组件所对应的路由, 你会发现'加载中...'并不会显示, 当组件内容显示时, 直接就是according to id: ${id}, we get message: hello from server

// 假装getPost是一个请求服务器数据的函数
async function getPost (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // resolve 用于将 Promise 状态从“待定”（pending）变为“已完成”（fulfilled)，并提供结果值
      resolve(`according to id: ${id}, we get message: hello from server`);
    }, 3000); // 等待3秒后执行resolve
  });
}

export default {
  data() {
    return {
      post: null,
      error: null,
    }
  },
  // 在路由跳转到本组件前, 先获取数据
  beforeRouteEnter(to, from, next) {
    getPost(to.params.id)
      .then(post => {
        next(vm => {
          // vm是vue model, 指向当前.vue组件
          vm.setData(null, post);
        });
      })
      .catch(err => {
        next(vm => {
          vm.setData(err.toString(), null);
        });
      });
  },
  // 路由改变前，组件就已经渲染完了
  async beforeRouteUpdate(to, from) {
    this.post = null
    try {
      this.post = await getPost(to.params.id)
    } catch (error) {
      this.error = error.toString()
    }
  },
  methods: {
    setData(error, post) {
      if (error) {
        this.error = error
      } else {
        this.post = post
      }
    },

  }
}
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="post">{{ post }}</div>
  <div v-else>加载中...</div>
</template>

<style scoped>

</style>