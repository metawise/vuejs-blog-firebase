import showBlog from  './components/showblog';
import addBlog from  './components/addblog';
import singleBlog from './components/singleBlog';

export default [
  {path: '/', component: showBlog},
  {path: '/add', component: addBlog},
  {path: '/blog/:id', component: singleBlog},
]
