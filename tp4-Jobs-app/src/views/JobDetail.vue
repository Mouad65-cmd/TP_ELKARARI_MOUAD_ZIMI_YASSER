<template>
  <div v-if="job" class="job-detail">
    <h2>{{ job.title }}</h2>
    <p><strong>Description :</strong> {{ job.description }}</p>
    <p><strong>Salaire :</strong> {{ job.salary }}</p>
    <p><strong>Années d'expérience :</strong> {{ job.experience }} ans</p>
    <p><strong>Date de création :</strong> {{ job.createdAt }}</p>

    <div class="actions">
      <router-link :to="{ name: 'EditJob', params: { id: job.id } }">
        <button>Modifier</button>
      </router-link>
      <button class="delete-btn" @click="deleteJob">Supprimer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  props: ['id'],
  data() {
    return {
      job: null,
      uri: 'http://localhost:3000/jobs/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
      .then(response => response.json())
      .then(data => {
        this.job = data
      })
      .catch(err => console.log(err))
  },
  methods: {
    deleteJob() {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet emploi ?')) {
        fetch(this.uri, { method: 'DELETE' })
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => console.log(err))
      }
    }
  }
}
</script>