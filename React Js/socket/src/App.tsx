import { Outlet } from "react-router-dom";


function App() {

  return (
    <>
    <div className="text-2xl">
      Chain Reacation Game
      <Outlet/>
    </div>
    </>
  )
}

export default App;
