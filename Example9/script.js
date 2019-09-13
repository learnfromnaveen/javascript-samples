

function loadArticles(articles){
    
    console.log("Total Articles:" + articles.length);
    
    var parentContainer = document.getElementById("newsContainer");

    articles.forEach(function(article){
        //console.log(JSON.stringify(article));
        renderArticle(article, parentContainer);
    });

}

function renderArticle(article, parentContainer ){
      
    //1. create a div element  
    var articleContainer  = document.createElement("div");  

    //2. apply style  
    articleContainer.className = "article-container";

    //3. set the description to innerHTML
    articleContainer.innerHTML = article.description;  

    //4. append the artcle container to parent container  
    parentContainer.appendChild(articleContainer);
}


(
    function loadNews(){
        setTimeout(function(){
            //loadArticles(data.articles);
        }, 3000);
    }
)();



