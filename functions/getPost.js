import { renderPost } from "./renderPost.js";

export const getPost = (urlDataBase) => {
  fetch(`${urlDataBase}posts.json`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const postIds = Object.keys(data);
      const posts = postIds.map((postId) => {
        const post = data[postId];
        const postToObject = {
          id: postId,
          ...post,
        };
        return postToObject;
      });
      return posts;
    })
    .then((posts) => {
      const postsContainer = document.getElementById("renderContainer");
      console.log(postsContainer);
      posts.forEach((post) => {
        console.log(post);
        const showPost = renderPost(post.coverImage, post.title);
        // const postCard = document.createElement("div");
        // postCard.classList.add("col-sm-4");
        // postCard.appendChild(showPost);
        postsContainer.appendChild(showPost);
      });
    });
};

export const getSinglePost = (urlDataBase, id) => {
  fetch(`${urlDataBase}posts/${id}.json`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
};
