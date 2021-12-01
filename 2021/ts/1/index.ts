import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf-8');

const splitFile = input.split('\n').map(a => parseInt(a));

export function part1() {
    let count = 0;
    let lastEntry: any;

    splitFile.forEach(entry => {
        if(lastEntry === undefined) {
            lastEntry = entry;
            return;
        }

        if(lastEntry < entry) {
            count++;
        }

        lastEntry = entry;
    })
    return count;
}

console.warn('part 1 output: ', part1());

// Part 2
export function part2(inputData: number[]) {
    let count = 0;
    let lastSum: number;
    inputData.forEach((entry, i) => {
        const slidingWindow = inputData.slice(Math.max(i - 2, 0), i + 1);

        if(slidingWindow.length !== 3) {
            return;
        }
        // console.warn('sliding window', slidingWindow);
        const slidingWindowSum = slidingWindow.reduce((v, a) => v + a)
        // console.warn('sliding windowSum', slidingWindowSum);

        if(lastSum === undefined) {
            lastSum = slidingWindowSum;
            return;
        }

        if (lastSum < slidingWindowSum) {
            count++;
        }

        lastSum = slidingWindowSum;
    });
    return count;
}

console.warn("part 2 test: ", part2([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]))

console.warn('part 2 output: ', part2(splitFile));