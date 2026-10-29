<template>
  <div class="book-card" :class="{ fav: book.isFav }">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }} - {{ book.year }}</p>
    <p>Genre : {{ book.genre }}</p>
    
    <span class="badge" v-if="book.isFav">★ Favori</span>
    
    <button @click="$emit('toggle-fav', book.id)">
      {{ book.isFav ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
    </button>

    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.title === 'string' && value.title.trim().length > 0
      }
    }
  },
  emits: ['toggle-fav']
}
</script>