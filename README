Stacker

Smart Layouts For Dim Wits

## opinions

#### IE7 is dead

IE7 costs more to support than it's worth.  If you're looking at frameworks like this, thances are that you don't have the team to support IE7 anyway.  Worry about it when the numbers support it.

#### IE8 support is limited to grid only

IE8 doesn't support media queries. So I took the pragmatic approach of putting anything not grid related in media queries. Large is the default view and other layout classes are hidden by default

#### naming things

One of my pet peeves is the fact that row and column are used to name things.  On mobile, they switch and that's dumb.

#### Breakpoints don't get devise names

There is an unexpected consiquence in naming your breakpoints after devices: you begin to make assumptions about how those breakpoints are being used.  Not all small screens have touch.  Not all large screens do not.

* small
* medium
* large

Feel free to extend these if you need.  For most projects, three is all i need.

#### Layout only

This is not a kitchen-sink framework.  It's an opinionated way to make resoponsive layouts

#### Minimal markup

Having used the layout systemso of Bootstrap, Foundation, and the like,  I've developed a distaste for the grid.  I don't want to have to markup everything for it to get layout.  I want an API that allows markup to gain complexity only as my requirements gain complexity.

Rows are used to designate the way content in child divs is seperated.

These rows have a similar API to tables.  You can span them over mulitple columns.

#### Scenario architecture

I've been fascinated with this concept as media queries as layout state.

#### Personal Expirament

I hate duplication.  I wanted to create a simpl but logic centric layout to force myself to use deliberate duplication to cover some of css shortcomings.

#### Developmentment

```bash
$ npm install
$ gulp serve
```

#### TODO:
* viewport-dependent screen display logic:
  * visible-small
  * visible-medium
  * visible-large
  * hidden-small
  * hidden-medium
  * hidden-large
