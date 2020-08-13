import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';

interface ColorBoxProps {
    color: string;
    onClick?(): void;
    onColorChanged?(color: string): void;
}

function ColorBox(props: ColorBoxProps) {

    const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
    const [color, setColor] = useState<string>(props.color);

    const handleOnClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    } 
    
    const handleOnClose = () => {
        setDisplayColorPicker(false);
    }

    const handleOnChange = (color: any, event: any) => {
        setColor(color.hex);
        props.onColorChanged!(color.hex);
    }

    return (
        <>
        <div className="h-6 w-6 rounded static" style={{'backgroundColor': color}} onClick={handleOnClick}/>
        { displayColorPicker ? <div className="absolute right-0 top-full z-10">
            <div className="fixed inset-0" onClick={handleOnClose}/>
            <TwitterPicker color={color} triangle="top-right" onChange={handleOnChange}/>
        </div> : null }
        </>
    );
}

export default React.memo(ColorBox);