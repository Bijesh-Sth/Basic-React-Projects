import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Task/LoginPage";
import ReducerDemo from "./Task/ReducerDemo";
import MainComponent from "./Task/CRUD/MainComponent";
import Details from "./Task/CRUD/Components/Details";
import ProtectedRoute from "./Task/CRUD/Protected/ProtectedRoute";
import PageNotFound from "./Task/CRUD/PageNotFound";

// import Add from "./Task/CRUD_Redux/Components/Add";
// import Display from "./Task/CRUD_Redux/Components/Display";
import MainPage from "./Task/CRUD_Redux/MainPage";


function App() {
  return (
  //  <Router>
  //     <Routes>
  //       <Route path="/" element={<MainComponent />} />
  //       <Route path="/post/:id" element={<Details />} />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route element={<ProtectedRoute/>}>
  //       <Route path="/reducer" element={<ReducerDemo />} />
  //       </Route>
  //       <Route path="*" element={<PageNotFound />} />
        
  //     </Routes>
  //   </Router>
  <>
  {/* <Add/>
  <Display/> */}
  <MainPage/>

  </>
  );
}

export default App;
