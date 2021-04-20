class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
// depth first algorithm implementation using iterative code
// const depththFirstPrint = (root)=>{
//     const stack = [root];
//     while(stack.length > 0){
//        const curr = stack.pop();
//        console.log(curr.val);

//        if(curr.right !== null){
//            stack.push(curr.right);
//        }
//        if(curr.left !== null){
//         stack.push(curr.left);
//     }
//     }
// }

// depth first algorithm implementation using recursive code
const depththFirstPrint = (root) => {
    if (root === null) return;

    depththFirstPrint(root.left);
    console.log(root.val);
    depththFirstPrint(root.right);


}
// depththFirstPrint(a);
//sum using iterative solution
// const sumTree = (root) => {
//     const stack = [root];
//     let sum = 0;
//     while (stack.length > 0) {
//         const curr = stack.pop();
      
//         sum += curr.val;
//         if (curr.right !== null) {
//             stack.push(curr.right);
//         }
//         if (curr.left !== null) {
//             stack.push(curr.left);
//         }
//     }
//     return sum;
// }
sumTree = (root)=>{
    if(root === null) return 0;
    return sumTree(root.left)+root.val+sumTree(root.right);
}
console.log(sumTree(a));
