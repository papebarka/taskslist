export const tasks = {
    namespaced: true,

    state(){
        return {
            tasks: []
        }
    },

    mutations: {
        set
    },

    actions: {
        addTask(ctx)
    }
}