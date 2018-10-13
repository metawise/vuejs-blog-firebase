<template>
  <div v-theme="wide" id="show-blog">
    <h1 style="float: left;">Blog</h1>
    <button v-on:click="wide = !wide" style="float: right; margin-top: 30px;" >Switch Theme</button>
    <input type="text" placeholder="Search" v-model="search">

    <div v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{blog.title | upper-case }}</h2>
    </div>
  </div>
</template>

<script>
  import SearchBar from '../mixins/searchBar';

  export default {
    name: "showblog",
    data() {
      return {
        blogs: [],
        wide: true,
        search: ''
      }
    },
    created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
        this.blogs = data.body.slice(0, 5);
      });
    },
    computed:{

    },
    filters:{
      'upper-case': function (value) {
        return value.toUpperCase();
      },
      excerpt(value){
        return value.slice(0, 200) + '...';
      }
    },
    directives:{
      'theme':{
        bind(el, binding, vnode){
          console.log(binding);
          if(binding.wide){
            el.style.maxWidth = '1200px';
          }else{
            el.style.maxWidth = '560px';
          }
        }
      }
    },
    mixins: [SearchBar]
  }
</script>

<style scoped>
  #show-blog {
    max-width: 800px;
    margin: 0 auto;
  }
  #show-blog > div{
    background-color: #f2f2f2;
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
  }
  input{
    clear: both;
    border: 1px solid darkgray;
    display: block;
    padding: 10px;
    width: 100%;
  }
</style>
