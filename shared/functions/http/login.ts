import axios, { AxiosResponse } from 'axios'

const API_URL = 'https://my-mock-server-sfm3.onrender.com'

interface LoginCredentials {
  username: string
  password: string
}

interface LoginResponse {
  token: string
  userId: number
}

const mockToken = 'mockToken'

const axiosConfig = {
  headers: {
    Authorization: `Bearer ${mockToken}`,
    'Content-Type': 'application/json'
  }
}

export const postLogin = async ({
  username,
  password
}: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `${API_URL}/login`,
      { username, password },
      axiosConfig
    )

    return response.data
  } catch (error) {
    throw error
  }
}
