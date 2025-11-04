var posts=["2025/10/26/Nginx/","2025/10/26/cloudserver/","2025/11/02/jsproject/","2025/10/29/mysql/","2025/10/03/hello-world/","2025/11/04/js类的使用方法/","2025/10/13/system/","2025/11/04/学习ts/","2025/10/13/windowsCmd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };