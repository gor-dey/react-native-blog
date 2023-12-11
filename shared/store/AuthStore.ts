import { makeAutoObservable } from 'mobx'

export class AuthStore {
  isAuthenticated: boolean = false
  username: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  login(data: { username: string }): void {
    this.username = data.username.toLowerCase().trim()
    this.isAuthenticated = true
  }
}
