import styles from '../../styles/divisions.module.css';
import JSONContainer from '../../lib/render-json';
import Head from 'next/head';

export default function divisions(){
    const Data = JSONContainer({url:"http://localhost:3000/api/hello"})
    const Divisions = Data.divisions
    return (
        <>
    {Divisions.map((division) => (
        <div key={division.id} className={styles.divisioncontainer}>
            <h1>
                <a href={division.draftsheet}>{division.season}</a>
                <br></br>
                <a href={division.teamsheet}>{division.name}</a>
            </h1>
        <div className={styles.teamscontainer}>
            {division.teams.map((team) => (
            <div key={team.name} className={styles.teamcontainer}>
                <h2>{team.name}</h2>
            <div className={styles.playerscontainer}>
                {team.players.map((player) => (
                <div key={player.name} className={styles.playercontainer}>
                    <h4><a href={'https://www.dotabuff.com/players/'+player.account_id}>{player.name}</a></h4>
                    <ul>
                    <p>Roles : {player.pos_pref}</p>
                    <p>Coins: {player.coins}</p>
                    <p>Account ID: {player.account_id}</p>
                    <p>MMR: {player.mmr}</p>
                    <p>Discord ID: {player.discord}</p>
                    </ul>
                </div>
                ))}
            </div>
            </div>
            ))}
        </div>
        </div>
        ))}        
    </>
    );
}
