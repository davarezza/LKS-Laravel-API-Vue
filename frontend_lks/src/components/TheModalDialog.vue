<template>
     <div v-if="show" class="modal fade show" tabindex="-1" arial-modal="true" role="dialog" style="display:block">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Masukkan nama</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close"></button>
      </div>
      <div class="modal-body">
          <input type="text" v-model="modal.name" />
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
        <button type="button" class="btn btn-primary"  @click="simpanData">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'

    defineProps({
        show: Boolean
    })

    const emit = defineEmits(['closeModal', 'simpan'])

    const modal = reactive({
        name: ''
    })

    const close = () => emit('closeModal', false)
    const simpanData = () => {
        emit('simpan', modal.name)
        emit('closeModal', false)
    }
</script>