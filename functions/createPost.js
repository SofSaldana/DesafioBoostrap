export const createPost = (urlDataBase, post) => {
  fetch(`${urlDataBase}/posts.json`, {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
};
