
const groups = [
  {
    image: "images/EMMA_post.webp",
    description: "Ａ",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupA"
  },
  {
    image: "images/Lil_Miquela_post.webp",
    description: "B",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupB"
  },
  {
    image: "images/Pata_the_Andean_Fox_post.webp",
    description: "C",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupC"
  }
];

const randomGroup = groups[Math.floor(Math.random() * groups.length)];
const container = document.getElementById('imageContainer');

// 圖片元素
const img = document.createElement('img');
img.src = randomGroup.image;
img.alt = "永續貼文圖片";
img.style.width = "400px";  // 設定固定寬度
img.style.height = "auto";  // 高度自動等比例縮放
img.loading = "lazy";
container.appendChild(img);

// 建立文字敘述元素
const description = document.createElement('p');
description.textContent = randomGroup.description;
description.style.marginTop = "16px";
description.style.fontSize = "16px";
description.style.textAlign = "center";
description.style.maxWidth = "90%";
description.style.margin = "16px auto";

// 插入到畫面中
container.appendChild(description);

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
