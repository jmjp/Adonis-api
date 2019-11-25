'use strict'

const User = use("App/Models/User")
class UserController {

    async create({ request }){
        const data = request.only(["username","password","email"])
        const user = User.create(data)

        return user

    }

    async login({ request, auth}){
        const {email, password} = request.all()
        const token = await auth.attempt(email,password)

        return token
    }
}

module.exports = UserController
