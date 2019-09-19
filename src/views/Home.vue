<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeContent/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HomeContent from '@/components/HomeContent.ts'; // @ is an alias to /src

  @Component({
    components: {
      HomeContent,
    },
  })
  export default class Home extends Vue {}
</script>
