export default interface ISingleCSVData {
  // occurance of antipattern for each endpoint
  // 1 = true, 0 = false
  [antipattern: string]: number[]
}
