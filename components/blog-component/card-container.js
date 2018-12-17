import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import _ from 'lodash'

const CardContainer = ({Blogs, onClickBlog}) => {
    return (
        <Grid>
            {_.defaultTo(Blogs,[]).map((blog, idx)=>(
            <Grid.Column mobile={16} tablet={8} computer={4} key={`col-${idx}`}>
                <Card
                    key={`blog-${idx}`}
                    image={blog.image}
                    header={blog.header}
                    meta={blog.meta}
                    description={blog.description}
                    onClick={ () => {onClickBlog(blog)}}
                    />
            </Grid.Column>
            ))}
        </Grid>
        
      ) 
}

export default CardContainer