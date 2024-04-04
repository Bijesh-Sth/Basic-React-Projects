import React, { useContext } from 'react';
import Add from './Components/Add';
import Update from './Components/Update';
import List from './Components/List';
import { AppContext } from "./Context/AppContext";

const MainComponent = () => {
  const { state } = useContext(AppContext);
  console.log(state);

  return (
    <>
      {state.render_update ? <Update /> : <Add />}
      <List />
    </>
  );
}

export default MainComponent;