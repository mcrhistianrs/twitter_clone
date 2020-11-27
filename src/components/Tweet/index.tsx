import React from 'react';

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
 } from './styles';

 //AQUI 01:28:55 
 //https://www.youtube.com/watch?v=K-8z_4xvT3o&t=80m58s

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          
          <Header>
            <strong>RocketSeat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de Junho</time>
          </Header>

          <Description>
            Foguete nâo tem ré
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              18
            </Status>

          </Icons>
        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;