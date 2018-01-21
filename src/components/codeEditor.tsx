import * as React from "react";
import styled from "styled-components";
import Ace from "react-ace";
import * as brace from "brace";
import "brace/mode/javascript";
import "brace/theme/github";

const Container = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: center;
`;
type Props = {
  code: string;
  onChange: any;
};
console.log(brace); // Lol need to use brace somewhere
// Silly typescript
export default class CodeEditor extends React.Component<Props, {}> {
  render() {
    return (
      <Container>
        <Ace
          mode="javascript"
          theme="github"
          name="editor"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.props.code}
          onChange={value => this.props.onChange(value)}
          width={"650px"}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
      </Container>
    );
  }
}
