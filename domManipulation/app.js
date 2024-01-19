//DOM Manipulation
//Styleing element
// const title = document.querySelector('#main-heading')

// title.style.color='red'

// const listItems = document.querySelectorAll('.list-items')

// for(i=0;i<listItems.length;i++){
//     listItems[i].style.fontSize="1em";
// }
// console.log(listItems)

//creating elements;

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //Adding elements

// ul.append(li)
// //Modifying the text
// // const firstListItem = document.querySelector('.list-items')
// // console.log(firstListItem.innerText)
// // console.log(firstListItem.textContent)
// // console.log(firstListItem.innerHTML)

// li.innerText='x-men'

// // //modifying attributes & classes
// // li.setAttribute('id','main-heading');
// // li.removeAttribute('id')
// // const title = document.querySelector('#main-heading')

// // console.log(title.getAttribute('id'))

// li.classList.add('list-items')
// //li.classList.remove('list-items');
// console.log(li.classList.contains('list-items'))
// //Remove elements 
// li.remove();

//getElementById()

// const title=document.getElementById('main-heading');

// console.log(title);

// //getelementbyclassname

// const listItem = document.getElementsByClassName('list-items')

// console.log(listItem)

//getelementby tag name
// const listItem = document.getElementsByTagName('li')

// console.log(listItem)

//querySelector()
// const container= document.querySelector('div')
// console.log(container)
//querySelectAll
// const container= document.querySelectorAll('div')
// console.log(container)









// Traverse the DOM



//Parent Node Tranversal
let ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)
// const html = document.documentElement;
// console.log(html.parentNode)

//Child Node Tranversal
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)
// //console.log(ul.childElementCount)
//console.log(ul.childNodes[1].style.backgroundColor="red")
// console.log(ul.children[1].style.backgroundColor="red");

//console.log(ul.lastElementChild)

//Sibling Node Traversal
const div = document.querySelector('div')
// console.log(div.childNodes)
// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

// console.log(ul.previousElementSibling)
// console.group(ul.nextElementSibling)



//Event Listener
//elemnt.addEventListener('click',function);

// const buttonTwo = document.querySelector('.btn-2')

// function alertBtn(){
//     alert('I also love javascript');
// }

// buttonTwo.addEventListener('click',alertBtn);

// //Mouseover
// const newBackgroundColor = document.querySelector('.box-3')

// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor='red';
// }

// newBackgroundColor.addEventListener('mouseover',changeBgColor)
// //newBackgroundColor.addEventListener('mouseout',outColor)


//Reveal Event
// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');
// console.log(hiddenContent.classList)
// function revealContent(){
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn');
//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }
// revealBtn.addEventListener('click',revealContent);

//Evemt phases 
//Event Propagation
// Three Phases of event listener//
// 1. Event capturing
// 2. Target
// 3. Event Bubbling

//Event Delegatin

// document.querySelector('#football').addEventListener('click',function(e){
//     console.log('football clicked');

//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })

document.querySelector('#sports').addEventListener('click',function(e){
    console.log(e.target.getAttribute('id')+ 'is clicked')

    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})