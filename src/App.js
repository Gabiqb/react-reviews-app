import { React, useEffect,useReducer } from "react";
import "./App.css";
import Person from "./Person";
import reducer from "./reducer";
const defaultState = {
  people: [] 
};
function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  //update person id state
  const prevPerson = (id) => {
    dispatch({ type: "PREV_PERSON", payload: id }); 
  };
  
  //update person id state
  const nextPerson = (id) => {
    dispatch({ type: "NEXT_PERSON", payload: id }); 
  };
  
  //random person id state
  const randomPerson = ()=>{
    dispatch({ type: "RANDOM_PERSON"})
  }

  //init first person
  useEffect(() => {
    dispatch({type: "INIT"}) 
  }, []);
  return (
    <>
      <div className="flex items-center place-content-center flex-col h-screen ">
        <h1 className="text-4xl font-bold font-sans capitalize tracking-wider">
          Our reviews
        </h1>
        <div className="w-32 h-1 bg-blue-600 mt-2 mb-2"></div>
        <div className="shadow-2xl p-6 md:w-1/3 mb-4 h-auto">
          <Person props={[state.people, nextPerson, prevPerson,randomPerson]} />
        </div>
      </div>
    </>
  );
}

export default App;
