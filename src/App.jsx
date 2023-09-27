import { Header } from "./components/Header";
import { Post } from "./Post";


export function App() {
 return (
  <div>

    <Header />

    <Post 
      author = 'Vinicius'
      content = 'Esse é um post legal'    
    />

    <Post 
      author = 'Thais'
      content = 'Esse é um post legal'    
    />
  </div>

   ) 
}


