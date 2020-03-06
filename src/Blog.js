import React from 'react';
import Button from '@material-ui/core/Button';
import BlogPost from './BlogPost.js';

function Blog(props) {
    return (
<div>
{props.blogPosts.map(blogPost => 
    <BlogPost title={blogPost.title} body={blogPost.body} />

    )}
    <Button variant="contained" color="primary" onClick={props.addBlogPost}>
        Create new Blogpost
    </Button>
</div>
    );
};

export default Blog;

