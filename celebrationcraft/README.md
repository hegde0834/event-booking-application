# CelebrationCraft

A responsive single-page React app for browsing celebration packages
(Birthdays, Haldi, Marriages, Baby Showers), booking one through a validated
form, and adding custom themes to live state.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Requires Node.js 18 or newer.

## Pages

| Route     | What it does                                                         |
|-----------|----------------------------------------------------------------------|
| `/`       | Hero plus four category cards that open the filtered catalog         |
| `/events` | Search by name or category; `EventCard` components with "Book now"   |
| `/book`   | Booking form validated with `useState`; success message on submit    |
| `/create` | Adds a new package to the app's state list; the catalog updates live |

## Structure

```
src/
  App.jsx              routes, header, shared state (events, query, selected)
  data.js              seed events, category colours, helpers
  components/          Field, EventCard (props), Bunting
  pages/               Home, Events, Book, Create
  index.css            styles (light and dark mode)
```
