'use client';

import Header from "@/component/header";
import { Button } from "@/components/ui/button";

export default function Student(){
    function submit(){
        console.log("button pressed");
    }
    return(
        <>
        <Header/>
        <h1 style={{margin:"5px"}}>Student1</h1>
        <h1 className="m-5">Student2</h1>
        <Button onClick={submit}>click me</Button>
        </>
    )
}