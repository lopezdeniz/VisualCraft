<template>
    <div class="container text-center justify-content-center">
      <h2 id="port" class="text-center text-uppercase color mb-4 top-20 text-white">Showreel</h2>
  
      <div class="row gx-0 justify-content-center">
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div class="video-frame">
            <iframe 
              src="https://player.vimeo.com/video/813543302?h=1271de0c61" 
              frameborder="0" 
              allow="fullscreen; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
  
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div class="video-frame">
            <iframe 
              src="https://player.vimeo.com/video/813543424?h=3e9f0fcc84" 
              frameborder="0" 
              allow="fullscreen; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
  
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div class="video-frame">
            <iframe 
              src="https://player.vimeo.com/video/813543404?h=749b64eb28" 
              frameborder="0" 
              allow="fullscreen; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
  
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div class="video-frame">
            <iframe 
              src="https://player.vimeo.com/video/813543331?h=c44eff5a9e" 
              frameborder="0" 
              allow="fullscreen; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
  
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div class="video-frame">
            <iframe 
              src="https://player.vimeo.com/video/813543085?h=677a2f967a" 
              frameborder="0" 
              allow="fullscreen; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
  
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div class="video-frame">
            <iframe 
              src="https://player.vimeo.com/video/815461436?h=4f9eaf00e9" 
              frameborder="0" 
              allow="fullscreen; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Логика не требуется для статичной страницы
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
  