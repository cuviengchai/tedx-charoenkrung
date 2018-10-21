import Link from 'next/link'

const SponsorItem = ({name, image, link, details,...props}) => (
    <div>
        <Link href={link}>
            <div className="card">
                <figure class="image is-2by2"><img src={image} alt="lol not loaded"/></figure>
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{name}</p>
                    </div>
                </div>
                <div class="content">{details}</div>
            </div>
        </Link>
    </div>
)

export default SponsorItem