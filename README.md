# i

The personal redirect server.

Use your URL bar for reaching frequent sites, faster.

## Installation

Clone this repository, `cd` to the cloned directory, and...

```
npm i
```

To make this _actually_ handy, instead of "sorta, kinda, guess this is cool" handy, you need to add `i` as a hostname for `127.0.0.1` within `/etc/hosts`. Example `/etc/hosts`:

```
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
127.0.0.1 i
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

## Using

Now visit one of your keywords, like `http://i/code`. It should redirect.

If you visit [http://i](http://i), you'll get a listing of all your keywords.

:boom:
