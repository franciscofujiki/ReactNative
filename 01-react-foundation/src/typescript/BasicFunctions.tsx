export const BasicFunctions = () => {

    const addTwoNumber = (a:number, b:number) => {
        return a+b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar es: { addTwoNumber(2, 8) } </span>
        </>
    )
}