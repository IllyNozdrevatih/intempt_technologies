<template>
  <div class="container">
    <h1>Create Post</h1>
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
          <button class="btn btn-primary w-100" type="submit">Create</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {postItemFabric} from "@/modules/posts/services/postItem.fabric";

export default {
  name: 'PostCreate',
  data() {
    return {
      post: postItemFabric()
    }
  },
  methods: {
    ...mapMutations('post', ['ADD_POST']),
    async submit() {
      const newPostItem = {
        title: this.post.title,
        body: this.post.body,
        userId: 1,
        id: Math.random() * (1000 - 201) + 201
      }

      await this.ADD_POST(newPostItem)
      this.$router.push('/')
    }
  }
}
</script>
