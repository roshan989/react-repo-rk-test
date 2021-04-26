function DataView(props){
   // const data=props.children;
    return (
      <ul>
        {props.data.map((pgData) => {
          return (
            <li key={pgData.value}>
              {pgData.title}
              <br />
              {pgData.value}
            </li>
          );
        })}
      </ul>
    );
}
export default DataView;