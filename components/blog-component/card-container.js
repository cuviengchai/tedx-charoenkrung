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

const CardContainer = ({Blogs,size, onClickBlog}) => {
    return (
        <Card.Group centered itemsPerRow={size || 6} doubling>
            {_.defaultTo(Blogs,[]).map((blog)=>(
                <Card centered key={`blog-${blog.name}`} onClick={ onClickBlog ? () => {onClickBlog(blog)}: null }>
                <Warpper>
                    <Image src={blog.image} width="150px"/>
                </Warpper>
                <Card.Content>
                  <Card.Description>{blog.description || ''}</Card.Description>
                </Card.Content>
              </Card>
                // <Card
                //     raised
                //     key={`blog-${blog.name}`}
                //     image={blog.image || ''}
                //     header={blog.header || ''}
                //     meta={blog.meta || ''}
                //     description={blog.description || ''}
                //     onClick={ onClickBlog ? () => {onClickBlog(blog)}: null }
                //     />
            ))}
        </Card.Group>
        
      ) 
}

export default CardContainer