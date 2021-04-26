import{Route,Switch} from "react-router-dom";
import Wrapper from "./link/Wrapper";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";

function App() {
  return (
    <div> 
      <Wrapper> 
        <Switch>
        <Route path="/pg1" exact>
         <Page1 />
        </Route>
          <Route path="/pg2">
         <Page2/>
          </Route>
        </Switch>
      </Wrapper>
   </div>
 
  )
  }

export default App;
