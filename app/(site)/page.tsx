'use client';
import { Button, Htag, Paragraph, Tag, Rating } from '@/components';
import { useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Button appearance='primary' arrow='right'>
        Primary
      </Button>
      <Button appearance='ghost' arrow='right'>
        Ghost
      </Button>
      <Paragraph size='sm'>Hello world</Paragraph>
      <Paragraph size='md'>Hello world</Paragraph>
      <Paragraph size='lg'>Hello world</Paragraph>
      <Tag size='sm' href='https://google.com'>
        Google
      </Tag>
      <Tag size='md' href='https://google.com'>
        Google
      </Tag>
      <Tag color='red' href='https://google.com'>
        Google
      </Tag>
      <Tag color='ghost' href='https://google.com'>
        Google
      </Tag>
      <Tag color='green' href='https://google.com'>
        Google
      </Tag>
      <Tag color='primary' href='https://google.com'>
        Google
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
