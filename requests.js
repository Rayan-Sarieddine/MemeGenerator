let memes;
const notice = document.querySelector(".notice");
async function fetchData() {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    memes = data.data;
    // Any further processing using 'memes' can be done here
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

let i = 0;
const generate = document.querySelector(".btn-auto");
generate.addEventListener("click", async () => {
  await fetchData();
  console.log(memes.memes[0].url);
  let li = document.createElement("li");
  li.classList.add("meme-img");
  li.innerHTML = `
  <img src="${memes.memes[index].url}" alt="img">
  <div class="text top">
 ${memes.memes[index].name}
  </div>
  <div class="red-cross">X</div>
  `;
  gallery.appendChild(li);
  index++;
  document.querySelectorAll(".red-cross").forEach((elm) => {
    elm.addEventListener("click", () => {
      let img_link = elm.parentNode.querySelector("img").getAttribute("src");
      navigator.clipboard.writeText(img_link);
      setTimeout(() => {
        notice.classList.toggle("hidden");
      }, 1000);
      notice.classList.toggle("hidden");
      elm.parentNode.remove();
    });
  });
});
