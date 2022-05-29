# Bweno

Think outside the bun :taco:

Bweno is a client library for Bitwarden CLI's local REST API. Pronounced as Spanish
'bueno', meaning 'good'.

## Requirements

You must:

- install Bitwarden CLI
- be logged into your account with the CLI
- run the CLI server (`bw serve` command)

You can check whether all 3 conditions are met by doing a status request to the
server:

```
curl 'http://localhost:8087/status' | jq
```

output:

```
{
  "success": true,
  "data": {
    "object": "template",
    "template": {
      "serverUrl": null,
      "lastSync": "2022-05-27T22:01:02.771Z",
      "userEmail": "<your email>",
      "userId": "<your userId>",
      "status": "unlocked"
    }
  }
}
```

If "status" is anything other than "unlocked", this library will not work
properly for you.

## Usage

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
  name: 'foo',
  login: {
    username: 'bar',
    password: 'baz',
  }
});
```

## Todo

* Bitwarden sends
* attachments
* organizations
