// Rule #1: Only call Hooks from React Functions

// You already use Hooks in your previous lessons and exercise
// Example of a React Hook:- useState
// Example of React Router Hook:- useParams, useNavigate

// Example of how to use useState hook
import { useState } from "react"; // Import statement

function Hooks() {
    const [count, setCount] = useState(0); // Create a useState variable
    // The above is the correct way to use a React Hook
}

function notReactHook() {
    const [count, setCount] = useState(0); //NOT a valid way to use useState variable
    // Why?
    // Is the function considered a React Function?
    // Because the function name does not start with an Uppercase letter 因为前面没有大写英文字母
    // You also cannot use any React hooks inside NON-REACT functions
}

export default Hooks;

// What makes a React Function Component?
/*
1. Capitalized naming: It must start with a capital letter
2. Returns JSX: Must return HTML-like code to display
3. Can use Hooks
4. Triggered by Tags: Executed like HTMML-like tags (actually XML)
5. NOT Triggered by parenthesis: Not executed by using (), example doSomething() vs <DoSomething/>
*/

//Rule #2: Only call Hooks at the top level

const TopLevelOnly = ({ condition }) => {
    if (condition) {
        const [count, setCount] = useState(0); // This is WRONG
    }
    // Only call it at the Top level
    const [count, setCount] = useState(0); // This is correct
};
// Obviously, you also cannot use React Hook outside of a React Function
const [count, setCount] = useState(0); // This will obviously gg.
