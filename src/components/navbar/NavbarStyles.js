import styled from "styled-components";

export const Styles = styled.div`
  .navbar {
    background-color: #2c3e50;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #f3f4f4;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #f3f4f4;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
