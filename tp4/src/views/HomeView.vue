<template>
  <div>
    <AddBookForm @add-book="addBook" />
    <BookList 
      :books="store.books" 
      @toggle-fav="store.toggleFav($event)" 
      @delete-book="store.deleteBook($event)" 
    />
  </div>
</template>

<script>
import { store } from '../store/books.js'
import AddBookForm from '../components/AddBookForm.vue'
import BookList from '../components/BookList.vue'

export default {
  name: 'HomeView',
  components: {
    AddBookForm,
    BookList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    addBook(newBook) {
      this.store.books.push({
        ...newBook,
        id: Date.now()
      })
    }
  }
}
</script>