const concurrently = require('concurrently')

const { API_DIR, runner, concurrentOpts } = require('./common')

const jobs = [
  {
    name: 'api',
    command: `cd ${API_DIR} && ${runner} run start:dev`,
    prefixColor: 'green',
  },
]

concurrently(jobs, concurrentOpts).catch((e) => {
  console.error(e.message)
})
