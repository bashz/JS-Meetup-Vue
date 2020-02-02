<template>
  <div>
    <h2>LifeCycle</h2>
    <pre><code class="hljs" data-trim v-html="script">
    </code></pre>
  </div>
</template>

<script>
export default {
 
  name: "LifeCycle",
  data () {
    return {
      script: `...
beforeCreate(){},
created(){}
beforeMount(){}
mounted(){}
beforeUpdate(){}
updated(){}
activated(){}
deactivated(){}
beforeDestroy(){}
destroyed(){}
...`
    }
  }

}
</script>

<style>
