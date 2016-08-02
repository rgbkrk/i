# i

Personal redirect server.

Use your URL bar for reaching frequent sites, faster. My workflow with this:

1. Type `i write` in the URL bar
2. :boom: redirected to my worklog

Or

1. Type `i review`
2. :tada: redirected to https://github.com/notifications

You can live like this too. It's like a console for your browsing.

## Installation

Clone this repository, `cd` to the cloned directory, and install this package.

```
git clone https://github.com/rgbkrk/i
cd i
npm i
```

To make this _actually_ handy, instead of "sorta, kinda, guess this is cool" handy, you need to add `i` as a hostname for `127.0.0.1` within `/etc/hosts`. Example `/etc/hosts`:

```
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
127.0.0.1 i
```

NOTE: You could make this use another keyword like `go`, `yo`, or even `froyo`.

## Configuration

Create an `i.json` like so:

```
{
  "code": "https://github.com/rgbkrk",
  "write": "https://docs.google.com/document/d/somedocid/edit"
}
```

Now run the server:

```
npm run start
```

## Usage

Now visit one of your keywords, like `http://i/code`. It should redirect.

If you visit [http://i](http://i), you'll get a listing of all your keywords.

:boom:

## Super mode

If you're using Chrome, you can set `i` as a search engine so that you can type

```
i write
```

Right click your URL bar (Omnibar!):

![](http://i.imgur.com/dTTouDd.png)

and click "Edit Search Engines..."

From the search engines page, scroll to the bottom of the search engines section until you see a way to add a new search engine:

![](http://i.imgur.com/ym0UiQa.png)

Within that section, fill it out with `i` as the search engine and keyword, followed by `http://i/%s` as the URL:

![search entry](http://i.imgur.com/dzunSYT.png)

:tada: You can now type `i rock`.
