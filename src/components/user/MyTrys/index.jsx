import React from 'react'
import {
  useLocation
} from 'react-router-dom'
export default function MyTrys () {
  const query = new URLSearchParams(useLocation().search)
  return (
    <div>
      派样机【我的领取】当前query的test为{query.get('test')}
    </div>
  )
}
