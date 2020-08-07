import React from 'react';

interface HourRowProps {
    label: string | number;
    className?: string;
}

function HourRow({label, className} : HourRowProps) {

    return (
        <div className={`relative flex justify-center items-center ${className}`}>
            <div className="items-center headrow flex w-full"><hr className="flex-1"/><div className="font-sans text-xs px-1 flex-1 text-center">{label}</div><hr className="flex-1"/></div>
        </div>
    );
}

export default React.memo(HourRow);