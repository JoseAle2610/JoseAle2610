import styled from "styled-components"

export const ButtonTransparent = styled.a`
  padding: 10px 25px;
  font-weight: bold;
  margin-bottom: 15px;
  background: 'transparent';
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid white;
  color: white;
  font-size: 14px;
  text-decoration: none;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: white;
    transition: all 0.3s ease;
  }

  &:hover {
    color: black;
  }

  &:hover:after {
    top: 0;
    height: 100%;
  }

  &:active {
    top: 2px;
  }
`

export const ButtonWhite = styled.a`
  padding: 10px 25px;
  font-weight: bold;
  margin-bottom: 15px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid white;
  color: black;
  font-size: 14px;
  text-decoration: none;
  
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: white;
    transition: all 0.3s ease;
  }

  &:hover {
    color: white;
  }

  &:hover:after {
    top: 0;
    height: 0;
  }

  &:active {
    top: 2px;
  }
`

export const ButtonBlack = styled.a`
  padding: 10px 25px;
  font-weight: bold;
  margin-bottom: 15px;
  background: black;
  outline: none !important;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid black;
  color: white;
  font-size: 14px;
  text-decoration: none;
  
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: white;
    transition: all 0.3s ease;
  }

  &:hover {
    color: black;
    background: transparent;
  }

  &:hover:after {
    top: 0;
    height: 100%;
  }

  &:active {
    top: 2px;
  }
`