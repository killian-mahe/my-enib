import React, { FunctionComponent, ReactChild, ReactChildren } from 'react';

interface SettingsRowProps {
    label: string;
    children?: ReactChild | ReactChildren;
    onClick?(): void;
}

const SettingsRow : FunctionComponent<SettingsRowProps> = ({label, children, onClick}) => {
    return (
        <li className="flex justify-between py-3 font-sans relative" onClick={onClick}>
            <span className="font-medium text-base">{label}</span>
            {children}
        </li>
    );
}

export default React.memo(SettingsRow);