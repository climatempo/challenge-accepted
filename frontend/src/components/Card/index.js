import React from 'react';

import { 
    Container,
    Header,
    Content,
    Title,
    Subtitle 
} from './styles';

export default function Card({ title, subtitle, index, children }) {
  return (
    <Container index={index}>
        <Header>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Header>

        <Content>
            {children}
        </Content>
    </Container>
  );
}
