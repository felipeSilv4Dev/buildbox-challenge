import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .name,
  .message {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    padding: 1.2rem 3.49rem 1.1rem 1.6rem;
    font-size: 1.4rem;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.input_bg};
    margin-bottom: 0.8rem;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
  .message {
    padding: 1.2rem 3.82rem 4.1rem 1.6rem;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 2.2rem;
    align-items: center;
  }
  .empty {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.btn};
    text-decoration: underline;
    padding: 1.2rem 2.4rem;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  @media (max-width: 48em) {
    .name,
    .message {
      font-size: 2rem;
      padding: 1.4rem 4.49rem 1.4rem 1.8rem;
    }
    .empty {
      font-size: 2rem;
    }
    .message {
      padding: 1.4rem 5.82rem 5.1rem 1.8rem;
    }
  }
`;
