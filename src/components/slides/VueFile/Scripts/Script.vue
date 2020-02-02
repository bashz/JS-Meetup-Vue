<template>
  <div>
    <h2>Script</h2>
    <pre><code class="hljs" data-trim v-html="script">
    </code></pre>
  </div>
</template>

<script>
export default {
  name: "Script",
  data () {
    return {
      script: `&lt;script&gt;
import MyComponent from "./components/MyComponent"
import isNumber from "is-number";
const foo = 'bar'
export default {
  name: "app",
  components: {
    MyComponent
  },
  ...
};
&lt;/script&gt;`
    }
  }
}
</script>

<style>

</style>