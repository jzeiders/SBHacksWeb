import * as React from "react";
import styled from "styled-components";
import AceEditor from "react-ace";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default class CodeEditor extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <AceEditor
          mode="javascript"
          theme="solarized_dark"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          width={"800px"}
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
