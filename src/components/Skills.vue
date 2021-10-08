<template>
  <section id="skills">
      <div class="container">
          <AnimateOnVisible name="fade-up" duration="2000">
          <v-row justify="center" class="mb-4">
              <div class="title">
                <h1><u>{{ skills.title }}</u></h1>
              </div>
          </v-row>
          <v-row justify="center" class="row d-flex flex-wrap">
            <v-col md="3" class="m-auto pb-4" v-for="(skill, index) in skills.skill" :key="index">
                <img id="imgLogo" class="img-responsive mx-auto d-block" :src="getImgUrl(skill.image)" :alt="skill.title"/>
                <div id="divAlt" class="altCaption text-center">{{ skill.title }}</div>
            </v-col>
          </v-row>
        </AnimateOnVisible>
      </div>
  </section>
</template>

<script>
export default {
    props: ['skills'],
    methods: {
        getImgUrl(img) {
            return require('../assets/img/logo/'+ img);
        },
    },
}
</script>

<style lang="scss" scoped>
img {
    max-width: 120px;
}
</style>