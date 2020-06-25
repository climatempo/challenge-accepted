import styled from 'styled-components';

interface InfoProps {
  bgColor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  margin: auto;
  & h3 {
    font-size: 2em;
  }

  .temperature {
    font-weight: 600;
    display: flex;
    align-items: center;

    & img {
      /* width: 100px; */
      height: 100px;
      margin-right: 20px;
    }

    &__info {
      display: flex;
      align-items: center;
      &__min {
        font-size: 1.8em;
      }
      &__max {
        font-size: 3em;
        margin-right: 10px;
      }
      &__celsius {
        font-size: 2em;
        font-weight: 400;
        color: #ccc;
        margin: -20px 0 0 15px;
        display: block;
      }
    }
  }

  .others {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    & p {
      font-size: 0.9em;
      margin-right: 10px;
    }
    &__probability {
      display: flex;
    }
  }
`;

export const Info = styled.div<InfoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: 500;
  & + div {
    margin-left: 15px;
  }
  & div {
    width: 50px;
    height: 50px;
    padding: 5px;
    background-color: ${(props) => props.bgColor};
    box-shadow: 0px 0px 20px 0px ${(props) => props.bgColor};
    border-radius: 8px;
    margin-bottom: 5px;
  }
  & img {
    width: 100%;
  }
`;
