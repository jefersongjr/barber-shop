'use client'

import TitleSlogan from '../../../components/landing/TitleSlogan'
import BackgroundContainer from '../../../components/shared/BackgroundContainer'; 
import OurServices from '../../../components/service/OurServices';
import OurProfissional from '../../../components/profissional/OurProfissional';
import OurClients from '../../../components/client/NossosClientes';

export default function Home() {
    return (
      <div>
        <TitleSlogan />
        <BackgroundContainer imagem="/banners/servicos.webp">
          <OurServices />
        </BackgroundContainer>
        <BackgroundContainer imagem="/banners/servicos.webp">
          <OurProfissional />
        </BackgroundContainer>
        <BackgroundContainer imagem="/banners/servicos.webp">
          <OurClients/>
        </BackgroundContainer>
      </div>
    );
  }
  