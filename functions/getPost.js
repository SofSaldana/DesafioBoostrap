export const getPost = (urlDataBase, success) => {
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
      success(posts);
      // return posts;
      // console.log(posts);
    });
  // .then((posts => posts))
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
