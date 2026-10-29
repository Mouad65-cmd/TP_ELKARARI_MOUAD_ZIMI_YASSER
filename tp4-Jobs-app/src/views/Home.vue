<template>
  <div class="home">
    <h1>Emplois disponibles</h1>
    <router-link to="/add">
      <button>+ Nouvel emploi</button>
    </router-link>

    <FilterNav v-model="search" />

    <div v-if="filteredJobs.length">
      <div v-for="job in filteredJobs" :key="job.id" class="job-card">
        <h3>{{ job.title }}</h3>
        <p><strong>Salaire :</strong> {{ job.salary }} | <strong>Expérience :</strong> {{ job.experience }} ans</p>
        <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
          <button>Voir les détails</button>
        </router-link>
      </div>
    </div>
    <p v-else>Aucun emploi disponible.</p>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  components: { FilterNav },
  data() {
    return {
      jobs: [],
      search: ''
    }
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter(job =>
        job.title.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {
        this.jobs = data
      })
      .catch(err => console.log(err))
  }
}
</script>