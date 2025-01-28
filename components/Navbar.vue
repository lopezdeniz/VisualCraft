<template>
  <nav class="navbar">
    <!-- Раздел "Photography" -->
    <div class="portfolio-section">
      <span class="section-title">Photography</span>
      <NuxtLink to="/" class="btn btn-outline-dark">Portraits</NuxtLink>
      <NuxtLink to="/foodphotography" class="btn btn-outline-dark">Food</NuxtLink>
    </div>

    <!-- Раздел "Videos" -->
    <div class="portfolio-section">
      <span class="section-title">Videos</span>
      <NuxtLink to="/showreel" class="btn btn-outline-dark">Showreel</NuxtLink>
      <NuxtLink to="/videofood" class="btn btn-outline-dark">Showreel Food</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  padding: 10px;

  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.portfolio-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn {
  padding: 8px 16px;
  font-size: 0.9rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}
</style>
