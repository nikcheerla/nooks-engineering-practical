import * as React from "react";
import { render } from "react-dom";
import { AppHistoryEntry } from "./AppStore";
import { sampleFakeData } from "./fake-data";
import WorkAppSharing from "./WorkAppSharing";
import MyCard from "./components/my-card";

function App() {
  const onUserDataReceived = (data: AppHistoryEntry) => {
    // run some code whenever you get user data
    console.log("data: ", data);
  };

  React.useEffect(() => {
    let interval = setInterval(() => {
      let data = sampleFakeData();
      onUserDataReceived(data);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      <div style={{ width: "60%", height: "100%" }}>
        <WorkAppSharing />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
