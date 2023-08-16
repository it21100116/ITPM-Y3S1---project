// ViewUser.js
import React, { useEffect, useState ,useParams} from "react";
import axios from "axios";

function ViewUser({ match }) {
    const [user, setUser] = useState({});

    const { id } = useParams();
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8070/user/get/${id}`);
      setUser(res.data.user);
  }
  


    useEffect(() => {
        fetchUser();
    }, []);

    // const fetchUser = async () => {
    //     const res = await axios.get(`http://localhost:8070/user/get/${match.params.id}`);
    //     setUser(res.data.user);
    // }

    return (
        <div>
            <h1>User Details</h1>
            <p>Username: {user.username}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Role: {user.role}</p>
        </div>
    )
}

export default ViewUser;
