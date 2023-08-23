import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { useState } from "react";
function App() {
  const [boardTwee, setBoardTwee] = useState(0);
  const [tenMath, setTenMath] = useState(0);
  const [tenSci, setTenSci] = useState(0);
  const [mockOne, setMockOne] = useState(0);
  const [mockTwo, setMockTwo] = useState(0);
  const [mockThree, setMockThree] = useState(0);
  const [selfstudy, setSelfStudy] = useState(0);
  const [cetScore, setCetScore] = useState(0);

  const [jboardTwee, setjBoardTwee] = useState(0);
  const [jtenMath, setjTenMath] = useState(0);
  const [jtenSci, setjTenSci] = useState(0);
  const [jmockOne, setjMockOne] = useState(0);
  const [jmockTwo, setjMockTwo] = useState(0);
  const [jmockThree, setjMockThree] = useState(0);
  const [jselfstudy, setjSelfStudy] = useState(0);
  const [jeeScore, setJeeScore] = useState(0);
  const onSubmitCET = (e) => {
    e.preventDefault();
    console.log(
      boardTwee,
      tenMath,
      tenSci,
      mockOne,
      mockTwo,
      mockThree,
      selfstudy
    );
    axios
      .post("http://127.0.0.1:8000/cetprediction", {
        boardTwee,
        tenMath,
        tenSci,
        mockOne,
        mockTwo,
        mockThree,
        selfstudy,
      })
      .then((response) => {
        console.log(response);
        setCetScore(response.data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmitJee = (e) => {
    e.preventDefault();
    console.log(
      jboardTwee,
      jtenMath,
      jtenSci,
      jmockOne,
      jmockTwo,
      jmockThree,
      jselfstudy
    );
    axios
      .post("http://127.0.0.1:8000/jeescoreprediction", {
        jboardTwee,
        jtenMath,
        jtenSci,
        jmockOne,
        jmockTwo,
        jmockThree,
        jselfstudy,
      })
      .then((response) => {
        console.log(response.data);
        setJeeScore(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div classNameName="container">
      <form>
        <h3>CET SCORE PREDECTOR</h3>
        <div className="form-group">
          <label for="maths10">10th Maths score:- </label>
          <input
            type="number"
            className="form-control"
            id="maths10"
            onChange={(e) => setTenMath(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="Science">10th Science score:- </label>
          <input
            type="number"
            className="form-control"
            id="Science"
            onChange={(e) => setTenSci(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="mock1">1st Mock of CET:- </label>
          <input
            type="number"
            className="form-control"
            id="mock1"
            onChange={(e) => setMockOne(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="mock2">2nd Mock of CET:- </label>
          <input
            type="number"
            className="form-control"
            id="mock2"
            onChange={(e) => setMockTwo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="mock3">3rd Mock of CET:- </label>
          <input
            type="number"
            className="form-control"
            id="mock3"
            onChange={(e) => setMockThree(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="board12">12th Board marks:- </label>
          <input
            type="number"
            className="form-control"
            id="board12"
            onChange={(e) => setBoardTwee(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="selfstudy">Self study hours:- </label>
          <input
            type="number"
            className="form-control"
            id="selfstudy"
            onChange={(e) => setSelfStudy(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={onSubmitCET}>
          Submit
        </button>
      </form>
      {cetScore && (
        <p className="font-weight-bold">Predicted CET Score: {cetScore}</p>
      )}
      <form>
        <h3>JEE SCORE PREDECTOR</h3>
        <div className="form-group">
          <label for="maths10">10th Maths score:- </label>
          <input
            type="number"
            className="form-control"
            id="maths10"
            onChange={(e) => setjTenMath(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="Science">10th Science score:- </label>
          <input
            type="number"
            className="form-control"
            id="Science"
            onChange={(e) => setjTenSci(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="mock1">1st Mock of JEE:- </label>
          <input
            type="number"
            className="form-control"
            id="mock1"
            onChange={(e) => setjMockOne(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="mock2">2nd Mock of JEE:- </label>
          <input
            type="number"
            className="form-control"
            id="mock2"
            onChange={(e) => setjMockTwo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="mock3">3rd Mock of JEE:- </label>
          <input
            type="number"
            className="form-control"
            id="mock3"
            onChange={(e) => setjMockThree(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="board12">12th Board marks:- </label>
          <input
            type="number"
            className="form-control"
            id="board12"
            onChange={(e) => setjBoardTwee(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="selfstudy">Self study hours:- </label>
          <input
            type="number"
            className="form-control"
            id="selfstudy"
            onChange={(e) => setjSelfStudy(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={onSubmitJee}>
          Submit
        </button>
      </form>
      {jeeScore && <p>Predicted JEE Score:{jeeScore}</p>}
    </div>
  );
}

export default App;
