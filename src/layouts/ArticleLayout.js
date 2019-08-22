import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import RootLayout from "./RootLayout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Main, Container, Column } from "../components/System"

const ArticleContainer = styled(Container)`
  padding-top: 10rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  h2,
  h3,
  h4 {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    a {
      background-image: linear-gradient(
        180deg,
        transparent 65%,
        ${props => props.theme.colors.accent} 0
      );
      background-size: 0 100%;
      background-repeat: no-repeat;
      text-decoration: none;
      transition: background-size 0.4s ease;
      color: ${props => props.theme.colors.text};

      &:hover {
        background-size: 100% 100%;
      }
    }
  }

  pre {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }

  figcaption {
    text-align: right;
    font-size: 0.75rem;
    font-weight: 900;
  }
`

const ArticleLayout = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <RootLayout>
      <Header />
      <Main>
        <ArticleContainer>
          <Column>
            <h1>{frontmatter.title}</h1>
            <h4>{frontmatter.date}</h4>
            <h4>{markdownRemark.timeToRead} Min. Read</h4>

            <article dangerouslySetInnerHTML={{ __html: html }} />
          </Column>
        </ArticleContainer>
      </Main>
      <Footer />
    </RootLayout>
  )
}

export default ArticleLayout

// export const articlesQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       timeToRead
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
