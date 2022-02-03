import React from 'react';

type Props = {
    className?: string;
};

const Section: React.FC<Props> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Section;
