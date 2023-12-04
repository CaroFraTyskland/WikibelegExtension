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
         title = document.getElementsByClassName("page-title")[0].innerText;

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
         title = document.getElementById('main-content').getElementsByTagName("h2")[0].innerText;

         ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=NVE |sprache=no}}</ref>";    
         alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('banenor.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
         title = document.getElementsByTagName("h1")[0].innerText;

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
  } else if (url.includes('stortinget.no/no/Representanter-og-komiteer/Representantene/Representant')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.title

        ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=Stortinget |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('kart.ssb.no')) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id },
      function: (url, dateString) => {
         ref = "<ref>{{Internetquelle |url=https://kart.ssb.no/ |titel=Kart fra Statistisk sentralbyrå |abruf= " + dateString + " |werk=ssb.no |hrsg=Statistisk sentralbyrå |sprache=no}}</ref>"

         alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url == "https://www.regjeringen.no/no/tema/kommuner-og-regioner/kommunestruktur/nye-kommune-og-fylkesnummer-fra-1.-januar-2024/id2924701/") {
      chrome.scripting.executeScript({
        target: {tabId: tab.id },
        function: (url, dateString) => {
          ref = "<ref>{{Internetquelle |url=https://www.regjeringen.no/no/tema/kommuner-og-regioner/kommunestruktur/nye-kommune-og-fylkesnummer-fra-1.-januar-2024/id2924701/ |titel=Nye fylkes- og kommunenummer fra 2024 |werk=regjeringen.no |datum=2022-08-23 |sprache=no |abruf="+ dateString +"}}</ref>"

          alert(ref); 
        },
        args: [url, dateString]
      });  
  }

});