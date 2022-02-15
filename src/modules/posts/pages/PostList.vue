<template>
  <div>
    <div class="container">
      <div v-if="postList.length > 0" class="row">
        <div class="col-lg-4" v-for="postItem of postList">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostList',
  data() {
    return {
      postList: []
    }
  },
  async mounted() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      this.postList = data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
