import * as React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { withFirebase } from "react-redux-firebase";

type Props = {
  firebase: any;
};

class CreateCodeSnippet extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  createCodeSnippet() {
    this.props.firebase.push("code", { title: "unnamed", code: "" });
  }
  render() {
    return (
      <FloatingActionButton onClick={() => this.createCodeSnippet()}>
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

export default withFirebase(CreateCodeSnippet);
