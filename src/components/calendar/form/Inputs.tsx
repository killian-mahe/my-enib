import React , { useRef } from 'react';

interface PasswordInputProps {
    label: string;
    error: boolean;
    errorMessage: string | undefined;
}

function PasswordInput(props: PasswordInputProps) {

    if (!props.errorMessage) {
        props.errorMessage = "Mot de passe incorrect"
    }

    const input = useRef() as React.MutableRefObject<HTMLInputElement>;

    if (props.error) input.current.classList.add('border-red-500');

    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                {props.label}
            </label>
            <input ref={input} className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Mot de passe"/>
            <p className="text-red-500 text-xs italic">{props.error ? props.errorMessage : ""}</p>
        </div>
    );
}