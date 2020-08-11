import React, { FunctionComponent, ReactChild, ReactChildren } from 'react';

interface CategoryProps {
    name: string;
    children?: ReactChild | ReactChildren;
}

const Category : FunctionComponent<CategoryProps> = ({name, children}) => {

    return (
        <div className="p-5">
            <h2 className="font-sans font-bold text-2xl mb-3">{name}</h2>
            {children}
        </div>
    );
}

export default React.memo(Category);