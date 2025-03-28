import { loginSpotify, logoutSpotify, isLogged, getUserData } from "./services/SpotifyService";
import { useState, useEffect } from "react";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isLogged()) {
      getUserData().then(setUser);
    }
  }, []);

  return (
    <div>
      {isLogged() ? (
        <>
          <h1>Bienvenue, {user?.display_name} !</h1>
          <button onClick={logoutSpotify}>Se déconnecter</button>
        </>
      ) : (
        <button onClick={loginSpotify}>Se connecter avec Spotify</button>
      )}
    </div>
  );
}

export default App;