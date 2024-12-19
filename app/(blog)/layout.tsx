"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // 添加这行
import { Github, Menu, MoonStar, SunMoon } from 'lucide-react';
import { Button } from '@/components/ui/button';



export default function BlogLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // 添加这行
    const [isDark, setIsDark] = useState(true)    

    const changeTheme = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className="blog">
            <header className="header container-wrap h-16 flex items-center border-transparent sticky top-0 z-50 left-0 right-0 bg-radial-transparent bg-4x4 bg-repeat dark:bg-dark-radial-transparent">
                <div className="flex container mx-auto items-center justify-between	 px-4 relative z-10 bg-transparent">
                    <div className="left-bar flex items-center space-between relative z-10">
                        <Link href="/" className="hidden sm:block mr-4 dark:bg-white rounded-md">
                            <Image src="https://pub-bf77108a148e4ef38fbdf999770fe530.r2.dev/wuazhu-light.png" width={100} height={100} alt="logo" className="w-8 h-8" />
                        </Link>
                        <Button className="sm:hidden flex mr-4" variant="outline" size="icon">
                            <Menu />
                        </Button>
                        <div className=" items-center space-between space-x-2 sm:flex hidden">
                            <Link href="/" className={`p-2 px-3 text-base hover:bg-zinc-200 rounded-md dark:hover:bg-zinc-800 ${pathname === '/' ? 'bg-zinc-200 dark:bg-zinc-800' : ''}`}>Home</Link>
                            <Link href="/posts" className={`p-2 px-3 hover:bg-zinc-200 rounded-md dark:hover:bg-zinc-800 ${pathname === '/posts' ? 'bg-zinc-200 dark:bg-zinc-800' : ''}`}>Posts</Link>
                            <Link href="/about" className={`p-2 px-3 hover:bg-zinc-200 rounded-md dark:hover:bg-zinc-800 ${pathname === '/about' ? 'bg-zinc-200 dark:bg-zinc-800' : ''}`}>About</Link>
                        </div>
                    </div>
                    {/* <Link href="/" className="block sm:hidden border border-solid border-white dark:border-zinc-200 dark:bg-white rounded-full ">
                        <Image src="https://pub-bf77108a148e4ef38fbdf999770fe530.r2.dev/wuazhu-light.png" width={100} height={100} alt="logo" className="w-8 h-8" />
                    </Link> */}
                    <div className="right-bar ">
                    <Button className="mr-2" variant="ghost" size="icon">
                        <Github />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={changeTheme}>
                        {isDark ? <SunMoon /> : <MoonStar />}
                    </Button>
                    </div>
                </div>
            </header>
            <main className="main container-wrap h-[1300]">
                {children}
            </main>
            <footer className="footer container-wrap"></footer>
        </div>
    )
}
