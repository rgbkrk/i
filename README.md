# i

A personal redirect server.

## Installation

Clone this repository, `cd` to the cloned directory, and...

```
npm i
```

## Handy Hosts


Set `127.0.0.1` to `i` in `/etc/hosts`:

```
127.0.0.1   i
```

Then visit [http://i](i).

## Configuration

Create an `i.json` like so:

```

[
  {
    "location": "https://docs.google.com/document/d/somedocid/edit#",
    "keyword": "write"
  }
]
```
