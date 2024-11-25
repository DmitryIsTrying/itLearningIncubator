class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    const regex = /^\d+_(.+?)\.[^.]+$/
    const match = dirtyFileName.match(regex)
    return match ? match[1] : null
  }
}
console.log(FileNameExtractor.extractFileName('1231231223123131_myFile.tar.gz2'))
