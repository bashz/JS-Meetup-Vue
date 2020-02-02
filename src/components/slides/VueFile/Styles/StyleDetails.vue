<template>
  <div>
    <h2>Dynamic Styling</h2>
    <pre><code class="hljs" data-trim v-html="style">
    </code></pre>
    <pre><code class="hljs" data-trim v-html="classe">
    </code></pre>
  </div>
</template>

<script>
export default {
  name: "StyleDetails",
  data () {
    return {
      style: `&lt;div
  :style="{
    color: activeColor,
    fontSize: fontSize + 'px'
  }"
/&gt;
...
data: {
  activeColor: 'red',
  fontSize: 30
}`,
      classe: `&lt;div :class="{ active: isActive }"/&gt;
...
data: {
  isActive: true
}`
    }
  }
}
</script>

<style>

</style>
