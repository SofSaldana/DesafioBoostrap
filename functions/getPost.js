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

export const getSinglePost = () => {
  fetch(
    "https://dev-to-js-hp-default-rtdb.firebaseio.com/posts/-NGiTptjO27TufemUoSE",
    {
      method: "GET",
      mode: "no-cors",
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Credentials": true,
      // },
    }
  )
    .then((response) => console.log(response))
    .then((result) => console.log(result));
};
