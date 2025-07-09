import { useState } from 'react';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


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
      <Fab color="error" variant="extended" onClick={() => user === 1 ? setUser(2) : setUser(1)}>Switch to User {user === 1 ? "2" : "1"}</Fab>
      <h1>Angemeldet: User {user}</h1>
      <div style={{
        height: "300px",
        width: "500px",
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
      <br />
      <Box display="flex" gap="10px">
        <TextField sx={{ width: '450px' }} id="outlined-basic" variant="outlined" type="text" placeholder="Nachricht" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Fab color="success" onClick={() => {
          setSpeicher([...speicher, { message: message, user: user, id: number }])
          setNumber(prevNumber => prevNumber - 1)
          setMessage("")
        }}><SendIcon /></Fab>
      </Box>
    </>
  );
}