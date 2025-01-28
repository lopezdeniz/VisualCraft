<template>
    <div class="container text-center justify-content-center">
     
  
      <div class="row gx-0 justify-content-center">
        <div 
          class="col-12 col-md-4 d-flex justify-content-center align-items-center" 
          v-for="video in videos" 
          :key="video.id">
          <div class="video-frame">
            <iframe 
              :src="video.playing ? video.urlWithAutoplay : video.url" 
              frameborder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowfullscreen
              :id="'video-' + video.id">
            </iframe>
            <div class="overlay" :class="{ hidden: video.playing }" @click="playVideo(video.id)">
              <div class="play-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, nextTick } from "vue";
  
  const videos = reactive([
    { id: 1, url: "https://player.vimeo.com/video/813543302?h=1271de0c61&loop=1", urlWithAutoplay: "https://player.vimeo.com/video/813543302?h=1271de0c61&loop=1&autoplay=1", playing: false },
    { id: 2, url: "https://player.vimeo.com/video/813543424?h=3e9f0fcc84&loop=1", urlWithAutoplay: "https://player.vimeo.com/video/813543424?h=3e9f0fcc84&loop=1&autoplay=1", playing: false },
    { id: 3, url: "https://player.vimeo.com/video/813543404?h=749b64eb28&loop=1", urlWithAutoplay: "https://player.vimeo.com/video/813543404?h=749b64eb28&loop=1&autoplay=1", playing: false },
    { id: 4, url: "https://player.vimeo.com/video/813543331?h=c44eff5a9e&loop=1", urlWithAutoplay: "https://player.vimeo.com/video/813543331?h=c44eff5a9e&loop=1&autoplay=1", playing: false },
    { id: 5, url: "https://player.vimeo.com/video/813543085?h=677a2f967a&loop=1", urlWithAutoplay: "https://player.vimeo.com/video/813543085?h=677a2f967a&loop=1&autoplay=1", playing: false },
    { id: 6, url: "https://player.vimeo.com/video/815461436?h=4f9eaf00e9&loop=1", urlWithAutoplay: "https://player.vimeo.com/video/815461436?h=4f9eaf00e9&loop=1&autoplay=1", playing: false },
  ]);
  
  function playVideo(id) {
    const video = videos.find(v => v.id === id);
    if (video && !video.playing) {
      video.playing = true;
      nextTick(() => {
        const iframe = document.getElementById(`video-${id}`);
        iframe.src = video.urlWithAutoplay; // Обновляем URL для корректного запуска
      });
    }
  }
  </script>
  
  <style scoped>
  #port {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
  }
  
  .video-frame {
    position: relative;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 5 / 6; /* Пропорция 500x600 */
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
 
  }
  
  iframe {
    border: none;
    position: absolute;
    top: -30%;
    left: -30%;
    width: 160%;
    height: 160%;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.3s ease;
    z-index: 2;
    cursor: pointer;
  }
  
  .overlay.hidden {
    display: none;
  }
  
  .play-icon {
    width: 50px;
    height: 50px;
    background-color: white;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>') no-repeat center;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>') no-repeat center;
    mask-size: contain;
    -webkit-mask-size: contain;
  }
  
  .row {
    gap: 0;
  }
  
  @media (max-width: 768px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  </style>
  