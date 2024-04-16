import React, { Children, FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BBSCardList: FC<Props> = ({ children }) => {
  return <main className='grid lg:grid-cols-3 p-4 gap-4'>{children}</main>;
};

export default BBSCardList;
