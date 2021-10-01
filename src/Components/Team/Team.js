import './Team.css';
import React from 'react';

const Team = (props) => {
     // console.log(props.props);

     const {strTeam,strKeywords,strTeamJersey} = props.props;
     return (
		<div className="team">
               <img src={strTeamJersey} alt={strTeam} width="100px"/>
			<h3>{strTeam}</h3>
               <p>{strKeywords}</p>
		</div>
	)
};

export default Team;