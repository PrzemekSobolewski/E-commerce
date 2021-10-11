import styled from '@emotion/styled';

const CartContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%; 
    flex-direction: column;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 0%), 0 6px 20px 0 rgb(0 0 0 / 10%);
`;

const Flex = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: calc(100% - 32px);
    margin: 0px 16px;
    border-bottom: 1px solid #f1f1f1;
`;

export { CartContent, Flex };