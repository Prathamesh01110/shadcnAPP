'use client';

import Header from "@/component/header";
import { Button } from "@/components/ui/button";
import { useState } from 'react'

export default function Student(){
    const [count,setCount]=useState("this is a string");
    function submit(){
        setCount("i changed the string");
        console.log("button pressed");
    }
    return(
        <>
        <Header/>
         {count}
        <h1 style={{margin:"5px"}}>Student1</h1>
        <h1 className="m-5">Student2</h1>
        <Button onClick={submit}>click me</Button>
        </>
    )
}