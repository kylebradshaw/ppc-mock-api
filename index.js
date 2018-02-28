// index.js
const sha1 = require('sha1')
const faker = require('faker')
let coinflip = require('coinflip')

module.exports = () => {
  const ROLES = [{'id':9,'name':'Agency Admin'},{'id':10,'name':'Agency User'},{'id':4,'name':'Super Admin'}]
  const AGENCIES = ['Starcom', 'Spark Foundry', 'Zenith', 'Blue 449']
  const RESOURCES = [
    {name:'advertisers', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'audience_hierarchies', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'brands', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'briefs', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'campaign_images', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'channels', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'clients', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'countries', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'currency', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'curves', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'custom_segments', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'customer_journeys', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'demographics', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'dmp_partners', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'dsp_accounts', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'dsps', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'languages', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'left_hand_nav', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'login', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'market_segments', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'outcome_timeframes', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'performance_goals', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'performances', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'plans', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'products', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'regions', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'segment_search', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'tag_management', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} },
    {name:'user_preferences', permission: {'create': coinflip(), 'read': coinflip(), 'update': coinflip(), 'destroy': coinflip()} }
  ]
  // export interface User {
  //   product_ids: any;
  //   email: string;
  //   role_id: number;
  //   first_name: string;
  //   last_name: string;
  //   id: number;
  // }
  class User {
    constructor(id, firstname, lastname, email, roleid, productids) { //, lionlogin, agency
      const name = faker.name.findName()
      const first = name.split(' ')[0]
      const last = name.split(' ')[1]
      const struct = {
        id: id || null,
        first_name: firstname || first,
        last_name: lastname || last,
        email: email || `${first.toLowerCase()}.${last.toLowerCase()}@publicisgroupe.net`,
        role_id: ROLES[Math.floor(Math.random() * ROLES.length)].id,
        lion_login: `${first.substring(0, 1).toLowerCase()}${last.substring(0, 7).toLowerCase()}`,
        agency: AGENCIES[Math.floor(Math.random() * AGENCIES.length)],
        product_ids: productids || []
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
