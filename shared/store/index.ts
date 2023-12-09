import { getAxiosPosts, getAxiosPostById } from '@shared/functions'
import { Id, PostType, ApiResponse } from '@shared/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { Alert } from 'react-native'

class RootStore {
  postsList: PostType[] = []
  isLoading: boolean = true
  actualPost: PostType | null = null

  constructor() {
    makeAutoObservable(this)
  }

  getPosts = async () => {
    await this.fetchData(getAxiosPosts)
  }
  getPostById = async (id: Id) => {
    await this.fetchData(() => getAxiosPostById(id), true)
  }

  private fetchData = async (
    fetchFunction: () => Promise<ApiResponse>,
    isSingle: boolean = false
  ) => {
    runInAction(() => (this.isLoading = true))

    try {
      const data: ApiResponse = await fetchFunction()

      if (Array.isArray(data)) {
        runInAction(() => (this.postsList = data))
      } else {
        runInAction(() => (this.postsList = isSingle ? [] : [data]))
        runInAction(() => (this.actualPost = isSingle ? data : null))
      }
    } catch (error: any) {
      Alert.alert('Ошибка', `Ошибка при запросе данных: ${error.message}`)
    } finally {
      runInAction(() => (this.isLoading = false))
    }
  }
}

export const Store = new RootStore()
