import * as React from "react";
import CodeEditor from "../components/codeEditor";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { match } from "react-router";
import { firebaseConnect, withFirebase, isLoaded } from "react-redux-firebase";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import { testFunction } from "../api/firebase";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = {
  match: match<any>;
  snippets: {
    title: string;
    code: string;
  }[];
  firebase: any;
};
const style = {
  margin: "12px"
};

class CodeEditorContainer extends React.Component<Props, {}> {
  executeCode() {
    let id = this.props.match.params.id;
    let { snippets } = this.props;
    testFunction(snippets[id].code).then(console.log);
  }
  getCode() {
    let id = this.props.match.params.id;
    let { snippets } = this.props;
    return !isLoaded(snippets) ? "" : snippets[id].code;
  }

  onChange(value: string) {
    let id = this.props.match.params.id;
    this.props.firebase.set(`code/${id}/code`, value);
  }
  render() {
    return (
      <Container>
        <CodeEditor
          code={this.getCode()}
          onChange={(value: string) => this.onChange(value)}
        />
        <Toolbar>
          <RaisedButton
            label="Test Code"
            secondary={true}
            style={style}
            onClick={() => this.executeCode()}
          />
        </Toolbar>
      </Container>
    );
  }
}

export default withRouter(
  withFirebase(
    compose(
      firebaseConnect((props: any) => [{ path: "code" }]),
      connect((state: any, props) => ({
        snippets: state.firebase.data.code
      }))
    )(CodeEditorContainer)
  )
);
