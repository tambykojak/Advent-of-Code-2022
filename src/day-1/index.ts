export const partOne = (input: string): number => {
    const calorieGroups = parseInputStringIntoCalorieGroups(input)
    const sums = sumCalorieGroups(calorieGroups)
    return Math.max(...sums)
}

export const partTwo = (input: string): number => {
    const calorieGroups = parseInputStringIntoCalorieGroups(input)
    const sums = sumCalorieGroups(calorieGroups)
    const topSums = getHighestNumbers(sums, 3)
    return topSums.reduce((a, b) => a + b)
}

export const parseInputStringIntoCalorieGroups = (input: string) => {
    const groupings = input.trim().split("\r\n\r\n")
    const groups: number[][] = []

    for (let i = 0; i < groupings.length; i ++) {
        let group = groupings[i].split("\r\n").map((n: string) => parseInt(n))
        groups.push(group)
    }

    return groups
}

export const sumCalorieGroups = (calorieGroups: number[][]) => {
    const sums = calorieGroups.map((grouping) => {
        return grouping.reduce((x, y) => x + y)
    })

    return sums
}

export const getHighestNumbers = (numbers: number[], amountOfHighestNumbers: number) => {
    if (numbers.length <= amountOfHighestNumbers) {
        return numbers
    }

    const highestNumbers: number[] = []

    for (let n of numbers) {
        if (highestNumbers.length < amountOfHighestNumbers) {
            highestNumbers.push(n)
            continue;
        }

        let smallestHighestNumber = highestNumbers[0];
        let smallestHighestNumberIndex = 0;

        for (let i = 1; i < highestNumbers.length; i ++) {
            if (smallestHighestNumber > highestNumbers[i]) {
                smallestHighestNumber = highestNumbers[i]
                smallestHighestNumberIndex = i
            }
        }

        if (n > highestNumbers[smallestHighestNumberIndex]) {
            highestNumbers[smallestHighestNumberIndex] = n
        }
    }

    return highestNumbers
}
