import { Link } from "react-router-dom"

function Login(){
    return(

    <>
    <div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Password" aria-label="Password"/>
  </div>

  <Link to='/alumno'>Alumno</Link>
  <br />
  <Link to='/admin'>Admin</Link>
</div>
    
    </>

    )

}
export default Login