import { HeaderSC } from './style';

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <HeaderSC>
      <img src={ igniteLogo } alt="Logotipo do Ignite" />
    </HeaderSC>
  );
};