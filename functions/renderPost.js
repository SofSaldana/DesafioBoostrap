import { getPost } from "./getPost.js";

export const renderPost = (imgUrl, title) => {
  const postContainer = document.createElement("div");
  postContainer.classList.add("card", "card__main", "mb-3");

  const postBody = document.createElement("div");
  postBody.classList.add("card-body");

  const postImg = document.createElement("img");
  postImg.classList.add("img__card-main-user");
  postImg.src = imgUrl;
  postImg.alt = "Imagen Descriptiva";

  const postTitleLink = document.createElement("a");
  postTitleLink.classList.add("anchor__card-main");
  postTitleLink.href = "./post1.html";

  const postTitle = document.createElement("h5");
  postTitle.setAttribute("id", "testing01");
  postTitle.classList.add("card-title", "title__post-h5");
  // const selectPostTitle = document.getElementById("kycprro");
  postTitle.innerText = title;

  const postCardText = document.createElement("p");
  postCardText.classList.add("card-text");

  const smallText = document.createElement("small");
  smallText.classList.add("text-muted");

  const postTagsContainer = document.createElement("div");
  postTagsContainer.classList.add("div__card-hashtag");

  const postTags = document.createElement("a");
  postTags.classList.add("a__card-hashtag", "text-decoration-none", "btn");

  const postFooter = document.createElement("div");
  postFooter.classList.add("div__card-buttons", "text");

  const postLike = document.createElement("img");
  postLike.classList.add("img__favorite-icon");
  postLike.src = "./assets/favorito.png";
  postLike.alt = "Imagen Descriptiva";

  const postReactions = document.createElement("a");
  postReactions.classList.add(
    "a__card-button-reactions",
    "text-decoration-none",
    "btn"
  );
  postReactions.innerText = "34 reactions";

  const postComments = document.createElement("img");
  postComments.classList.add("img__convesation-icon");
  postComments.src = "./assets/burbuja-de-dialogo.png";
  postComments.alt = "Imagen Descriptiva";

  const postNumberOfComments = document.createElement("a");
  postNumberOfComments.classList.add(
    "a__card-button-comments",
    "text-decoration-none",
    "btn"
  );
  postNumberOfComments.innerText = "26 comments";

  postBody.appendChild(postTitle);
  postBody.appendChild(postCardText);
  postBody.appendChild(postTagsContainer);
  postTagsContainer.appendChild(postTags);
  postBody.appendChild(postFooter);
  postBody.appendChild(postLike);
  postBody.appendChild(postReactions);
  postBody.appendChild(postComments);
  postBody.appendChild(postNumberOfComments);
  postContainer.appendChild(postImg);
  postContainer.appendChild(postBody);

  return postContainer;
};
