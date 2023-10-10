import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css'

/*
  author : { avatarUrl: '', name: '', role: ''}
  publishedAt: Date
  content : String,
*/

const posts = [
  {
    id: 1,
    author:  {
      avatarUrl: 'https://github.com/viniciusiunes.png',
      name: 'Vinícius Moreira',
      role: 'Developer web'
    },

    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],

    publishedAt: new Date('2023-10-03 20:00:00')
  },

    {
    id: 2,
    author:  {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Developer'
    },

    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],

    publishedAt: new Date('2023-10-10 20:00:00')
  }
]

export function App() {
 return (
  <div>

    <Header />

    <div className={styles.wrapper}>

      <Sidebar />
      
        {/*o map tem retorno, ele devolve algo, diferente do foreach*/ }
      <main>
        {posts.map(post => {
          return( 
            <Post
              key={post.id}
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}          
            />
          )
        })}
      </main>
    </div>


  </div>

   ) 
}


