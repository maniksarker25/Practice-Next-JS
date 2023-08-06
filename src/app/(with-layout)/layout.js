import React from 'react';
import Link from "next/link";
const WithLayout = ({children}) => {
    return (
        <div>
            <nav className="flex gap-4">
          <Link href='/'>Home</Link> 
          <Link href='/about'>About</Link> 
          <Link href='/dashboard'>Dashboard</Link> 
        </nav>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;