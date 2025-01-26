<template>

<header class="header">
  <div class="container d-flex justify-content-between align-items-center">
    <div class="name">Deniz Lopez</div>
    <div class="contacts">
      <a href="mailto:example@example.com">example@example.com</a>
      <a href="tel:+1234567890" class="ms-3">+1 234 567 890</a>
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
  