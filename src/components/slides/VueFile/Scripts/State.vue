<template>
  <div>
    <h2>States</h2>
    <pre><code class="hljs" data-trim v-html="script">
    </code></pre>
  </div>
</template>

<script>
export default {
  name: "State",
  data () {
    return {
      script: `...
data () {
  return {
    foo: 'bar'
  }
},
props: {
  amount: {
    type: Number,
    default: 0
  }
},
inject: {
  clickCount: {
    type: Number
  }
},
computed: {
  isActive () {
    return this.foo === 'bar'
  }
}
...`
    }
  }

}
</script>

<style>
