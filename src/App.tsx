import { useState } from 'react';

interface nachricht {
  message: string;
  user: number;
  id: number;
}

export default function Chat() {

  const [user, setUser] = useState(1)
  const [message, setMessage] = useState("")
  const [number, setNumber] = useState(0)
  const [speicher, setSpeicher] = useState<nachricht[]>([])

  console.log(speicher)
  return (
    <div>
      <button onClick={() => setUser(1)}>Person 1</button>
      <button onClick={() => setUser(2)}>Person 2</button>
      <h1>Angemeldet: User {user}</h1>
      <input type="text" placeholder="Nachricht" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => {
        setSpeicher([...speicher, { message: message, user: user, id: number }])
        setNumber(prevNumber => prevNumber - 1)
        setMessage("")
      }}>Send</button>

      <table>
        <thead>
          <tr>
            <td>Nachrichten-Chat mit User {user === 1 ? "2" : "1"}</td>
          </tr>
        </thead>
        <tbody>
          {speicher.slice().reverse().map((nachricht) => (
            <tr key={nachricht.id}>
              <td style={{ textAlign: nachricht.user === user ? "right" : "left" }}>{nachricht.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}