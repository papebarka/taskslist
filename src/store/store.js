import { createStore } from "vuex"
import { tasks } from './tasks.js'

export const store = createStore({
    modules: {
        tasks
    }
})