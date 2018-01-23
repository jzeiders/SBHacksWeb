import * as React from "react";
import styled from "styled-components";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

type Props = {
  title: string;
  edit: Function;
  delete: Function;
  link: string;
  i: number;
};
const Container = styled.div`
  height: 300px;
  width: 220px;
  margin: 20px;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
`;
const backgrounds = [
  "http://ginva.com/wp-content/uploads/2016/08/ginva_2016-08-02_02-30-54.jpg",
  "https://s.tmimgcdn.com/blog/wp-content/uploads/2016/04/1-9-2.jpg?x47994",
  "https://graphicflip.com/wp-content/uploads/2016/02/5-backgrounds.jpg",
  "https://cms-assets.tutsplus.com/uploads/users/41/posts/25951/image/material-design-background-2.jpg"
];

export default class CodeCard extends React.Component<Props, {}> {
  render() {
    return (
      <Container>
        <Card>
          <CardMedia overlay={<CardTitle title={this.props.title} />}>
            <img
              height={150}
              src={backgrounds[this.props.i % backgrounds.length]}
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
