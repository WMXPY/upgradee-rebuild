<template><h1 v-on:click="test">a{{wel}}</h1></template>
<script>
import '../App'
export default {
    data: function(){
        return {
            wel : 'testsdsa'
        }
    },
    methods: {
        test: function(){
            console.log('test');
        }
    },
    name: 'main-page'
  }
</script>
  