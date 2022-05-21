<template>
  <tbody>
    <tr v-for="(role, index) in roles" :key="index">
      <td class="mafia-helper__list-role mafia-helper__list-role-name">
        <input type="text" v-model="role.name"/>
      </td>
      <td class="mafia-helper__list-role mafia-helper__list-role-max">
        <input type="number" v-model="role.max">
      </td>
      <td class="mafia-helper__list-role mafia-helper__list-role-func">
        <span @click="remove(index)" v-html="trashCan"/>
      </td>
    </tr>
  </tbody>
</template>

<script>
import {icon} from "../../helpers"

export default {
  name: "RoleList",
  methods: {
    remove(index) {
      this.$store.dispatch('Roles/remove', index)
    }
  },

  computed: {
    /** @returns {Array<Role>} */
    roles() {
      return this.$store.getters['Roles/list']
    },
    trashCan() {
      return icon('fas', 'trash-can')
    }
  }
}
</script>