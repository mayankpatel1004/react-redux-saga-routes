import React from 'react';
import { connect } from 'react-redux';
// import BlogLoop from './BlogLoop';

let BlogList = ({ blogs }) => (
    
    <div>
        {
            blogs.length && blogs.map(blog => {
                console.log("Mayank Patel ===>",blog);
                // <p>{blog}</p>
                // <BlogLoop data={blog} />
            })
        }
    </div>
)
const mapStateToProps = (state) => ({
    blogs : state.blogsReducer.blogs
});

export default BlogList = connect(mapStateToProps,null)(BlogList);