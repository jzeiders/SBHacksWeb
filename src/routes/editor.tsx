import * as React from "react";
import Header from "../components/header";
import CodeEditor from "../containers/CodeEditor";
import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
type Props = {};
export default class EditorRoute extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <Header />
        <Body>
          <CodeEditor />
        </Body>
      </div>
    );
  }
}
