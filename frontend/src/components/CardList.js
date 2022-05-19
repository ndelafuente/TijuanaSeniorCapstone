import React, { Component } from "react";
import { render } from "react-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    const init = {method: 'GET'};

    fetch("api/contribute/project", init)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        // const project_array = JSON.parse(json);
        // console.log(project_array);
        this.setState({projects: json});
      });
  }
  render() {
    const cardList = this.state.projects.map((project) =>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/id/912/345/140"
          alt="TODO, nice photo of water"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.project_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.purpose}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );

    return <Container>{cardList}</Container>
  }
}

export default CardList;

const container = document.getElementById("cardList");

// Only render if the container is in the DOM
if (container != null) {
  render(<CardList />, container);
  console.log("CardList", container);
}