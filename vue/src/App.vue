<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="camera">打开摄像头</button>
    <img id="myImage">
    <router-view/>
  </div>
</template>

<script>
import {cameraTakePicture} from '../static/cordovaplugin.js'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    camera() {
      cameraTakePicture()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
