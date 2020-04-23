import React from 'react';
import { connect } from 'react-redux';
import {requestBlogsData} from '../actions/blogsActions';
import BlogList from '../components/BlogList';
class Blogs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loader : false
        }
    }
    handleClick = () => {
        this.setState({
            loader: true
        });
        this.props.requestBlogsData();
    }
    render() {
        return(     
            <div>
                <br /><button onClick={this.handleClick}>Get List</button><br /><br />
                {
                    this.props.data ? this.props.data.map((item,index) => {
                       return(
                           <BlogList data={item} key={index} />
                       )
                    }) : 'Please Wait ...'
                }
            </div>
        )
    }
}

const mapDispatchToProps = {requestBlogsData: requestBlogsData}
const mapStateToProps = state => ({ data: state.blogsReducer.blogs });
export default Blogs = connect(mapStateToProps,mapDispatchToProps)(Blogs);