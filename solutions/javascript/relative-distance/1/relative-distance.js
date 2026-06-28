export const degreesOfSeparation = (familyTree, me, target) => {

  let quee = [ [me, 0] ]
  let visited = [ me ] 
  const familyGraph = buildFamilyGraph(familyTree)

  while( quee.length ){
    let [lastPerson, distance] = quee.shift();
    if ( lastPerson === target) return distance
    visited.push( lastPerson )
    const neighbors = familyGraph[lastPerson] || [];
    neighbors.forEach( person => {
       if( !visited.includes( person )){
          quee.push([person, distance + 1])
       }
    })
  }

  return  -1
 
 function buildFamilyGraph(data) {
  const graph = {}
  const childToParents = {}
  function addConnection(personA, personB) {
    if (!graph[personA]) graph[personA] = []
    if (!graph[personA].includes(personB)) graph[personA].push(personB)
  }
   
  for (const parent in data) {
    const children = data[parent]
    
    for (const child of children) {
      addConnection(parent, child)
      addConnection(child, parent)
      
      for (const sibling of children) {
        if (child !== sibling) {
          addConnection(child, sibling)
        }
      }
    }
  }
  return graph;
}
};
