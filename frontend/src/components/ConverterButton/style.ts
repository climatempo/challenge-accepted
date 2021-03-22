import styled from 'styled-components';

export const ConverterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 20px;
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ActionDisplay = styled.span`
  display: flex;
  font-size: 12px;
`

export const ActionLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 34px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #616161;
  border-radius: 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: .3s linear;

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #616161;
    position: absolute;
    left: 2px;
    transition: .3s linear;
  }
`

export const ActionButton = styled.input.attrs({
  type: "checkbox"
})`
  visibility: hidden;

  &:checked ~ label {
    background-color: #616161;
    border-color: #fff;
  }
  &:checked ~ label::before {
    background-color: #fff;
    transform: translateX(12px);
  }
`

