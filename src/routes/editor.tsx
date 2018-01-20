import * as React from "react";
import Header from "../components/header";
import CodeEditor from "../containers/CodeEditor";

export default class EditorRoute extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header />
        <div>
          <CodeEditor />
        </div>
      </div>
    );
  }
}
