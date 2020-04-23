import React from 'react';
import { connect } from 'react-redux';

let BlogList = ({ blogs }) => (
    <div>
        {
            blogs && blogs.map(blog => {
                return (
                    <div key={blog.id}>
                        <br />
                        <p style={{ fontWeight: "bold" }}>{blog.title}</p>
                        <p>{blog.body}</p>
                    </div>
                )
            })
        }
    </div>
)
const mapStateToProps = (state) => ({
    blogs: state.blogsReducer.blogs
});

export default BlogList = connect(mapStateToProps, null)(BlogList);