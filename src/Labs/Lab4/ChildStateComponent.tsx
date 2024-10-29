export default function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div id="wd-child-state">
          <h3>Counter {counter}</h3>
          <button className="btn btn-lg btn-success" onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
            Increment</button>  <button className="btn btn-lg btn-danger" onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
            Decrement</button>
        </div>
    );}
    
    