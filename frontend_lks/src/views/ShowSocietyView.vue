<template>
<div>Ini Halaman Show</div> <hr>
  <div>
    <div class="mb-3">
        <label for="id_card_number" class="form-label">ID Card</label>
        <input type="disabled" name="id_card_number" id="id_card_number" class="form-control" v-model="society.id_card_number" :disabled="true">
      </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="disabled" name="password" id="password" class="form-control" v-model="society.password" :disabled="true">
      </div>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="disabled" name="name" id="name" class="form-control" v-model="society.name" :disabled="true">
      </div>
    <div class="mb-3">
        <label for="born_date" class="form-label">Born Date</label>
        <input type="disabled" name="born_date" id="born_date" class="form-control" v-model="society.born_date" :disabled="true">
      </div>
    <div class="mb-3">
        <label for="gender" class="form-label">Gender</label>
        <input type="disabled" name="gender" id="gender" class="form-control" v-model="society.gender" :disabled="true">
      </div>
    <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="disabled" name="address" id="address" class="form-control" v-model="society.address" :disabled="true">
      </div>
    <div class="mb-3">
        <label for="regional_id" class="form-label">Regional ID</label>
        <input type="disabled" name="regional_id" id="regional_id" class="form-control" v-model="society.regional_id" :disabled="true">
      </div>
  </div>
</template>

<script setup>
import useSocieties from '../composable/societies'
import { onMounted } from 'vue'

const { getSociety, society } = useSocieties()
const props = defineProps({
  id_society: {
    required: true,
    type: String
  }
})

onMounted(() => getSociety(props.id_society))
</script>
