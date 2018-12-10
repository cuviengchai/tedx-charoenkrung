import React from 'react'
import { Header, Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const MyBlog = styled.div`
  display: flex;
  flex-direction: column;
`
const Blog = ({content}) => {
  const { topic, isLine, context } = content
  return (
    <MyBlog>
      <Header size='small'>{topic}</Header>
      { isLine && <Divider /> }
      <p>
        {context}
      </p>
    </MyBlog>
  )
}

export default Blog