<template>
  <article>
    <h2>{{blog.title}}</h2>
    <p>{{blog.content}}</p>
  </article>
</template>

<script>
    export default {
        name: "singleBlog",
      data(){
          return{
            blog: [],
            id: this.$route.params.id
          }
      },
      created(){
          this.$http.get('https://vuejs-blog-52c22.firebaseio.com/blog/' + this.id +'.json').then(function(data){
            return data.json();
          }).then(function(data){
            this.blog = data
          })
      }
    }
</script>

<style scoped>
article{
  max-width: 560px;
  margin: 0 auto;
}
</style>
