import styles from '../../styles/divisions.module.css';
import JSONContainer from '../../lib/render-json';

export default function divisions(){
    const Data = JSONContainer({url:"http://localhost:3000/api/hello"})
    const Divisions = Data.divisions
    const Teams = Divisions.Teams
    return (
    <>
    {Divisions.map((division) => (
        <div key={division.id} className={styles.divisioncontainer}>
            <h1>
                <a href={division.teamsheet}>{division.name}</a>
            </h1>
        <div className={styles.teamscontainer}>
            {division.teams.map((team) => (
            <div key={team.name} className={styles.teamcontainer}>
                <h2>{team.name}</h2>
            <div className={styles.playerscontainer}>
                {team.players.map((player) => (
                <div key={player.name} className={styles.playercontainer}>
                    <h4>{player.name}</h4>
                    <ul>
                    <p>Coins: {player.coins}</p>
                    <p>Account ID: {player.account_id}</p>
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
