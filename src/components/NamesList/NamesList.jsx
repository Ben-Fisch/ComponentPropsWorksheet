import React from 'react';

function NamesList(props) {
    return (
        <div>
            <ul>
                <li>{props.name[0] }</li>
                <li>{props.name[1] }</li>
                <li>{props.name[2] }</li>
                <li>{props.name[3] }</li>
                <li>{props.name[4] }</li>
            </ul>
        </div>
    )
}

export default NamesList