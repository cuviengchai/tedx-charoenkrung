import React from 'react'
import { Header, Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const myBlog = styled.div`
  display: flex;
`
const TopBlog = ({content}) => {
  const { topic, isLine, context } = content
  return (
    <topBlog>
      <Header size='large'>{topic}</Header>
      { isLine && <Divider /> }
      <p>
        {context}
      </p>
    </topBlog>
  )
}
export default TopBlog