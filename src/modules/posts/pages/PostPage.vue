<template>
  <div class="about">
    <div class="container">
      <div v-if="post !== null">
        <h1 v-text="post.title"/>
        <p v-text="post.body"/>
      </div>
      <div v-else>Post data not found</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'

export default {
  name: 'PostPage',
  data(){
    return {
      post: null
    }
  },
  async mounted() {
    const postID = this.$route.params.id

    if (this.postList.length === 0) {
      try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        this.post = data
      } catch (e) {
        console.log(e)
      }
    } else {
      const postItemIndex = this.postList.findIndex(postEl => postEl.id === Number(postID))
      this.post = Object.assign(this.postList[postItemIndex])
    }
  },
  computed: {
    ...mapState('post', ['postList'])
  }
}
</script>
