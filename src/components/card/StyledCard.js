import styled from "styled-components";

const StyledCard = styled.section`
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image ? props.image : null }) center/cover no-repeat;
`;

export default StyledCard;