import { AvatarSC } from './style';

export function Avatar({ src, hasBorder = true }) {
  return (
    <AvatarSC>
      <img src={ src } className={ hasBorder ? "has-border" : "no-border" } />
    </AvatarSC>
  )
}