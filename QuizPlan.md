# Todo list Quiz

- Create quiz component
- Loop through 10 history items that belong to the user -> by difficulty level
- Type translation
- Show results
 

# Data structure
  
```jsx
const things = { 
  QmwpWKVsH9t7WvCWJxkq: {
    userID: 123123,
    downloadURL,
    sourceWord : "house",
    translatedWord: "casa",
    languageTo: 'es',
    difficultyFlag: 1
  },  
  7knUSBZ59NPzY3QXd07H: {
    userID: 123123,
    downloadURL,
    sourceWord : "car",
    translatedWord: "carro",
    languageTo: 'es',
    difficultyFlag: 2
  }  
};
```

# HTML Structure

-  

# Component Structure

- Quiz
  - QuizItem
    - Img
    - input
  - Results
    - Quiz result
    - ResultsItem 
      - button  change difficulty

# Steps

- Make the plan & data structures  X
- Query data from the database
- Created dummy components
- Created the structure with dummy components
- Updated the components with their respective HTML 
- Replaced static values with dynamic variables (props inside the component)
- Set a state for dynamic data
- Made helper functions to interact with state (complete, delete, create) 
- Fancy up the CSS a little
- Refactored with a custom hook
- Added backend functionality (axios in custom hook)