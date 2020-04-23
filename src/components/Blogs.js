import React from 'react';
import { connect } from 'react-redux';
import {getBlogs} from '../actions/blogsActions';
import BlogList from '../components/BlogList';
import Loading from '../components/Loading';

let Blogs=({getBlogs})=>(
    <div>
    <button onClick={getBlogs}>Get List</button>
    <BlogList />
    <Loading />
    </div>
)

const mapDispatchToProps = {
    getBlogs: getBlogs
}

export default Blogs = connect(null,mapDispatchToProps)(Blogs);