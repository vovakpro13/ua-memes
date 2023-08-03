export const enum ContentType {
  Reel = 'reel',
  Video = 'video',
  Meme = 'meme',
}

export enum FileTypes {
  Image = 'image',
  Video = 'video',
  Audio = 'audio',
}

export interface IAuthor {
  id: string
  name: string
  avatar: string
}

export interface IPostStats {
  likes: number
  comments: number
}

export type ContentObject = {
  type: ContentType
  url: string
}

export interface IPost {
  id: string
  author: IAuthor
  content: ContentObject[]
  stats: IPostStats
  saved: boolean
}
