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
    <>
      <button onClick={() => setUser(1)}>Person 1</button>
      <button onClick={() => setUser(2)}>Person 2</button>
      <h1>Angemeldet: User {user}</h1>
      <div style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid gray",
        padding: "8px",
        marginTop: "16px",
      }}>
          <h3>Nachrichten-Chat mit User {user === 1 ? "2" : "1"}</h3>
          <div style={{
            height: "220px",
            overflowY: "auto",
            border: "1px solid gray",
            padding: "8px",
            marginTop: "16px",
            display: "flex",
            flexDirection: "column-reverse"
          }}>
            {speicher.slice().reverse().map((nachricht) => (
              <div key={nachricht.id} style={{ textAlign: nachricht.user === user ? "right" : "left", marginBottom: "4px" }}>{nachricht.message}</div>
            ))}
        </div>
      </div>
      <input type="text" placeholder="Nachricht" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => {
        setSpeicher([...speicher, { message: message, user: user, id: number }])
        setNumber(prevNumber => prevNumber - 1)
        setMessage("")
      }}>Send</button>
    </>
  );
}