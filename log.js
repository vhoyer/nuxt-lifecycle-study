export const log = (...msg) => {
  console.log({
    env: process.browser ? 'browser' : 'server',
  }, ...msg);
}
