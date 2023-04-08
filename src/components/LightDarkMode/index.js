// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {change: false}

  changeMode = () => {
    const {change} = this.state
    this.setState(x => ({change: !x.change}))
  }

  render() {
    const {change} = this.state
    const buttonText = change ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="x">
        <div className="bgCard">
          <div className="bg">
            <h1>Click To change Mode</h1>
            <div className="click">
              <button type="button" onClick={this.changeMode}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
