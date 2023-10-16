import { useDispatch, useSelector } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions";

function User({userInfo}) {

    const dispatch = useDispatch()
    const userState = useSelector((state) => state.usersReducer)
    const userMoreInfo = userState.userInfo


    const getOneUser = (event) => {
        dispatch(fetchUserOneInfo(event.target.value))
    }

    return (
      <ul>
        <li>name: {userInfo.name}</li>
        <li>email: {userInfo.email}</li>
        <button value={userInfo.id} onClick={getOneUser}>
          get more
        </button>
        {userMoreInfo && userMoreInfo.id === userInfo.id && (
          <div>
            <p>More Info:</p>
            <p>Phone: {userMoreInfo.phone}</p>
            <p>UserName: {userMoreInfo.username}</p>
            <p>Website: {userMoreInfo.website}</p>
            <p>Address: {userMoreInfo.address.street}</p>
            <p>Company: {userMoreInfo.company.name}</p>
          </div>
        )}
      </ul>
    );
}

export default User