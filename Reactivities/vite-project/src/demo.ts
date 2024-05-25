interface Duck{
    name: string;
    numLeg: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: "huey",
    numLeg: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2: Duck = {
    name: "duey",
    numLeg: 2,
    makeSound: (sound: string) => console.log('quack')
}

duck1.makeSound("quack");
duck2.makeSound('sound');
duck1.name = '42'

export const duck = [duck1, duck2]
