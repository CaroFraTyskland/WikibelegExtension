chrome.action.onClicked.addListener((tab) => {
  const date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth()+1).padStart(2,"0");
  let day= String(date.getDate()).padStart(2, '0');
  let dateString =  `${year}-${month}-${day}`;

  let url = decodeURI(tab.url);

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
  } else if (url.includes('regjeringen.no/en/the-government/previous-governments/regjeringer-siden-1814/historisk-regjeringspolitiker')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.getElementsByClassName('article-header')[0].innerText

        ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=regjeringen.no |sprache=en}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('regjeringen.no/no/om-regjeringa/tidligere-regjeringer-og-historie/sok-i-regjeringer-siden-1814/regjeringspolitiker')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.getElementsByClassName('article-header')[0].innerText

        ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=regjeringen.no |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('https://spellemann.no/arkiv')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        ref = "<ref>{{Internetquelle |url=" + url + " |titel=Arkiv |abruf=" + dateString + " |werk=spellemann.no |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  }else if (url.includes('p3.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.getElementsByClassName("entry-title")[0].innerText
        authors = document.getElementsByClassName("fn author__name")
        
        day = document.getElementsByClassName("article-dateline__full")[0].innerText.substring(0,2)
        month = document.getElementsByClassName("article-dateline__full")[0].innerText.substring(3,5)
        year = "20" + document.getElementsByClassName("article-dateline__full")[0].innerText.substring(6,8)
        date = year + "-" + month + "-" + day

        text = ""
        for (let index = 0; index < authors.length; index++) {
          text = text + ", " + authors[index].innerText
        }

        authorText = text.substring(2)

        ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |autor=" + authorText + " |werk=p3.no |datum=" + date + " |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('nrk.no/nyheter')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.getElementsByClassName("bulletin-title")[0].innerText.replaceAll("­", "")
        
        date = document.querySelector('meta[name="dc.date.issued"]').content

        ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=NRK |datum=" + date + " |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('nrk.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.getElementsByClassName("title title-large article-title")[0].innerText.replaceAll("­", "")
        authors = document.getElementsByClassName("author widget brief")
        
        date = document.querySelector('meta[name="dc.date.issued"]').content

        text = ""
        for (let index = 0; index < authors.length; index++) {

          role = authors[index].getElementsByClassName("author__role")[0].innerText

          if (role == "Journalist" || role == "Kommunikasjonsansvarlig") {
            text = text + ", " + authors[index].getElementsByClassName("author__name")[0].innerText
          }
        }

        authorText = text.substring(2)

        ref = "<ref>{{Internetquelle |autor=" + authorText + " |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=NRK |datum=" + date + " |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('oslobyleksikon.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.getElementById("firstHeading").innerText

        ref = "<ref>{{Internetquelle |url=" + url + " |titel=" + title + " |abruf=" + dateString + " |werk=Oslo byleksikon |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  } else if (url.includes('norskstadnamnleksikon.no')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url, dateString) => {
        title = document.getElementById("SheetContentPlaceHolder_Soeg1_RepeaterSearch_TextBoxText_0").value

        ref = "<ref>{{Internetquelle |url= |titel=" + title + " |abruf=" + dateString + " |werk=Norsk stadnamnleksikon |sprache=no}}</ref>";    
        alert(ref); 
      },
      args: [url, dateString]
    });
  }

});