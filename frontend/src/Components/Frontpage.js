import React, {Component} from 'react';

class Frontpage extends Component {

    trykkPåKnapen(){
        return <p>Vi har trykket på knappen</p>
    }
    render() {
        return (

            <div>
                <h1>
                    Dette er frontpage
                </h1>
            </div>
        );
    }
}

export default Frontpage;