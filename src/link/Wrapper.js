import {Link}from "react-router-dom";

function Wrapper(props){ 
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pg1">Main-Page</Link>
            </li>
            <li>
              <Link to="/pg2">New-Meet</Link>
            </li>
          </ul>
        </nav>
        <main>{props.children}</main>
      </div>
    )
}export default Wrapper;