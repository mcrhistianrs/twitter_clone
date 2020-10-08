import React from 'react';
import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>

          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
              <h1>Maicon</h1>
              <h2>@mcrhistianrs</h2>
              <p>
                  Developer: React/ReactNative/Node/Python 
              </p>
              <ul>
                  <li>
                      <LocationIcon />
                      RS,Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 6 Fevereiro de 1982.
                  </li>
              </ul>

              <Followage>
                <span>
                    seguindo <strong>199</strong>
                    
                </span>
                <span>
                    <strong>94</strong> seguidores
                </span>

              </Followage>

          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;