import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "./firebase";
import './App.css';

const auth = getAuth(app);

function App() {

  const signupUser =()=>{

    createUserWithEmailAndPassword(auth, "anindita.dev@gmail.com", "ani@1234").then((value)=> console.log(value));

  };

  return (
    <>
     <h1 className='flex justify-center text-5xl'> Firebase React App</h1>
     <button className="border-lime-900" onClick={signupUser}>create user</button>
    </>
  )
}

export default App
