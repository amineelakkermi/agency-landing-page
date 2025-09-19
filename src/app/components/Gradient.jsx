'use client';
import { useTheme } from "next-themes";

export default function Gradient() {
    const { resolvedTheme } = useTheme();
    
    // Don't render anything if in dark mode
    if (resolvedTheme === 'dark') {
        return null;
    }
    
    return (
        <>
            <div className="gradient_1 hidden md:flex" />
            <div className="gradient_2" />
        </>
    );
}