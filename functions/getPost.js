export const getPost = (urlDataBase) => {
  fetch(`${urlDataBase}/posts.json`, {
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
      console.log(posts);
    });
};
