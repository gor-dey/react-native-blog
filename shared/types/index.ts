export type Id = number

export type PostType = {
  id: Id
  title: string
  body: string
  likes: number
  answers: { comment: string }[]
}

export type ApiResponse = PostType | PostType[]
