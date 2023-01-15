import "./App.css";
import Navbar from "./components/elements/Navbar/Navbar";
import MainContentArea from "./components/elements/MainContentArea/MainContentArea";
const threadData = [
  {
    title: "My trumpet is broken",
    author: "austinB",
    id: 0,
  },
  {
    title: "tuba won't toot",
    author: "claytonDizzle",
    id: 1,
  },
  {
    title: "is a clarinet brass",
    author: "confused_noobert",
    id: 2,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContentArea threads={threadData} />
    </div>
  );
}

export default App;
