import { HomeSC, ContentSC } from './style';

import { Header } from '../../components/Header';

import { SideBar } from '../../components/SideBar';
import { Posts } from '../../components/Posts';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ygorbontia.png',
      name: 'Ygor Bontia',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-28 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CEO @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-29 09:00:00')
  }
]


export function Home() {
  return (
    <HomeSC>
      <Header />

      <main>
        <SideBar />

        <ContentSC>
          {
            posts.map(post => {
              return (
                <Posts
                  author={ post.author }
                  content={ post.content }
                  publishedAt={ post.publishedAt }
                />
              )
            })
          }
        </ContentSC>
      </main>
    </HomeSC>
  )
}