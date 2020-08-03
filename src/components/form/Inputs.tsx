import React , { useRef } from 'react';

interface InputProps {
    label: string;
    errorMessage? : string | boolean;
    className?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>) : void;
}

interface PasswordInputProps extends InputProps {}
interface EmailInputProps extends InputProps {}

export function PasswordInput(props: PasswordInputProps) {

    const input = useRef() as React.MutableRefObject<HTMLInputElement>;

    if (props.errorMessage) input.current?.classList.add('border-red-500');
    else input.current?.classList.remove('border-red-500');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) props.onChange(e);
    }

    return (
        <div className={props.className}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                {props.label}
            </label>
            <input ref={input} onChange={handleOnChange} className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Mot de passe"/>
            <p className="text-red-500 text-xs italic">{props.errorMessage}</p>
        </div>
    );
}

export function EmailInput(props: EmailInputProps) {

    const input = useRef() as React.MutableRefObject<HTMLInputElement>;

    if (props.errorMessage) input.current?.classList.add('border-red-500');
    else input.current?.classList.remove('border-red-500');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) props.onChange(e);
    }

    return (
        <div className={props.className}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                {props.label}
            </label>
            <input ref={input} className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="E-mail" onChange={handleOnChange}/>
        </div>
    );
}