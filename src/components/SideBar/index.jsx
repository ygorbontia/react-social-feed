import { PencilLine } from 'phosphor-react';
import { SideBarSC, ProfileSC } from './style';

export function SideBar() {
  return (
    <SideBarSC>
      <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <ProfileSC>
        <img src="https://github.com/ygorbontia.png" />
        <strong>Ygor Bontia</strong>
        <span>Web Developer</span>
      </ProfileSC>
      
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </SideBarSC>
  )
}