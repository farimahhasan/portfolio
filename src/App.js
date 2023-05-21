import { Route , Routes  } from "react-router-dom";
import Home from "./components/Home";

import routes from "./routes";
import "./assets/css/all.css";
import { useLocation } from 'react-router-dom';
const App=()=> {

  const location = useLocation()
  const path=location.pathname

  return (
    <div>
      <Home path={path}/> 
      <Routes>
       { routes.map((item, index)=> {return <Route {...item} key={index+1} />})}
      </Routes>

    </div>
  );
}

export default App;
