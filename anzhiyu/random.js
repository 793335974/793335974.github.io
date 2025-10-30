var posts=["2025/10/26/cloudserver/","2025/10/26/Nginx/","2025/10/03/hello-world/","2025/10/13/system/","2025/10/29/mysql/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };