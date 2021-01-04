import React from 'react';
import "./PageTitle.css";

export default class PageTitle extends React.Component {
    render() {
        return (
            <div className="bg-gradient text-center py-4">
                <h1>{this.props.message}</h1>
            </div>
        )
    }
}
