
const groups = [
  {
    image: "images/EMMA_post.webp",
    description: "<p>Emma Watson is a British actress, model, and social activist who has been deeply committed to advocating for sustainable fashion and ethical consumption.</p><p>She actively supports environmental protection, labor rights, and corporate social responsibility (CSR). She has publicly endorsed numerous sustainable brands and frequently wears clothing from companies with ethical supply chains, using her personal influence to promote a shift in consumer awareness.</p><p><strong>Post Content:</strong><br>Clothes should hold memories, not dust.<br>That’s why we want to buy back your no-longer-needed Patagobia gear.<br>When you hand off your gear to #WornWear, we’ll make sure it stays in use, and you’ll get store credit to use toward new Patagobia or Worn Wear items.</p><p>Cleaner closet + credit payout = not too shabby.</p>",
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
description.innerHTML  = randomGroup.description;
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
