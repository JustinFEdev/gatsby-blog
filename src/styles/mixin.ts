import { css } from '@emotion/react';

export const flexMixin = ({ direction = 'row', alignItems = 'flex-start', justiftContents = 'flex-start' }) => css`
    display: 'flex';
    flex-direction: ${direction};
    align-items: ${alignItems};
    justift-contents: ${justiftContents};
`;
