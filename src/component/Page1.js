import { useState } from "react";
import FormBack from "../Form/FormBack";
import Page2 from "./Page2";


function Page1() {
   
  const [setIs, setOn] = useState(false);
  function eventHandle() {
    setOn(true);
  }

 
  return (
    <div className="pg1">
      Page 1 txt
      <FormBack/>
      <div>
        <button name="push" onClick={eventHandle}>
          Click!!!
        </button>
      </div>
      {setIs && <Page2 />}
    </div>
  )
}
export default Page1;
