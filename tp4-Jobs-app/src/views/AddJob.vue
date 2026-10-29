<template>
  <form @submit.prevent="handleSubmit">
    <h2>Ajouter un nouvel emploi</h2>
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

    <button type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
  name: 'AddJob',
  data() {
    return {
      title: '',
      description: '',
      salary: '',
      experience: 0,
      createdAt: new Date().toISOString().substr(0, 10)
    }
  },
  methods: {
    handleSubmit() {
      const job = {
        title: this.title,
        description: this.description,
        salary: this.salary,
        experience: this.experience,
        createdAt: this.createdAt
      }
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
      })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>