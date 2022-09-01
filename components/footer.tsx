import React from 'react'
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="flex text-white justify-center text-xl py-3 items-center w-full mx-auto z-50">
            &lt;/&gt; with <Image className="w-8 mb-1" height="25" width="25" src="/love.png" alt="Love" />,<Image src="/next-js.svg" height="20" width="20" alt="Next" /> &nbsp;and &nbsp;<Image src="/typescript.svg" height="20" width="20" alt="TS" /> &nbsp; by &nbsp;<a className="underline" href="https://harshal09.vercel.app/" target="_blank" rel="noreferrer">Innovation Lab2022</a>
        </div>
    )
}
