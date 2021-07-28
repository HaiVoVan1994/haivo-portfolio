<template>
  <section id="blog">
      <div class="container">
        <AnimateOnVisible name="fade-right" duration="2000">
          <v-row justify="center" class="mb-4">
              <div class="title">
                <h1><u>Blog</u></h1>
              </div>
          </v-row>
          <div v-if="this.posts.length > 0" class="mt-10">
              <v-row justify="center" class="row d-flex flex-wrap">
                <v-card
                      class="mx-auto"
                      max-width="300px"
                      v-on:click="gotoPost(post.postUrl)"
                      v-for="(post, index) in this.posts"
                      :key="index"
                  >
                      <v-img
                      :src="post.imageUrl"
                      height="200px"
                      ></v-img>

                      <v-card-title>
                        {{ post.title }}
                      </v-card-title>
                  </v-card>
                </v-row>
                <v-row justify="left">
                      <v-col class="text-end"><v-btn color="primary" v-on:click="gotoPost(baseUrl)"  download>See More</v-btn></v-col>
                </v-row>
          </div>
          <v-row justify="center" v-else>
              <h3>No Posts</h3>
          </v-row>
        </AnimateOnVisible>
      </div>
  </section>
</template>

<script>
import { server } from '../server'

export default {
    data() {
      return {
        posts: [],
        baseUrl: server.defaults.blogURL
      }
    },

    async created() {
      let that = this
      await server.get('wp/v2/posts&per_page=4')
        .then(res => {
          if (res.data && res.data.length > 0) {
            let response = res.data
            response.map(function(val, key) {
                let title = val.title.rendered
                let imgUrl = require('../assets/img/defaultPostImage.jpg');
                if (Array.isArray(val.featured_image_urls.medium)) {
                    imgUrl = val.featured_image_urls.medium[0]
                }
                let postUrl = val.link

                that.posts.push({
                    title: title,
                    imageUrl: imgUrl,
                    postUrl: postUrl
                })
            })
          }
        }).catch(
          that.posts = []
        )
    },

    methods: {
        gotoPost(url) {
            window.open(url)
        }
    }
}
</script>