import {
  getAxiosPosts,
  getAxiosPostById,
  getCommentsByPostId
} from '@shared/functions'
import { Id, PostType, ApiResponse, AnswersType } from '@shared/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { Alert } from 'react-native'
import { AuthStore } from './AuthStore'

class RootStore {
  AuthStore = new AuthStore()

  postsList: PostType[] = []
  isLoading: boolean = true
  actualPost: PostType | null = null
  commentsList: AnswersType[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getPosts = async (): Promise<void> => {
    await this.fetchData(getAxiosPosts)
  }
  getPostById = async (id: Id): Promise<void> => {
    await this.fetchData(() => getAxiosPostById(id), true)
  }
  getComments = async (postId: Id): Promise<void> => {
    runInAction(() => (this.isLoading = true))
    this.commentsList = [] as AnswersType[]
    try {
      const data: ApiResponse = await getCommentsByPostId(postId)
      runInAction(() => {
        if (Array.isArray(data)) {
          this.commentsList = data as AnswersType[]
          runInAction(() => (this.isLoading = false))
        }
      })
    } catch (error: any) {
      Alert.alert('Error', `Error fetching comments: ${error.message}`)
    } finally {
      runInAction(() => (this.isLoading = false))
    }
  }
  addComment = ({ comment }: { comment: string }) => {
    this.commentsList.unshift({
      id: this.commentsList.length + 2,
      postId: this.actualPost?.id || 0,
      comment: comment,
      username: this.AuthStore.username
    })
  }
  setLikes = (postId: Id): void => {
    this.postsList[postId - 1].likes += 1
  }

  private fetchData = async (
    fetchFunction: () => Promise<ApiResponse>,
    isSingle: boolean = false
  ): Promise<void> => {
    runInAction((): boolean => (this.isLoading = true))

    try {
      const data: ApiResponse = await fetchFunction()

      if (Array.isArray(data)) {
        runInAction((): PostType[] => (this.postsList = data as PostType[]))
      } else {
        runInAction((): PostType[] => (this.postsList = isSingle ? [] : [data]))
        runInAction(
          (): PostType | null => (this.actualPost = isSingle ? data : null)
        )
      }
    } catch (error: any) {
      Alert.alert('Ошибка', `Ошибка при запросе данных: ${error.message}`)
    } finally {
      runInAction((): boolean => (this.isLoading = false))
    }
  }
}

export const Store = new RootStore()
