<template>
  <div class="book-list">
    <BookCard 
      v-for="book in books" 
      :key="book.id" 
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
      @delete-book="$emit('delete-book', $event)"
    >
      <template #actions>
        <button @click="$emit('delete-book', book.id)">Supprimer</button>
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  name: 'BookList',
  components: {
    BookCard
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