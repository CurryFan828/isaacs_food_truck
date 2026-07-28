# SunnySide Breakfast App

SunnySide Breakfast is a web application that lets customers browse a breakfast food truck menu, add items to a cart, and place an order. Users can filter by category, search for specific items, save favorites, and complete a checkout with basic payment details.

---

## Features

- Browse a full breakfast menu pulled from a live API
- Search for items by name
- Filter items by category (Breakfast, Drinks, Sides)
- Add items to a shopping cart with quantity controls
- Save favorite items across sessions
- Checkout with a simulated payment form
- View an order confirmation page
- Create a profile and view order history
- Fully responsive — works on mobile, tablet, and desktop

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Angular 20 | Front-end framework |
| TypeScript | Programming language |
| RxJS | Reactive data streams |
| Bootstrap 5 | UI styling and layout |
| Angular CDK | Responsive breakpoint detection |
| Karma + Jasmine | Unit testing |

---

## Prerequisites

Before running this project, make sure you have the following installed on your computer:

- **Node.js** (version 18 or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js — no separate install needed)
- **Angular CLI** — installed via npm (see below)
- A code editor like **VS Code** (recommended)

To check if Node.js and npm are already installed, open a terminal and run:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CurryFan828/isaacs_food_truck.git
cd isaacs_food_truck
```

Or download the ZIP file from GitHub and extract it to a folder.

### 2. Install Angular CLI

If you have never used Angular before, install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

### 3. Install Project Dependencies

Inside the project folder, run:

```bash
npm install
```

This will download all the packages listed in `package.json` into a `node_modules` folder. This may take a minute or two.

### 4. Start the Development Server

```bash
ng serve
```

Once it finishes loading, open your browser and go to:

```
http://localhost:4200
```

The app will automatically reload in the browser whenever you save a file.

---

## Project Structure

```
src/
├── app/
│   ├── shared/
│   │   └── models/           # Data models (Food, Cart, CartItem, Tag)
│   ├── services/
│   │   ├── food/             # Fetches menu data from API
│   │   ├── cart/             # Manages cart state and localStorage
│   │   ├── favorites/        # Manages saved favorite items
│   │   ├── auth/             # Handles user login/profile
│   │   └── popup-alert/      # Shows toast notification messages
│   ├── home/                 # Landing page
│   ├── menu-page/            # Browse, search, and filter menu
│   ├── food-page/            # Single item detail view
│   ├── cart-page/            # Shopping cart view
│   ├── checkout-page/        # Payment form and order summary
│   ├── thank-you/            # Order confirmation page
│   ├── login-page/           # User login/registration
│   ├── profile-page/         # User profile and order history
│   ├── header/               # Top navigation bar
│   ├── footer/               # Page footer
│   ├── search/               # Search bar component
│   ├── tags/                 # Category filter buttons
│   ├── popup-alert/          # Notification toast component
│   └── not-found/            # Empty state when no results match
├── assets/
│   └── foods/                # Food item images
└── public/                   # Static files
```

---

## How the App Works

1. **Menu Data** — When the app loads, it fetches the menu from the live API at `https://sunnysideb-api.isaacstanek.com/`. The data is cached so it is not re-fetched every time you navigate between pages.

2. **Cart** — When you add an item to the cart, it is saved to `localStorage` in your browser. This means your cart is preserved even if you refresh the page.

3. **Favorites** — Items you heart/favorite are also stored in `localStorage` under a separate key, so they persist across sessions.

4. **Checkout** — The checkout form collects a card number, expiration date, and CVV. It validates the input format before allowing you to place the order. After placing the order, the cart is cleared and you are taken to the Thank You page.

5. **Profile** — If you create a profile (login), your name, phone, and email are saved locally. Order history is stored in `localStorage` as well.

---

## Running Tests

To run the unit tests:

```bash
ng test
```

This opens a browser window (via Karma) and runs all the test specs. Results are displayed in the terminal.

---

## Building for Production

To create an optimized production build:

```bash
ng build
```

The output files will be placed in the `dist/` folder. These are the files you would upload to a web hosting service.

---

## API

The app connects to a custom REST API to load menu items:

- **Base URL:** `https://sunnysideb-api.isaacstanek.com/`
- **Menu endpoint:** `GET /` — Returns an array of food items with name, price, tags, image URL, star rating, and cook time.

---

## Notes

- All cart, favorite, and user data is stored locally in the browser via `localStorage`. There is no user account system connected to a database.
- The checkout form is simulated — no real payment is processed.
- The app requires an internet connection to load menu data from the API.

---

## Author

Isaac Stanek
