import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    condition: true,
    teamList: [],
  }

  componentDidMount() {
    this.changing()
  }

  changing = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const newData = data.teams
    const listA = newData.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))

    this.setState({
      condition: false,
      teamList: listA,
    })
  }

  render() {
    const {condition, teamList} = this.state
    return (
      <div className="bg-container">
        {condition ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="card">
            <div className="headCard">
              <img
                className="image"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="head">IPL Dashboard</h1>
            </div>
            <ul className="unorder">
              {teamList.map(item => (
                <TeamCard key={item.id} obj={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
