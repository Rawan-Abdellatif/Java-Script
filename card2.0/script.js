// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUauBw7gh7xQZyETrBAd_QAvGmSTNkwAc",
    authDomain: "card-b892e.firebaseapp.com",
    projectId: "card-b892e",
    storageBucket: "card-b892e.firebasestorage.app",
    messagingSenderId: "74437484409",
    appId: "1:74437484409:web:0d7888c92b5d5d6b89d9a8",
    measurementId: "G-XWNXE3SQRG"
  };

  //initialize firebase 
firebase.initializeApp(firebaseConfig);
//initialize database
const db=firebase.database().ref("students");
db.get().then(snapshot => {
    console.log(snapshot.val());

  });
//



class User{
    constructor(level,imageURL,points,name,description,color){
        this.level = level;
        this.imageURL =  imageURL;   
        this.points = points; 
        this.name = name;
        this.description = description;
        this.color = color;
}
}

// let manoshree = new User(
//     10,
//     "https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png",
//     32145,
//     "Manoshree",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
//     "blue")

// let olesia = new User(
//     11,
//     "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg",
//     45688,
//     "olesia",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
//     "read")
    
// let ellie = new User(
//     25,
//     "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
//     3463,
//     "ellie",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
//     "purple")

// let cindy = new User(
//     20,
//     "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",
//     4215,
//     "Cindy",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
//     "yellow")

let users = [];
// users.push(manoshree);
// users.push(olesia);
// users.push(ellie);
// users.push(cindy);
console.log(users);


//add user card to DOM
// function addUserCardToDOM(user){
//     const cardContainer = document.getElementById("card-container");

//     cardContainer.innerHTML += `<div class="card">
//                 <!-- left hand side of the card -->
//                 <div class="left-info" style="--background-color: ${user.color}">
//                     <div>
//                         <!-- user level -->
//                         <p id="user-level">${user.level}</p>
//                     </div>
//                     <div>
//                         <!-- user image -->
//                         <img src=${user.imageURL}>
//                     </div>
//                     <div>
//                         <!-- user points -->
//                         <p id="user-points-${user.name}">${user.points} points</p> 
//                     </div>
//                     <div class="flex-wrap">
//                         <div>
//                             <button class = "plus-minus-buton" onclick = "decrementPoints('${user.name}')"> - </button>
//                         </div>
//                         <div>
//                             <button class = "plus-minus-buton" onclick = "incrementPoints('${user.name}')"> + </button>
//                         </div>                    
//                     </div>
//                 </div>
//                 <!-- right hand side of the card -->
//                 <div class="right-info">
//                     <header>
//                         <h1>${user.name}</h1>
//                     </header>
//                     <div>
//                         <p id="user-description">
//                         ${user.description}
//                         </p>
//                     </div>
//                     <div class="linkedin-link">
//                         <a href="https://www.linkedin.com/feed/">
//                             <i class="fa fa-linkedin-square"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>`
// }

// function renderUsersToDOM(users){
//     document.getElementById("card-container").innerHTML= "";

//     for(user of users){
//         addUserCardToDOM(user);
//     }
// }
// renderUsersToDOM(users)

// function incrementPoints(username){
//     //find the user in the array
//     const user = users.find((user)=> user.name === username);
//         console.log(user);
//         user.points +=1;

//         const pointslabel = document.getElementById(`user-points-${user.name}`);
//         pointslabel.textContent = `${user.points} points`
        
//     }

// function decrementPoints(username){
//     //find the user in the array
//     const user = users.find((user)=> user.name === username);
//         console.log(user);
//         user.points -=1;

//         const pointslabel = document.getElementById(`user-points-${user.name}`);
//         pointslabel.textContent = `${user.points} points`
//     }


//sort
// function sortUsers(){
//     let sortproperty =  document.getElementById("sortCard").value;
//     users.sort((a,b)=>(a[sortproperty] > b[sortproperty] ? 1:-1))
//     renderUsersToDOM(users)
// }