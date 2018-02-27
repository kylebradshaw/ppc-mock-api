// index.js
const sha1 = require('sha1')
var faker = require('faker')

module.exports = () => {
  const ROLES = ['Super Admin', 'Agency Admin', 'Agency User']
  const AGENCIES = ['Starcom', 'Spark Foundry', 'Zenith', 'Blue 449']
  const RESOURCES = [
    {name:"advertisers", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"audience_hierarchies", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"brands", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"briefs", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"campaign_images", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"channels", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"clients", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"countries", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"currency", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"curves", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"custom_segments", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"customer_journeys", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"demographics", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"dmp_partners", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"dsp_accounts", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"dsps", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"languages", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"left_hand_nav", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"login", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"market_segments", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"outcome_timeframes", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"performance_goals", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"performances", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"plans", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"products", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"regions", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"segment_search", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"tag_management", permission: {"create":true,"read":true,"update":true,"destroy":true}},
    {name:"user_preferences", permission: {"create":true,"read":true,"update":true,"destroy":true}}
  ]

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

  function resourcesById() {
    return RESOURCES.map((r, i, Arr) => {
      return Object.assign(r, { id: i + 1 })
    });
  }

  const data = {
    roles: ROLES,
    agencies: AGENCIES,
    users: [],
    resources: resourcesById()
  }

  for (let i = 1; i < 100; i++) {
    const user = new User(i)
    data.users.push(user)
  }

  return data
}
