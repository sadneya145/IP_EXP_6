import React, { useEffect, useState } from 'react';
import './style.css'
import InnerOpt from '../Components/InnerOpt'

const fetchFromBackend = async () => {
  try {
    const response = await fetch('http://localhost:5000/profile');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfiles = async () => {
      const data = await fetchFromBackend();
      setProfiles(data);
    };
    loadProfiles();
  }, []);

  return (
    <div className="profile">
      <h1>Profile Details</h1>
      {profiles.length > 0 ? (
        <ul>
          {profiles.map((profile, index) => (
            <li key={index}>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Address:</strong> {profile.address}</p>
              <p><strong>Course:</strong> {profile.course}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No profiles available.</p>
      )}
    </div>
  );
};

export default Profile;
