import React, { useState, useEffect } from "react";



export default function StandinDirectory()  {
const [selectedUser, setSelectedUser] = useState(null);
const [range, setRange] = useState(500);
const [data, setData] = useState([]);

useEffect(() => {
// fetch data from your API and store it in the state
  fetch("http://localhost:8000/Items")
  .then((res) => res.json())
  .then((json) => setData(json));
}, []);

const handleSelectUser = (user) => {
  setSelectedUser(user);
};

const handleChangeRange = (event) => {
  setRange(event.target.value);
};

return (
  <div className="App">
    <h1>Player Directory</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>MMR</th>
            <th>Discord</th>
            <th>AccountID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => {
            return (
              <tr key={i}onClick={()=>handleSelectUser(user)}>
                <td>{user.player.Name}</td>
                <td>{user.player.MMR}</td>
                <td>{user.player.discord}</td>
                <td>{user.player.accountID}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    <div className="filter-container">
      {selectedUser ? (
        <>
        <h2>Selected User: {selectedUser.player.Name}</h2>
          <div className="range-container">
            <label htmlFor="range">MMR Filter Range: {range} </label>
            <input
             type="range"
             id="range"
             min="100"
             max="1000"
             value={range}
             onChange={handleChangeRange}
            />
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>MMR</th>
          <th>Discord</th>
          <th>AccountID</th>
        </tr>
      </thead>
        <tbody>
          {data.map((user, i) => {
            if (Math.abs(user.player.MMR - selectedUser.player.MMR) <= range && user.player.Name !== selectedUser.player.Name) {
              console.log('it works')
            return (
              <tr key={i}>
                <td>{user.player.Name}</td>
                <td>{user.player.MMR}</td>
                <td>{user.player.discord}</td>
                <td>{user.player.accountID}</td>
              </tr>
            );
            }
          })}
        </tbody>
    </table>
    <br />
    <br />
        </>
    ) : null}
</div>
</div>
)
}