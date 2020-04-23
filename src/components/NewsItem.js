import React from 'react';
import {connect} from 'react-redux';

let NewsItems = ({ article }) => (
    article ? <article> 
    <div>
        <h1>{article.title}</h1>
        <h3>ID : {article.id}</h3>
        <h4>{article.userId}</h4>
        <h4>{article.completed}</h4>
    </div>
    </article> : null
)

const mapStateToProps = (state) => ({
    article : state.newsReducer.news
});

NewsItems = connect(mapStateToProps,null)(NewsItems);
export default NewsItems;