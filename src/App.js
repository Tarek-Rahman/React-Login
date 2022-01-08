import { useState } from 'react';
import { LoginForm } from './Components/LoginForm';

function App() {
  //user List
  const userList = [
    { name: 'tarek', password: '1234' },
    { name: 'amir', password: '1334' },
    { name: 'salam', password: '1224' },
    { name: 'karim', password: '2234' },
    { name: 'soda', password: '1230' },
  ];

  const [user, setUser] = useState({ name: '', password: '' });
  const [err, setErr] = useState('');

  //LoginDetails
  const Login = (details) => {
    for (let i = 0; i < userList.length; i++) {
      const oneUser = userList[i];

      if (
        details.Username === oneUser.name &&
        details.password === oneUser.password
      ) {
        setUser({
          name: details.Username,
          password: details.password,
        });
      } else {
        setErr('Details do not match!');
      }
    }
  };

  const Logout = () => {
    setUser({ name: '', password: '' });
    setErr('');
  };
  return (
    <div className="App">
      {user.name !== '' ? (
        <div className="welcome">
          <h2>
            Welcome <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={Login} error={err} />
      )}
    </div>
  );
}

export default App;
