import DataView from "../Views/DataView";

function Data() {
  const Dummy_Data = [
    {
      title: "hello page count1",
      value: 4 + 2,
    },
    {
      title: "hello page count 2",
      value: 6 + 4,
    },
  ];
  return (
    <div>
     <DataView data={Dummy_Data}/>
    </div>
  );
}
export default Data;
