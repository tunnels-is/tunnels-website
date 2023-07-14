import { HashRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import STORE from "./store";

import "./assets/style/index.scss";
import HomePage from "./components/HomePage";
import BottomBar from "./components/BottomBar";

const root = createRoot(document.getElementById('app'));

let dummyState = {
  ContactList: [],
  ChannelList: [],
  LockTimer: 23423423423,
  HasNewMessage: true,
  ActiveMessages: [{ Sender: "Self", Time: 23423424, Msg: "hi mom" }],
  ActiveCode: 123123, // channel or user
}


const App = () => {
  console.log("Render: App")

  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const navigate = useNavigate()

  const [state, setState] = useState({ Counter: 1 });

  const NavigateToPrivateChat = (code) => {
    let state = STORE.SessionCache.GetObject("state")
    state.ActiveCode = code
    state.ActiveMessages = []
    STORE.SessionCache.SetObject("state")
    navigate("/chat/" + code)
  }

  const NavigateToChannel = (code) => {
    let state = STORE.SessionCache.GetObject("state")
    state.ActiveCode = code
    state.ActiveMessages = []
    STORE.SessionCache.SetObject("state")
    navigate("/channel/" + code)
  }

  // WEBSOCKET GOES HERE.
  // 1. on websocket event: setState

  const OnWebsocketmessage = (newMessage) => {
    let ws = STORE.SessionCache.GetObject("websocket")
    ws.Messages.push(newMessage)
    STORE.SessionCache.SetObject("websocket", ws)
  }

  useEffect(() => {

    const to = setTimeout(() => {
      console.log("State Update")

      // PARSE WEBSOCKET MESSAGES

      let state = STORE.SessionCache.GetObject("state")
      setState({ ...state })
    }, 1000)

    return () => { clearTimeout(to); }

  }, [state])


  return (
    < HashRouter >

      <Routes>
        <Route path="/" element={<HomePage state={state} setError={setError} setSuccess={setSuccess} />} />
        <Route path="*" element={<HomePage state={state} setError={setError} setSuccess={setSuccess} />} />
      </Routes>

      <BottomBar />
    </HashRouter >
  )


}


try {
  console.log("Render: Error boundry")
  STORE.SessionCache.SetObject("state", { Counter: 1 })
  root.render(<App />)

} catch (error) {
  console.dir(error)
  STORE.SessionCache.Clear()
  root.render(<div>
    Unknown error, please reload
  </div>
  )
}
