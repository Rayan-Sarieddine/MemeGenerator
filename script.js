const gallery = document.querySelector(".gallery");
const form = document.querySelector("#meme-form");
const img_url = document.querySelector("#uploaded-img");
const top_text = document.querySelector("#text-top");
const bottom_text = document.querySelector("#text-bottom");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.classList.add("meme-img");
  li.innerHTML = `
  <img src="${img_url.value}" alt="invalid URL">
  <div class="text top">
 ${top_text.value}
  </div>
  <div class="text bottom">
  ${bottom_text.value}
  </div>
  <div class="red-cross">X</div>
  `;
  gallery.appendChild(li);
  document.querySelectorAll(".red-cross").forEach((elm) => {
    elm.addEventListener("click", () => {
      elm.parentNode.remove();
    });
  });
});
