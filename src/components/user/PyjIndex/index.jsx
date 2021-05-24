import React from 'react'
import {
  useLocation
} from 'react-router-dom'
export default function PyjIndex () {
  const query = new URLSearchParams(useLocation().search)
  return (
    <div>
      派样机【首页】当前query的test为{query.get('test')}name{query.get('name')}
    </div>
  )
}
