import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Icon, Menu, Image, Grid, List, Segment, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "red" };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src="https://media.npr.org/chrome_svg/npr-logo.svg" id={"logo"}/>
            <Menu.Item position={"right"}><Icon name="user outline icon" />SIGN IN</Menu.Item>
            <Menu.Item><Icon name="shopping bag icon"/>NPR SHOP</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="heart"/>DONATE</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MainMenu extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <Menu borderless className="main menu">
          <Container>
            <Menu.Item fitted style={itemStyle}><Icon name="list alternate outline"/>NEWS</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="child"/>ARTS & LIFE</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="music"/>MUSIC</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="headphones"/>SHOWS & PODCASTS</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="search"/>SEARCH</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class ArticleSegment extends React.Component {
  render() {
    return (
        <Segment two column grid className="segment">
          <Grid columns="two">
            <Grid.Row>
              <Grid.Column>
                <Header as={"h2"}>Arrested Coast Guard Officer Planned Mass Terrorist Attack 'On A Scale Rarely Seen'</Header>
                <div>Christopher Paul Hasson, a self-proclaimed white nationalist, allegedly wanted to "kill every last person on earth" in a crusade to establish a "white homeland," according to officials.</div>
              </Grid.Column>
              <Grid.Column>
                <Image id={"article-picture"}  src="https://media.npr.org/assets/img/2019/02/20/ap_19051824643614_wide-37954d1b5b6754ebbfad419f61ad5931f1c37639-s900-c85.jpg"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    )
  }
}

class EmailSignup extends React.Component {
  render() {
    const iconStyle = { width: "120 px" };
    return (
        <Segment two column grid id="email-signup">
          <Grid centered columns="two">
            <Grid.Row>
              <Grid.Column>
                <Image position="right" id="mailIcon"  src="https://media.npr.org/chrome/mail-promo.png"/>
              </Grid.Column>
              <Grid.Column position="left" id="entry">
                <Header as="h1">Daily News Email — Get the latest headlines and unique NPR stories, sent every weekday.</Header>
                <Input size='small' action='SUBSCRIBE' placeholder='Email Address' />

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    const itemStyle = { color: "#6385C0" };
    return (
        <Container four column grid id="footer">
          <Grid centered columns="four">
            <Grid.Row>
              <Grid.Column>
                <Header as="h5" id="footerHeader">Read & Listen</Header>
                <List>
                  <List.Item style={itemStyle}>Home</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>News</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Arts & Life</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Podcasts</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Music</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Programs</List.Item>
                  < br/>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" id="footerHeader">Connect</Header>
                <List>
                  <List.Item style={itemStyle}>Newsletters</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Facebook</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Twitter</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Instagram</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Contact</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Help</List.Item>
                  < br/>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" id="footerHeader">About NPR</Header>
                <List>
                  <List.Item style={itemStyle}>Overview</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Finances</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>People</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Press</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Public Editor</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Corrections</List.Item>
                  < br/>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" id="footerHeader">Get Involved</Header>
                <List>
                  <List.Item style={itemStyle}>Support Public Radio</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Sponsor NPR</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>NPR Careers</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>NPR Shop</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>NPR Events</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Visit NPR</List.Item>
                  < br/>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class NPR extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MainMenu/>
          <ArticleSegment/>
          <EmailSignup/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<NPR/>, document.getElementById('root'));