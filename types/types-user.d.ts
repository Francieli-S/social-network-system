interface IUser {
  id: number
  name: string
  profilePicture: string
  friends: IUser[]
  status: string
}