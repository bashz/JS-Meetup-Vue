<template>
  <div>
    <h2>Vue file</h2>
    <pre><code class="hljs" data-trim v-html="template">
    </code></pre>
  </div>
</template>

<script>
export default {
  name: "Index",
  data () {
    return {
      template: `&lt;template&gt;
  
&lt;/template&gt;

&lt;script&gt;

export default {

}
&lt;/script&gt;

&lt;style&gt;

&lt;/style&gt;`
    }
  }
}
</script>

<style>

</style>