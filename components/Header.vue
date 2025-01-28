<template>

<header class="header  py-3">
  <div class="container d-flex justify-content-between align-items-center">
    <!-- Имя слева -->
    <div class="name">
      <h1 class="m-0">Deniz Lopez</h1>
    </div>

    <!-- Email и телефон по центру -->
    <div class="contacts text-center">
      <a class="d-block mb-1" href="mailto:example@example.com">example@example.com</a>
      <a class="d-block" href="tel:+1234567890">+1 234 567 890</a>
    </div>

    <!-- Социальные сети справа -->
    <div class="social-media d-flex align-items-center">
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
  </style>
  