# Testing - Online Shopping

The task is to write test to the program code so that it meets all business requirements.

# How to get the project

To solve the task, proceed as follows:
1. Fork this repository on to your account
2. Clone the forked repo to your computer using `git clone URL`
3. Run `npm install` to instal all needed packages
4. Make all necessary changes - write tests, update the code
5. Confirm all changes with test run: `npm run test` or `npx jest`
6. Commit your changes and make a pull request for the original repo on GitHub
7. Grade (Arvestatud) is awarded to students who:
   - made the pull request with test cases (in code or in document)
   - corrected any issues in the code (if there are any)

# Business requirements

**Background**

The online shop sells products categorized into types A, B, C, and D, with type A being the cheapest and type D being the most expensive.

The maximum price for any product is $2000.

The minimum price for any product should be at least $15.

Customers with a loyalty membership receive a 10% discount on their purchase.


**Business rules for calculating the price of a car rental for one day**

1. Customers under the age of 21 cannot purchase any products.

2. Customers aged 21-25 can only purchase type A or B products.

3. Type D products are always 20% more expensive.

4. If the customer has made any returns in past, the price is increased by $150.

5. Loyalty members receive a 10% discount.


**Muudatused**

Nüüd saavad 21 aastased teha oste, enne ei saanud isegi 21 aastased teha.

Lojaalsusliikmel on nüüd 10% allahindlus.

Minimaalne hind on lisatud, kus toote hind ei lange kunagi alla $15.


