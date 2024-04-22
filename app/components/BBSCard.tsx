import React, { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BBSData } from '../types/types';

interface Props {
  bbsData: BBSData;
}

const BBSCard: FC<Props> = ({ bbsData }) => {
  const { id, title, content, createdAd, username } = bbsData;
  console.log(typeof createdAd);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {username}: {}
        </CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={`bbs-posts/${id}`}>Read more</Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
