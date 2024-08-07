interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlived?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {

    const person: Person = {
        firstName: "Francisco",
        lastName: "Fujiki",
        age: 33,
        address: {
            country: 'Peru',
            houseNo: 123
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                { JSON.stringify(person, null, 1) }
            </pre>
        </>
    )
}