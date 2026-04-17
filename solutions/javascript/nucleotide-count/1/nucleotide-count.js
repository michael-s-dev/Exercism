

export function countNucleotides(strand) {
  let nucleotides = { 'A' : 0, 'C' : 0, 'G' : 0, 'T' : 0}
  for (let nucleotide of strand){
    if (!(nucleotide in nucleotides)) throw new Error('Invalid nucleotide in strand')
    nucleotides[nucleotide]++
  }
  return Object.values(nucleotides).join(' ')
}
