<script setup>

  import comicsList from '../../../js/comics.js'

</script>

<template>

  <nav>

    <ul>
      <li v-for="comic in comicsList.comics">
        <a v-bind:href="comic.rssurl">{{ comic.name }}</a>
      </li>
    </ul>
  </nav>

</template>

<style scoped>

</style>
