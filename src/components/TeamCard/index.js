import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {obj} = this.props
    const {name, id, teamImageUrl} = obj
    return (
      <Link to={`/team-matches/${id}`} className="listItem">
        <li className="listCard">
          <img className="picture" alt={name} src={teamImageUrl} />
          <p className="para">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
