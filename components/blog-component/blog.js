import React from 'react'
import { Header, Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Blog = ({content, topicSize}) => {
  const { topic, isLine, context } = content
  return (
    <MyContainer>
      <Header size={topicSize}>{topic}</Header>
      { isLine && <Divider /> }
      <p>
        {context}
      </p>
    </MyContainer>
  )
}

export default Blog