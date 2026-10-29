<template>
  <div class="filter-nav">
    <input 
      type="text" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      placeholder="Rechercher un emploi par titre..."
    />
  </div>
</template>

<script>
export default {
  name: 'FilterNav',
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>