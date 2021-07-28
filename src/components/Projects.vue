<template>
  <section id="projects">
      <div class="container">
          <AnimateOnVisible name="fade-up" duration="2000">
          <v-row justify="center" class="mb-4">
              <div class="title">
                <h1><u>Projects</u></h1>
              </div>
          </v-row>
          <v-row justify="center" class="d-flex flex-wrap">
                 <v-card
                    v-for="(pro, index) in projects.project"
                    :key = "index"
                    class="mx-2 mt-4"
                    width="400px"
                >
                    <v-img
                    :src="getImgUrl(pro.image)"
                    height="200px"
                    ></v-img>

                    <v-card-title>
                    {{ pro.name }}
                    </v-card-title>

                    <v-card-text v-html="pro.description">
                    </v-card-text>
              </v-card>
          </v-row>
        </AnimateOnVisible>
      </div>
  </section>
</template>

<script>

export default {
    props: ['projects'],

    methods: {
        openSource (link) {
            window.open(link);
        },

        getImgUrl(img) {
            if (!img)
                return null;
            return require('../assets/img/project/'+ img);
        },
    },
}
</script>