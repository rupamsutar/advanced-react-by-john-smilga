import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
        setError(true);
      }

      setIsLoading(false);
    }

    fetchData();
  },[]);

  if(isLoading) {
    return <h1>Loading....</h1>
  }

  if (error) {
    return <h1>Something went wrong...</h1>
  }
  
  return <section>
    <h3>Github Users</h3>
    <ul className="users">
      {console.log(users)}
      {users.map(user => {
        const {id, login, avatar_url, html_url} = user;
        return(
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div className="">
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        )
      })}
    </ul>
  </section>
};
export default FetchData;
