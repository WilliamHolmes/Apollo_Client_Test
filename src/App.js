import React from 'react';
import { connect } from 'react-apollo';

export class MyName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Props', this.props);
    return (
      <div>Hello World</div>
    );
  }
}


const mapQueriesToProps = ({ ownProps, state }) => {
  console.log('mapQueriesToProps', ownProps, state);
  return {
    myDisplayName: {
      query: `{
          viewer {
            me {
              displayName
            }
          }
      }`
    }
  };
};

export default connect({ mapQueriesToProps })(MyName);
