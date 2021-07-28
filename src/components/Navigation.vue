<template>
  <div class="nar-bar-container">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">HaiVo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :flat="flat"
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
          <toggleTheme />
          <v-btn left text @click="$vuetify.goTo('#home')">
            <span class="mr-2">HaiVo</span>
          </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#experience')">
          <span class="mr-2">Experience</span>
        </v-btn>
         <v-btn text @click="$vuetify.goTo('#skills')">
          <span class="mr-2">Skills</span>
        </v-btn>
         <v-btn text @click="$vuetify.goTo('#projects')">
          <span class="mr-2">Project</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#blog')">
          <span class="mr-2">Blog</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contact</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.nar-bar-container {
  height: 80px;
}

.v-toolbar {
  transition: 2s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #FFFFFF;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #121212;
}

</style>

<script>
import toggleTheme from "../components/ToggleTheme.vue"

export default {
  components: {
    toggleTheme
  },

  props: {
    flat: Boolean,
  },

  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["fas fa-home", "Home", "#home"],
      ["fas fa-bookmark", "Experience", "#experience"],
      ["fas fa-cog", "Skills", "#skills"],
      ["fas fa-code-branch", "Projects", "#projects"],
      ["fas fa-blog", "Blog", "#blog"],
      ["fas fa-envelope", "Contact", "#contact"],
    ],
  }),
  
  mounted() {
    this.onResize();
      window.addEventListener("resize", this.onResize, { passive: true });
  },
  
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  }
};
</script>
