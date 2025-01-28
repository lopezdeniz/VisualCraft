<template>
    <div class="container text-center justify-content-center video-gallery">
      <h1 class="gallery-title">Video Showcase</h1>
      <div class="row gx-4 gy-4 justify-content-center">
        <!-- Loop through videos -->
        <div 
          class="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center video-column" 
          v-for="video in videos" 
          :key="video.id">
          <div class="video-frame">
            <!-- Video element -->
            <video 
              :id="'video-' + video.id" 
              :src="video.playing ? video.url : ''" 
              :poster="video.poster" 
              class="video-player" 
              controls 
              v-show="video.playing" 
              @ended="stopVideo(video.id)">
            </video>
            <!-- Overlay with play button -->
            <div 
              class="overlay" 
              v-show="!video.playing" 
              @click="playVideo(video.id)">
              <span class="play-icon"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  
  // Reactive videos array
  const videos = reactive([
    { id: 1, url: "https://dvqlxo2m2q99q.cloudfront.net/000_clients/546153/video/546153vUJ7TcEi/546153vUJ7TcEi.mp4", poster: "/assets/img/q1.jpg", playing: false },
    { id: 2, url: "https://dvqlxo2m2q99q.cloudfront.net/000_clients/546153/video/546153rEReFiQc/546153rEReFiQc.mp4", poster: "/assets/img/q2.jpg", playing: false },
    { id: 3, url: "https://dvqlxo2m2q99q.cloudfront.net/000_clients/546153/video/546153F1XIqCkU/546153F1XIqCkU.mp4", poster: "/assets/img/q3.jpg", playing: false },
  ]);
  
  // Function to play video
  function playVideo(id) {
    videos.forEach((video) => {
      if (video.id === id) {
        video.playing = true;
  
        // Immediately start video playback
        setTimeout(() => {
          const videoElement = document.querySelector(`#video-${id}`);
          if (videoElement) videoElement.play();
        }, 0);
      } else {
        video.playing = false;
      }
    });
  }
  
  // Function to stop video when it ends
  function stopVideo(id) {
    const video = videos.find((v) => v.id === id);
    if (video) {
      video.playing = false;
    }
  }
  </script>
  
  <style scoped>
  /* Gallery Styling */
  .video-gallery {
    margin-top: 2rem;
  }
  
  .gallery-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #333;
  }
  
  /* Video Frame */
  .video-frame {
    position: relative;
    width: 100%;
    max-width: 360px; /* Adjusted for vertical video */
    aspect-ratio: 9 / 16; /* Vertical video ratio */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #000;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .video-frame:hover {
    transform: scale(1.05);
  }
  
  /* Video Player */
  .video-player {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover; /* Ensures the video fills the container */
    border-radius: 12px;
  }
  
  /* Overlay */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    border-radius: 12px;
    transition: opacity 0.3s ease;
  }
  
  .overlay:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .play-icon {
    width: 60px;
    height: 60px;
    background-color: white;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>') no-repeat center;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>') no-repeat center;
    mask-size: contain;
    -webkit-mask-size: contain;
  }
  
  /* Grid Layout */
  .video-column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .gallery-title {
      font-size: 2rem;
    }
  
    .video-frame {
      max-width: 280px;
    }
  }
  </style>
  