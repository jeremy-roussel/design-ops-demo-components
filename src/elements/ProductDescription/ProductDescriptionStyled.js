import styled from 'styled-components';

import ProductDescriptionCss from './ProductDescriptionCss';
import colors from 'tokens/colors';
import fontSizes from 'tokens/fontSizes';
import spacing from 'tokens/spacing';

// Extend the below as needed
const ProductDescriptionStyled = styled.p`
  ${ProductDescriptionCss};
  height: auto;
  text-align: ${props => props.right ? "right" : "left"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  color: ${props => props.purple ? `${colors.purple}`: `${colors.black}`};
  font-size: ${fontSizes.regular};
  line-height: 1.5rem;
  margin: 0 0 ${spacing.small} 0;
`;

export default ProductDescriptionStyled;