import { gql } from "graphql-request"

export const getAllBlogs = gql`
query Blogs {
    blogs {
      createdAt
      date
      headline
      id
      markdown
      publishedAt
      updatedAt
      richText {
        html
      }
    }
}
`