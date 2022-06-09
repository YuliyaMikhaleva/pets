/**
 * Class for mutating files
 */
export default class FileListMutator {
    /**
     * Concatenates arrays of files
     *
     * @param {FileList | File[]} firstList
     * @param {FileList | File[]} secondList
     * @return {FileList}
     */
    static mergeFileLists(firstList, secondList) {
        const files = [...firstList, ...secondList]
            .filter((element, index, array) => index === array.findIndex((t) => (
                t.name === element.name && t.size === element.size
            )));
        return this.getFileList(files);
    }

    /**
     * Removes a file from list of files by index
     *
     * @param {FileList | File[]} fileList
     * @param index
     * @return {FileList}
     */
    static deleteFileByIndex(fileList, index) {
        const newFileList = [...fileList];
        newFileList.splice(index, 1);
        return this.getFileList(newFileList);
    }

    /**
     * Converts array of files to FileList
     *
     * @param {FileList | File[]} files
     * @return {FileList}
     */
    static getFileList(files) {
        // попробуй сократить до одной строчки
        const fileList = [...files].reduce((acc, file) => {
            acc.items.add(file);
            return acc;
        }, new DataTransfer()).files;
        return fileList;
    }
}
