import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {obj} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = obj
    return (
      <div className="latest-container">
        <div className="latest-top">
          <p className="topHead">{competingTeam}</p>
          <p className="dat">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="latestImage"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
        <div className="latest-bottom">
          <h1 className="latestHead">First Innings</h1>
          <p>{firstInnings}</p>
          <h1 className="latestHead">Second Innings</h1>
          <p>{secondInnings}</p>
          <h1 className="latestHead">Man of the Match</h1>
          <p>{manOfTheMatch}</p>
          <h1 className="latestHead">Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
