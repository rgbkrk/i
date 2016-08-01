# i

The personal redirect server.

Use your URL bar for reaching frequent sites, faster.

## Installation

Clone this repository, `cd` to the cloned directory, and...

```
npm i
```

## Configuration

Create an `i.json` like so:

```

[
  {
    "location": "https://github.com/rgbkrk",
    "keyword": "code"
  },
  {
    "location": "https://docs.google.com/document/d/somedocid/edit",
    "keyword": "write"
  }
]
```

Now run the server:

```
npm run start
```

## Handy Hosts

Set `127.0.0.1` to `i` in `/etc/hosts`:

```
127.0.0.1   i
```

Then visit [http://i](i).

:boom:
