import * as React from "react";
import styled from "styled-components";
import { isLoaded, isEmpty } from "react-redux-firebase";
import CodeCard from "../components/codeCard";
import { RouteComponentProps } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import history from "../history";

interface Props extends RouteComponentProps<any> {
  snippets: {
    title: string;
    code: string;
  }[];
  firebase: any;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

class CodeGalleryGrid extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  editSnippet(key: string) {
    history.push(`/editor/${key}`);
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
          link={key}
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
export default compose(
  firebaseConnect(["code"]),
  connect((state: any) => ({
    snippets: state.firebase.data.code
  }))
)(CodeGalleryGrid) as any;
