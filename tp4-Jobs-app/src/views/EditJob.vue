<template>
  <form @submit.prevent="handleUpdate">
    <h2>Modifier l'emploi</h2>
    <label>Titre :</label>
    <input type="text" v-model="title" required />

    <label>Description :</label>
    <textarea v-model="description" required></textarea>

    <label>Salaire :</label>
    <input type="text" v-model="salary" required />

    <label>Années d'expérience :</label>
    <input type="number" v-model.number="experience" required />

    <label>Date de création :</label>
    <input type="date" v-model="createdAt" required />

    <button type="submit">Mettre à jour</button>
  </form>
</template>

<script>
export default {
  name: 'EditJob',
  props: ['id'],
  data() {
    return {
      title: '',
      description: '',
      salary: '',
      experience: 0,
      createdAt: '',
      uri: 'http://localhost:3000/jobs/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
      .then(response => response.json())
      .then(data => {
        this.title = data.title
        this.description = data.description
        this.salary = data.salary
        this.experience = data.experience
        this.createdAt = data.createdAt
      })
      .catch(err => console.log(err))
  },
  methods: {
    handleUpdate() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          salary: this.salary,
          experience: this.experience,
          createdAt: this.createdAt
        })
      })
        .then(() => {
          this.$router.push('/jobs/' + this.id)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>