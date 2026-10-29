<template>
  <form @submit.prevent="soumettre">
    <input 
      ref="titreInput" 
      type="text" 
      v-model.trim="title" 
      placeholder="Titre" 
    />
    <input 
      type="text" 
      v-model.trim="author" 
      placeholder="Auteur" 
    />
    <input 
      type="number" 
      v-model.number="year" 
      placeholder="Année" 
    />
    <select v-model="genre">
      <option value="Informatique">Informatique</option>
      <option value="Science-Fiction">Science-Fiction</option>
      <option value="Roman">Roman</option>
      <option value="Fantasy">Fantasy</option>
    </select>
    <label>
      <input type="checkbox" v-model="isFav" /> Favori
    </label>
    <button type="submit" :disabled="!estValide">Ajouter</button>
  </form>
</template>

<script>
export default {
  name: 'AddBookForm',
  emits: ['add-book'],
  data() {
    return {
      title: '',
      author: '',
      year: new Date().getFullYear(),
      genre: 'Informatique',
      isFav: false
    }
  },
  computed: {
    estValide() {
      return this.title.trim() !== '' && this.author.trim() !== ''
    }
  },
  methods: {
    soumettre() {
      if (!this.estValide) return
      this.$emit('add-book', {
        title: this.title,
        author: this.author,
        year: this.year,
        genre: this.genre,
        isFav: this.isFav,
        keywords: []
      })
      this.title = ''
      this.author = ''
      this.year = new Date().getFullYear()
      this.genre = 'Informatique'
      this.isFav = false
      this.$refs.titreInput.focus()
    }
  },
  mounted() {
    this.$refs.titreInput.focus()
  }
}
</script>