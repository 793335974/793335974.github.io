var posts=["2025/10/03/hello-world/","2025/10/13/system/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };