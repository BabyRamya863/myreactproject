import React from 'react';
import Welcome from './Welcome';

let Greeting=()=>{
    return (
        <div>
            <h1>Greeting</h1>
            <Welcome />
            <Welcome name="manu">
                <p>Ramya</p>
            </Welcome>
            <Welcome name="amma"></Welcome>
            <Welcome name="nanna"></Welcome>
            <Welcome name="ramya"></Welcome>
        </div>
    );
}
export default Greeting;