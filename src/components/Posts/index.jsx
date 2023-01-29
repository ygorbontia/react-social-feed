import { PostsSC, ProfileSC, ContentSC, PublicationSC, CommentListSC } from './style';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

export function Posts() {
  return (
    <PostsSC>
      <header>
        <ProfileSC>
          <Avatar src="https://github.com/ygorbontia.png" />

          <div>
            <strong>Ygor Bontia</strong>
            <span>Web Developer</span>
          </div>
        </ProfileSC>

        <time title="28 de Janeiro às 17h27" dateTime='2023-01-28 17:27:00'>Publicado há 1h</time>
      </header>

      <ContentSC>
        <p>Fala galeraa</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        
        <p className="tags">
          <a href="#">#novoprojeto</a> 
          <a href="#">#nlw</a> 
          <a href="#">#rocketseat</a>
        </p>
      </ContentSC>

      <PublicationSC>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <div>
          <button type="submit">Publicar</button>
        </div>
      </PublicationSC>

      <CommentListSC>
        <Comment />
        
        <Comment />

        <Comment />
      </CommentListSC>
    </PostsSC>
  );
};