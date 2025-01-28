<template>
    <footer class="footer text-dark py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Левая часть: почта и телефон -->
        <div class="contact-info">
          <p class="mb-0">Email: <a href="mailto:example@example.com" class="text-dark">misterleandr@gmail.com</a></p>
          <p class="mb-0">Phone: <a href="tel:9297606765" class="text-dark">+1 929 760 6765</a></p>
        </div>
  
        <!-- Правая часть: иконки Telegram и WhatsApp -->
        <div class="social-icons d-flex gap-2">
          <a href="https://t.me/lopezdeniz" target="_blank" class="text-dark me-3">
        <i class="bi bi-telegram" style="font-size: 2rem;"></i>
      </a>
      <a href="https://wa.me/9297606765" target="_blank" class="text-dark me-3">
        <i class="bi bi-whatsapp" style="font-size: 2rem;"></i>
      </a>
      <a href="https://instagram.com/misterphotoworld/" target="_blank" class="text-dark">
        <i class="bi bi-instagram" style="font-size: 2rem;"></i>
      </a>
      </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Дополнительная логика, если потребуется
  </script>
  
  <style scoped>
  .footer {
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
  .contact-info a {
    text-decoration: none;
  }
  .social-icons a {
    font-size: 1.5rem;
    transition: color 0.3s;
  }
  .social-icons a:hover {
    color: #0d6efd; /* Синий оттенок при наведении */
  }
  </style>
  