import React from "react";
import UseLocalStorage from '../hooks/useLocalStorage'

const CustomHooksPage = (props) => {
    const [name, setName] = UseLocalStorage('name', '');
    return (
        <div className="text-center">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default CustomHooksPage;
