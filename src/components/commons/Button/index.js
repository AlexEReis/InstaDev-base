import styled, { css } from "styled-components";
import get from 'loadsh/get';
import { TextStyleVariantMap } from "../../foundation/Text";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import { propToStyle } from "../../../theme/utils/propToStyle";

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: white;
  background-color: ${function(props) {      
      return get(props.theme, `colors.${props.variant}.color`)
  }};
  color: ${function(props) {
      return get(props.theme, `colors.${props.variant}.contrastText`)
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;

  ${breakpointsMedia({
    xs: css`
    ${TextStyleVariantMap.smallestException}
    `,    
    md: css`
    ${TextStyleVariantMap.paragraph1}
    `
  })}

  ${function(props){

  }}

  ${TextStyleVariantMap.smallestException}

  ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
