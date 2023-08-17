export const tasks = {
    namespaced: true,

    state(){
        return {
            all: []
        }
    },

    getters: {
        taskCount: state => state.all.length,

        lastElementId: (state) => {
            if (state.all.length > 0){
               const task = state.all.slice(-1).pop()
               console.log(`Task obj: ${task}`)
               return task.id
            }
            return 0
        }
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