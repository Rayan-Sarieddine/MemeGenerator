let memes;
let index = 0;
const notice = document.querySelector(".notice");
async function fetchData() {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    memes = data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const generate = document.querySelector(".btn-auto");
generate.addEventListener("click", async () => {
  await fetchData();
  let li = document.createElement("li");
  li.classList.add("meme-img");
  li.innerHTML = `
  <img src="${memes.memes[index].url}" alt="img">
  <div class="text top">
 ${memes.memes[index].name}
  </div>
  <div class="red-cross">X</div>
  `;
  index++;
  gallery.appendChild(li);
  document.querySelectorAll(".red-cross").forEach((elm) => {
    elm.addEventListener("click", () => {
      let img_link = elm.parentNode.querySelector("img").getAttribute("src");
      navigator.clipboard.writeText(img_link);
      setTimeout(() => {
        notice.classList.toggle("hidden");
      }, 1500);
      notice.classList.toggle("hidden");
      elm.parentNode.remove();
    });
  });
});
