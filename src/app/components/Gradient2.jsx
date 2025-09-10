'use client';

import { useTheme } from "next-themes";

export default function Gradient2() {
    const { resolvedTheme } = useTheme();
    
    // Don't render anything if in dark mode
    if (resolvedTheme === 'dark') {
        return null;
    }
    
    return (
        <>
      <div className="gradient_4" />
        </>
    );
}