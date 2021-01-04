import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import './PhotoCard.css';

export default class PhotoCard extends React.Component {

    // constructor (props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="m-4 bg-light d-inline-block rounded-corners border border-dark">
                <Image fluid src={this.props.image.src} />
                <Container className="bg-light text-dark p-3" >
                    <h4>{this.props.image.title}</h4>
                    <p>{this.props.image.date}</p>
                </Container>
            </div >
        )
    }
}