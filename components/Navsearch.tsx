import React from 'react';
import { Input } from './ui/input';

type Props = {}

export default function Navsearch({}: Props) {
  return (
    <div>
        <Input
            type="search"
            placeholder="Search..."
            className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}