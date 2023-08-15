export const tasks = {
    namespaced: true,

    state(){
        return {
            all: []
        }
    },

    getters: {
        taskCount: state => state.all.length,
    },

    mutations: {
        addTask(state, task){
            state.all = [...state.all, task]
            //state.all.push(task)
            console.log("Actual State")
            console.log(state.all)
        }
    },

    actions: {
        addTask(ctx, task){
            ctx.commit('addTask', task)
        }
    }
}