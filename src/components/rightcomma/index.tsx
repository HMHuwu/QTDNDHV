import * as React from "react";

type Props = { className?: string };
function RightComma({ className }: Props) {
  return (
    <svg
      width={88}
      height={81}
      viewBox="0 0 88 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2374_1031)" fill="var(--border)">
        <path d="M3.807 62.508V81s12.998-2.81 23.364-14.815c.084-.094.168-.193.247-.288 7.123-8.322 10.96-18.926 10.96-29.849V4.938C38.379 2.213 36.153 0 33.41 0H4.971C2.228 0 0 2.213 0 4.938v26.37c0 2.726 2.227 4.939 4.97 4.939h15.014s2.327 16.285-16.178 26.266v-.005zM53.429 62.508V81s12.997-2.81 23.363-14.815c.084-.094.168-.193.248-.288C84.162 57.575 88 46.971 88 36.048V4.938C88 2.213 85.773 0 83.03 0H54.592c-2.743 0-4.97 2.213-4.97 4.938v26.37c0 2.726 2.227 4.939 4.97 4.939h15.014s2.327 16.285-16.177 26.266v-.005z" />
      </g>
      <defs>
        <clipPath id="clip0_2374_1031">
          <path fill="#fff" transform="rotate(180 44 40.5)" d="M0 0H88V81H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default RightComma;
