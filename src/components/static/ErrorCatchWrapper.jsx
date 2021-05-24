import React, { Component } from 'react'
class ErrorWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { error: false }
  }

  componentDidCatch (error) {
    this.setState({
      error: true
    })
    this.props.callback && this.props.callback(error)
  }

  render () {
    const { component, children } = this.props
    if (this.state.error) {
      return component ? <component /> : null
    }
    return children || null
  }
}
ErrorWrapper.defaultProps = {
  component: null,
  callback: null
}
export default ErrorWrapper
