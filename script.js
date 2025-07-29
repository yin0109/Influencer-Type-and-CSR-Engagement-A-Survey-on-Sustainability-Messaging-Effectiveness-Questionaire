
const groups = [
  {
    image: "img/EMMA IG貼文.png",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupA"
  },
  {
    image: "img/Lil Miquela貼文.png",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupB"
  },
  {
    image: "img/Pata the Andean Fox 貼文.png",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupC"
  }
];
const randomGroup = groups[Math.floor(Math.random() * groups.length)];
const container = document.getElementById('imageContainer');
const img = document.createElement('img');
img.src = randomGroup.image;
img.alt = "點我開始問卷";
img.onclick = () => {
  window.location.href = randomGroup.link;
};
container.appendChild(img);
