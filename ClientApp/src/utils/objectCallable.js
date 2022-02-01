/**
 * It creates a function that has the same properties as the class it is called on.
 * @see {@link 'https://docs.python.org/3/reference/datamodel.html#object.__call__'}
 * @param cls - The class to be called.
 * @returns A function that is callable.
 */
export default function ObjectCallable(cls) {
    let func = () => func.__call__(this, arguments);

    for (let key in cls) func[key] = cls[key];

    return func;
}