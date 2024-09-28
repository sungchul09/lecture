import { User } from './user'

export interface Term {
  id: string
  link?: string
  title: string
}

export interface ApplyValues {
  userId: User['uid']
  terms: Array<Term['id']>
  appiedAt: Date
  cardId: string
}
