export interface BlogI {
  slug: string
  tags: string[]
  title: string
  _id: string
}

export interface BlogDetailsI extends BlogI {
  content: string
  __v: 0
  related?: BlogI[]
}
