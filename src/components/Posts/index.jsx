import { PostsSC } from './style';

export function Posts({ author, content }) {
  return (
    <PostsSC>
      <strong>{ author }</strong>
      <p>{ content }</p>
    </PostsSC>
  );
};