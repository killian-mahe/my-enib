import React from 'react';

interface DividerProps {
    label: string;
    className?: string;
}

export function Divider (props: DividerProps) {
    return <div className={`flex items-center px-3 ${props.className}`}><hr className="flex-1" /><div className="w-auto px-2 text-gray-700 font-sans font-medium">{props.label}</div><hr className="flex-1"/></div>
}