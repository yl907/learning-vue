<script>
  export default {
    data() {
      return {
        loading: false,
        post: null,
        error: null,
      }
    },
    watch: {
      '$route.params': {
        handler() {
          this.fetchData()
            .then(post => {
              this.setData(null, post);
            })
            .catch(err => {
              this.setData(err.toString(), null);
            });
        },
        immediate: true,
      },
    },
    methods: {
      async fetchData() {
        this.error = this.post = null;
        this.loading = true;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({title: `data fetched!`, body: `this is data body.`});
          }, 3000);
        });
      },
      setData(err, post) {
        this.loading = false;
        this.err = err;
        this.post = post;
      }
    }
  }
</script>

<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">error: {{ error }}</div>

    <div v-if="post" class="content">
      <p>post:</p>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>