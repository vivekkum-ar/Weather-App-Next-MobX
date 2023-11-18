"use client"

import { mainStore } from '@/components/mst/mainStore';
import { observer } from 'mobx-react';
import Link from 'next/link';
import React from 'react'

interface PageProps {
  // Add your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
    const tassStore = mainStore;
  return (
    <div className='mt-16'>Page
          <p>Count is {tassStore.count}</p>
          <Link href="/">Hello</Link>
    </div>
    
  )
}

export default observer(Page);