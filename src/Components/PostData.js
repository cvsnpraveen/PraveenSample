import React, { Fragment } from 'react';

export const PostData = (props) => (
    <React.Fragment>
        <div className="card">
            <div className="card-header">{props.posts.postTitle}</div>
            <div className="card-body">{props.posts.comment}</div>
        </div>
    </React.Fragment>
)