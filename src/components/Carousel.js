import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner from "../images/banner.jpg"
import banner2 from "../images/banner2.jpg"
import "../css/Carousel.css"

const images = [
    { id: 1, src: banner, alt: 'banner' },
    { id: 2, src: banner2, alt: 'banner 2' }
];

function carousel() {

    return (
        <div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
            >
                {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default carousel