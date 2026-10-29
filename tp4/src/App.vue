<template>
  <div class="container">
    <header class="header">
      <h1>Catalogue de livres - TP4</h1>
      <nav>
        <router-link to="/">Accueil</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>