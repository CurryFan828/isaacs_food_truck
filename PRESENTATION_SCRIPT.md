# SunnySide Breakfast App — Presentation Script
**Target Length: 8–12 minutes**

---

## Section 1: Introduction (1–2 minutes)

"Hi everyone, my name is Isaac Stanek, and today I'm going to walk you through my project: the SunnySide Breakfast App.

The idea behind this app is pretty simple — it's an online ordering platform for a breakfast food truck. Think of it kind of like DoorDash or Uber Eats, but built specifically for one restaurant.

Customers can go to the website, browse the menu, search for what they want, add things to a cart, and then check out. It's a full ordering experience right in the browser.

For this project, I used Angular as my main framework, along with TypeScript, Bootstrap for the design, and RxJS for handling real-time data updates. The menu itself is pulled from a live API that I set up separately.

Let me jump right into showing you what the app looks like."

---

## Section 2: Live Demo (4–5 minutes)

> **[Show the app running in the browser — start on the home page]**

### 2a. Home Page
"This is the landing page. It gives you a quick intro to the brand and has a button that takes you right to the menu. It's clean and simple — the goal was to get the user to the food as fast as possible."

> **[Click to the Menu Page]**

### 2b. Menu Page — Browsing & Filtering
"Here's the main menu. When the page loads, it fetches all the food items from my API and displays them as cards. Each card shows the item name, price, star rating, how long it takes to make, and an image.

On the left side you can see the category tags — Breakfast, Drinks, and Sides. If I click one of these, it filters the menu down to just that category."

> **[Click a tag like 'Drinks' to demonstrate filtering]**

"And you can see it instantly updates the list without reloading the page. That's one of the things Angular is really good at — reactive updates."

> **[Click 'All' to reset]**

### 2c. Search
"There's also a search bar up here. Let me search for something like 'egg'..."

> **[Type 'egg' in the search bar]**

"It does a fuzzy search, meaning it doesn't have to be an exact match. It looks at the letters in order, so it's a little more flexible than a basic filter."

> **[Clear the search]**

### 2d. Food Detail Page
"If I click on a specific item, it takes me to a detail page that shows more information about that dish — the full description, the price, and the cook time."

> **[Click on any food item]**

"There's also a heart icon here that lets me favorite the item. Favorites are saved in the browser, so they stick around even if I close the tab and come back."

> **[Click the heart icon, then go back]**

### 2e. Adding to Cart
"Let me go back to the menu and add a couple of things to the cart."

> **[Add 2–3 items to the cart]**

"You can see the cart icon in the header updating in real time with the total number of items. That little badge is driven by a reactive data stream, so it always stays in sync."

### 2f. Cart Page
"Let me open the cart."

> **[Navigate to cart page]**

"Here you can see everything I added. I can increase or decrease the quantity of each item, or remove something entirely. The total price updates automatically.

When I'm ready, I can click Checkout."

### 2g. Checkout
> **[Click Checkout]**

"The checkout panel slides in and shows me an order summary plus a payment form. The form asks for a card number, expiration date, and CVV. It validates all of this in real time — for example if I type a card number that's too short, it'll tell me."

> **[Fill in the form with sample data — e.g., 4242 4242 4242 4242, 12/26, 123]**

"Once everything looks good, I can place the order."

> **[Submit the order]**

"And it takes me to the Thank You page. The cart is cleared, and in a real scenario this is where a confirmation email or receipt would go out."

---

## Section 3: Technical Highlights (2–3 minutes)

"Now I want to talk briefly about some of the technical decisions I made during this project.

**First, Angular and the component architecture.** I built this as a set of standalone components — each page is its own self-contained piece. The header, footer, search bar, and tags are all reusable components that I can drop into any page. This kept the code organized and easy to manage.

**Second, services and reactive data.** All the business logic — like fetching the menu, managing the cart, and handling favorites — lives in dedicated service classes. These services use RxJS, which is a library for handling streams of data over time. What that means practically is that when you add something to the cart, every part of the app that cares about the cart — the header badge, the cart page, the checkout total — all update automatically without me having to manually connect them.

**Third, localStorage for persistence.** Since this is a front-end-only app without a user database, I used the browser's localStorage to save the cart and favorites. That means your cart stays there even if you close the browser and come back.

**Fourth, the API.** The menu data is served from a separate API I set up at sunnysideb-api.isaacstanek.com. The Angular app fetches this data when it loads, caches it so it doesn't keep making requests, and then filters and searches through it all on the client side.

**And fifth, responsive design.** The app works on all screen sizes. On mobile, the checkout experience adapts so it takes you to a dedicated checkout page instead of a sidebar panel. I used Angular CDK's breakpoint observer to handle that logic."

---

## Section 4: Challenges (optional — 30–60 seconds)

"A couple of things that I ran into along the way:

The trickiest part was getting the cart to stay in sync across every component. At first I was passing data around manually, but switching to a BehaviorSubject in the CartService made everything a lot cleaner.

I also had to figure out how to handle the checkout animation — getting the panel to slide in and out smoothly while keeping the layout from jumping around took some CSS work and careful timing.

Overall it was a really good learning experience for how real Angular apps are structured."

---

## Section 5: Conclusion (30–60 seconds)

"To wrap up — SunnySide Breakfast is a fully functional ordering app built with Angular, TypeScript, and Bootstrap. It connects to a live API, handles real-time cart updates, and gives users a clean end-to-end ordering experience from browsing the menu all the way to the confirmation page.

If I were to keep building this out, the next steps would probably be adding a real backend with user accounts and a database, connecting a real payment processor like Stripe, and adding an admin panel where the restaurant owner could update the menu.

Thanks for watching — links to the code and the paper are in the description."

---

## Timing Guide

| Section | Target Time |
|---|---|
| Introduction | 1–2 min |
| Live Demo | 4–5 min |
| Technical Highlights | 2–3 min |
| Challenges (optional) | 0–1 min |
| Conclusion | ~1 min |
| **Total** | **8–12 min** |

---

## Tips for Recording

- Run `ng serve` before you start recording so the app is already loaded
- Have the browser open to the home page at the start
- Use a slightly slower pace than you naturally speak — it's easier to follow on video
- If you make a mistake, pause and redo that sentence — it's easy to edit out
- Keep your browser zoom at 100% or 125% so everything is readable on screen
