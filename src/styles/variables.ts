// color
export const Colors = {
    black: '#00000',
    white: '#fffff',
};

// breakpoint
export type BreakPointsType = 'sm' | 'md' | 'lg' | 'xl';
export type MediaType = BreakPointsType | 'smDown' | 'mdDown' | 'lgDown' | 'xlDown' | 'mdOnly' | 'lgOnly' | 'xlOnly';
type BreakPointsNum = Record<BreakPointsType, number>;
type MediaQueries = Record<MediaType, string>;

export const breakpoints: BreakPointsNum = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export const media: MediaQueries = {} as MediaQueries;
const breakPointsKeys = Object.keys(breakpoints);
