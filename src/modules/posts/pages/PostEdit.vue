<template>
  <div class="container">
    <h1>Edit Post</h1>
    <form @submit.prevent="submit">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="postTitle" class="d-block text-left">Title</label>
            <input v-model="post.title" type="text" class="form-control" id="postTitle" placeholder="Enter title" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="postDescription" class="d-block text-left">Description</label>
            <input v-model="post.body" type="text" class="form-control" id="postDescription" placeholder="Enter description" required>
          </div>
        </div>
        <div class="col-md-12">
          <button class="btn btn-primary w-100" type="submit">Update</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";
import {mapMutations, mapState} from 'vuex'
import {postItemFabric} from "@/modules/posts/services/postItem.fabric";

export default {
  name: 'PostEdit',
  data(){
    return {
      post: postItemFabric()
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
  methods: {
    ...mapMutations('post', ['EDIT_POST']),
    async submit() {
      await this.EDIT_POST(this.post)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState('post', ['postList'])
  }
}
</script>
