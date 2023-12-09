import { $axios } from '@shared/axios'
import { ApiResponse, Id } from '@shared/types'
import { apiUrl } from '@shared/utils'

export const getAxiosPosts = async (): Promise<ApiResponse> =>
  await $axios.get(apiUrl)

export const getAxiosPostById = async (id: Id): Promise<ApiResponse> =>
  await $axios.get(apiUrl + '/' + id)
