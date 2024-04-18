import {IconBaseProps} from '@helper/index';
import * as React from 'react';

import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export default (props: IconBaseProps) => {
  const color = props?.color ? props?.color : '#4D5B69';
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <G clip-path="url(#clip0_3858_6383)">
        <Path
          d="M19.7552 18.5781L14.781 13.6039C16.1365 11.9461 16.803 9.83069 16.6425 7.69525C16.4821 5.5598 15.507 3.56772 13.919 2.13105C12.331 0.694371 10.2515 -0.076978 8.1107 -0.0234515C5.96991 0.030075 3.93158 0.904381 2.41734 2.41862C0.9031 3.93286 0.0287933 5.97119 -0.0247333 8.11198C-0.0782598 10.2528 0.693089 12.3322 2.12976 13.9203C3.56644 15.5083 5.55852 16.4834 7.69397 16.6438C9.82941 16.8043 11.9448 16.1378 13.6027 14.7823L18.5768 19.7564C18.734 19.9082 18.9445 19.9922 19.163 19.9903C19.3815 19.9884 19.5905 19.9008 19.745 19.7463C19.8995 19.5918 19.9872 19.3828 19.9891 19.1643C19.991 18.9458 19.907 18.7353 19.7552 18.5781ZM8.33266 15.0006C7.01412 15.0006 5.72519 14.6096 4.62886 13.8771C3.53253 13.1445 2.67805 12.1033 2.17347 10.8852C1.66888 9.66699 1.53686 8.32655 1.79409 7.03334C2.05133 5.74014 2.68627 4.55225 3.61862 3.6199C4.55097 2.68755 5.73885 2.05261 7.03206 1.79538C8.32527 1.53814 9.66571 1.67016 10.8839 2.17475C12.1021 2.67933 13.1433 3.53382 13.8758 4.63014C14.6083 5.72647 14.9993 7.0154 14.9993 8.33395C14.9973 10.1014 14.2943 11.796 13.0445 13.0458C11.7947 14.2956 10.1002 14.9986 8.33266 15.0006Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3858_6383">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
