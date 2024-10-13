import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {obj} = this.props
    const {competingTeam, competingTeamLogo, result, matchStatus} = obj
    const styling = matchStatus === 'Lost' ? 'red' : 'green'
    return (
      <li className="cardList">
        <img
          className="cardImage"
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
        />
        <h1 className="cardHead">{competingTeam}</h1>
        <p className="cardPara">{result}</p>
        <p className={styling}>{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
