import { useEffect, useState } from "react";

const getSaveValue = (key, initialValue) => {
    const saveValue = JSON.parse(localStorage.getItem(key));
    if (saveValue) return saveValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
};

const UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSaveValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue];
};

export default UseLocalStorage;
