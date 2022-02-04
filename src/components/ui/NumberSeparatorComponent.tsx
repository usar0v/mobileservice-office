import React, {FC} from 'react';
import NumberFormat from "react-number-format";

interface INumberSeparator {
  sum: number | undefined;
  color?: string;
}

const NumberSeparatorComponent: FC<INumberSeparator> = ({sum, color}) => {
  return (
    <>
      <NumberFormat
        value={sum}
        thousandsGroupStyle={'thousand'}
        prefix={'$ '}
        displayType={'text'}
        thousandSeparator={true}
        renderText={(value) => <div style={{color: color ? color : '#343434'}}>{value}</div>}
      />
    </>
  );
};

export default NumberSeparatorComponent;
