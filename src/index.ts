import { join } from 'path'

import FileUtils from './utilities/file'
import Timer from './utilities/timer'

type ProblemAnswers = number | string

export interface Problem {
    partOne: (input: string) => ProblemAnswers
    partTwo: (input: string) => ProblemAnswers
}

const ARGS_DAY_NUMBER_INDEX = 2
const dayNumber = process.argv[ARGS_DAY_NUMBER_INDEX] || 1
const scriptPath = join(__dirname, `day-${dayNumber}`, "index.ts")
const inputPath = join(__dirname, `day-${dayNumber}`, "input.txt")

if (!FileUtils.doesFileExist(scriptPath)) {
    console.error(`Can't find ${scriptPath}. Are you sure it's there?`)
    process.exit()
}

(async () => {
    const problemModule = require(scriptPath)
    console.info(`Running Day ${dayNumber} solution...\n`)
    
    const input = FileUtils.getFileContent(inputPath)

    const runPart = async (partNumber: 1 | 2, partFunction: (input: string) => ProblemAnswers) => {
        const timer = new Timer()
        const logPrefix = `Day ${dayNumber} - Part ${partNumber}`
        try {
            
            const answer = await partFunction(input)
            timer.log(`${logPrefix} Answer: ${answer}`)
            timer.log(`${logPrefix} Duration: /s\n`)
        } catch (error) {
            timer.log(`${logPrefix} Errored after /s seconds.\n`)
            console.error(error)
        }
    }

    await runPart(1, problemModule.partOne)
    await runPart(2, problemModule.partTwo)
})()