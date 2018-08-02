/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        This is container
        {/*<Navigation {...this.props}/>*/}
      </div>
    );
  }
}

// export function NavigationContainer() {
//   return (
//     <div className={styles.navigation}>
//       this is navigation compomnent
//     </div>
//   );
// }

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
