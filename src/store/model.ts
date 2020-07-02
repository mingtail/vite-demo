export interface StateModel {
  count: number
  userInfo: UserModel
}

export interface UserModel {
  id?: string
  name?: string
  avatar?: string
}