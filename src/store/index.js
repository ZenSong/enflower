import vue from 'vue'
const store = vue.observable({
    homeIcon : false,
})

const mutations = {
    CHANGE_HOME_ICOM(data){
        store.homeIcon = data
    }
}

export {
    store,
    mutations
}