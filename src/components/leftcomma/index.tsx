import * as React from "react";

type Props = { className?: string };
function LeftComma({ className }: Props) {
  return (
    <svg
      width={88}
      height={81}
      viewBox="0 0 88 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2374_1028)" fill="var(--border)">
        <path d="M84.192 18.492V0S71.195 2.81 60.83 14.815c-.084.094-.168.193-.247.287-7.123 8.323-10.96 18.927-10.96 29.85v31.11c0 2.725 2.226 4.938 4.969 4.938h28.438c2.743 0 4.97-2.213 4.97-4.938v-26.37c0-2.726-2.227-4.939-4.97-4.939H68.015s-2.327-16.285 16.177-26.266v.005zM34.571 18.492V0S21.574 2.81 11.208 14.815c-.084.094-.168.193-.248.287C3.838 23.425 0 34.03 0 44.953v31.11C0 78.787 2.227 81 4.97 81h28.438c2.743 0 4.97-2.213 4.97-4.938v-26.37c0-2.726-2.227-4.939-4.97-4.939H18.394S16.067 28.468 34.57 18.487v.005z" />
      </g>
      <defs>
        <clipPath id="clip0_2374_1028">
          <path fill="#fff" d="M0 0H88V81H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LeftComma;
