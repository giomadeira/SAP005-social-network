import { Navigation } from "/services/index.js"

export const Feed = () => {
  const nav = Navigation();

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  const content = () => {
    const contentElement = document.createElement("div");
    contentElement.innerHTML = `
    <h1>Post</h1>
    <form>
      <textarea name="" id="textPost" cols="70" rows="5" placeholder="escreva aqui..."></textarea>
      <button id="creatPost" >Post</button>
    </form>
    <p id="outputPost"></p>
    `;
    return contentElement;
  };
  rootElement.appendChild(content());

  const textPost = rootElement.querySelector("#textPost");
  const creatPost = rootElement.querySelector("#creatPost");
  const outputPost = rootElement.querySelector("#outputPost");

  creatPost.addEventListener("click", (event) => {
    event.preventDefault();
    const saveTextPost = textPost.value;
    console.log("post: " + saveTextPost);
  })

  return rootElement;
};