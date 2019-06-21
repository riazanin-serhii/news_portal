var client = new XMLHttpRequest();
client.open('GET','https://newsapi.org/v2/everything?q=apple&from=2019-06-20&to=2019-06-20&sortBy=popularity&apiKey=a71e15b3671449f5a9b83a25cf190c37',false);
client.send();


if (client.status != 200) {
  alert( client.status + ' : ' + client.statusText );  
} else {
 x = JSON.parse(client.responseText) ;
 y = x.articles;
 console.log(y[0]);
 for(i=0; i<y.length; i++){
var img = document.createElement("img");
var div = document.createElement("div");
var h2 = document.createElement("h2");
var p = document.createElement("p");

img.src = y[i].urlToImage;
h2.innerHTML = y[i].title;
p.innerHTML = y[i].content;

div.style.border = "1px solid black";
img.style.heigth = "150px";
img.style.width = "150px";

document.getElementById("main").appendChild(div);
div.appendChild(h2);
div.appendChild(img);
div.appendChild(p);

 }
}