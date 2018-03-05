import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
MainContainer.propTypes = {
  children: PropTypes.any
}

const mapStateToProps = () => {
  
}

export default connect(
  mapStateToProps
)(MainContainer)