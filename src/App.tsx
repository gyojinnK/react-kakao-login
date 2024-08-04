import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SocialKakaoLogin from "./components/SocialKakaoLogin";
import { useKakaoUserStore } from "./actions/useKakaoUserStore";
import SocialKakaoLogout from "./components/SocialKakaoLogout";
import { useEffect } from "react";

function App() {
  const { user } = useKakaoUserStore();

  useEffect(() => {
    console.log(`user: ${user}`);
  }, [user]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {user ? <SocialKakaoLogout /> : <SocialKakaoLogin />}

      {user && (
        <button
          style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              borderRadius: 25,
            }}
            src={user.properties.profile_image}
            alt="profile_image"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <p className="card">Client ID: {user.id}</p>
            <p className="card">Nickname: {user.properties.nickname}</p>
          </div>
        </button>
      )}
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
