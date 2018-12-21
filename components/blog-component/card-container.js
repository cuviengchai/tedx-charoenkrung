import React from 'react'
import { Card } from 'semantic-ui-react'
import _ from 'lodash'

const CardContainer = ({Blogs,size, onClickBlog}) => {
    return (
        <Card.Group centered itemsPerRow={size || 6} doubling>
            {_.defaultTo(Blogs,[]).map((blog, idx)=>(
                <Card
                    raised
                    key={`blog-${blog.index}`}
                    image={blog.image || ''}
                    header={blog.header || ''}
                    meta={blog.meta || ''}
                    description={blog.description || ''}
                    onClick={ onClickBlog ? () => {onClickBlog(blog)}: null }
                    />
            ))}
        </Card.Group>
        
      ) 
}

export default CardContainer