<template>
<header class="header py-3">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <!-- Имя -->
    <div class="name">
      <h2 class="m-0 text-center text-md-start">Deniz Lopez</h2>
    </div>

    <!-- Email и телефон -->
    <div class="contacts text-center mt-3 mt-md-0">
      <a class="d-block mb-1" href="mailto:example@example.com">misterleandr@gmail.com</a>
      <a class="d-block" href="tel:+1234567890">+1 929 760 6765</a>
    </div>

    <!-- Социальные сети -->
    <div class="social-media d-flex justify-content-center justify-content-md-end align-items-center mt-3 mt-md-0">
      <a href="https://t.me/yourtelegram" target="_blank" class="text-dark me-3">
        <i class="bi bi-telegram" style="font-size: 2rem;"></i>
      </a>
      <a href="https://wa.me/1234567890" target="_blank" class="text-dark me-3">
        <i class="bi bi-whatsapp" style="font-size: 2rem;"></i>
      </a>
      <a href="https://instagram.com/yourinstagram" target="_blank" class="text-dark">
        <i class="bi bi-instagram" style="font-size: 2rem;"></i>
      </a>
    </div>
  </div>
</header>


  </template>
  
  <script setup>
  /* Вы можете добавить логику, если потребуется */
  </script>
  
  <style scoped>
  /* Стили для шапки */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    background-color: #eaf3ff; /* Светлый фон шапки */
    color: #222b38; /* Цвет текста */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень */
    position: relative;
    top: 0;
    z-index: 1000;
  }
  
  .name {
    font-size: 1.25rem; /* Размер имени */
    font-weight: bold;
  }
  
  .contacts {
    font-size: 1rem;
    display: flex;
    gap: 15px; /* Расстояние между контактами */
  }
  
  .contacts a {
    color: #222b38;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contacts a:hover {
    color: #6e7b8b; /* Цвет при наведении */
  }



  /* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .header .name {
    text-align: center;
  }

  .header .contacts {
    margin-top: 1rem;
  }

  .header .social-media {
    margin-top: 1rem;
    justify-content: center;
  }
}
  </style>
  