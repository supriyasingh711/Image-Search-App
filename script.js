// const accessKey="lZRVjExEaiwScIUqQB3qFK8jZBPhZslIxLy3yQq_MlM"
// const formEl=document.querySelector("form")
// const inputEl=document.getElementById("search-input")
// const searchResults=document.querySelector(".search-results")
// const showMoreButton=document.getElementById("show-more-button")

// let inputData=""
// let page=1;
// async function searchImages(){
//     inputData=inputEl.value;
//     const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
//     const response=await fetch(url);
//     const data=await response.json();
//     const results=data.results;
//     if (page===1){
//       searchResults.innerHTML="";
//     }
//     results.map((result)=>{
//       const imageWrapper=document.createElement("div");
//       imageWrapper.classList.add("search-results");
//       const image=document.createElement("img");
//       image.src=result.urls.small;
//       image.alt=result.alt_description;
//       const imageLink=document.createElement("a");
//       imageLink.href=result.links.html;
//       imageLink.target="_blank";
//       imageLink.textContent=result.alt_description;
//       imageWrapper.appendChild(image);
//       imageWrapper.appendChild(imageLink);
//      searchResults.appendChild(imageWrapper);
//     })
//     page++
//     if (page>1){
//       showMoreButton.style.display="block";
//     }
// formEl.addEventListener("submit",(event)=>{
//    event.preventDefault();
//    page=1;
//    searchImages();
// })
// showMoreButton.addEventListener("click",()=>{
//   searchImages();
// })
//  }
//.........second code trial......
const searchForm=document.getElementById("search-form");
const searchInput=document.getElementById("search-input");
const searchResult=document.getElementById("search-result");
const showMoreButton=document.getElementById("show-more-button");
let inputData="";
let page=1;
const accessKey="lZRVjExEaiwScIUqQB3qFK8jZBPhZslIxLy3yQq_MlM";

async function searchImages(){
inputData=searchInput.value;
const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12`
const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    const results=data.results;
    if (page===1){
      searchResult.innerHTML="";
    }
    results.map((r)=>{
      const image=document.createElement("img");
      image.src=r.urls.small;
      const imageLink=document.createElement("a");
      imageLink.href=r.links.html;
      imageLink.target="_blank";
      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    })
    showMoreButton.style.display="block";


}
searchForm.addEventListener("submit",(e)=>{
  e.preventDefault();
   page=1;
   searchImages();
})
showMoreButton.addEventListener("click",()=>{
page++;
searchImages();
})


