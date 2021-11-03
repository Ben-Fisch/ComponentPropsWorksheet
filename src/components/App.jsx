import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }


    render(){
        return(
            <div>
                <h1><DisplayName firstName={this.state.firstName} lastName={this.state.lastName} /></h1>
                <p>
                    <NamesList name={ this.state.names}/>
                </p>
            </div>
        )
    }
}

export default App