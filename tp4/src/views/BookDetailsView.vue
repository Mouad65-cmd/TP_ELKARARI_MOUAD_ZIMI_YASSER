<template>
  <div v-if="book" class="book-details">
    <h2>{{ book.title }}</h2>
    <p><strong>Auteur :</strong> {{ book.author }}</p>
    <p><strong>Année :</strong> {{ book.year }}</p>
    <p><strong>Genre :</strong> {{ book.genre }}</p>
    <p><strong>Statut :</strong> {{ book.isFav ? '★ Favori' : 'Standard' }}</p>

    <div class="chips" v-if="book.keywords && book.keywords.length">
      <span v-for="kw in book.keywords" :key="kw" class="chip">{{ kw }}</span>
    </div>

    <button @click="retour">Retour</button>
  </div>
  <div v-else class="book-details">
    <p>Livre introuvable.</p>
    <button @click="retour">Retour</button>
  </div>
</template>

<script>
import { store } from '../store/books.js'

export default {
  name: 'BookDetailsView',
  data() {
    return {
      store
    }
  },
  computed: {
    book() {
      const id = Number(this.$route.params.id)
      return this.store.books.find(b => b.id === id)
    }
  },
  methods: {
    retour() {
      this.$router.back()
    }
  }
}
</script>