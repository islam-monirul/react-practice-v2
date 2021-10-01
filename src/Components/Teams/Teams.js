import './Teams.css';
import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Teams = () => {
     const [teams, setTeams] = useState([]);

	useEffect( () => {
		fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
			.then(res => res.json())
				.then(data => setTeams(data.teams));
	},[]);

	// console.log(teams.length);

     return (
          <div className="teams">
			{
				teams.map( team => <Team props={team} key={team.idTeam}></Team>)
			}
		</div>
     );
};

export default Teams;