import styled from 'styled-components';

export const Container = styled.div``;

export const Card = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 16px;
  border-radius: 4px;
  max-width: 400px;

  header {
    padding: 12px;
    background-color: white;
    border-radius: 4px 4px 0 0;

    time {
      font-weight: 500;
    }

    p {
      font-size: 14px;
      margin-top: 8px;
    }
  }

  div {
    padding: 8px;

    div {
      display: flex;

      p {
        flex: 1;
        font-size: 24px;
      }

      svg {
        margin-right: 16px;
      }
    }
  }
`;

export const TextRed = styled.span`
  color: red;
`;

export const TextBlue = styled.span`
  color: blue;
`;
