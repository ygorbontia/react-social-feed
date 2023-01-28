import { HomeSC, ContentSC } from './style';

import { Header } from '../../components/Header';

import { SideBar } from '../../components/SideBar';
import { Posts } from '../../components/Posts';


export function Home() {
  return (
    <HomeSC>
      <Header />

      <main>
        <SideBar />

        <ContentSC>
          <Posts 
            author="Ygor Bontia"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae nostrum eveniet mollitia illum. Eaque at tenetur quo, aspernatur animi et voluptates voluptatibus ipsa repellat dolores consequuntur, sed fugiat ducimus?"
          />
          <Posts 
            author="Ygor Bontia"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae nostrum eveniet mollitia illum. Eaque at tenetur quo, aspernatur animi et voluptates voluptatibus ipsa repellat dolores consequuntur, sed fugiat ducimus?"
          />
        </ContentSC>
      </main>
    </HomeSC>
  )
}