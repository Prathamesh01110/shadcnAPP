'use client';

import { Button } from '@/components/ui/button'
import { useState } from 'react';

function Count() {
    const [age,setAge]=useState(42)
    function countUpdate(){
       setAge(age+1)
    }
  return (
    <>
    {age}
    <br />
    <Button onClick={countUpdate}>click me</Button>
    </>
  )
}

export default Count