<template>
  <div>
    <div class="container">
      <div v-if="postList.length > 0" class="row">
        <div class="col-lg-4 my-3" v-for="postItem of postList">
          <div class="card h-100">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title" v-text="postItem.title"/>
              <p class="card-text" v-text="postItem.body"/>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <div class="d-flex">
                  <div class="mr-2">
                    <router-link :to="`/post/${postItem.id}/edit`" class="btn btn-primary mt-auto btn-edit">
                      <img src="/img/icons/pencil.svg" alt="pencil">
                    </router-link>
                  </div>
                  <div>
                    <button @click="REMOVE_POST(postItem.id)" class="btn btn-primary mt-auto btn-remove">
                      <img src="/img/icons/trash.svg" alt="trash">
                    </button>
                  </div>
                </div>
                <router-link :to="`/post/${postItem.id}`" class="btn btn-primary mt-auto btn-details">Go somewhere</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No posts</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'PostList',
  async mounted() {
    if (this.postList.length > 0) return
    try {
      await this.$store.dispatch('post/getPostList')
    } catch (e) {
      console.log(e)
    }
  },
  methods:{
    ...mapMutations('post', ['REMOVE_POST']),
  },
  computed: {
    ...mapState('post', ['postList'])
  }
}
</script>

<style lang="scss" scoped>
.btn-remove, .btn-edit {
  width: 42px;
  height: 38px;
}
</style>
