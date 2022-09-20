import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  mangosCount = () => {
    const {mango} = this.state
    if (mango >= 0) {
      this.setState(prevState => ({mango: prevState.mango + 1}))
    }
  }

  bananasCount = () => {
    const {banana} = this.state
    if (banana >= 0) {
      this.setState(prevState => ({banana: prevState.banana + 1}))
    }
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button
                className="button"
                onClick={this.mangosCount}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button
                className="button"
                onClick={this.bananasCount}
                type="button"
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
