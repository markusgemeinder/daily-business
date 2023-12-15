import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://reqres.in/api/users';

async function getUser(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json.data;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('useEffect', currentUserID);
    if (!currentUserID) {
      return;
    }
    async function run() {
      setLoading(true);
      const user = await getUser(currentUserID);
      setUser(user);
      setLoading(false);
    }
    run();
  }, [currentUserID]);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div className="app">
      <div className="box">
        <button onClick={() => setCurrentUserID(1)}>Load George</button>
        <button onClick={() => setCurrentUserID(2)}>Load Janet</button>
        <button onClick={() => setCurrentUserID(3)}>Load Emma</button>
      </div>
      {user && <User {...user} />}
    </div>
  );
}

function User({ first_name, last_name, avatar }) {
  return (
    <div className="box">
      <span>
        {first_name} {last_name}
      </span>
      <img src={avatar} alt={`${first_name} ${last_name}`} />
    </div>
  );
}
