import React, { Component } from 'react'
class ErrorApp extends Component {
  render () {
    return (
      <div style={{ width: '100%', fontSize: '16px', textAlign: 'center', lineHeight: 1, position: 'absolute', top: '50%', transform: 'translate(0,-50%)' }}>
        <p style={{ marginBottom: '30px' }}>页面出错了，请稍后再试</p>
        <p
          style={{ color: '#ffe3b7' }} onClick={() => {}}
        >
          首页
        </p>
      </div>
    )
  }
}

export default ErrorApp
