import Link from "next/link"
import styled from "styled-components"

const Name = styled.div`
  color: white;
  .media-content {
    text-align: center .p {
      color: white;
    }
  }
`

const Card = styled.div`
  // border-radius: 10px;
  // border-style: solid;
  // border-color: red;
  box-shadow: $light-bg-shadow-down;
  transition: all 200ms ease-in-out;
  &:hover {
    box-shadow: 0 10px 20px rgba(220, 220, 220, 0.5);
    transform: translateY(-3px);
  }
  & h2 {
    color: black;
    font-size: 150%;
  }
  & figure {
    img {
      padding: 10px;
    }
  }
`

const Content = styled.div`
  padding: 10px;
  display: flex;
`

const SponsorItem = ({ name, image, link, details, ...props }) => (
  <div>
    <Link href={link}>
      <Card>
        <div className="card">
          <figure class="image is-3by3">
            <img src={image} alt="lol not loaded" />
          </figure>
          <Name>
            <div class="media-content">
              <h2>{name}</h2>
            </div>
          </Name>
          <Content>{details}</Content>
        </div>
      </Card>
    </Link>
  </div>
)

export default SponsorItem
