import * as React from "react";
import styled from "styled-components";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

type Props = {
  title: string;
  edit: Function;
  delete: Function;
};
const Container = styled.div`
  height: 250px;
  width: 220px;
  margin: 20px;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
`;

export default class CodeCard extends React.Component<Props, {}> {
  render() {
    return (
      <Container>
        <Card>
          <CardMedia overlay={<CardTitle title={this.props.title} />}>
            <img
              src={
                "https://store-images.s-microsoft.com/image/apps.55709." +
                "13510798887526153.501bcecc-53ba-446b-85a8-8051bfc3ffa7.0a" +
                "24dcf4-a792-4b8c-9ef6-117729993fcb?w=180&h=180&q=60"
              }
              alt=""
            />
          </CardMedia>
          <CardActions>
            <SpaceBetween>
              <RaisedButton label="Edit" onClick={() => this.props.edit()} />
              <RaisedButton
                primary={true}
                label="Delete"
                onClick={() => this.props.delete()}
              />
            </SpaceBetween>
          </CardActions>
        </Card>
      </Container>
    );
  }
}
