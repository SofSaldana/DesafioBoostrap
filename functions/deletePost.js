export const deletedPost = (urlDataBase, id) => {
  fetch(`${urlDataBase}posts/${id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
};
