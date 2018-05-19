import React, { Component } from 'react';
import Hero from './../hero/Hero';
import UspListContainer from './../usp/UspListContainer';
import PostFeedContainer from './../blog/PostFeedContainer';
import portraitImg from './../../assets/images/portrait-tb.jpeg';
import Section from './../common/Section';
import SectionTitle from './../common/SectionTitle';
import Container from './../common/Container';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Hero
            title='Tim Bakkum'
            underline='Amsterdam based front&#8209;end&nbsp;developer'
            imageSrc={portraitImg}
          />
        </Container>

        <Section type='light'>
          <SectionTitle title='What I&lsquo;m About' />
          <Container>
            <UspListContainer />
          </Container>
        </Section>

        <Container>
          <SectionTitle title='Latest from my front&#8209;end blog'/>
          <PostFeedContainer />
        </Container>
      </React.Fragment>

    );
  }
}

export default HomePage;
