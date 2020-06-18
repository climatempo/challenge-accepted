import React from 'react';

import { Container, List, DayInfo } from './styles';

const NextDaysList: React.FC = () => {
  return (
    <Container>
      <h4>Próximos dias</h4>
      <List>
        <DayInfo isActivity>
          <span>Segunda</span>
          <div className="temperature">
            <span className="temperature__max">17</span>
            <span className="temperature__min">/ 14</span>
            <span className="temperature__celsius">°</span>
          </div>
          <div className="probability">
            <img
              src="https://img.icons8.com/windows/100/555/moderate-rain.png"
              alt=""
            />
            <span>Chuva</span>
          </div>
        </DayInfo>
        <DayInfo isActivity={false}>
          <span>Segunda</span>
          <div className="temperature">
            <span className="temperature__max">17</span>
            <span className="temperature__min">/ 14</span>
            <span className="temperature__celsius">°</span>
          </div>
          <div className="probability">
            <img
              src="https://img.icons8.com/windows/100/555/moderate-rain.png"
              alt=""
            />
            <span>Chuva</span>
          </div>
        </DayInfo>
        <DayInfo isActivity={false}>
          <span>Segunda</span>
          <div className="temperature">
            <span className="temperature__max">17</span>
            <span className="temperature__min">/ 14</span>
            <span className="temperature__celsius">°</span>
          </div>
          <div className="probability">
            <img
              src="https://img.icons8.com/windows/100/555/moderate-rain.png"
              alt=""
            />
            <span>Chuva</span>
          </div>
        </DayInfo>
        <DayInfo isActivity={false}>
          <span>Segunda</span>
          <div className="temperature">
            <span className="temperature__max">17</span>
            <span className="temperature__min">/ 14</span>
            <span className="temperature__celsius">°</span>
          </div>
          <div className="probability">
            <img
              src="https://img.icons8.com/windows/100/555/moderate-rain.png"
              alt=""
            />
            <span>Chuva</span>
          </div>
        </DayInfo>
        <DayInfo isActivity={false}>
          <span>Segunda</span>
          <div className="temperature">
            <span className="temperature__max">17</span>
            <span className="temperature__min">/ 14</span>
            <span className="temperature__celsius">°</span>
          </div>
          <div className="probability">
            <img
              src="https://img.icons8.com/windows/100/555/moderate-rain.png"
              alt=""
            />
            <span>Chuva</span>
          </div>
        </DayInfo>
        <DayInfo isActivity={false}>
          <span>Segunda</span>
          <div className="temperature">
            <span className="temperature__max">17</span>
            <span className="temperature__min">/ 14</span>
            <span className="temperature__celsius">°</span>
          </div>
          <div className="probability">
            <img
              src="https://img.icons8.com/windows/100/555/moderate-rain.png"
              alt=""
            />
            <span>Chuva</span>
          </div>
        </DayInfo>
        <DayInfo isActivity={false}>
          <span>Segunda</span>
          <div className="temperature">
            <span className="temperature__max">17</span>
            <span className="temperature__min">/ 14</span>
            <span className="temperature__celsius">°</span>
          </div>
          <div className="probability">
            <img
              src="https://img.icons8.com/windows/100/555/moderate-rain.png"
              alt=""
            />
            <span>Chuva</span>
          </div>
        </DayInfo>
      </List>
    </Container>
  );
};

export default NextDaysList;
