import * as React from "react";
import styled from "styled-components";
import IconButton from "material-ui/IconButton";
import BackArrow from "material-ui/svg-icons/navigation/arrow-back";

import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded } from "react-redux-firebase";
import history from "../history";

const StatusBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #000;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
`;
const TitleBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #212121;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.24);
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
`;
const TitleInput = styled.input`
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  outline: none;
  text-align: center;
`;
const Full = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const FixWidth = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;
interface Props {
  snippets: {
    title: string;
    code: string;
  }[];
  firebase: any;
}
class Header extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  getTitle() {
    let id = window.location.pathname.split("/")[2];
    let { snippets } = this.props;
    return !isLoaded(snippets) ? "" : snippets[id].title;
  }
  updateTitle(event: React.ChangeEvent<HTMLInputElement>) {
    let id = window.location.pathname.split("/")[2];
    this.props.firebase.set(`code/${id}/title`, event.target.value);
  }
  getTitleContent() {
    if (window.location.pathname.search("/editor") !== -1) {
      return (
        <Full>
          <FixWidth>
            <IconButton onClick={() => history.goBack()} key={1}>
              <BackArrow />
            </IconButton>
          </FixWidth>
          <TitleInput
            key={2}
            type="text"
            value={this.getTitle()}
            onChange={event => this.updateTitle(event)}
          />
          <FixWidth />
        </Full>
      );
    } else {
      return <Title> Code Snippets </Title>;
    }
  }
  render() {
    return (
      <div>
        <StatusBar />
        <TitleBar>{this.getTitleContent()}</TitleBar>
      </div>
    );
  }
}
export default compose(
  firebaseConnect((props: any) => [{ path: "code" }]),
  connect((state: any, props) => ({
    snippets: state.firebase.data.code
  }))
)(Header) as any;
