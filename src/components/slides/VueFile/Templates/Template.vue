<template>
  <div>
    <h2>Template System</h2>
    <pre><code class="hljs" data-trim v-html="template">
    </code></pre>
  </div>
</template>

<script>
export default {
  name: "Template",
  data () {
    return {
      template: `&lt;template&gt;
  &lt;div class="app"&gt;
    &lt;some-component v-if="title"&gt;&#123;&#123;title&#125;&#125;&lt;/some-component&gt;
    &lt;ul&gt;
      &lt;li
        v-show="product.amount"
        v-for="product in products"
      &gt;
        &#123;&#123;product.name&#125;&#125; 
        &#123;&#123;product.weight + 'Kg'&#125;&#125;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;`
    }
  }
}
</script>

<style>

</style>