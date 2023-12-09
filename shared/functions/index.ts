import { $axios } from '@shared/axios'
import { ApiResponse, Id } from '@shared/types'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const getAxiosPosts = async (): Promise<ApiResponse> =>
  await $axios.get(url)

export const getAxiosPostById = async (id: Id): Promise<ApiResponse> =>
  await $axios.get(url + '/' + id)
