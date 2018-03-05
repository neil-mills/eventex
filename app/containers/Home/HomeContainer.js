import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class HomeContainer extends Component {
  render() {
    return (
      <div>HomeContainer</div>
    )
  }
}

const mapStateToProps = () => {

}

export default connect(
  mapStateToProps
)(MainContainer)