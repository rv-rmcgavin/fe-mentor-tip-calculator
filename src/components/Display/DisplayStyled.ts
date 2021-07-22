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
        padding: 62px 40px 40px;
      }

      .line-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        @media ${breakpoint} {
          margin-bottom: 56px;
        }
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
        line-height: 1;

        @media ${breakpoint} {
          font-size: 3.5rem;
        }
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