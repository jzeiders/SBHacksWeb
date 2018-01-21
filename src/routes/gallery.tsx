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

type Props = {};
class GalleryRouter extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <Header />
        <CodeGalleryGrid />
        <FixedButton>
          <CreateCodeSnippet />
        </FixedButton>
      </div>
    );
  }
}

export default GalleryRouter;
