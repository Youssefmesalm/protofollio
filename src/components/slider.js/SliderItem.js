import React, { Component } from 'react'
import styled from 'styled-components';
import Text from '../../styles/Text';
export class SliderItem extends Component {
    render() {
        const { plus,number, content } = this.props;

        return (
          <Item>
            <Number color="primary" weight="bold" size="xlarge">
              {number}
              {plus ? " +": ""}
            </Number>
            <Content size="small">{content}</Content>
          </Item>
        );
    }
}

//############## Styles ###################
const Item =styled.div ` 
    display: flex;
    min-width: 25%;
    margin-bottom: 30px;
    align-items: center;
`
const Number = styled(Text)`
    padding-right: 30px;
    min-width: 60px;
    `;
const Content = styled(Text)`
    text-align: center;
    
`;

export default SliderItem
