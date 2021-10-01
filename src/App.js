// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<Teams></Teams>
    	</div>
  	);
}

function Teams(){
	const [teams, setTeams] = useState([]);

	useEffect( () => {
		fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
			.then(res => res.json())
				.then(data => setTeams(data.teams));
	},[]);

	// console.log(teams.length);

	return (
		<div>
			<h2>English Premier League</h2>
		</div>
	)
}

export default App;
