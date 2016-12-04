let members=[]
let session = 0
let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1}
]

function authSearch () {
  let aName = document.getElementById('authorSearch').value

  let name = books.filter((x) => x.author.indexOf(aName) !== -1 ||   x.title.indexOf(aName) !== -1 ||  x.genre.indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}
// event listeners
document.getElementById('autSearch').addEventListener('click', authSearch)

function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

function signup() {
 
members.push({username:document.getElementById('name').value, email:document.getElementById('email').value,password:document.getElementById('psd').value});
 if (document.getElementById('name').value === '' )
      {
      alert("Please Fill All Required Fields");
      return false;
      }
      if(document.getElementById('email').value === '' )
        {
      alert("Please Fill All Required Fields");
      return false;
      }
      if (document.getElementById('psd').value === '' )
      {
      alert("Please Fill All Required Fields");
      return false;
      }

 alert("You have signed up successfully")
 document.getElementById('name').value = " " ;
 document.getElementById('email').value = " " ;
 document.getElementById('psd').value = " " ;

  }





function signin(){

document.getElementById("email1").style.display="none";
document.getElementById("psd1").style.display="none";
document.getElementById("username1").style.display="none";
document.getElementById("password1").style.display="none";
document.getElementById("email1").style.display="none";
document.getElementById("heading1").style.display="none";
document.getElementById("signin").style.display="none";


let aName=document.getElementById('email1').value
let pwd=document.getElementById('psd1').value
 if (document.getElementById('email1').value === '' )
      {
      alert("Please Fill All Required Field");
      return false;
      }
      if(document.getElementById('psd1').value === '' )
        {
      alert("Please Fill All Required Fields");
      return false;
      }
let name = members.filter((x) => x.email.indexOf(aName) !== -1 &&   x.password.indexOf(pwd) !== -1 )
  if (name.length > 0) {
    
    document.getElementById('email1').value = " ";
    document.getElementById('psd1').value = " ";
    document.getElementById("logout").style.display="block";
    document.getElementById("status").innerHTML=" Now  You Can See  ALL The Books in the Library"
    


  for(var i=0; i<=books.length;i++){

  let listItem = document.createElement('li')
  let textnode = document.createTextNode(books[i].author,books[i].title)
  listItem.appendChild(textnode)
  document.getElementById('allTheBooks').appendChild(listItem)




}
}

     
     else{
      alert("Wrong username/password")

      document.getElementById("email1").style.display="block";
document.getElementById("psd1").style.display="block";
document.getElementById("username1").style.display="block";
document.getElementById("password1").style.display="block";
document.getElementById("email1").style.display="block";
document.getElementById("heading1").style.display="block";
document.getElementById("signin").style.display="block";
     }
   }





function logout()
{
  let session = 0
  alert("You have succeccfully logged out.")

document.getElementById("status").style.display="none";
hideAllBooks('allTheBooks')

document.getElementById("logout").style.display="none";
document.getElementById("email1").style.display="block";
document.getElementById("psd1").style.display="block";
document.getElementById("username1").style.display="block";
document.getElementById("password1").style.display="block";
document.getElementById("email1").style.display="block";
document.getElementById("heading1").style.display="block";
document.getElementById("signin").style.display="block";

}


