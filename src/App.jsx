
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import Jobcard from "./components/Jobcard"
import job from "../job"

function App() {
  return (
     <div>
      <Navbar />
      <Header />
      <Searchbar />
      {job.map((j) => (
        <Jobcard key={job.id} job={j} />
      ))}
     </div>
  );
}

export default App



