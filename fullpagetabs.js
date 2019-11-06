function openPage(pageName,elmnt,color){
    var i, tabcontent,tablink;
    tabcontent=document.getElementsByClassName("tabconent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display = " none";
    }
}
tablink=document.getElementsByClassName('tablink');
for(i=0;i<tablink;i++){
    tablink[i].style.backgroundColor="";
}
document.getElementsById(pageName).style.display="block";
elmnt.style.backgroundColor=color;

//get the element with id="defaultOpen" and click on it
document.getElementsById("defaultOpen").click();