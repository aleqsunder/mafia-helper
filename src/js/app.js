import {createApp} from "vue"
import {createStore} from "vuex"
import app from "./app/index"
import Roles from "./app/storage/Roles"

import "gitart-vue-dialog/dist/style.css"
import { GDialog } from "gitart-vue-dialog"

import {library, icon} from "@fortawesome/fontawesome-svg-core"
import {faTrashCan, faUserPlus, faGhost, faHammer, faClose} from "@fortawesome/free-solid-svg-icons"
library.add(faTrashCan, faUserPlus, faGhost, faHammer, faClose)
window.fa = icon

const store = createStore({
    modules: {
        Roles
    }
})

const App = createApp(app)
App.use(store)
App.component('GDialog', GDialog)
App.mount('#root')