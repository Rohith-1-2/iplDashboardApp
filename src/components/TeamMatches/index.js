import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    cond: true,
    details: {},
  }

  componentDidMount() {
    this.happening()
  }

  backing = () => {
    const {history} = this.props
    history.replace('/')
  }

  happening = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latest = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const recent = data.recent_matches.map(item => ({
      umpires: item.umpires,
      result: item.result,
      manOfTheMatch: item.man_of_the_match,
      id: item.id,
      date: item.date,
      venue: item.venue,
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      firstInnings: item.first_innings,
      secondInnings: item.second_innings,
      matchStatus: item.match_status,
    }))
    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: latest,
      recentMatches: recent,
    }

    this.setState({
      cond: false,
      details: newData,
    })
  }

  render() {
    const {cond, details} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamBannerUrl, latestMatchDetails, recentMatches} = details
    const rat = `${id}12`
    return (
      <div className={`match-container ${rat}`}>
        {cond ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="mini-container">
            <img className="matchPic" alt="team banner" src={teamBannerUrl} />
            <h1 className="matchHead">Latest Matches</h1>
            <LatestMatch obj={latestMatchDetails} />
            <ul className="matchOrder">
              {recentMatches.map(item => (
                <MatchCard key={item.id} obj={item} />
              ))}
            </ul>
            <button type="button" onClick={this.backing}>
              Back
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
