import React, { Component } from 'react'
import './index.scss'
import {
  Switch,
  Route
} from 'react-router-dom'
import PyjIndex from 'componentsDir/user/PyjIndex'
import ActivityDetail from 'componentsDir/user/ActivityDetail'
import PyjList from 'componentsDir/user/PyjList'
import MyTrys from 'componentsDir/user/MyTrys'
import Paysuc from 'componentsDir/user/Paysuc'
import Payfail from 'componentsDir/user/Payfail'
import ConsumeCode from 'componentsDir/user/Consumecode'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <div className='main-content'>
        <Switch>
          {/* 派样机首页 */}
          <Route exact path='/'>
            <PyjIndex />
          </Route>
          {/* 派样机详情页 */}
          <Route path='/activitydetail'>
            <ActivityDetail />
          </Route>
          {/* 派样机聚合页 */}
          <Route path='/pyjlist'>
            <PyjList />
          </Route>
          {/* 派样机我的领取 */}
          <Route path='/mytrys'>
            <MyTrys />
          </Route>
          {/* 付款成功结果页 */}
          <Route path='/paysuc'>
            <Paysuc />
          </Route>
          {/* 付款成功失败页 */}
          <Route path='/payfail'>
            <Payfail />
          </Route>
          {/* 我的核销码 */}
          <Route path='/consumecode'>
            <ConsumeCode />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App
