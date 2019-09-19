<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AboutContent from '@/components/AboutContent'; // @ is an alias to /src

@Component({
  components: {
    AboutContent,
  },
})
export default class About extends Vue {
}
</script>