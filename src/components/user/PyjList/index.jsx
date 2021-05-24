import React from 'react'
import {
  useLocation
} from 'react-router-dom'
export default function PyjList () {
  const query = new URLSearchParams(useLocation().search)
  return (
    <div>
      派样机【聚合页】当前query的test为{query.get('test')}
    </div>
  )
}
