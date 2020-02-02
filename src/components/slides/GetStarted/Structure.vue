<template>
  <div>
    <h2>Project Structure</h2>
    <pre>
my-project
├── public
│   ├── favicon.ico
│   └── <span @click="showFile('index')">index.html</span>
├── src
│   ├── <span @click="showFile('app')">App.vue</span>
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── <span @click="showFile('helloworld')">HelloWorld.vue</span>
│   └── <span @click="showFile('main')">main.js</span>
└── <span @click="showFile('package')">package.json</span> 
    </pre>
    <div ref="modal" class="modal" tabindex="0" v-if="selectedFile" @blur="hideFile">
      <pre><code class="hljs" data-trim v-html="selectedFile">
      </code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Structure",
  data () {
    return {
      selectedFile: null,
      files: {
        index: `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;
    &lt;link rel="icon" href="&lt;%= BASE_URL %&gt;favicon.ico"&gt;
    &lt;title&gt;my-project&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;noscript&gt;
      &lt;strong&gt;We're sorry but temp doesn't work properly without JavaScript enabled. Please enable it to continue.&lt;/strong&gt;
    &lt;/noscript&gt;
    &lt;div id="app"&gt;&lt;/div&gt;
    &lt;!-- built files will be auto injected --&gt;
  &lt;/body&gt;
&lt;/html&gt;`,
        app: `&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;img alt="Vue logo" src="./assets/logo.png"&gt;
    &lt;HelloWorld msg="Welcome to Your Vue.js App"/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
&lt;/script&gt;

&lt;style&gt;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
&lt;/style&gt;`,
        helloworld: `&lt;template&gt;
  &lt;div class="hello"&gt;
    &lt;h1&gt;{{ msg }}&lt;/h1&gt;
    &lt;p&gt;
      For a guide and recipes on how to configure / customize this project,&lt;br&gt;
      check out the
      &lt;a href="https://cli.vuejs.org" target="_blank" rel="noopener"&gt;vue-cli documentation&lt;/a&gt;.
    &lt;/p&gt;
    &lt;h3&gt;Installed CLI Plugins&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener"&gt;babel&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener"&gt;eslint&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;h3&gt;Essential Links&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="https://vuejs.org" target="_blank" rel="noopener"&gt;Core Docs&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://forum.vuejs.org" target="_blank" rel="noopener"&gt;Forum&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://chat.vuejs.org" target="_blank" rel="noopener"&gt;Community Chat&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://twitter.com/vuejs" target="_blank" rel="noopener"&gt;Twitter&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://news.vuejs.org" target="_blank" rel="noopener"&gt;News&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;h3&gt;Ecosystem&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="https://router.vuejs.org" target="_blank" rel="noopener"&gt;vue-router&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://vuex.vuejs.org" target="_blank" rel="noopener"&gt;vuex&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener"&gt;vue-devtools&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"&gt;vue-loader&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"&gt;awesome-vue&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
&lt;/script&gt;

&lt;!-- Add "scoped" attribute to limit CSS to this component only --&gt;
&lt;style scoped&gt;
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
&lt;/style&gt;`,
        main: `import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')`,
        package: `{
  "name": "my-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^2.6.5",
    "vue": "^2.6.10"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.0.1",
    "@vue/cli-plugin-eslint": "^3.0.1",
    "@vue/cli-service": "^3.0.1",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "vue-template-compiler": "^2.6.10"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}`
      }
    }
  },
  methods: {
    showFile (filename) {
      this.selectedFile = this.files[filename]
      this.$nextTick(() => {
        this.$refs.modal.focus()
        hljs.highlightBlock(this.$refs.modal)
      })
    },
    hideFile () {
      this.selectedFile = null
    }
  }
}
</script>

<style>
.modal{
  position: fixed;
  top: 3%;
  padding: 3%;
  width: 94%;
  background-color: #35495e;
  height: 72%;
  font-size: 28px;
}
</style>