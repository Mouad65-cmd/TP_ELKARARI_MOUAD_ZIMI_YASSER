<template>
  <div class="book-card" :class="{ fav: book.isFav }">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }} - {{ book.year }}</p>
    <p>Genre : {{ book.genre }}</p>
    <span class="badge" v-if="book.isFav">★ Favori</span>

    <div class="card-actions">
      <button @click="emit('toggle-fav', book.id)">
        {{ libelleFavori }}
      </button>
      <slot name="actions"></slot>
      <router-link :to="`/livre/${book.id}`" class="details-link">
        Voir détails
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  book: {
    type: Object,
    required: true,
    validator(value) {
      return typeof value.title === 'string' && value.title.trim().length > 0
    }
  }
})

const emit = defineEmits(['toggle-fav'])

const libelleFavori = computed(() => {
  return props.book.isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'
})
</script>