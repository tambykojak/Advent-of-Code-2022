import * as fs from 'fs';

export default class FileUtils {
    static getFileContent(path: string) {
        return fs.readFileSync(path, "utf8")
    }

    static doesFileExist(path: string) {
        return fs.existsSync(path)
    }
}