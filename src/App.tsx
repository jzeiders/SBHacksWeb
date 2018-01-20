import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Editor from "./routes/editor";
import Gallery from "./routes/gallery";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/editor/:id" exact={true} component={Editor} />
            <Route exact={true} path="/" component={Gallery} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
