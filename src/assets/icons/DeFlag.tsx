// DEIcon.tsx
import React from 'react';

type DEIconProps = React.SVGProps<SVGSVGElement>;

export const DeFlag: React.FC<DEIconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 5 3"
        {...props}
    >
        <path fill="#000" d="M0 0h5v1H0z" />
        <path fill="#D00" d="M0 1h5v1H0z" />
        <path fill="#FFCE00" d="M0 2h5v1H0z" />
    </svg>
);

