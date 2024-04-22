import React, { FC } from 'react';
import BBSCard from '../../BBSCard';
import { BBSData } from '@/app/types/types';

interface Props {
  bbsAllData: BBSData[];
}

const BBSCardList: FC<Props> = ({ bbsAllData }) => {
  return (
    <div className='grid lg:grid-cols-3 p-4 gap-4'>
      {bbsAllData.map((bbsData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
};

export default BBSCardList;
