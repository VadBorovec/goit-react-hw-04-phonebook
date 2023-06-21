import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;
`;

export const Item = styled.li`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const Name = styled.h3`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  color: ${props => props.theme.colors.gray};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

export const Number = styled.p`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  color: ${props => props.theme.colors.deepteal};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

// .TodoList__item {
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);

//   transition-property: transform, box-shadow;
//   transition-duration: 0.25s;

//   &:hover {
//     transform: scale(1.02);
//     box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 4px;

//     background-color: green;

//     transform: scaleX(0);
//     transition: cubic-bezier(0.7, 0.98, 0.86, 0.98);
//   }

// }
