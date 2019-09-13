

function loadArticles(articles){
    
    console.log("Total Articles:" + articles.length);
    
    var parentContainer = document.getElementById("articlesContainer");

    articles.forEach(function(article){
        //console.log(JSON.stringify(article));
        renderArticle(article, parentContainer);
    });

}

function renderArticle(article, parentContainer ){
    
    //1. Create article tag
    var articleCtrl = document.createElement("article"); 
    
    //2.0 Add article title  
    var articleTitleCtrl  = document.createElement("h1"); 
    articleTitleCtrl.innerText = article.title;  

    //2.1 Add article title  to article control 
    articleCtrl.appendChild(articleTitleCtrl);
    
    //2.2 Add author and published data to article
    var articleMetaDataCtrl  = document.createElement("p");  
    articleMetaDataCtrl.innerHTML = "<strong>Author:</strong>" + article.author + ", " + "<strong>Published:</strong>" +  article.publishedAt;
    
    //2.3 Add article meta data control to article control 
    articleCtrl.appendChild(articleMetaDataCtrl);


    //2.4 Create a div container to show the artcle image  
    var articleImageContainer  = document.createElement("div");  
    
    var articleImageCtrl  = document.createElement("img");  
    articleImageCtrl.className = "article-image"; 
    articleImageCtrl.src = article.urlToImage;

    var  articleImageSource  = document.createElement("span"); 
    articleImageSource.innerText = "source : " + article.source.name;  

    //2.5 add image and source control to article image contianer  
    articleImageContainer.appendChild(articleImageCtrl);  
    articleImageContainer.appendChild(articleImageSource);  

    //2.6 add article image container to article container 
    articleCtrl.appendChild(articleImageContainer);

    //2.7 Create a content
    var articleContentCtrl = document.createElement("p");  
    articleContentCtrl.className = "article-content"; 
    articleContentCtrl.innerHTML = article.content;  

    //2.8 add article content to article container  
    articleCtrl.appendChild(articleContentCtrl);


    //3.Add article to parent contriner  
    parentContainer.appendChild(articleCtrl);
    
}


(
    function loadNews(){
        setTimeout(function(){
            loadArticles(data.articles);
        }, 3000);
    }
)();



