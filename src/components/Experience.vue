<template>
  <section id="experience">
        <div class="container">
          <AnimateOnVisible name="fade-up" duration="2000">
         <v-row justify="center" class="d-flex flex-wrap">
            <div class="title">
              <h1><u>{{ exp.title }}</u></h1>
            </div>
          </v-row>
          <v-row justify="center" class="d-flex flex-wrap">
              <v-timeline
                align-top
                dense
              >
              <v-timeline-item
                  :color="ex.id == 1 ? 'blue': 'purple'"
                  small
                  v-for="(ex, index) in exp.experience" 
                  :key="index"
                >
                <v-row class="pt-1">
                  <v-col>
                    <div class="role-tiltle">{{ ex.role }}</div>
                    <div class="company-name">
                        {{ ex.company }}
                    </div>
                    <div class="role-responsilities">
                          <ul v-html="ex.responsibilities">
                          </ul>
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <div class="history-timeline">{{ ex.history }}</div>
                  </v-col>
                </v-row>
                </v-timeline-item>
              </v-timeline>
        </v-row>
        </AnimateOnVisible>
    </div>
  </section>
</template>

<script>
export default {
    props: ['exp']
}
</script>

<style lang="scss" scoped>
.company-name {
  font-weight: 400;
}

.role-tiltle {
  font-weight: 700;
}

article .inner {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    z-index: 1;
}

.vertical-center {
    display: flex;
    align-items: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>