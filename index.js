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

  class RoleResource {
    constructor(name, read, create, update, del) {
      const struct = {
        id: 1,
        text: 'ohhai'
      }
    }
  }

  const data = {
    roles: ROLES,
    agencies: AGENCIES,
    users: [],
    resources: [{id: 1, text: 'ohhai'}]
  }

  for (let i = 1; i < 100; i++) {
    const user = new User(i)
    data.users.push(user)
  }

  return data
}


// "advertisers":{"create":true,"read":true,"update":true,"destroy":true},
// "audience_hierarchies":{"create":true,"read":true,"update":true,"destroy":true},
// "brands":{"create":true,"read":true,"update":true,"destroy":true},
// "briefs":{"create":true,"read":true,"update":true,"destroy":true},
// "campaign_images":{"create":true,"read":true,"update":true,"destroy":true},
// "channels":{"create":true,"read":true,"update":true,"destroy":true},
// "clients":{"create":true,"read":true,"update":true,"destroy":true},
// "countries":{"create":true,"read":true,"update":true,"destroy":true},
// "currency":{"create":true,"read":true,"update":true,"destroy":true},
// "curves":{"create":true,"read":true,"update":true,"destroy":true},
// "custom_segments":{"create":true,"read":true,"update":true,"destroy":true},
// "customer_journeys":{"create":true,"read":true,"update":true,"destroy":true},
// "demographics":{"create":true,"read":true,"update":true,"destroy":true},
// "dmp_partners":{"create":true,"read":true,"update":true,"destroy":true},
// "dsp_accounts":{"create":true,"read":true,"update":true,"destroy":true},
// "dsps":{"create":true,"read":true,"update":true,"destroy":true},
// "languages":{"create":true,"read":true,"update":true,"destroy":true},
// "left_hand_nav":{"create":true,"read":true,"update":true,"destroy":true},
// "login":{"create":true,"read":true,"update":true,"destroy":true},
// "market_segments":{"create":true,"read":true,"update":true,"destroy":true},
// "outcome_timeframes":{"create":true,"read":true,"update":true,"destroy":true},
// "performance_goals":{"create":true,"read":true,"update":true,"destroy":true},
// "performances":{"create":true,"read":true,"update":true,"destroy":true},
// "plans":{"create":true,"read":true,"update":true,"destroy":true},
// "products":{"create":true,"read":true,"update":true,"destroy":true},
// "regions":{"create":true,"read":true,"update":true,"destroy":true},
// "segment_search":{"create":true,"read":true,"update":true,"destroy":true},
// "tag_management":{"create":true,"read":true,"update":true,"destroy":true},
// "user_preferences":{"create":true,"read":true,"update":true,"destroy":true}
