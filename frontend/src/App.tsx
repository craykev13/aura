import AmbientBackground from "./components/ambient/AmbientBackground";

export default function App() {
  return (
    <>
      <AmbientBackground />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "40px",
        }}
      >
        <h1>AURA</h1>
      </main>
    </>
  );
}