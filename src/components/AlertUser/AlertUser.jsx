import React from 'react';

function AlertUser(props) {
    return (
        <div className="alert">
            <button  onClick={props.alert}>Click Me</button>
        </div>
    )
}
export default AlertUser;