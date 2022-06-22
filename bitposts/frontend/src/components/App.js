import React from "react";
import ReactDOM from "react-dom";

class App extends Comment {
    render() {
        return <h1>New app</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

