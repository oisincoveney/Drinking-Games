import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruleNames: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:9000/kings")
            .then(res => res.json())
            .then((data) => {
                this.setState({ ruleNames: data });
            })
            .catch(console.log)
    }

    componentWillUnmount() {
    }

    getListElem() {
        console.log(this.state.ruleNames)
        return (
            <React.Fragment>
                {this.state.ruleNames.map(function (elem) {
                    return (
                        <React.Fragment key={elem['ruleName']}>
                            <h1>{elem['ruleName']}</h1>
                            <h2>{elem['description']}</h2>
                        </React.Fragment>)
                })}
            </React.Fragment>
        )
    }

    render() {
        // Array.prototype.map()
        return (
            <div className="App">
                {this.getListElem()}
            </div>
        );
    }
}

export default App;
