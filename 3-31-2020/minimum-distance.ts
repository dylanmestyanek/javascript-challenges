function minimumDistances(a: number[]) {

    type CountValues = {
        [k: string]: {
            [count: string]: number;
            [placement: string]: number;
        }
    }

    const values: CountValues = {};

    for (let i = 0; i < a.length; i++) {
        if (values[a[i]]) {

        } 
    }
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))