let mainInsects = document.querySelector("main-area")
//let insectTitleH2 = document.querySelector("h2")
//let insectInfoCard = document.querySelector("div.card-content")
let commentsContainer = document.getElementById('commentsContainer')
let commentForm = document.getElementById('comment-form')

let insect = []

//Get Images and titles
fetch("http://localhost:3000/Insects") 
    .then(res => res.json())
    .then((InsectArr) => {      
    InsectArr.forEach((insectObj, index, array) => {
      
      insect = insectObj
    //console.log(insect)
   renderMainInsects(insect)
  })  
})    
function renderMainInsects(insect) {
let mainInsectsDiv = document.getElementsByClassName("main-area")[0]

let insectTitleH2 = document.createElement("h2")
    insectTitleH2.innerText = insect.title

let insectImg = document.createElement("img")
    insectImg.src = insect.image
    //insectImg.className = "insect-avatar"
let insectSymbolH3 = document.createElement("h3")
      insectSymbolH3.innerText = "insect.symbol"
  
let insectInfoP = document.createElement("p")
      insectInfoP.innerText = "insect.spirit"

let insectLinkBtn = document.createElement("button")
      insectLinkBtn.className = "link"
      insectLinkBtn.innerText = "insect.link"

let readButton = document.createElement("button")
      readButton.innerText = "read"
      readButton.classList.add("read-btn")

mainInsectsDiv.append(insectTitleH2, insectImg, insectSymbolH3, insectLinkBtn, readButton)
mainInsectsDiv.appendChild(insectInfoP)


//renderInsectCards - get - insects-details - on click of Img

// insectImg.addEventListener("click", (evt) => {
  
// fetch("http://localhost:3000/Insects") 

//   .then(res => res.json())
//   .then((insectInfoP) => {      
//     mainInsectsDiv.append(insectInfoP)
//   })
// })
}
// })
//   function renderinsectInfoCard(insect) {
  //let insectInfoCard = document.createElement("div")
     // insectInfoCard.className = "card-content"

  

  //insectInfoCard.append(insectSymbolH3, insectInfoP, insectLinkBtn, readButton)
  //mainInsectsDiv.append(insectInfoCard) 
      //renderinsectInfoCard(insect)
      //insectInfoCard.append(InsectArr)

     // method: "PATCH", // -get?
     // headers: {
    //"Content-type": "application/json"
      //},
     // body: JSON.stringify({
      //symbol: insect.symbol,
      //spirit: insect.spirit,
      //link: insect.link
     
    //})
//}       
   
   

    //renderInsectInfoCard(insect)
  //function renderInsectInfoCard(insect) {
  //let infoCardDiv = document.createElement("div")
      //infoCardDiv.className = "insect-detail"

      // infoCardDiv.innerHTML =`
      // <h3 class = "insect_symbol">${insect.symbol}</h3>
      // <div class="insect-detail">
      //   <p class ="insect symbolism card-text">
      //       ${insect.spirit}
      //   </p>
      //   <p class ="insect symbolism link">
      //       ${insect.link}
      //   </p>
      //   </div>
      //   <button class="button">* Read *</button>
      // `
      
  // let insectSymbolH3 = document.createElement("h3")
  //   insectSymbolP.innerText = "insect.symbol"
  
  // let insectInfoP = document.createElement("p")
  //   insectInfoP.innerText = "insect.spirit"

  // let insectLinkBtn = document.createElement("button")
  //   insectLinkBtn.className = "link"
  //   insectLinkBtn.innerText = "insect.link"

  // let readButton = document.createElement("button")
  //   readButton.innerText = "read"
  //   readButton.classList.add("read-btn")
    
  
  // CONSTRUCT THE CARD
  //mainInsectsDiv.appendChild(insectSymbolH3, insectInfoP, readButton, insectLinkBtn)
  // APPEND TO THE DOM
  //insectInfoCard.append(infoCardDiv)
  
//)

//}




//COMMENT FORM



commentForm.addEventListener("submit", (e) => {
  e.preventDefault()
     //let userInputField = event.target.querySelector('#new-comment')
    let newComment = e.target.querySelector('#new-comment')
    let commentContent = newComment.value
    //let newComment = newComment.name.value
    let comment = document.createElement('p')
      comment.innerText = commentContent
     comment.innerText = newComment
     commentsContainer.appendChild(newComment)

     
  })




// updateCommentForm.addEventListener("submit", (e) => {
//   e.preventDefault()
//   let comment = commentForm.content.value
//   let newComment = updateCommentForm.content.value



//         .then(res => res.json())
//         .then((newComment) => {
//             // Updates the DOM
//             comment.innerText = newComment.insectId
//             // Updates the OBJ in memory
//             comment.content = newComment.content
//         })
// })
//    updateCommentForm.dataset.id = comment.id
//     newCommentForm.dataset.id = comment.id

// commentForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let newComment = commentForm.name.value

//     let comment = document.getElementById("#comment-form")
//         comment.innerText = newComment
//     commentUl.append(commentLi)
