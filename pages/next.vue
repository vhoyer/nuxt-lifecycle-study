<template>
  <div>
    <p>
      <nuxt-link to="/">previous</nuxt-link>
    </p>

    <p>
      I've run
    </p>

    <p>
      a value came from: {{ a }}
    </p>
  </div>
</template>

<script>
import { log } from '~/log.js'

export default {
  name: 'next',
  middleware() {
    log('next: middleware')
  },
  fetch() {
    log('next: new fetch')
  },
  asyncData(_context) {
    log('next: asyncData')
    return { a: 'server' }
  },
  data() {
    log('next: data')
    return { a: 'client' }
  },
  beforeCreate() {
    log('next: beforeCreate')
  },
  created() {
    log('next: created')
  },
  beforeMount() {
    log('next: beforeMount')
  },
  mounted() {
    log('next: mounted')
  },
  beforeUpdate() {
    log('next: beforeUpdate')
  },
  updated() {
    log('next: updated')
  },
  beforeDestroy() {
    log('next: beforeDestroy')
  },
  destroyed() {
    log('next: destroyed')
  },
  beforeRouteEnter(_to, _from, next) {
    log('next: beforeRouteEnter')
    next()
  },
  beforeRouteUpdate() {
    log('next: beforeRouteUpdate')
  },
  beforeRouteLeave(_to, _from, next) {
    log('next: beforeRouteLeave')
    next()
  },
};
</script>
