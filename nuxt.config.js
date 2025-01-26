export default defineNuxtConfig({
  compatibilityDate: '2025-01-21', // Совместимость
  devtools: { enabled: true },    // Включение инструментов разработки
  
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Bootstrap CSS
    '@/assets/main.css' // Ваш кастомный CSS
  ],

  app: {
    head: {
      title: 'My Nuxt App', // Название страницы
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }, // Адаптивность
        { name: 'description', content: 'Описание вашего сайта' } // SEO описание
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/bootstrap-icons/font/bootstrap-icons.css' // Bootstrap Icons
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons.min.css' // Ionicons (если нужно оставить)
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', // Bootstrap JS через CDN
          type: 'text/javascript'
        }
      ]
    }
  }
});
