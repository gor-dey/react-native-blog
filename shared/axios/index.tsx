import { ApiResponse } from '@shared/types'
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
}
