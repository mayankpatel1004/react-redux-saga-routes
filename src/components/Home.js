import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestHomeApiData } from "../actions/requestHomeApiData";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHomeApiData();
  }
  person = (x, i) =>
  <div key={i}>
    <h1>{x.gender}</h1>
    <h1>{x.name.first}</h1>
    <h1>{x.name.last}</h1>
    <img src={x.picture.medium} alt={x.name.first} />
  </div>;

  render() {
    const { results = [] } = this.props.data;
    return results.length
      ? <h1>
          {results.map(this.person)}
        </h1>
      : <h1>Please Wait...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.homeData });
const mapDispatchToProps = dispatch => bindActionCreators({ requestHomeApiData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);