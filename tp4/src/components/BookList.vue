<template>
  <div class="book-list">
    <BookCardSetup 
      v-for="book in books" 
      :key="book.id" 
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
    >
      <template #actions>
        <button class="delete-btn" @click="$emit('delete-book', book.id)">Supprimer</button>
      </template>
    </BookCardSetup>
  </div>
</template>

<script>
import BookCardSetup from './BookCardSetup.vue'

export default {
  name: 'BookList',
  components: {
    BookCardSetup
  },
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  emits: ['toggle-fav', 'delete-book']
}
</script>