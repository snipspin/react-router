import React from 'react';

function BlogPost(props) {
    return (
        <div>
            {props.title}
            {props.body}
        </div>
    );
};

export default BlogPost;

