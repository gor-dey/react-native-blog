import { $axios } from '@shared/axios'
import { AnswersType, ApiResponse, Id } from '@shared/types'
import {
  answersEndpoint,
  apiUrl,
  postsEndpoint as postsEndpoint
} from '@shared/utils'

export const getAxiosPosts = async (): Promise<ApiResponse> =>
  await $axios.get(apiUrl + postsEndpoint)

export const getAxiosPostById = async (postId: Id): Promise<ApiResponse> =>
  await $axios.get(apiUrl + postsEndpoint + '/' + postId)

export const getCommentsByPostId = async (postId: Id): Promise<ApiResponse> => {
  try {
    const response = await $axios.get(
      apiUrl + answersEndpoint + `?postId=${postId}`
    )
    return response
  } catch (error) {
    throw error
  }
}
