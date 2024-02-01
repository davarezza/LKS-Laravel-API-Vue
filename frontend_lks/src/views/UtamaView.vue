<template>
  <div>
    <div class="btn btn-primary">
      Halo, Projek pertama Vue Ku nih
    </div>
    <h2>status form {{ form.open }}</h2>
    <h2>judul form {{ form.title }}</h2>
    <input type="text" v-model="form.title">

    <h3>Angka {{ angka }}</h3>

    <button class="mx-2" @click="increment">Tambah Angka</button>
    <button @click="decrement">Kurang Angka</button>

    <br><br>

    <h2>
      Nama saya adalah 
      <span v-if="form.nama">{{ form.nama }}</span>
      <span v-else>...</span>
    </h2>

    <button class="mx-2" @click="showModal(true)">Tambah Nama</button>
    <button v-if="form.nama" class="mx-2" @click="hapusNama">Hapus Nama</button>
    <modal-dialog :show="form.open" @closeModal="tutupModal" @simpan="tampilNama" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import ModalDialog from '../components/TheModalDialog.vue';

const form = reactive({
  open: false,
  title: 'ini adalah form',
  nama: ''
})

const angka = ref(0);

const increment = () => angka.value++
const decrement = () => angka.value--

const showModal = (data) => {
  form.open = data
}

const tutupModal = (data) => {
  form.open = data
}

const tampilNama = (data) => {
  form.nama = data
}

const hapusNama = () => {
  form.nama = ''
}
</script>
