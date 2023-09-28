import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

// fetch no.of projects & no.of contributions

function GitHubInfo({ username }) {
  const [projects, setProjects] = useState(null);
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user's repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (reposResponse.ok) {
          const reposData = await reposResponse.json();
          setProjects(reposData.length);
        } else {
          throw new Error('Failed to fetch repositories');
        }

        // Fetch user's contributions
        const eventsResponse = await fetch(
          `https://api.github.com/users/${username}/events/public`
        );
        if (eventsResponse.ok) {
          const eventsData = await eventsResponse.json();
          const contributionEvents = eventsData.filter(
            (event) =>
              event.type === 'PushEvent' || event.type === 'PullRequestEvent'
          );
          setContributions(contributionEvents.length);
        } else {
          throw new Error('Failed to fetch contributions');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {projects !== null && (
        <p>
          Number of projects: {projects}
        </p>
      )}
      {contributions !== null && (
        <p>
          Number of contributions: {contributions}
        </p>
      )}
    </div>
  );
}

export default GitHubInfo;



// Next.js
// I want to get no.of projects & no.of contributions for each student from their github
// https://stackoverflow.com/questions/70994318/is-there-a-way-to-fetch-the-number-of-contribution-of-github-profile-in-javascri
// import Albums from './albums'
 
// async function getArtist(username) {
//   const res = await fetch(`https://api.github.com/users/${username}`)
//   return res.json()
// }
 
// async function getArtistAlbums(username) {
//   const res = await fetch(`https://api.github.com/users/${username}/albums`)
//   return res.json()
// }
 
// export default async function Page({ params: { username } }) {
//   // Initiate both requests in parallel
//   const artistData = getArtist(username)
//   const albumsData = getArtistAlbums(username)
 
//   // Wait for the promises to resolve
//   const [artist, albums] = await Promise.all([artistData, albumsData])
 
//   return (
//     <>
//       <h1>{artist.name}</h1>
//       <Albums list={albums}></Albums>
//     </>
//   )
// }