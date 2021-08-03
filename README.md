# Amazon e-Commerce Clone

## Purpose

To recreate a Full Stack Amazon allowing users to purchase products. The Frontend was built in React with the backend tied to Firebase. Firebase was used to tie information to each individual user's account for purchase history. The application is also connected to Stripe (Testing only to provide mock purchase orders).

Click the link to view the [Amazon Clone site](https://amznjason.web.app).

## API Reference

- [Stripe](https://stripe.com/)

## How to Use the Application

1. Go to the homepage and click sign in to login or register. You may use a fake e-mail since this is for demonstartion.
2. Once you've successfully signed in, click a few items to add them to your shopping basket.
3. Click on the basket in the top right corner of the screen to proceed to view items in your shopping basket.
4. Once you've looked over purchases, click "Proceed to Checkout".
5. Type in 4242 4242 4242 4242 for the card number, 04/42 for the month and year, and 42424 for the zip code.
6. You will then be brought to a page to review orders with the order id in the top right corner of each order.
7. You are free to log out after this.

## Dependencies

| Project                 | Home Page                              |
| ----------------------- | -------------------------------------- |
| axios                   | <https://www.npmjs.com/package/axios>  |
| cors                    | <https://www.npmjs.com/package/cors>   |
| expressjs               | <https://expressjs.com/>               |
| firebase                | <https://console.firebase.com/>        |
| material-ui             | <https://material-ui.com/>             |
| moment                  | <https://www.npmjs.com/package/moment> |
| React                   | <https://reactjs.org>                  |
| @stripe/react-stripe-js | <https://stripe.com>                   |
| @stripe/stripe-js       | <https://stripe.com>                   |
| styled-components       | <https://styled-components.com>        |
