import './App.css';
// import axios from "axios";
import {Component} from "react";
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/*<p>*/}
//         {/*  Edit <code>src/App.js</code> and save to reload.*/}
//         {/*</p>*/}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
    constructor () {
        super()
        this.state = {
            username: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
            this.setState({username: xhr.responseText})
        })
        xhr.open('GET', ' https://cors-everywhere.herokuapp.com/http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/database')
        xhr.send()

        // axios.get('https:////cors-anywhere.herokuapp.com/http://ec2-3-144-10-133.us-east-2.compute.amazonaws.com/')
        //     .then(response => this.setState({username: response.data.name}))
    }

    render () {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>Click Me</button>
                <p>{this.state.username}</p>
            </div>
        )
    }
}
export default App
