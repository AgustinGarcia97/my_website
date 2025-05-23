// ESIcon.tsx
import React from 'react';

type ESIconProps = React.SVGProps<SVGSVGElement>;

export const EsFlag: React.FC<ESIconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        {...props}
    >
        <g fillRule="evenodd">
            <path fill="#c60b1e" d="M0 0h640v480H0z" />
            <path fill="#ffc400" d="M0 120h640v240H0z" />
        </g>
    </svg>
);


