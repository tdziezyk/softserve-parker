import { query } from '@/graphql'
import axios from 'axios'

export class User {
  static async getByEmail (email: string, fields: string[] = [ 'email' ]) {
    const { user } = await query(`query
      User($email: String!) {
        user(email: $email) {
          ${fields.join('\n')}
        }
      }`, { email })

    return user
  }

  static async create (firstName: string, lastName: string, email: string, plate: string, phone: string, password: string) {
    const result = await axios.post('/signup', { firstName, lastName, email, plate, phone, password })
  }

  static async resetPassword (id: number, password: string, token: string) {
    const result = await axios.post('/reset-password', { id, password, token })
  }
}
