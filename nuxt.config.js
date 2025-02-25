export default defineNuxtConfig({
  compatibilityDate: '2025-01-21', // Compatibility
  devtools: { enabled: true },    // Enable development tools
  
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Bootstrap CSS
    '@/assets/main.css' // Your custom CSS
  ],

  app: {
    head: {
      title: 'Fashion & Photography', // Page title
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }, // Responsiveness
        { name: 'description', content: 'Exclusive fashion photoshoots, the latest fashion trends, professional photography, and stylish looks. Inspiration for photographers and models.' }, // SEO description
        { name: 'keywords', content: 'fashion, photography, fashion trends, photoshoots, modeling, style, professional photography, fashion photography, editorial photography, high fashion, model portfolio' } // SEO keywords
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/bootstrap-icons/font/bootstrap-icons.css' // Bootstrap Icons
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons.min.css' // Ionicons (if needed)
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', // Bootstrap JS via CDN
          type: 'text/javascript'
        },
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9881364321502260',
          async: true,
          crossorigin: 'anonymous'
        }
      ]
    }
  }
});
