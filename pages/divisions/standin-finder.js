import React, { useState, useEffect } from 'react';
import './App.css';

const data = [  {    Name: "John Doe",    MMR: 5000,    Discord: "john_doe",    AccountID: 123456  },  {    Name: "Jane Doe",    MMR: 5500,    Discord: "jane_doe",    AccountID: 654321  },  {    Name: "Bob Smith",    MMR: 6000,    Discord: "bob_smith",    AccountID: 111111  },  ...];

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [range, setRange] = useState(500);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleChangeRange = (event) => {
    setRange(event.target.value);
  };

  return (
    <div className="App">
      <h1>User Directory</h1>
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
          {data.map((user) => {
            return (
              <tr key={user.AccountID} onClick={() => handleSelectUser(user)}>
                <td>{user.Name}</td>
                <td>{user.MMR}</td>
                <td>{user.Discord}</td>
                <td>{user.AccountID}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="filter-container">
        {selectedUser ? (
          <>
            <h2>Selected User: {selectedUser.Name}</h2>
            <div className="range-container">
              <label htmlFor="range">MMR Filter Range:</label>
              <input
                type="range"
                id="range"
                min="0"
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
              {data.filter(
                (user) =>
                  Math.abs(user.MMR - selectedUser.MMR) <= range &&
                  user.AccountID !== selectedUser.AccountID
              ).map((user) => {
                  if (
                    Math.abs(user.MMR - selectedUser.MMR) <= range &&
                    user.AccountID !== selectedUser.AccountID
                  ) {
                    return (
                      <tr key={user.AccountID}>
                        <td>{user.Name}</td>
                        <td>{user.MMR}</td>
                        <td>{user.Discord}</td>
                        <td>{user.AccoundID}</td>
                        </tr>
                    );
                    }
                })}
                </tbody>
            </table>  
         </>
        )
                )}
            </div>
    );
</div>
)}