import { ApiResponse, Id, PostType } from '@shared/types'
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'

const handleResponse = (response: AxiosResponse): ApiResponse => {
  const responseData: ApiResponse = response.data
  return responseData
}

const handleError = (error: AxiosError): Promise<never> => {
  console.error('Error:', error)
  return Promise.reject(error)
}

export const $axios = {
  get: (apiUrl: string): Promise<ApiResponse> => {
    return axios.get(apiUrl).then(handleResponse).catch(handleError)
  }

  // post: (
  //   apiUrl: string,
  //   data: PostData,
  //   config?: AxiosRequestConfig
  // ): Promise<AddTenantResponse | ApiResponse> => {
  //   return axios
  //     .post(apiUrl, data, config)
  //     .then(handleResponse)
  //     .catch(handleError)
  // },

  // put: (
  //   apiUrl: string,
  //   data: PutData,
  //   config?: AxiosRequestConfig
  // ): Promise<ApiResponse> => {
  //   return axios
  //     .put(apiUrl, data, config)
  //     .then(handleResponse)
  //     .catch(handleError)
  // },

  // delete: (
  //   apiUrl: string,
  //   config?: AxiosRequestConfig
  // ): Promise<ApiResponse> => {
  //   return axios.delete(apiUrl, config).then(handleResponse).catch(handleError)
  // }
}
