import * as React from "react";
import styled from "styled-components";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  firebaseConnect,
  isLoaded,
  withFirebase,
  isEmpty
} from "react-redux-firebase";
import CodeCard from "../components/codeCard";
import { withRouter } from "react-router-dom";

type Props = {
  snippets: {
    title: string;
    code: string;
  }[];
  firebase: any;
  history: any;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

class CodeGalleryGrid extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  editSnippet(key: string) {
    this.props.history.push(`/editor/${key}`);
  }
  deleteSnippet(key: string) {
    this.props.firebase.remove("code/" + key);
  }
  generateCards() {
    let keys =
      isLoaded(this.props.snippets) && !isEmpty(this.props.snippets)
        ? Object.keys(this.props.snippets)
        : [];
    console.log(keys);
    return keys.map(key => {
      return (
        <CodeCard
          key={key}
          title={this.props.snippets[key].title}
          edit={() => this.editSnippet(key)}
          delete={() => this.deleteSnippet(key)}
        />
      );
    });
  }
  render() {
    return <Container> {this.generateCards()}</Container>;
  }
}
export default withRouter(
  withFirebase(
    compose(
      firebaseConnect((props: any) => [{ path: "code" }]),
      connect((state: any, props) => ({
        snippets: state.firebase.data.code
      }))
    )(CodeGalleryGrid)
  )
);
