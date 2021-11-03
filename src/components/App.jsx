import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }

    alertUser = () => {
        let display = alert("devCodeCamp");
        this.setState({
            display: display
        });
    }


    render(){
        return(
            <div>
                <h1><DisplayName firstName={this.state.firstName} lastName={this.state.lastName} /></h1>
                <p>
                    <NamesList name={ this.state.names}/>
                </p>
                <AlertUser alert={this.alertUser}/>
                {/* <button onClick={this.alertUser}>Click Me</button> */}
            </div>
        )
    }
}

export default App