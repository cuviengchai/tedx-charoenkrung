import Link from 'next/link'

const Navbar = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src= "static/images/tedx_logo_black.png" ></img>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <Link href="/"><a class="navbar-item">
            Home
          </a>
        </Link>
      
        <Link href="/www"><a class="navbar-item">
            Video
          </a>
        </Link>

      
        <Link href="/www"><a class="navbar-item">
            Content
          </a>
        </Link>

      
        <Link href="/www"><a class="navbar-item">
            Partner
          </a>
        </Link>

      
        <Link href="/about"><a class="navbar-item">
            About
          </a>
        </Link>

      </div>
      <div class="navbar-end">
        
      </div>
    </div>
  </nav>
  )

export default Navbar