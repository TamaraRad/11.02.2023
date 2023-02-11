const body = document.body;
const link = document.querySelector('.link');
const parent = document.querySelector('#parent');
console.log(body.childNodes);

//
//for (let node of body.childNodes) {
//    if (node.nodeType === 1) {
//    console.log(node, "узел элемент"); 
//} else if (node.nodeType === 3) {
//    console.log(node, "текстовый узел")
//}

//} 
// for (let node )

//console.log (body.children);

//for (let node of body.children) {
 //   console.log(node);
//}

//console.log(body.firstChild);

console.log(body.lastChildren[1]);

let child = body.Children[1];


console.log(child.parentNode);

console.log(link.closest('.class2'));

console.log(parent.contains(link));

parent.append
