import http from '@/config/axiosConfig'
import { ref } from 'vue'

export default function useRegionals() {
  const url = ref('/regional')
  const regionals = ref([])

  // mengambil data semua user pada database
  const getRegionalLists = async () => {
    const response = await http.get(`${url.value}/list`)

    console.log(response.data)
    regionals.value = response.data.data
  }

  return {
    regionals,
    getRegionalLists
  }
}