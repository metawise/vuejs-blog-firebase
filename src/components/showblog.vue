<template>
  <div v-theme="wide" v-bind:class="{wide: wide}" id="show-blog">
    <h1 style="float: left;">Blog</h1>
    <button v-on:click="change_width(wide)" style="float: right; margin-top: 30px;">Switch Theme</button>

    <div class="search-bar"><input type="text" placeholder="Search" v-model="search" class="search"></div>

    <div v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | upper-case }}</h2>
      </router-link>
      <p>{{blog.content | excerpt}}</p>
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
        wide: false,
        search: ''
      }
    },
    methods:{
      change_width: function (value) {
        this.wide = !value;
      }
    },
    created() {
      this.$http.get('https://vuejs-blog-52c22.firebaseio.com/blog.json').then(function (data) {
        return data.json();
        //this.blogs = data.content.slice(0, 5);
      }).then(function(data){
        var blogsArray = [];
        for (let key in data){
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
    },
    computed: {},
    filters: {
      'upper-case': function (value) {
        return value.toUpperCase();
      },
      excerpt(value) {
        return value.slice(0, 200) + '...';
      }
    },
    directives: {
      'theme': {
        bind(el, binding, vnode) {
          console.log(binding.wide);
          // if (binding.wide) {
          //   el.style.maxWidth = '1200px';
          // } else {
          //   el.style.maxWidth = '560px';
          // }
        }
      },
      'rainbow':{
        bind(el, binding, vnode){
          el.style.color = '#' + Math.random().toString().slice(2, 8);
        }
      }
    },
    mixins: [SearchBar]
  }
</script>

<style scoped>
  #show-blog {
    margin: 0 auto;
    max-width: 560px;
  }

  #show-blog > div {

    background-color: #f2f2f2;
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
  }
  #show-blog.wide{
    max-width: 1200px;
  }
  .search-bar{
    margin: 0 20px;
  }
  .search-bar input{
    width: -webkit-fill-available;
  }
  input {
    clear: both;
    border: 1px solid darkgray;
    display: block;
    padding: 10px;
  }
  a{
    text-decoration: none;
  }
</style>
