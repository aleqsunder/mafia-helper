<template>
  <div class="mafia-helper__block mafia-helper__list">
    <div class="mafia-helper__list-header">
      <span class="mafia-helper__list-header__title">Роли</span>
      <div class="mafia-helper__list-button" @click="addNewRole">
        <span v-html="userPlus"/>
        <span>Добавить</span>
      </div>
    </div>
    <table class="mafia-helper__table">
      <thead>
        <tr>
          <th>Название</th>
          <th>Количество</th>
          <th></th>
        </tr>
      </thead>
      <role-list/>
    </table>
  </div>
</template>

<script>
import roleList from "./list"
import {icon} from "../../helpers"

export default {
  name: "List",
  components: {
    roleList
  },

  methods: {
    addNewRole() {
      this.$store.dispatch('Roles/add')
    }
  },

  computed: {
    list() {
      return this.$store.getters['Roles/list']
    },
    userPlus() {
      return icon('fas', 'user-plus')
    }
  }
}
</script>