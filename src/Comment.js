import React from 'react'
import faker from '@faker-js/faker'

const Comment = ({ name, timeAgo, comment, star }) => {

    return (
        <div className="comment">
            <a className="avatar" href='/'>
                <img src={faker.image.avatar()} alt="i" />
            </a>
            <div className="content">
                <a className="author" href='/'>{name}</a>
                <div className="metadata">
                    <div className="date">{timeAgo}</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        {star}
                    </div>
                </div>
                <div className="text">
                    {comment}
                </div>
            </div>
        </div>

    )
}

export default Comment