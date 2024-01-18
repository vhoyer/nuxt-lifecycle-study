# nuxt-static-lifecycle

## Dependencies

- docker
- make

## Running

```
make
```

## Output

When the server first becomes available, there is no output of any of the logs
defined in the project, so the below outputs are only displayed after one page
has been requested to the server and rendered into the client.

### Server console:

```bash
{ env: 'server' } create plugin
{ env: 'server' } Vuex state: [isRef=false] {}
{ env: 'server' } home: beforeRouteEnter
{ env: 'server' } plugin
{ env: 'server' } home: beforeCreate
{ env: 'server' } home: data
{ env: 'server' } home: created
{ env: 'server' } [plugin hooks]: app:rendered
```

### Client console:

```bash
log.js:2 {env: 'browser'} 'create plugin'
log.js:2 {env: 'browser'} 'Vuex state: [isRef=false]' Proxy(Object) {}
log.js:2 {env: 'browser'} 'home: beforeRouteEnter'
log.js:2 {env: 'browser'} 'plugin'
entry.js:54 <Suspense> is an experimental feature and its API will likely change.
log.js:2 {env: 'browser'} 'home: beforeCreate'
log.js:2 {env: 'browser'} 'home: data'
log.js:2 {env: 'browser'} 'home: created'
log.js:2 {env: 'browser'} 'home: beforeMount'
log.js:2 {env: 'browser'} 'home: mounted'
log.js:2 {env: 'browser'} '[plugin hooks]:' 'page:finish'
```
