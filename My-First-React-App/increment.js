


console.log(React)
console.log(ReactDOM)

const MyElement = () => {
    const reactState = React.useState(0)
    console.log(reactState)
    return (
        <div> Hello worlddd </div>
    )
}

const domContainer = document.querySelector('#root');

ReactDOM.render(<MyElement></MyElement>, domContainer)