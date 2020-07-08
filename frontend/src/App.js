import React from 'react';
import './App.css';
import Frontpage from "./frontpage";

function App() {
  return (
      /*
    <div className="App">
      <header className="App-header">
       <h1>
           Dette er en test
       </h1>
      </header>
    </div>
    */
      <div>
          <h1>
              Dette er en test
          </h1>
          <Frontpage>
                <h3>
                    Baby baby
                </h3>
          </Frontpage>
          <p>
              Jeg ønsker å putte flere ting her
          </p>
      </div>
  );
}

export default App;
