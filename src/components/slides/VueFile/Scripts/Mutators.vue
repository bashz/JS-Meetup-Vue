<template>
  <div>
    <h2>Mutators</h2>
    <pre><code class="hljs" data-trim v-html="script">
    </code></pre>
  </div>
</template>

<script>
export default {

  name: "Mutators",
  data () {
    return {
      script: `...
methods: {
  toUpper(str) {
    return str.toUpperCase()
  }
}
watch: {
  foo (newValue, oldValue) {
    this.odd = (newValue % 2) ? newValue : oldValue;
  }
},
directives: {
  focus
   (el) {
    el.focus()
  }
},
filters: {
  capitalize (value) {
    return value.toString().charAt(0).toUpperCase() + value.slice(1)
  }
}
...`
    }
  }

}
</script>

<style>
