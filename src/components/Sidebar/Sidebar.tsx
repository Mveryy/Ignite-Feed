import { PencilLine } from 'phosphor-react';
import bg from "../../assets/side-bg.png";
import { Background, Button, Container, Description, Divider, Name, ProfileImage } from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <Background src={bg}/>
      <ProfileImage src="https://github.com/Mveryy.png"/>
      <Name>
        Matheus Verissimo
      </Name>
      <Description>
        Web Developer
      </Description>
      <Divider />
      <Button>
          <PencilLine size={20}/>
          Editar seu perfil
      </Button>
    </Container>
  )
}