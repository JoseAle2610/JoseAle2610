import styled from "styled-components";

export const BaseComponent = styled.div`
    color: ${(props) => (props.primary ? 'blue' : 'black')};
    font-size: ${(props) => (props.large ? '24px' : '16px')};
`