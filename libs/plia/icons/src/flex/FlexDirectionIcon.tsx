import { Component } from 'solid-js';

import styles from './styles.module.scss';

export enum FlexDirectionIconTypes {
  COLUMN = 'column',
  ROW = 'row',
  COLUMN_REVERSE = 'columnReverse',
  ROW_REVERSE = 'rowReverse',
}

type FlexDirectionIconProps = {
  type: FlexDirectionIconTypes;
};

export const FlexDirectionIcon: Component<FlexDirectionIconProps> = (props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 13 13"
    class={styles[props.type]}
  >
    <g clip-path="url(#clip0)">
      <rect x="2" y="2.816" width="4.607" height="2.738" rx=".5" stroke="#000" fill="transparent" />
      <rect x="1.5" y="6.989" width="5.607" height="3.738" rx="1" fill="#000" />
      <path d="M9.461 1.5v7.63H8L10.002 12 12 9.13h-1.458V1.5h-1.08z" fill="#000" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h13v13H0z" />
      </clipPath>
    </defs>
  </svg>
);
