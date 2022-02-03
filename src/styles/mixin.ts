import { css } from '@emotion/react';

export const flexMixin = ({ direction = 'row', alignItems = 'flex-start', justifyContent = 'flex-start' }) => css`
    display: 'flex';
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
`;
