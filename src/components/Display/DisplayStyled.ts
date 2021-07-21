import styled, { css, DefaultTheme } from 'styled-components';

const DisplayStyled = styled.div`
${({ theme }: { theme: DefaultTheme }) => {
    const { colors, breakpoint } = theme;

    return css`
      background-color: ${colors.neutral['900']};
      border-radius: 16px;
      padding: 48px 24px 24px;

      @media ${breakpoint} {
        display: flex;
        flex-direction: column;
      }

      .line-item {
        display: flex;
        justify-content: space-between;
      }

      .label {
        color: ${colors.white};
        font-size: 1.25rem;
      }

      .per {
        color: ${colors.neutral['500']};
        font-size: 1rem;
      }

      .amount {
        color: ${colors.primary};
        font-size: 2.5rem;
        font-weight: 700;
      }

      .reset {
        background: ${colors.primary};
        border-radius: 5px;
        margin-top: auto;
        text-align: center;
      }
    `;
  }}
`;

export default DisplayStyled;