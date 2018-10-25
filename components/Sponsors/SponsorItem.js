import Link from "next/link"
import styled from "styled-components"
import { Card, Image } from "semantic-ui-react"

const SponsorItem = ({ name, image, link, details, ...props }) => (
  <div>
    <Link href={link}>
      <Card size="medium" raised="true" divided="false">
        <Image src={image} />
        <Card.Content>
          <Card.Header textAlign="center">{name}</Card.Header>
          <Card.Description textAlign="center">{details}</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  </div>
)

export default SponsorItem
