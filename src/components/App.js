import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";

function App() {
  const [ques, setQues] = useState([]);
  const [reloader, setReloader] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const URL = "https://opentdb.com/api.php?amount=10&&type=multiple";
      const response = await fetch(URL);
      const resJson = await response.json();
      console.log(resJson.results);
      setQues(resJson.results);
    };
    fetchApi();
  }, [reloader]);
  return (
    <div className="App">
      <Header />
      <Quiz ques={ques} setQues={setQues} reloader={reloader} setReloader={setReloader} />
      <Footer />
    </div>
  );
}

export default App;
