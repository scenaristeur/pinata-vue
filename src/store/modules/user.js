const state = () => ({
  credentials: null,
  pinata: null
})

const mutations = {
  setPinata(state, p){
    // lequel est mieux ?
    state.credentials.pinata = p
    state.pinata = p
  }
  // setDoc(state, d){
  //   console.log(d)
  //   state.doc = d
  // },
  // updateDoc(state, newDoc) {
  //   state.doc = newDoc
  //   //render(newDoc)
  // },

}

const actions = {
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
