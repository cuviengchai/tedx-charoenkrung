import Link from 'next/link'

const Header = () => (
    <div class = "container is-fullhd">
      <nav class = "level">
      <p class="level-item has-text-centered">
        <Link href="/">
          <a class="link is-info">Home</a>
        </Link>
      </p>
      <p class="level-item has-text-centered">
        <Link href="/">
          <a class="link is-info">Menu</a>
        </Link>
      </p>
      <p class="level-item has-text-centered">
        <Link href="/">
          <a class="link is-info">Menu</a>
        </Link>
      </p>
      <p class="level-item has-text-centered">
        <Link href="/">
          <a class="link is-info">Menu</a>
        </Link>
      </p>
      </nav>
    </div>
)

export default Header