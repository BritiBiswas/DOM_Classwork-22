// console.log(document);

// const blogtittle=document.getElementsByTagName('h3');
// console.log(blogtittle);
//  console.log(blogtittle.innertext);
 
// for(const tittle of blogtittle)
// {
//    tittle.innerText="We are awesome";
//    console.log(tittle);
//    tittle.style.color ="red";
// }
// const blogDetailes= document.getElementsByTagName('p');
// console.log(blogDetailes);
// for (const blog of blogDetailes) {
//     blog.style.background="yellow";
//     console.log(blog);
// }

//get access to id
// const kougoc=document.getElementById("Kougo");
// kougoc.style.border="4px solid black";
// console.log(kougoc);


//create blog
const article =document.createElement("article");
article.classList.add("blogMain");
const h3=document.createElement("h3");
h3.innerText="My awesome blog-5";

const p=document.createElement("p");
p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae omnis fuga voluptate quia eum laudantium suscipit quis excepturi amet natus.";



article.appendChild(h3);
article.appendChild(p);
const div=document.getElementById("article");
div.appendChild(article);
    


const blogMain=document.getElementsByClassName("blogMain");
for (const blog of blogMain) {
    blog.style.border="5px solid blue";//element name need to be use here in loop
    blog.style.padding="10px";
    blog.style.margin="10px";
    
}

