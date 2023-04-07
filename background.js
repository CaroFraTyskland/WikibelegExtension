chrome.action.onClicked.addListener((tab) => {
  const date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth()+1).padStart(2,"0");
  let day= String(date.getDate()).padStart(2, '0');
  let dateString =  `${year}-${month}-${day}`;

  let url = tab.url;

  if (url.includes('kirkesok.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
         title = document.getElementsByClassName("page-title")[0].innerText;

         ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=Kirkesøk |sprache=no}}</ref>";    
         alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('snl.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
         title = document.getElementsByClassName("page-title__heading-text")[0].innerText;

         let authors = document.getElementsByClassName("article-info__author-list");
         let author = authors.length > 0 ? authors[0].innerText : "";
  
         ref = "<ref>{{Internetquelle |autor=" + author +" |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=Store norske leksikon |sprache=no}}</ref>";    
         alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('nve.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
         title = document.getElementsByTagName("h2")[0].innerText;

         ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=NVE  |sprache=no}}</ref>";    
         alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('banenor.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
         title = document.getElementsByTagName("h1")[1].innerText;

         ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=Bane Nor |sprache=no}}</ref>";    
         alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('naturbase.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
         title = document.getElementById("overskriftDiv").innerText;
         
         ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + "  |werk=naturbase.no |hrsg=Miljødirektoratet |sprache=no}}</ref>";    
         alert(ref); 
      },
      args: [url, dateString]
    });
  }

});