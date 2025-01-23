<template>
    <div class="container mt-5">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 col-12">
          <div id="carousel1" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/img/1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/assets/img/2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/assets/img/3.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
           
            </button>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 col-12">
          <div id="carousel2" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/img/1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/assets/img/2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/assets/img/3.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            
            </button>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 col-12">
          <div id="carousel3" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/img/1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/assets/img/2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/assets/img/3.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .carousel-inner {
    aspect-ratio: 1 / 1; /* Квадратные изображения */
  }
  
  .carousel-inner img {
    object-fit: cover; /* Обрезать изображение для заполнения квадрата */
    height: 100%;
    width: 100%;
  }
  
  .g-4 > [class*='col'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  