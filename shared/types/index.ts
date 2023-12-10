export type Id = number

export type PostType = {
  id: Id
  title: string
  body: string
  likes: number
}

export type AnswersType = {
  id: Id
  postId: Id
  comment: string
  username: string
}

export type ApiResponse = PostType | PostType[] | AnswersType[]
