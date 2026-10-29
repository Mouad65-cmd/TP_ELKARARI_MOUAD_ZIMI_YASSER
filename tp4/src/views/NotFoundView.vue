<template>
  <div class="not-found">
    <h2>404 - Page introuvable</h2>
    <p>La page que vous cherchez n'existe pas.</p>
    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>