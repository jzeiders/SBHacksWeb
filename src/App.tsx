import * as React from "react";
import { Router, Route } from "react-router-dom";
import Editor from "./routes/editor";
import Gallery from "./routes/gallery";
import history from "./history";

interface Props {}

class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
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
