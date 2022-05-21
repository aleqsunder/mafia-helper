<template>
  <div class="mafia-helper">
    <list/>
    <info-sidebar/>
  </div>
</template>

<script>
import list from "./list"
import infoSidebar from "./info-sidebar"

export default {
  name: "App",
  components: {
    list,
    infoSidebar
  }
}
</script>