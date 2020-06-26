import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px auto 40px auto;
  & h4 {
    font-size: 1.3em;
    color: #fff;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DayInfo = styled.li`
  width: 100%;

  border-radius: 8px;
  padding: 0 15px;
  transition: 0.5s;
  font-weight: 500;
  background: #fff;
  box-shadow: 0px 2px 8px #1d1c1c33;
  transition: .7s ease;
  cursor: pointer;

  @media(min-width: 768px) {
    width: 49%;
    margin: 0 0 20px 0;
  }

  & + li {
    margin-top: 20px;
    @media(min-width: 768px) {
      margin: 0 0 20px 0;
    }
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .day {
      width: 100px;
    }
  }

  .temperature {
    font-weight: 600;
    display: flex;
    align-items: center;
    &__min {
      font-size: 1.2em;
    }
    &__max {
      font-size: 2em;
      margin-right: 10px;
    }
    &__celsius {
      font-size: 1.1em;
      font-weight: 400;
      margin: -20px 0 0 5px;
      display: block;
    }
  }

  .probability {
    display: flex;
    align-items: center;
    & img {
      width: 25px;
    }
    & span {
      font-size: 0.8em;
      font-weight: 500;
    }
  }
`;
