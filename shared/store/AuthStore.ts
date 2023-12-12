import { postLogin } from '@shared/functions'
import { makeAutoObservable } from 'mobx'

export class AuthStore {
  isAuthenticated: boolean = false
  username: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  async login(data: { username: string; password: string }): Promise<void> {
    try {
      const loginResponse = await postLogin(data)
      this.username = data.username.toLowerCase().trim()
      this.isAuthenticated = true
      console.log('Token:', loginResponse.token)
    } catch (error) {
      console.log(error)
    }
  }
}
