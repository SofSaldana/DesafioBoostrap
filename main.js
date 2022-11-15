import enviroment from "../env.js";
import { createPost } from "./functions/createPost.js";
import { getPost } from "./functions/getPost.js";
import { getSinglePost } from "./functions/getPost.js";
import { updatePost } from "./functions/updatePost.js";
import { deletedPost } from "./functions/deletePost.js";
const urlDataBase = enviroment.urlDb;

// const payaso = getPost(urlDataBase);
// console.log(payaso)
getPost(urlDataBase, (posts) => console.log(posts));

// const renderContainer = document.querySelectorAll('#renderContainer')

// heroes.forEach(heroe => {
//     const card = createCard(heroe.nombre, heroe.descripcion, heroe.img);
//     const col = document.createElement('div');
//     col.classList.add('col-sm-4');
//     col.appendChild(card);
//     row.appendChild(col);
// });

// const post = {
//   id: "43348973476878",
//   coverImage: "www.img-url.com",
//   title: "Learn React from scratch",
//   postBody: "Lorem ipsum dolor sit amet",
//   tags: ["javascript", "windows", "rgb", "beginners"],
//   creationDate: 10 / 10 / 2022,
// };

// createPost(urlDataBase, post);
// getPost(urlDataBase);
// getSinglePost(urlDataBase, "-NGiTptjO27TufemUoSE");
// const newInfo = {title: "huele a crotolamo"}
// updatePost(urlDataBase,newInfo,"-NGiTptjO27TufemUoSE");
// deletedPost(urlDataBase,"-NGoS6RCAtnNFHALmdw_");
