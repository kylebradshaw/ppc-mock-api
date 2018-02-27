// index.js
const sha1 = require('sha1')
var faker = require('faker')

module.exports = () => {
  const ROLES = ['Super Admin', 'Agency Admin', 'Agency User']
  const AGENCIES = ['Starcom', 'Spark Foundry', 'Zenith', 'Blue 449']

  class User {
    constructor(id, firstname, lastname, email, role, lionlogin, agency) {
      const name = faker.name.findName()
      const first = name.split(' ')[0]
      const last = name.split(' ')[1]
      const struct = {
        id: id || null,
        firstname: firstname || first,
        lastname: lastname || last,
        email: email || `${first.toLowerCase()}.${last.toLowerCase()}@publicisgroupe.net`,
        role: ROLES[Math.floor(Math.random() * ROLES.length)],
        lionlogin: `${first.substring(0, 1).toLowerCase()}${last.substring(0, 7).toLowerCase()}`,
        agency: AGENCIES[Math.floor(Math.random() * AGENCIES.length)]
      }

      return struct
    }
  }

  const data = {
    users: []
  }

  for (let i = 1; i < 100; i++) {
    const user = new User(i)
    data.users.push(user)
  }

  return data
}
