import React from 'react'
import styled from 'styled-components'
import { Container, FancyLink } from './System'

// TODO: let's write some articles!
const articles = []

const Column = styled.div`
  @media (min-width: ${props => props.theme.layout.mediumBreakpoint}) {
    width: 45%;
    width: calc(99.99% * 6/12 - (${props => props.theme.layout.gutter} - ${props => props.theme.layout.gutter} * 6/12));
  }
`

const WritingSection = styled.section`
  position: relative;
  padding: 10rem 0;
`

const WritingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArticleSummary = ({ title, date, href }) => (
  <article>
    <h3><FancyLink href="{href}">{title}</FancyLink></h3>
    <p>{date}</p>
  </article>
);

const Writing = () => (
  <WritingSection>
    <WritingContainer>
      <Column>
        <h4>Latest Writing</h4>
        {articles.map(article => <ArticleSummary key={article.id} {...article} />)}
      </Column>
    </WritingContainer>
  </WritingSection>
)

export default Writing
