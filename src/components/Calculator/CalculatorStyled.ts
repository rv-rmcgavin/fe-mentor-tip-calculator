import styled, { css } from 'styled-components';

const CalculatorStyled = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background: ${colors.white};
      border-radius: 20px 20px 0 0;
      height: 100%;
      padding: 40px 24px 32px;
      &>div:not(:last-child) {
        margin-bottom: 32px;
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
        font-size: 1.5rem;
        font-weight: 700;
        padding: 8px 16px;
        text-align: right;
        width: 100%;
      }

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

      .output {
        background-color: ${colors.neutral['900']};
        border-radius: 16px;
        padding: 48px 24px 24px;
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
    `;
  }}
`;

export default CalculatorStyled;
