import React from 'react';
import PhotoCard from './PhotoCard';
// import Col from 'react-bootstrap/Col';

import images from "../data/photos.js";

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="pt-4 card-columns">
                <PhotoCard image={images.img01} />
                <PhotoCard image={images.img02} />
                <PhotoCard image={images.img03} />
                <PhotoCard image={images.img04} />
                <PhotoCard image={images.img05} />
                <PhotoCard image={images.img06} />
                <PhotoCard image={images.img07} />
                <PhotoCard image={images.img08} />
                <PhotoCard image={images.img09} />
                <PhotoCard image={images.img10} />
                <PhotoCard image={images.img11} />
                <PhotoCard image={images.img12} />
                <PhotoCard image={images.img13} />
                <PhotoCard image={images.img14} />
                <PhotoCard image={images.img15} />
                <PhotoCard image={images.img16} />
            </div>
        )
    }
}