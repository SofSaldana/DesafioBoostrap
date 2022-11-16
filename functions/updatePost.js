export const updatePost = (urlDataBase, newPostInfo, id) => {
  fetch(`${urlDataBase}posts/${id}.json`, {
    method: "PATCH",
    body: JSON.stringify(newPostInfo),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
};
