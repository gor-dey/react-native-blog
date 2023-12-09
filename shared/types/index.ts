export type Id = number

export type PostType = {
  userId: Id
  id: Id
  title: string
  body: string
}

export type ApiResponse = PostType | PostType[]
