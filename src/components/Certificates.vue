<template>
  <section id="certificates">
      <div class="container">
          <AnimateOnVisible name="fade-up" duration="2000">
          <v-row justify="center" class="mb-4">
              <div class="title">
                <h1><u>{{ certificates.title }}</u></h1>
              </div>
          </v-row>
      <v-row>
         <v-col cols="12" v-for="(certificate, index) in certificates.certificates" :key="index">
          <v-card class="mx-auto">
            <v-card-title class="text-h6 justify-center">
              {{ certificate.title }}
            </v-card-title>
            <v-card-text v-if="certificate.type == 0" class="cert-detail">{{ certificate.detail }}</v-card-text>
            <v-card-text v-else class="cert-detail">This is <a :href="certificate.detail" target="_blank">my certificate</a></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </AnimateOnVisible>
      </div>
  </section>
</template>

<script>
const CertificateType = {
  EDUCATE: 0,
  CERTIFICATE: 1,
};

export default {
    props: ['certificates']
}
</script>

<style lang="scss" scoped>
img {
    max-width: 120px;
}

.cert-detail {
  text-align: center;
  font-weight: 600;
  color: unset !important;
  font-size:0.9rem;
}
</style>