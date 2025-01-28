<template>
    <div class="my-container">
 <div class="container-fluid mt-5">




   <div class="row g-0">

     <div class="col-lg-4 col-md-6 col-12">
       <div id="carousel13" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img src="/assets/img/q1.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q2.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q3.jpg" class="d-block w-100" alt="...">
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carousel13" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carousel13" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
         </button>
       </div>
     </div>

     <div class="col-lg-4 col-md-6 col-12">
       <div id="carousel14" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img src="/assets/img/q9.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q5.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q6.jpg" class="d-block w-100" alt="...">
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carousel14" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carousel14" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
         </button>
       </div>
     </div>

     <div class="col-lg-4 col-md-6 col-12">
       <div id="carousel15" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img src="/assets/img/q6.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q8.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q9.jpg" class="d-block w-100" alt="...">
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carousel15" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carousel15" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
         </button>
       </div>
     </div>
  

  
     <div class="col-lg-4 col-md-6 col-12">
       <div id="carousel16" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img src="/assets/img/q10.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q11.jpg" class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="/assets/img/q9.jpg" class="d-block w-100" alt="...">
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carousel16" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carousel16" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
         </button>
       </div>
     </div>

    







   </div>
 </div>



</div>  
</template>


<script setup>
import { onMounted, onUpdated } from "vue";

const initializeCarousels = () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    new bootstrap.Carousel(carousel, {
      interval: 3000, // Интервал между слайдами
      ride: "carousel", // Автоматический запуск
    });
  });
};

onMounted(() => {
  initializeCarousels();
});

// Если компонент обновляется или переключается между вкладками, инициализируем карусели снова
onUpdated(() => {
  initializeCarousels();
});
</script>





<style>
.my-container {
 max-width: 2000px;
 margin: 0px auto;

}




.carousel-inner {
  aspect-ratio: 3 / 3.6 !important; /* Прямоугольное соотношение сторон (ширина больше высоты) */
  position: relative !important;
  width: 100% !important; /* Контейнер занимает всю ширину */
  height: auto !important; /* Высота адаптируется к содержимому */
}

.carousel-inner img {
  width: 100% !important; /* Изображение растягивается по ширине контейнера */
  height: 100% !important; /* Высота адаптируется автоматически */
  display: block !important; /* Убираем пробелы между элементами */
  object-fit: contain !important; /* Изображение полностью вписывается в контейнер */
}











.g-0 > [class*='col'] {
 display: flex;
 align-items: center;
 justify-content: center;
}
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
 --bs-gutter-x: 0rem;
}

.mt-5 {
 margin-top: 0.0rem !important;
 margin-bottom: 0.0rem !important;
}





</style>
