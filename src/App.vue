<template>
  <div id="app">
    <label>Input:</label>
    <input v-model="inputText" />
    <button @click="convert">to upper case</button>
    <br />
    <label>Output:</label>
    <input v-model="outputText" disabled />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import * as Comlink from 'comlink';
  import WebpackWorker from 'worker-loader!@/my.worker';

  @Component
  export default class App extends Vue {
    private inputText = '';
    private outputText = '';
    private readonly worker = Comlink.wrap<WebpackWorker>(new WebpackWorker());

    convert(): void {
      this.outputText = '';
      this.worker
        .toUpperCase(this.inputText)
        .then((result) => (this.outputText = result));
    }
  }
</script>
