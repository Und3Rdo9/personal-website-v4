import React from "react";
import Container from './../common/Container';
import Section from './../common/Section';
import SectionTitle from './../common/SectionTitle';
import AllPostsFeedContainer from './AllPostsFeedContainer';

const BlogOverview = () => (
  <Container>
    <Section>
      <SectionTitle title='Blogartikelen' />
      <AllPostsFeedContainer />
    </Section>
  </Container>
);

export default BlogOverview;
