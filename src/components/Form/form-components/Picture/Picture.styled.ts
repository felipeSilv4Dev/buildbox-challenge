import styled from "styled-components";

export const PictureStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;

  .image {
    padding: 3rem;
    border-radius: 3.5rem;
    object-fit: cover;
    cursor: pointer;
    height: 8.5rem;
    border: 1px solid ${({ theme }) => theme.colors.input_bg};
    transition: all 0.2s;

    :hover {
      background-color: ${({ theme }) => theme.colors.box_border};
    }
  }
  .image-selected {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .trash {
    height: 2.2rem;
    transition: all 0.2s;
    cursor: pointer;
  }
  .image-selected img {
    cursor: pointer;
    height: 8.5rem;
    border-radius: 3.5rem;
    object-fit: cover;
  }

  @media (max-width: 48em) {
    .image-selected {
      height: 9rem;
      margin: 3rem 0;
    }
    .image {
      height: max-content;
      padding: 5rem;
    }

    .image-selected div img {
      height: 14rem;
    }
  }
`;
