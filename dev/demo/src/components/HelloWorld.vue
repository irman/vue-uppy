<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue-uppy-dashboard :dashboardOptions="{inline: true}"></vue-uppy-dashboard>
    <button type="button" id="btnGo">Go</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueUppyDashboard } from 'vue-uppy';

@Component({
  components: {
    VueUppyDashboard,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style src="@uppy/core/dist/style.css"></style>
<style src="@uppy/dashboard/dist/style.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
