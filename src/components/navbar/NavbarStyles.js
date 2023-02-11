import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1b2430;
  padding: 20px 80px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);

  &#navbar {
    display: flex;
    align-items: center;
    justify-content: center;

    &li {
      list-style: none;
      padding: 0 20px;
      position: relative;
    }
  }

  &#navbar li {
    list-style: none;
    padding: 0 20px;
    position: relative;

    &a {
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 600;
      color: #fff;
      transition: 0.3s ease-in-out;

      &:hover {
        color: #17cf97;
      }

      &.active {
        color: #17cf97;
      }
    }
  }
`;

//  export const Navbar = styled.#navbar`{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   `

// #navbar li {
//   list-style: none;
//   padding: 0 20px;
//   position: relative;
// }

// #navbar li a {
//   text-decoration: none;
//   font-size: 1.3rem;
//   font-weight: 600;
//   color: #fff;
//   transition: 0.3s ease-in-out;
// }
// #navbar li a:hover,
// #navbar li a.active {
//   color: #17cf97;
// }
