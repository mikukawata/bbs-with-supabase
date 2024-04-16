import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, asperiores corrupti voluptatem minima ducimus error nemo cum accusantium
        explicabo officia ipsam iste eos sapiente atque natus, qui cupiditate quibusdam recusandae.
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={'bbs-posts/1'}>Read more</Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
