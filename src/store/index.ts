import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'index',
  state: () => ({
    name: '超级管理员'
  }),
  getters: {}
})
