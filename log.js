export const log = (msg) => {
  console.log(msg, {
    env: process.browser ? 'browser' : 'server',
  })
}
