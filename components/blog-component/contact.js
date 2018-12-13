import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Contact = ({contact}) => {
    const {icon, link, name, size} = contact;
    return (
        <Header as='h3'>
            <Icon name={icon} size={size}/>
            <Header.Content>
            <a href= {link}>{name}</a>
            <Header.Subheader>{name}</Header.Subheader>
            </Header.Content>
        </Header>
    )
}
export default Contact