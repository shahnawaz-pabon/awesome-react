import styled from "styled-components";

export const Nav = styled.nav`{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1b2430;
    padding: 20px 80px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  }`

 export const Navbar = styled.#navbar`{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `
  
  #navbar li {
    list-style: none;
    padding: 0 20px;
    position: relative;
  }
  
  #navbar li a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    transition: 0.3s ease-in-out;
  }
  #navbar li a:hover,
  #navbar li a.active {
    color: #17cf97;
  }
  
  #navbar li a:hover::after,
  #navbar li a.active::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #17cf97;
    position: absolute;
    bottom: -4px;
    left: 20px;
  }
  
  #mobile {
    display: none;
  }
  
  #mobile i {
    color: #fff;
    align-items: center;
  }
  
  @media screen and (max-width: 769px) {
    #navbar {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: fixed;
      top: 90px;
      right: -300px;
      width: 300px;
      height: 100vh;
      background: #2a3239;
      box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
      padding: 40px 0 0 10px;
      transition: 0.3s ease-in-out;
    }
  
    #navbar.active {
      right: 0px;
    }
  
    #navbar li {
      margin-bottom: 25px;
    }
  
    #mobile {
      display: block;
    }
  
    #mobile i {
      font-size: 24px;
      cursor: pointer;
    }
  }
