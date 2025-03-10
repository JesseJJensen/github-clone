import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/jessejjensen/following?per_page=100'

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    // console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h3>github users</h3>
      {/* <h4>{users.login}</h4>
      <img src={users.avatar_url} alt={users.login} /> */}
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}></a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectSecondArgument
