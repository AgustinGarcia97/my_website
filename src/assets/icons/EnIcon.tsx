// SHIcon.jsx
import React from 'react';
import type { JSX } from 'react/jsx-runtime';

export const EnFlag = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        {...props}
    >
        <defs>
            <clipPath id="a">
                <path fillOpacity=".7" d="M0 0h1200v800H0z" />
            </clipPath>
        </defs>
        <g clipPath="url(#a)">
            <path fill="#00205b" d="M0 0h1200v800H0z" />
            <path
                fill="#fff"
                d="m0 0 479.4 321.2L1200 0v152.5L639 401 1200 650v150L479.4 478.8 0 800V647.5L561 400 0 150.2z"
            />
            <path
                fill="#cf142b"
                d="m0 60 514.7 334.5H600v11.4h-85.3L0 740v-81.8l391-262H0v-14.5h391L0 119.6zM600 403.6h85.3L1200 60v59.6L808.5 400H1200v13.8H808.5l391.6 268.6v55.6L685.3 403.6H600z"
            />
            <path
                fill="#fff"
                d="M0 320h480V0h240v320h480v160H720v320H480V480H0z"
            />
            <path fill="#cf142b" d="M0 352.7h512V0h176v352.7h512v94.6H688V800H512V447.3H0z" />
        </g>
    </svg>
);


