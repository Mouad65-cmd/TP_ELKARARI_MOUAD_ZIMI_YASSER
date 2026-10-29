<template>
  <div class="container">
    <h1>Catalogue de livres</h1>
    <AddBookForm @add-book="ajouterLivre" />
    <p v-show="loading">Chargement des livres en cours...</p>
    <BookList 
      v-show="!loading"
      :books="books" 
      @toggle-fav="toggleFavori" 
      @delete-book="supprimerLivre" 
    />
  </div>
</template>

<script>
import initialBooks from './books.json'
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    AddBookForm,
    BookList
  },
  data() {
    return {
      books: [],
      loading: true
    }
  },
  methods: {
    ajouterLivre(nouveauLivre) {
      this.books.push({
        ...nouveauLivre,
        id: Date.now()
      })
    },
    toggleFavori(id) {
      const book = this.books.find(b => b.id === id)
      if (book) {
        book.isFav = !book.isFav
      }
    },
    supprimerLivre(id) {
      this.books = this.books.filter(b => b.id !== id)
    }
  },
  mounted() {
    setTimeout(() => {
      this.books = initialBooks
      this.loading = false
    }, 600)
  }
}
</script>