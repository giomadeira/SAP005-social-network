import {  Navigation, newPost, getPosts, post} from "/services/index.js"

export const Feed = () => {
  const nav = Navigation();
  window.onload = getPosts();

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  const content = () => {
    const contentElement = document.createElement('div');
    contentElement.innerHTML = `
    <div class="containerFeed">
     <form class= "creatPost">
      <textarea id="textPost" class= "creatText" placeholder="escreva aqui..."></textarea>
      <button id="creatPost" class= "creatBtn">Enviar</button>
     </form>
     <div id="feedPost"></div>
    </div>
    `;
    return contentElement;
  };
  rootElement.appendChild(content());

  const textPost = rootElement.querySelector("#textPost");
  const creatPost = rootElement.querySelector("#creatPost");

  creatPost.addEventListener("click", (event) => {
    event.preventDefault();
    const saveTextPost = textPost.value;
    newPost(saveTextPost);
    getPosts();
  });
  return rootElement;
};
