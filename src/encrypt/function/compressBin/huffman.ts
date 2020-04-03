const binTreeSort = (
  a: [string, number],
  b: [string, number],
): number => {
  return a[1] - b[1];
};

const createBinTable = (data: string): any => {
  let binMap: Map<string, number> = new Map();
  let max: number = 1;
  data.match(/....../g).forEach((x: string) => {
    if (!binMap.has(x)) {
      binMap.set(x, 1);
    } else {
      let count: number = binMap.get(x);
      if (max < count + 1) max = count + 1;
      binMap.set(x, count + 1);
    }
  });
  //binMap.set('-', max + 1);
  let arr = Array.from(binMap).sort(binTreeSort);
  return arr;
};

const createHuffmanTree = (data: string) => {
  console.log('📊 Create Frequencies Table');
  let table: [string, number][] = createBinTable(data);
  console.log(table, '\n');

  let binTree: any = [...table];

  console.log('🌲 Creating Huffman Tree');
  while (binTree.length > 1) {
    const left = binTree.shift();
    const right = binTree.shift();
    const newNode = [null, left[1] + right[1], left, right];
    binTree.unshift(newNode);
    binTree.sort(binTreeSort);
    console.log(
      'new node created -> left freq:',
      left[1],
      'right freq:',
      right[1],
    );
  }

  console.log('Tree Created!\n', binTree, '\n');
  return binTree;
};

const traverseHuffmanTree = (tree): any[] => {
  const left = tree[0];
  const right = tree[1];
  const table = [];

  console.log('💼 Traverse Huffman Tree');

  const traverseNode = (node, string: string) => {
    if (typeof node === 'undefined') return;
    if (node.length > 2) {
      const left = node[2];
      const right = node[3];
      traverseNode(left, string + '0');
      traverseNode(right, string + '1');
    } else {
      console.log('node:', node[0], 'key:', string);
      return table.push([node[0], string]);
    }
  };

  traverseNode(left, '');
  traverseNode(right, '1');
  console.log('Table Created!\n', table, '\n');

  return table;
};

const createHuffmanTable = (data: string): any[] => {
  const huffmanTree = createHuffmanTree(data);
  const huffmanTable = traverseHuffmanTree(huffmanTree);
  return huffmanTable;
};

/*
  '010010', 'H'
  '000010', 'G'
  '100110', 'F'
  '010110', 'E'
  '110000', 'D'
  '001010', 'C'
  '011110', 'B' 
  '111100', 'A'
*/

export { createBinTable, createHuffmanTable };
