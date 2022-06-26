import React, {useContext} from 'react'
import { SWContext } from "../../context/context";
import "./Users.scss"

const Users = () => {

  const { users } = useContext(SWContext);
  return (
    <div>
      {users.map((users) => (
         users._id === "62a98e563f3317149b612427" ? (
          <div key={users._id} className="perfil">
            <img src={users.img} alt="{users.name}" className="perfil-img"></img>
            <div className="perfil_data">
              <p className="perfil-p">{users.name} {users.surnames}</p>
              <p className="perfil-p">{users.title}</p>
              <p className="perfil-p">{users.location}</p>
            </div>
          </div>
         ):( 
         <></>
         )
      ))}
    </div>
  )
}

export default Users