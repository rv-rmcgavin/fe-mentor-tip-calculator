import styled, { css, DefaultTheme } from 'styled-components';

const TipPercentStyled = styled.div`
${({ theme }: { theme: DefaultTheme }) => {
    const { colors, breakpoint } = theme;
    return css`
      .button-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        @media ${breakpoint} {
          gap: 8px;
        }

        input {
          flex: 1 0 calc(50% - 16px);
          @media ${breakpoint} {
            flex: 1 0 calc(33% - 8px);
          }
        }
      }

      .percent-button {
        background-color: ${colors.neutral['900']};
        color: ${colors.white};
        text-align: center;

        &--active {
          background-color: ${colors.primary};
          color: ${colors.neutral['900']};
        }
      }
    `;
  }}
`;

export default TipPercentStyled;