import styled from "styled-components";
import { blue, gray } from "../../styles/constants";
import Button from "../Button";
import Image from "../Image";
import { StyledProps } from "./types";

const borderRadius = "26px";
const sugestionsborderRadius = "14px";

const blueColorFilter =
  "invert(27%) sepia(9%) saturate(3432%) hue-rotate(185deg) brightness(94%) contrast(91%)";
const grayColorFilter =
  "invert(77%) sepia(2%) saturate(252%) hue-rotate(188deg) brightness(98%) contrast(92%)";

const unfocusedFormShadow = "0 0 3rem 0.1rem rgba(0, 0, 0, 0.2)";
const focusedFormShadow = "0 0 3rem 0.1rem rgba(52, 72, 121, 0.5)";

const transition = "box-shadow 0.2s ease-in-out";

export const Form = styled.form<StyledProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 40rem);
  border-radius: ${borderRadius};
  margin: 0 auto;
  box-shadow: ${({ isFocused }) =>
    isFocused ? focusedFormShadow : unfocusedFormShadow};
  transition: ${transition};
`;

export const Input = styled.input<StyledProps>`
  width: 100%;
  font-size: 1.5rem;
  color: ${({ isFocused }) => (isFocused ? blue : gray)};
  padding: 10px 10px 10px 24px;
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  border: none;
  outline: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::placeholder {
    color: ${gray};
  }
`;

export const SearchButton = styled(Button)`
  width: 2.4rem;
  height: 2.4rem;
  margin: 10px 16px 10px 10px;
`;

export const SearchIcon = styled(Image)<StyledProps>`
  width: 100%;
  filter: ${({ isFocused }) => (isFocused ? blueColorFilter : grayColorFilter)};
  transition: ${transition};
`;

export const Sugestions = styled.ul`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid ${blue};
  max-height: 20rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: ${blue};
  }
`;

export const Sugestion = styled.li``;

export const SugestionButton = styled(Button)`
  display: flex;
  font-size: 1.5rem;
  padding: 8px 24px;
  width: 100%;
  height: 100%;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${blue};
  }

  &:first-child {
    padding-top: 15px;
  }

  &:last-child {
    padding-bottom: 15px;
  }
  `;
