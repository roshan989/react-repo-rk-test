function MainForm(props){
    return (
      <div>
        <ul>
          <li>
            your name is {props.passedV.Name}.<br />
          </li>
          <li>your id is {props.passedV.id}.</li>
        </ul>
      </div>
    );
}
export default MainForm;