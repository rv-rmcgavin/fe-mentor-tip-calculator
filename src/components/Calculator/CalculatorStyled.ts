import styled, { css, DefaultTheme } from 'styled-components';

const CalculatorStyled = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => {
    const { colors, breakpoint } = theme;
    return css`
      background: ${colors.white};
      border-radius: 20px;
      max-width: 375px;
      margin: 0 auto;
      height: 100%;
      padding: 40px 24px 32px;

      @media ${breakpoint} {
        display: flex;
        gap: 40px;
        max-width: 922px;
      }

      &> div {
        @media ${breakpoint} {
          flex 1 1 calc(50% - 40px);
        }
      }

      &>div:not(:last-child) {
        margin-bottom: 32px;
        @media ${breakpoint} {
          margin-bottom: 0;
        }
      }

      .controls > div {
        margin-bottom: 40px;

        @media ${breakpoint} {
          margin-bottom: 0;
        }
      }
        .controls > div:not(:last-child) {
        @media ${breakpoint} {
          margin-bottom: 48px;
        }
      }

      label {
        color: ${colors.neutral['500']};
        display: block;
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 8px;
      }

      input {
        background-color: ${colors.gray};
        border: none;
        border-radius: 8px;
        color: ${colors.neutral['900']};
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 700;
        outline-color: ${colors.primary};
        padding: 8px 16px;
        text-align: right;
        width: 100%;
      }
    `;
  }}
`;

export default CalculatorStyled;
