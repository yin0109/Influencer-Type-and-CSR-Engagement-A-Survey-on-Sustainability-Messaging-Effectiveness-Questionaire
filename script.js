
const groups = [
  {
    image: "images/EMMA_post.webp",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupA"
  },
  {
    image: "images/Lil_Miquela_post.webp",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupB"
  },
  {
    image: "images/Pata_the_Andean_Fox_post.webp",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupC"
  }
];

const randomGroup = groups[Math.floor(Math.random() * groups.length)];
const container = document.getElementById('imageContainer');

// 圖片元素
const img = document.createElement('img');
img.src = randomGroup.image;
img.alt = "永續貼文圖片";
img.style.maxWidth = "10%";
img.loading = "lazy";
container.appendChild(img);

// 問卷按鈕
const button = document.createElement('button');
button.textContent = "填寫問卷";
button.style.marginTop = "20px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.onclick = () => {
  window.location.href = randomGroup.link;
};
container.appendChild(document.createElement('br'));
container.appendChild(button);
