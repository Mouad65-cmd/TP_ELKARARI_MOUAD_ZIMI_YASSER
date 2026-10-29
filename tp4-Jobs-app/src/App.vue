<template>
  <div class="app-container">
    <nav class="navbar">
      <router-link to="/">Liste des emplois</router-link>
      <router-link to="/add">Ajouter un emploi</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>