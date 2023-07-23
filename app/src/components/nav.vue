<script setup>

  import comicsList from '../../../js/comics.js'

</script>

<template>

  <nav>
    <ul>
      <li><router-link to="/">go to home</router-link></li>
      <li><router-link to="/test">go to test</router-link></li>
      <li><router-link to="/one">go to one</router-link></li>
    </ul>
<!-- 
    <ul>
      <li v-for="comic in comicsList.comics">
        <a v-bind:href="comic.rssurl">{{ comic.name }}</a>
      </li>
    </ul> -->
  </nav>

</template>

<style scoped>

</style>
