import React, { useContext } from 'react'
import { ConverterWrapper, ActionDisplay, ActionLabel, ActionButton, ActionWrapper} from './style'
import { GlobalContext, TContextProps } from "../../context/GlobalContext";

const Converter = () => {
  const { toggleTemperature, toggleRain } = useContext(GlobalContext) as TContextProps

  return (
    <ConverterWrapper>
      <ActionWrapper>
        <ActionButton id="temperature" />
        <ActionDisplay>°C</ActionDisplay>
        <ActionLabel htmlFor="temperature" onClick={toggleTemperature} />
        <ActionDisplay>°F</ActionDisplay>
      </ActionWrapper>
      <ActionWrapper>
        <ActionButton id="rain" />
        <ActionDisplay>mm</ActionDisplay>
        <ActionLabel htmlFor="rain" onClick={toggleRain}/>
        <ActionDisplay>inch</ActionDisplay>
      </ActionWrapper>
    </ConverterWrapper>
  )
}

export default Converter