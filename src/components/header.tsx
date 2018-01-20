import * as React from "react";
import styled from "styled-components";

const StatusBar = styled.div`
  width: 100%;
  height: 32px;
  background-color: #000;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
`;
const TitleBar = styled.div`
  width: 100%;
  height: 64px;
  background-color: #212121;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.24);
`;

export default class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <StatusBar />
        <TitleBar />
      </div>
    );
  }
}
