# bweno

Deno client library for Bitwarden CLI's local REST API. Pronounced as Spanish
'bueno', meaning 'good'.

## Usage examples

Create an instance:

```javascript
const bweno = new Bweno();
```

List vault items:

```javascript
const items = await bweno.list.items();
```

Create a login item:

```javascript
const result = await bweno.create.login({
  username: 'foo',
  password: 'bar',
});
```

## Todo
* request query options
