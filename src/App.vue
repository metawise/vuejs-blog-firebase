<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AddBlog from './components/addblog';
  import ShowBlog from './components/showblog';
  import ListBlog from './components/list-blog';
  import Header from './components/header';

export default {
  name: 'app',
  components:{
    'add-blog': AddBlog,
    'show-blog': ShowBlog,
    'list-blog': ListBlog,
    'app-header': Header
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
