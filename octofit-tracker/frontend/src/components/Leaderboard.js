import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `${process.env.REACT_APP_CODESPACE_NAME ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/` : '/api/leaderboard/'}`;

  useEffect(() => {
    console.log('Fetching leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        setLoading(false);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching leaderboard:', err);
      });
  }, [endpoint]);

  if (loading) return <div className="text-center my-4">Loading leaderboard...</div>;

  return (
    <div>
      <h2 className="mb-4 text-success">Leaderboard</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              {leaderboard.length > 0 && Object.keys(leaderboard[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={entry.id || idx}>
                {Object.values(entry).map((val, i) => (
                  <td key={i}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
