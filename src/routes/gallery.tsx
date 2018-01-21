import * as React from "react";
import Header from "../components/header";
import CreateCodeSnippet from "../containers/CreateCodeSnippet";
import styled from "styled-components";
import CodeGalleryGrid from "../containers/CodeGalleryGrid";

const FixedButton = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 10;
`;

const Any = CodeGalleryGrid as any;
export default class GalleryRouter extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header />
        <Any />
        <FixedButton>
          <CreateCodeSnippet />
        </FixedButton>
      </div>
    );
  }
}
