import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { PostsSC, ProfileSC, ContentSC, PublicationSC, CommentListSC } from './style';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

export function Posts({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <PostsSC>
      <header>
        <ProfileSC>
          <Avatar src={ author.avatarUrl } />

          <div>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </ProfileSC>

        <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <ContentSC>
        { content.map(item => {
          if (item.type == 'paragraph') {
            return <p>{ item.content }</p>
          } else if (item.type == 'link') {
            return (
              <p>
                <a href="#">{ item.content }</a>
              </p>
            )
          }
        }) }
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