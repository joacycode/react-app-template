import React from 'react'
import {
  useLocation
} from 'react-router-dom'

export default function ActivityDetail () {
  const query = new URLSearchParams(useLocation().search)
  return (
    <div>
      派样机【活动详情页】当前query的test为{query.get('test')}
    </div>
  )
}
