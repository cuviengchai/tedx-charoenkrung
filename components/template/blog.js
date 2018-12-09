import React from 'react'
import { Header, Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const myBlog = styled.div`
  display: flex;
`
const Blog = ({content}) => {
  const { topic, isLine, context } = content
  return (
    <myBlog>
      <Header size='small'>{topic}</Header>
      { isLine && <Divider /> }
      <p>
        {context}
      </p>
    </myBlog>
  )
}

export default Blog