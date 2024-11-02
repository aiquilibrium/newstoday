const { urlencoded } = require("express");

function createNewsCards(articles) {
 const newsContainer = document.getElementById("news-container");

articles.forEach((article) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.maxWidth = "400px";

  const image = document.createElement("img");
  image.src = article.image_url;
  image.classList.add("card-img-top");
  image.alt = "News Image";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = article.title;

  const content = document.createElement("p");
  content.classList.add("card-text");
  let newsContent = article.content;

  if (typeof newsContent === "object" && newsContent !== null) {
    newsContent = JSON.stringify(newsContent);
  }

  if (typeof newsContent === "string") {
    if (newsContent.length > 100) {
      newsContent = newsContent.substring(0, 100) + "...";
    }
  } else {
    newsContent = ""; // Set an empty string if it's not a string
  }

  content.textContent = newsContent;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const source = document.createElement("small");
  source.classList.add("text-muted");
  source.textContent = `Source: ${article.source}`;

  const publishTime = document.createElement("small");
  publishTime.classList.add("text-muted");
  publishTime.textContent = `Published: ${article.publishedAt}`;

  cardBody.appendChild(title);
  cardBody.appendChild(content);

  cardFooter.appendChild(source);
  cardFooter.appendChild(document.createElement("br"));
  cardFooter.appendChild(publishTime);

  card.appendChild(image);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  newsContainer.appendChild(card);
});

}
    
function collapseNews ( country) {
  console.log ('show/hide for country: ');
  console.log (country);
  var className = country+"-class-sel";
  var e = document.getElementsByClassName (className);  
  console.log(e[0]);
  e[0].style.display = 'none'; 
  return;
}

function expandNews ( country) { 
  var className = country+"-class-sel";
  var e = document.getElementsByClassName (className);    
  e[0].style.display = 'block'; 
  return;
}