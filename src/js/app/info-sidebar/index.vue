<template>
  <div class="mafia-helper__block mafia-helper__info-sidebar">
    <div class="mafia-helper__info-sidebar-block">
      <div class="mafia-helper__list-button" @click="defaultState = true">
        <span v-html="hammer"/>
        <span>Вернуть по-умолчанию</span>
      </div>
    </div>
    <div class="mafia-helper__info-sidebar-block">
      <div class="mafia-helper__list-button" @click="generateGame">
        <span v-html="ghost"/>
        <span>Сгенерировать игру</span>
      </div>
    </div>
  </div>
  <GDialog v-model="defaultState" max-width="500" transition="custom-rotate-transition">
    <div class="wrapper">
      <div class="content">
        <div class="title">Предупреждение</div>
        <p>
          Вы действительно хотите вернуть всё к исходным значениям?
        </p>
      </div>
      <div class="actions">
        <div class="mafia-helper__list-button" @click="defaultState = false">
          <span v-html="close"/>
          <span>Закрыть</span>
        </div>
        <div class="mafia-helper__list-button" @click="returnDefault">
          <span v-html="hammer"/>
          <span>Вернуть</span>
        </div>
      </div>
    </div>
  </GDialog>
  <GDialog v-model="generateState" transition="custom-from-bottom-transition" fullscreen>
    <div class="wrapper">
      <div class="content">
        <div class="title">Сгенерированная игра</div>
        <div class="game-box">
          <template v-if="result !== null">
            <div class="game-box__info">
              <div class="game-box__info-container">
                <span class="game-box__info-container-title-capsed">
                  Общий массив
                </span>
              </div>
              <div class="game-box__info-container" v-for="(item, index) in result" :key="index">
                <span class="game-box__info-container-title">
                  {{ item.name }} - {{ item.max }}
                </span>
                <span class="game-box__info-container-players" v-text="item.players.join(', ')"/>
              </div>
            </div>
            <div class="game-box__info">
              <div class="game-box__info-container">
                <span class="game-box__info-container-title-capsed">
                  Порядок
                </span>
              </div>
              <div class="game-box__info-container" v-for="(item, index) in resultFormatted" :key="index">
                <span class="game-box__info-container-title">
                  {{ item.player }} - {{ item.role }}
                </span>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="actions">
        <div class="mafia-helper__list-button" @click="generateGame">
          <span v-html="hammer"/>
          <span>Сгенерировать заново</span>
        </div>
        <div class="mafia-helper__list-button" @click="generateState = false">
          <span v-html="close"/>
          <span>Закрыть</span>
        </div>
      </div>
    </div>
  </GDialog>
</template>

<script>
import {icon} from "../../helpers"

export default {
  name: "InfoSidebar",
  data() {
    return {
      defaultState: false,
      generateState: false,
      result: null,
      tmp: [],
    }
  },

  methods: {
    returnDefault() {
      this.$store.dispatch('Roles/setDefault')
      this.defaultState = false
    },

    generateGame() {
      this.generateState = true
      this.result = null
      this.tmp = this.list.reduce((tmp, role) => (tmp.push({
        name: role.name,
        max: role.max,
        players: []
      }), tmp), [])

      for (let i = 1; i <= this.playersLength; i++) {
        const roleIndex = this.randomRole()
        this.tmp[roleIndex].players.push(i)
      }

      this.result = this.tmp
      this.tmp = []
    },

    randomRole() {
      while (true) {
        const index = (Math.random() * this.tmp.length * 2 ^ 0) - this.tmp.length
        const roleIndex = index <= 0 ? 0 : index
        const role = this.tmp[roleIndex]
        if (role.players.length < role.max) {
          return roleIndex
        }
      }
    }
  },

  computed: {
    list() {
      return this.$store.getters['Roles/list']
    },

    rolesLength() {
      return this.list.length
    },

    playersLength() {
      return this.list.reduce((count, current) => (count += Number(current.max), count), 0)
    },

    ghost() {
      return icon('fas', 'ghost')
    },
    hammer() {
      return icon('fas', 'hammer')
    },
    close() {
      return icon('fas', 'close')
    },

    resultFormatted() {
      let tmp = []
      for (let {players, name: role} of this.result) {
        for (let player of players) {
          tmp.push({player, role})
        }
      }
      return tmp.sort((a, b) => Math.sign(a.player - b.player))
    }
  }
}
</script>