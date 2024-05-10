import "./App.css";

function App() {
  return (
    <>
      <div>Coming Soon</div>
      <h1>🚖 XYZ Taxi 🚕</h1>
      <div className="card">
        <button
          onClick={() =>
            alert(
              "Oops! Sorry, we are full at this time, we are working on it and will get back to you soon!"
            )
          }
        >
          Request Access
        </button>
        <p>🧪 Compare, 💅🏼 Select, ✅ Book</p>
      </div>
    </>
  );
}

export default App;
