import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import RecentlyPlayedCard from '../components/RecentlyPlayedCard';
import RecommendedCard from '../components/RecommendedCard';
import Profile from '../components/Profile';
import BackButton from '../components/BackButton';
import "../css/Homepage.css"


const HomePage = () => {
  const [recommendeds, setRecommendeds] = useState([]);
  const [recentlyPlayeds, setRecentlyPlayeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState();


  const fetchMusicData = async () => {
    try {
      const response = await axios.get('/api'); 
      const data = response.data;
      console.log("Fetched data:", data);
      setRecentlyPlayeds(data.recently_played);
      setRecommendeds(data.recommended);
      setUser(data.user);

    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchMusicData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    console.log('Search query:', query);
  }; 

  const filteredRecommendeds = recommendeds.filter(recommended =>
    recommended.title.toLowerCase().includes(searchQuery)
  );

  const filteredRecentlyPlayeds = recentlyPlayeds.filter(recently_played =>
    recently_played.title.toLowerCase().includes(searchQuery)
  );


  return (
    <div className="home-container">
      
      <BackButton onClick={() => setSearchQuery("")} />
      <Profile user={user} /> 
      <SearchBar onSearch={handleSearch} /> 

      {filteredRecentlyPlayeds.length > 0 && (
        <>
        <h2>Recently Played</h2>
      <div className="recentlyPlayed-grid">
        {filteredRecentlyPlayeds.map((recentlyPlayed, index) =>(
          <RecentlyPlayedCard key={index} recentlyPlayed={recentlyPlayed} />
        ))}
      </div>
        </>
      )}
            
      {filteredRecommendeds.length > 0 && (
        <>
       <h2>Recommended</h2>
      <p>Listen to a little bit of everything you love.</p>
      <div className="recommended-grid">
        {filteredRecommendeds.map((recommended,index) => (
          <RecommendedCard key={index} recommended={recommended} />
        ))}
        </div> 
      </>
      ) }

      {filteredRecentlyPlayeds == 0 && filteredRecommendeds == 0 && (
          <div style={{display:'flex', justifyContent:'center', marginTop:'220px'}}>
            <h2>No results found! </h2>
          </div>
      )} 
    </div>
  );
};

export default HomePage;
