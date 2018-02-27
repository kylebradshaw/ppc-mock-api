// index.js
const sha1 = require('sha1')

module.exports = () => {
  const ROLES = ['Super Admin', 'Agency Admin', 'Agency User']
  const AGENCIES = ['Starcom', 'Spark Foundry', 'Zenith', 'Blue 449']


  class User {
    constructor (id, firstname, lastname, email, role, lionlogin, agency) {
      const struct = {
        id: id || null,
        firstname: firstname || '',
        lastname: lastname || '',
        email: email || `${sha1((new Date()).getTime()).substring(0, 3)}@publicisgroupe.net`,
        role: ROLES[Math.floor(Math.random() * ROLES.length) + 1],
        lionlogin: `${sha1((new Date()).getTime()).substring(0, 6)}`,
        agency: AGENCIES[Math.floor(Math.random() * AGENCIES.length) + 1]
      }

      return struct
    }
  }

  const data = {
    users: []
  }

  for (let i = 1; i < 100; i++) {
    const user = new User(i, `First ${i}`, `Last ${i}+1`)
    data.users.push(user)
  }

  return data
}
