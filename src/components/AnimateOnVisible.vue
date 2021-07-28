<template>
  <div :data-aos="name" :data-aos-duration="duration">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        duration: [String, Number]
    }
}
</script>