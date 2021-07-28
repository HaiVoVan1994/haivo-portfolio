<template>
  <section id="home">
      <div class="container">
        <AnimateOnVisible name="fade-right" duration="2000">
          <v-row class="d-flex flex-wrap">
              <v-col>
                <h4>{{ about.gretting }}</h4>
                <h1 class="profile-name">{{ about.name }}</h1>
                <div v-html="about.biography" class="biography">
                </div>
                <div class="profile-information">
                    <div class="social-wrap">
                          <ul>
                            <li>
                              <v-btn small v-on:click="openLink(links.facebook)" target="_blank">
                                <v-icon>fab fa-facebook</v-icon>
                              </v-btn>
                            </li>
                            <li>
                              <v-btn small v-on:click="openLink(links.linkedin)"  target="_blank">
                                <v-icon>fab fa-linkedin</v-icon>
                              </v-btn>
                            </li>
                            <li>
                              <v-btn small v-on:click="openLink(links.github)" target="_blank">
                                <v-icon>fab fa-github-square</v-icon>
                              </v-btn>
                            </li>
                            <li>
                              <v-btn small :href="links.mail" target="_blank">
                                <v-icon>far fa-envelope</v-icon>
                              </v-btn>
                            </li>
                            <li>
                              <v-btn color="primary" v-on:click="openLink(links.resume)" download>Resumé</v-btn>
                            </li>
                          </ul>
                        </div>
                  </div>
              </v-col>
              <v-col md="5" align="center">
                  <div class="profile-image">
                      <v-avatar :size="this.size">
                        <img :src="getImgUrl(links.avatar)" class="mb-4" >
                      </v-avatar>
                  </div>
              </v-col>
          </v-row>
          </AnimateOnVisible>
        </div>
  </section>
</template>

<script>
export default {
  props: ['about', 'links'],
  
  data() {
    return {
      size: 450,
      isXs: false
    }
  },
  
  mounted() {
    this.onResize();
      window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    openLink(link) {
       window.open(link);
    },

    onResize() {
      this.isXs = window.innerWidth < 850;
    },

    getImgUrl(img) {
        return require('@/assets/img/'+ img);
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.size) {
          this.size = 420;
        }
      }
      else {
          this.size = 240;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.v-btn--outlined {
  border: 2px solid currentColor;
}

.biography {
    font-size: 22px;
    line-height: 42px;
}
 
.profile-name {
    font-size: 48px;
    font-weight: bolder;
}

.profile-information {
  line-height: 50px;
}

.social-wrap ul {
  padding-left: 0;
}

.social-wrap ul li {
  padding: 0;
  display: inline;
  margin-right: 10px;
}

.social-wrap ul li:before {
    content: none;
}
</style>

