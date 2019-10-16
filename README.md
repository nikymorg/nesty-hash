## Nesty Hash

#### About
Nesty Hash is a tool I designed to help my programming students gain more experience with nested data structures. It allows the user to randomly generate nested data structures in JavaScript, Ruby and Python by selecting data types to include and a maximum nesting depth of up to 5 levels.

[Demo](https://nesty-hash.netlify.com/)
![SlackMoji Gif](https://nikym.org/img/nesty-hash.gif)

#### Features
This project uses [React Ace](https://github.com/securingsincity/react-ace) to display the data structure snippets. The CSS is [Semantic UI React](https://react.semantic-ui.com/) along with some custom CSS Grid.

The code to randomly generate nested data structures works by recursively generating new data structures from the selected options at each level of the hash. The code to prettify the data structures inserts newlines and tabs based on character-matching.

#### Installation
Nesty Hash was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To install, fork and clone this repository. Run `npm install` to install dependencies. Then run `npm start` to start a server on `http://localhost:3000/`.
