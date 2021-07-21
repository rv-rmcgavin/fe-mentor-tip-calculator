import styled, { css, DefaultTheme } from 'styled-components';

const TipPercentStyled = styled.div`
${({ theme }: { theme: DefaultTheme }) => {
    const { colors } = theme;
    return css`
      .button-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        input {
          flex: 1 0 calc(50% - 16px);
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