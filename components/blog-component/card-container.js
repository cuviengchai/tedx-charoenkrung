import React from 'react'
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react'
import _ from 'lodash'

const Warpper = styled.div`
    border-radius: 0 !important;
    height:$size !important;
    width:auto !important;
    margin:auto;
`
const Support = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    margin-bottom: 0.5rem;
`

const CardContainer = ({ Blogs, size, onClickBlog}) => {
    return (
        <Card.Group centered itemsPerRow={size || 6} doubling>
            {_.defaultTo(Blogs,[]).map((blog)=>(
                <Card centered key={`blog-${blog.name}`} onClick={ onClickBlog ? () => {onClickBlog(blog)}: null }>
                <Warpper>
                    <Image src={blog.image} width="150px"/>
                </Warpper>
                {/* <Card.Content> */}
                  {/* <Card.Description height="20px">{blog.description || ''}</Card.Description> */}
                  <Support> {blog.description || ''} </Support>
                {/* </Card.Content> */}
              </Card>
            ))}
        </Card.Group>
        
      ) 
}

export default CardContainer