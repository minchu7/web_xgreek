var bookTxt = null;//3 dimensions array book, chapter, verse
var findTextBookVersion = null;//lang tag for bookTxt
var parseTxt = new DOMParser();
var needSpace;
var diffElmScrollTop=-1;
var orgFoundArr =  null;
var versesPerView = 50;

function resetFindView(){
	findTextBookVersion = null;
	resetFoundList();
	setFoundVerseNo(0);
}
function checkFindView( lang){
    if(lang!=="E" && isChinese( findTextBookVersion)){
    	if( diffElmScrollTop !== -1){
    		resetFindView();
		}
    }
}
function initFindText(){
	if( diffElmScrollTop !== -1){
		if( selLangTags.includes( findTextBookVersion))
			document.getElementById("foundList").parentElement.scrollTop = diffElmScrollTop;
		else{
			resetFindView();
		}
	}
	new Lang(bookLan, translArr);
	var VersionList = $('#versionCB')[0];
  	var bookNames;
  	ClearList(VersionList);
	document.getElementById('FindBackBT').onClick = function(event) {
  		// Reset the whole stack instead of popping 1 page
  		saveListScrollTop();
  		goBackMain();
  		//document.querySelector('ons-navigator').resetToPage('home.html');
	};
  	for( var i=0; i < selLangArray.length; i++){
  		if( !isGreek(i) || selLangTags[i]==='Strong'){
		    var NewOption = new Option( selLangArray[i], selLangTags[i], false,false);
		    n = VersionList.length;
		    VersionList.options[n] = NewOption;
			if( findTextBookVersion === null)
		    	findTextBookVersion = selLangTags[i];
		}
	}
	setSelByVal( 'versionCB', findTextBookVersion);
}
function resetFoundList(){
	diffElmScrollTop = -1;
	var list = document.getElementById("foundList");
	while( list.childElementCount > 1)
		list.removeChild( list.lastChild);
	return list;
}
function findTxtInBible(){
	var version = getSelVal('versionCB');
	var key = document.getElementById('searchText').value;
	if( key.length === 0){
		alert( langV.get('NeedText'));
		return;
	}
	if( version !== findTextBookVersion || bookTxt === null){
		makeBibleText( version, search);
	}else{
		search();
	}
	function makeStWSeq( idx, verse){
		var words = verse.split(' ');
		var pos = 0;
		//find the word seq
		var i;
		for( i=0; i < words.length; i++){
			if( pos === idx && words[i].length === key.length){
				return i+1;
			}
			pos += words[i].length + 1;
		}
		return null;
	}
	function makeStVerse( foundArr){
		//concated words together
		var versionTag;
		if( bookLan === "E"){
			needSpace = true;
			versionTag = 'RCVEnglish';
		}
		else{
			needSpace = false;
			versionTag = 'RCVChinese';
		}
		var idx =-1;
		nextVerse( null);
		//recursive function
		function nextVerse( data){
			if( data !== null){//make corresponding txt
				var a = foundArr[idx];
				if( bookLan==='S' && isChinese(versionTag))
					data = t2s( data);
				var txd = parseTxt.parseFromString(data, 'text/xml');
				var verseNs = txd.documentElement.getElementsByTagName("verse");
				var verseNode = verseNs[a[2]];
				var wseq = a[3];
				var langR = verseNode.getElementsByTagName(versionTag);
				var wns = langR[0].getElementsByTagName("word");
				var txt = '';
				var w;
				for( w=0; w < wns.length; w++){
					wn = wns[w];
					if( txt.length > 0 && needSpace){
						txt += ' ';
					}
					if( wn.firstChild == null){
						console.log("error:"+EbookAb[i]+":"+(chapter+1)+":"+(v+1)+":w"+w);
					}else{
						var red = false;
						var seqa = wn.getElementsByTagName( 'GreekSeq');
						for( var i=0; i < seqa.length; i++){
							if( seqa[i].firstChild.textContent == wseq){
								red = true;
								break;
							}
						}
						if( red) txt += "<span class='redtext'>";
						txt += wn.firstChild.textContent;
						if( red) txt += "</span>";
					}
				}
				a[3] = txt;
			}
			idx++;
			if( idx < foundArr.length){
				var a = foundArr[idx];
				readBookChapter( a[0], a[1], true, versionTag, nextVerse);
			}else{
				setFoundList( foundArr);
			}
		}
	}
	function makeVerse( idx, verse){
		return verse;
		var a = [];
		var endIdx = verse.length;
		if( !isChinese( findTextBookVersion)){
			if( idx < 10)
				idx = 0;
			else{
				idx = verse.lastIndexOf(" ", idx-2);
				if(idx < 0) idx = 0;
			}
			if( endIdx - idx > 35)
				endIdx = verse.lastIndexOf(" ", idx + 35);
		}else{
			if( idx < 4)
				idx = 0;
			else
				idx -= 4;
			if( idx + 15 < endIdx)
				endIdx = idx + 15;
		}
		return verse.substring( idx, endIdx);
	}
	function search(){
		var english = !isChinese( findTextBookVersion);
		if( english)
			key = key.toLowerCase();
		var foundArr = [];
		var i;
		for( i=0; i<bookTxt.length; i++){
			var book = bookTxt[i];
			var j;
			for( j=0; j < book.length; j++){
				var chapter = bookTxt[i][j];
				var k;
				for( k=0; k < chapter.length; k++){
					var verse = chapter[k];
					var idx;
					if(english)
						idx = verse.toLowerCase().indexOf( key);
					else
						idx = verse.indexOf( key);
					if( idx >= 0){
						var txt;
						if( findTextBookVersion === 'Strong')
							txt = makeStWSeq(idx, verse);
						else
							txt = makeVerse( idx, verse);
						if( txt !== null){
							var a = [];
							a.push( i, j, k, txt);
							foundArr.push(a);
						}
					}
				}
			}
		}
		console.log( getTimeStr());
		if( findTextBookVersion === 'Strong')
			makeStVerse(foundArr);
		else
			setFoundList( foundArr);
		return ;
	}
}
function saveListScrollTop(){
	diffElmScrollTop = document.getElementById("foundList").parentElement.scrollTop;
}
function clickDiff( elm, reff){
	saveListScrollTop();
	showReff( reff);
}
function setFoundList( foundArr){
	var list = resetFoundList();
	var foundIdx = 0;
	if( typeof foundArr !== 'object'){
		//more rows clicked
		foundIdx = foundArr;
		foundArr = orgFoundArr;
	}else{
		foundIdx = 0;
		orgFoundArr = foundArr;
	}
	if( versesPerView < foundArr.length){ //add more link
		var div = document.createElement("ons-row");
		div.innerHTML =  langV.get( 'MoreRows');
		var rowEl = document.createElement("ons-list-item");
		rowEl.appendChild( div);
		var row = null;
		for( var j=0; (j*versesPerView)<foundArr.length; j++){
			if( (j%3) === 0){
				if( row !== null)
					rowEl.appendChild(row);
				row = document.createElement("ons-row");
				row.style.lineHeight = '1.6em';
			}
			var idx = j*versesPerView;
			div = document.createElement("div");
			div.setAttribute('onclick', "setFoundList( " + idx + ");");
			var a = foundArr[idx];
			div.innerHTML = "<b>" + getBookName([a[0]])+":" + (a[1]+1) + '~' + "</b>";
			var col = document.createElement("ons-col");
			col.appendChild( div);
			row.appendChild(col);
		}
		if( row !== null)
			rowEl.appendChild(row);
		list.appendChild(rowEl);
	}
	var i = foundIdx;
	for( ; i<foundArr.length && i < foundIdx+versesPerView; i++){
		var a = foundArr[i];
		var book = EbookAb[a[0]];
		var chapter = a[1]+1;
		var verse = a[2]+1;
		var reff = ""+chapter+":"+verse;
		var item= document.createElement('div');
		item.style = 'margin-top:5px;';
       	item.setAttribute('onclick', "clickDiff(this, \"" + book + ":" + reff + "\");");
       	item.innerHTML = "<b>" + getBookName([a[0]]) + ":" + reff + "</b>  " + a[3];
		list.appendChild(item);
	}
	setFoundVerseNo( foundArr.length);
}
function setFoundVerseNo(num){
	document.getElementById("FoundVerseNo").innerHTML = "(" + num + ")";
}
function getVersesInFile( data, i, chapter, versionTag){
	if( bookLan==='S' && isChinese(versionTag))
		data = t2s( data);
	var txd = parseTxt.parseFromString(data, 'text/xml');
	var verseNs = txd.documentElement.getElementsByTagName("verse");
	bookTxt[i][chapter] = new Array( verseNs.length);
	var v;
	for( v=0; v < verseNs.length; v++){//for each verse
		var verseNode = verseNs[v];
		var langR = verseNode.getElementsByTagName(versionTag);
		var wns;
		if(versionTag==='Strong')
			wns = langR;
		else
			wns = langR[0].getElementsByTagName("word");
		var txt = "";
		var w;
		for( w=0; w < wns.length; w++){
			wn = wns[w];
			if(versionTag==='Strong')
				wn = wn.getElementsByTagName("word")[0];
			if( txt.length > 0 && needSpace){
				txt += ' ';
			}
			if( wn.firstChild == null){
				console.log("error:"+EbookAb[i]+":"+(chapter+1)+":"+(v+1)+":w"+w);
			}else
				txt += wn.firstChild.textContent;
		}
        if( bookLan==='S' && isChinese(versionTag))
			txt = t2s( txt);
		bookTxt[i][chapter][v] = txt;
	}
}
function makeBibleText( versionTag, search){
	showModal();
	findTextBookVersion = versionTag;
	console.log( getTimeStr());
	var addDir = isOtherXmlFile(versionTag);
	bookTxt = new Array(27);
	needSpace = !isChinese( versionTag);
	var i=-1, chapter=0, chapterNum = 0, book, verseNumArr;
	function nextFile( data){
		if( data !== null)
			getVersesInFile( data, i, chapter, versionTag);

		chapter++;
		if( chapter >= chapterNum){
			//next Book
			i++;
			if(i < EbookAb.length){
				book = EbookAb[i];
				verseNumArr = BookMaxArray[i];
				chapterNum = verseNumArr[0];
				bookTxt[i] = new Array( chapterNum);
				chapter = 0;
			}
			else{
				console.log( getTimeStr());
				hideModal();
				search();
				return;
			}
		}
		readBookChapter( i, chapter, addDir, versionTag, nextFile);
	}
	nextFile( null);
}
function readBookChapter( book, chapter, addDir, versionTag, nextStep){
    var bookNm = EbookAb[book];
    chapter = chapter+1;
    var dir = addDir?versionTag:"";
	if( typeof IsAndroid == 'undefined'){
	    var url = 'verses/' + fileName( dir, bookNm, chapter);
	    var fileObj = zip.file( url);
	    if( fileObj != null){
	        fileObj.async("string").then(function (data) {
	            //console.log( "zipfile="+versionTag+", "+book+", "+chapter);
	            nextStep( data);
	        });
	    }else{
	        alert("Missing chapter:" + url);
	    }
	}else{//for android
	    readXMLFile( bookNm, chapter, dir).then(function (data) {
	        //console.log( "zipfile="+versionTag+", "+book+", "+chapter);
	        nextStep( data);
	    });
	}
}
