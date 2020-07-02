import { createStore } from 'vuex'
import { fetch } from '../api/fetch'
import { StateModel, UserModel } from './model'

const state: StateModel = {
  count: 1,
  userInfo: {},
}

const getters = {
  userName: (state: StateModel) => state.userInfo.name,
}

const actions = {
  getUserInfo({ commit }: any): any {
    return fetch({ url: '' }).then((res: any) => {
      if (res.code == 200) {
        const userInfo: UserModel = {
          id: '1',
          name: 'HAHA',
          avatar:
            'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg',
        }
        commit('setUserInfo', userInfo)
        return userInfo
      }
    })
  },
}

const mutations = {
  setCount(state: StateModel, payload: number) {
    state.count = payload
  },
  setUserInfo(state: StateModel, payload: UserModel) {
    state.userInfo = payload
  },
}

export const store = createStore({
  state,
  getters,
  actions,
  mutations,
})
