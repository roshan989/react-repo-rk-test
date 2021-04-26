import MainForm from "./MainForm";
import { useRef } from "react";

//const OutputData = { name:" Name", id:" Id ",};
function FormBack() {
 
  const nameRef = useRef();
  const idRef = useRef();
  function onSubmitHand(event) {
    event.preventDefault();
  
    const Name = nameRef.current.value;
    const Id = idRef.current.value;
    const OutputData={name:Name,id:Id};
    <MainForm passedV={OutputData} />
    console.log(OutputData);
  }

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={onSubmitHand}>
        <label htmlFor="name">Your-Name</label>
        <input type="text" name="name" ref={nameRef}></input>
        <label htmlFor="id">Your-id</label>
        <input type="text" name="id" ref={idRef}></input>
        <button>submit</button>
      </form>
     
   
    </div>
  );
}
export default FormBack;
