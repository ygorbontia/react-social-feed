import { ThumbsUp, Trash } from 'phosphor-react';
import { CommentSC, CommentBoxSC, ContentSC } from './style';

import { Avatar } from '../Avatar';

export function Comment() {
  return (
    <CommentSC>
      <Avatar hasBorder={ false } src="https://github.com/ygorbontia.png" />

      <CommentBoxSC>
        <ContentSC>
          <header>
            <div>
              <strong>Ygor Bontia</strong>
              <time title="28 de Janeiro às 17h27" dateTime='2023-01-28 17:27:00'>Cerca de 1h atrás</time>
            </div>

            <button type="button" title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </ContentSC>

        <footer>
          <button type="button" title="Elogiar comentário">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </CommentBoxSC>
    </CommentSC>
  )
}