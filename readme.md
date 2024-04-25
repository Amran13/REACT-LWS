
# REACT JS




## What is React?

React is nothing but a JavaScript Library to create user interface, created by facebook  at May 29, 2013. Whenever we use react, basically we import 'react' and 'react-dom' from react library. This two is nothing but build-in JavaScript object. 'react' has all the build-in function such as createElement(), useState(), useEffect(), useContext() stuff which btw under the hood all JS function we used to create user interface. 

On the other hand, 'react-dom' rendered all the 'react' component and append them to a div with id='root' in index.html. React is component based library. A component is nothing but a JS function which return JSX. 


## What is JSX?

JSX - JavaScript XML. JSX is a syntactic sugar of React.createElement(). JSX is under the hood JavaScript but it gives you a feel that it's not JS, It's HTML tag returning by a react component. So how JSX (syntactic sugar) converted into pure JS. It's all taken care by another bundle called babel. Babel takes JSX and under the hood turned them to JavaScript. 




## Example (JSX)

```javascript
import Component from 'my-project'

function App() {
  return (
    <div>
      <h1> Hello World </h1> 
    </div>
  )
}

```


### What actually happenning  is
JSX is coverted into react build-in JS function by babel. Thanks to Babel to make this easy. 

```javascript
React.createElement('div', null, React.createElement('h1', null, 'Hello World'));

```