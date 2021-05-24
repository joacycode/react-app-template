import React from 'react'
import {
  useLocation
} from 'react-router-dom'
export default function ConsumeCode () {
  const query = new URLSearchParams(useLocation().search)
  return (
    <div>
      派样机【核销码】当前query的test为{query.get('test')}
    </div>
  )
}
