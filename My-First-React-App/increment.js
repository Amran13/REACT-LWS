console.log(React)
console.log(ReactDOM)

const myElement = React.createElement('div', null, React.createElement('p', null, 'My p tag'))

const domContainer = document.querySelector('#root');

ReactDOM.render(myElement, domContainer)