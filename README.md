![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)


# LAB | Context Practice Lab

## Introduction


In this exercise, we will use all what we have learned about Context to create values that can be shared with my entire application without having to pass those values down as props continiously.
## Requirements

- Fork this repo
- Then clone this repo


## Instructions
In this lab you will be working with the same example used in the class lesson. In this lesson we already have the context for the theming so now we want to create a new context for the user information. The steps of this

### Iteration 1: Create the auth context

This context will be responsible for handling the information for my user. The initial value of your user should be your name. For now let's assume that the context for user can only have two values:

1. an empty string ''

2. Your name (example: "John")

For this iteration you must create two parts of your context:
1. Firstly, create the context using createContext
2. secondly, create the provider component that we will use in the next iteration to allow my entire application to use my context.

   #### HINT: the value of the loggedInUser should be a state and that state should be one of the values for my context 


### Iteration 2: Wrap the entire application with our context provider
In this iteration, we want to encapsulate my entire application with the auth provider. This will allow my entire application to use my context.

### Iteration 3: Retrieve the context in the Navbar component

In the Navabr component retrieve the context (using useContext) and replace the <p>USERNAME</p> with the actual value stored in the context representing the username.

Before:

![image](https://github.com/May-Cohort-Code/context-practice-lab/assets/54825038/049fa0da-60ab-428c-8d7f-25d3b0866893)

After:

![image](https://github.com/May-Cohort-Code/context-practice-lab/assets/54825038/59556e90-afc6-4c8c-a54b-7cd2e19f6936)


### Iteration 4: Retrieve the context in the Homepage component

Now we can retrieve the same context value in our Homepage component. In this component you want to retrieve the context the same way as the previous iteration and replace the USERNAME to the context value containing the username

### Iteration 5: Create a function for logging in and out

This will simulate logging in and out for our user. Of course in a real application and your final project you will have more functionality with our server to log users in and get data from the database. For this iteration we want to create a function that will that when called will check the username value in our context and change the value to either an empty string or your name.

This function should contain a conditional to check if the username value is empty and if it is then change the username to your name (example: "John") otherwise it should set the value to an empty string.


### Iteration 6: Retrieve the function to change the username value

The last step is to bring the function we just created over to the Navbar component and call the function whenever the user clicks on the logout button.

#### Bonus: Conditionally change the value of the button based on if the user is logged in our out


