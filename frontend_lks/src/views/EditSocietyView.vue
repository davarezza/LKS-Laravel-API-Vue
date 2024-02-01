<template>
    <div>Ini halaman edit</div>

    <div>
    <h2 class="mb-3 mt-3">Edit Data</h2><hr>
    <form class="space-y-6" @submit.prevent="saveSociety">
      <div class="mb-3">
        <label for="id_card_number" class="form-label">ID Card Number</label>
        <input type="text" name="id_card_number" id="id_card_number" class="form-control" v-model="society.id_card_number">
        <div v-if="errors.id_card_number" class="text-red-500 text-sm">{{ errors.id_card_number[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" name="password" id="password" class="form-control" v-model="society.password">
        <div v-if="errors.password" class="text-red-500 text-sm">{{ errors.password[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" name="name" id="name" class="form-control" v-model="society.name">
        <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="born_date" class="form-label">Born Date</label>
        <input type="text" name="born_date" id="born_date" class="form-control" v-model="society.born_date">
        <small class="text-muted">Format: YYYY-MM-DD</small>
        <div v-if="errors.born_date" class="text-red-500 text-sm">{{ errors.born_date[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Gender</label>
        <select class="form-select" v-model="society.gender">
          <option value="" disabled>Choose Gender</option>
          <option :value="row" v-for="row in genders" v-bind:key="row.index">{{ row }}</option>
        </select>
        <div v-if="errors.gender" class="text-red-500 text-sm">{{ errors.gender[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Alamat</label>
        <input type="text" name="address" id="address" class="form-control" v-model="society.address">
        <div v-if="errors.address" class="text-red-500 text-sm">{{ errors.address[0] }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Regional Id</label>
        <select class="form-select" aria-label="Default select example" v-model="society.regional_id">
          <option selected disabled>Pilih Regional</option>
          <option :value="row.id" v-for="row in regionals" v-bind:key="row.index">
            {{ row.province }} - {{ row.district }}
          </option>
        </select>
        <div class="form-text text-danger" v-if="errors.regional_id">
          {{ errors.regional_id[0] }}
        </div>
      </div>
      <button type="submit" class="btn btn-primary mb-4">Edit Data</button>
    </form>
  </div>
</template>

<script setup>
import useSocieties from '../composable/societies'
import useRegionals from '../composable/regionals'
import { onMounted, ref } from 'vue';

const { errors,  editSocieties, getSociety, society } = useSocieties()
const genders = ref(['male','female'])
const props = defineProps({
    id_society: {
        required: true,
        type: String
    }
})

const { regionals, getRegionalLists } = useRegionals()

onMounted(async () => {
    await Promise.all([getSociety(props.id_society), getRegionalLists()])
  }
)

const saveSociety = async () => {
    await editSocieties(props.id_society, society.value)
}
</script>