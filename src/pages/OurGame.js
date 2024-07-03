



import React, {  useEffect } from "react";

import Footer from "../homepage/components/Footer";
import "../App.css";
import { useLocation } from "react-router-dom";

import "swiper/swiper-bundle.css";
import Navbar from "../homepage/navbar/Navbar";

const OurGame = () => {
  const location = useLocation();


  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  
 
  return (
    <div>
      <Navbar />
      <div className="container"  id="ourgameSection">
        <div className="py-[48px]">
          <p>
            In Play Master 11, participants can create a team of 11 athletes in
            a fantasy sports setting. When the game begins, players earn points
            for their fantasy teams depending on how well they perform in the
            actual game. Points are awarded based on runs, wickets, catches, and
            other factors. In order to participate in a fantasy cricket league,
            you must enter a game and select a fantasy squad of 11 players
            consisting of 1-6 batsmen, 1-6 bowlers, 1-4 wicket-keepers, and 1-6
            all-rounders. Furthermore, it is important to choose both the
            Captain and Vice-Captain of the team. What is it that really makes
            online fantasy cricket so captivating? Certainly, there are multiple
            reasons for it. Build your own team: Fantasy sports allow you to
            take charge. You create your own cricket team of 11 players and take
            pleasure in watching them win a game. Therefore, you are able to let
            go of the aggravating sensation of witnessing a team's performance
            that you did not approve of. Thrilling virtual fantasy games: Indian
            fantasy cricket will always keep you entertained. It feels as though
            you are participating in every game with the cricket team. It is the
            type of involvement that you will never grow weary of. Fantasy
            gaming can be a highly fulfilling way to enjoy your free time and
            can be a key factor in winning. Playing fantasy cricket and earning
            cash prizes not only provides an adrenaline rush but also a feeling
            of accomplishment. Everyday, there are opportunities to win cash
            rewards and prizes while playing cricket. You can enhance your
            abilities by checking fantasy cricket tips quickly and become
            skilled in the game. Begin participating in fantasy sports games
            immediately.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurGame;

