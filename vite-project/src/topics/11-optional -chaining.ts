export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Laura',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Juanita'],
}

const returnChildren = (passenger: Passenger) => {

    //const howManyChildren = passenger.children.length || 0;

    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);

    return howManyChildren;

}

returnChildren(passenger2,);