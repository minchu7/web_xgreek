var IsiPhone = navigator.userAgent.indexOf("iPhone") != -1 ;
var IsiPod = navigator.userAgent.indexOf("iPod") != -1 ;
var IsiPad = navigator.userAgent.indexOf("iPad") != -1 ;

var verseTab;
var curBook, curChapter, curVerse;
var bookLan;
var lanRows;
// following two var map from UI combobox string to tag value in lxm
//var langArray = ["None", "Greek", "Lemma", "Morph", "Strong", "恢復本", "和合本", 'KJV', "RcV", "LMcode", "新譯本","Indonesian New Trans. - beta", "ESV "];
//var langTags = ['junk', 'Greek', 'Lema', 'Morph', 'Strong', 'RCVChinese', 'UChinese', 'KJV', 'RCVEnglish', 'LMcode',"NCV","INZNTV","ESV"];
var langArray = ["None", "Greek", "Lemma", "Morph", "Strong", "KJV", "RcV", "WEB", "恢復本", "和合本", "新譯本", "呂譯本"];
var langTags = ["junk", "Greek", "Lema", "Morph", "Strong", "KJV", "RCVEnglish", "WEB", "RCVChinese", "UChinese", "NCV", "LCV"];
var selLangArray; //list of selected value from langArray
var selLangArrayTmp; // For setting page list of selected value from langArray
var selLangTags;      // corresponding tag value in selLangArray.
var bookLanguage = "xgreek_bookLanguage";
var language = "xgreek_language";
var lastBook = "xgreek_Book";
var lastChapter = "xgreek_Chapter";
var lastVerse = "Verse";
function initGrammar(){
	new Lang(bookLan, translArrGram);
	$("a[target='_blank']").click(function(e){
		e.preventDefault();
		if(window.navigator.onLine){
			var url = $(e.currentTarget).attr('href');
			if( typeof cordova !== "undefined"){
				cordova.InAppBrowser.open(url, '_system', 'location=yes');
			}else{
				var win = window.open( url);
				if( win == null)
					alert("Open link failed.")
			}
		}else{
			alert("Need connect to internet!");
		}
	});
}
var QueryString = function () {
  // Parsing request string, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();
function drawTable(){
	//alert('currentpage='+$('.current').attr('id'));
	lanRows = null;//do not initialize global varriables in declare statement.
	var lang = localStorage.getItem(language);

	bookLan = localStorage.getItem(bookLanguage);
	if( lang)
		initLanSetting( lang);
	else
		initLanSetting( 'Greek,Lema,Strong,Morph,KJV,RCVEnglish,ESV,RCVChinese,UChinese,NCV');
	if(QueryString.verse != null){
		setCurVerse( QueryString.verse);
	}else {
		curBook = localStorage.getItem(lastBook);
		curChapter = localStorage.getItem(lastChapter);
		curVerse = localStorage.getItem(lastVerse);
	}
	console.log("drawTable. curBook="+curBook+", curChapter="+curChapter);
	if( typeof curBook == "undefined" || curBook=="undefined" || curChapter == null){
		curBook = "Matt";
		curChapter = "1";
		curVerse = "1";
		console.log("drawTable. setting panel to front");
		util.load('setting.html', {});
	} else {
		loadVerse( curBook, curChapter);
	}
}
function isSelIn( k, tok){
	for(var i=0; i<k; i++){
		if( selLangArrayTmp[i] == tok) return true;
	}
	return false;
}
function mapSel2Lang( sel, mapArr, outArr){
	for(var i=1; i<mapArr.length; i++){
		if( mapArr[i]==sel) return outArr[i];
	}
	return null;
}
function initLanSetting( lang){
	selLangTags = lang.split(',');
	selLangArray = newLanTag(selLangTags, langTags, langArray);
}
function Initialize () {
	console.log("initialize.");
	if( window.location.hostname == "localhost"){
		//true for debug zip averses.zip, false for viewing new edit verse xml files
		var debugZip = true;
		if( debugZip === true){
			loadZip( drawTable);
		}else{
			lastGreekIdx = 8;//working with old xml which has kjv, rcv, union
			drawTable();
		}
	}else{
	    if( typeof IsAndroid == 'undefined'){
		    loadZip();
		}else{
		    drawTable();
		}
	}
}
function setCurVerse( str){
	var vs = str.split(':');
	curBook = vs[0];
	curChapter = vs[1];
	curVerse = vs[2];
}
function showReff( vs){
	addHistory();
	setCurVerse(vs);
	loadVerse( curBook, curChapter);
}
function goHistory( vs){
	console.log("goHistory="+vs);
	closeOverlay();
	showReff( vs);
}
function getTimeStr(){
	var currentdate = new Date(); 
	return "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
}
function goNextChapter(){
	goChapter(1);
}
function goPrevChapter(){
	goChapter(-1);
}
function goChapter( direct){
	var chapter=parseInt( curChapter) + direct;
	if( chapter <= 0  || chapter >= BookChapterNum(curBook)){
		var ibook = BookIndex(curBook) + direct;
		if( ibook < 0 || ibook >= EbookAb.length)
		return;
		curBook = EbookAb[ibook];
		chapter = 1;
	}
	curChapter = "" + chapter;
	curVerse = "1";
	goVerse(false);
}
function loadVerse(book, chapter) {
	showModal();
	window.setTimeout(function (){
		loadXMLDoc( book, chapter, "");
	}, 0);//let rendering thread work
}
var lastWord = true;
function findWordIdxBySeq( words, curSeq){
	if( isGreek())
	return 0;
	for( var k=0; k < words.length; k++){
		var seq = words[k].getAttribute('seq');
		if( seq == curSeq){
			if(k==(words.length-1))
			lastWord = true;
			else
			lastWord = false;
			return k;
		}
	}
	return -1;
}
var curGreekCol=0;
var seqLangChoosed=0;
function isGreek(){
	return isGreek( seqLangChoosed);
}
function isGreek( idx){
	var idx = ['Greek', 'Lema', 'Morph', 'Strong', 'LMcode'].indexOf(selLangTags[idx]);
	return (idx >= 0);
}
function findColumn ( columns, curSeq){
	if( isGreek()){
		if( columns.length >= curSeq)
		return columns[curSeq-1];
		else
		return null;
	}
	for (var i = 0; columns.length > i; ++i){
		var lang = columns[i].getElementsByTagName(selLangTags[seqLangChoosed]);
		if( lang[0]){
			var words = lang[0].getElementsByTagName('word');
			var idx = findWordIdxBySeq( words, curSeq);
			if( idx >= 0){
				curGreekCol = i+1;
				return columns[i];
			}
		}
	}
	return null;
}
function findWordsBySeqs( isGr, langWords, seqs){
	var words = new Array();
	var iCount = 0;
	for( var i=0; langWords != null && i < langWords.length; i++){
		var w = langWords[i];
		var gseqs = new Array();
		if( isGr){
			gseqs[0] = w.getAttribute("seq");
		}else{
			var gseqns = w.getElementsByTagName("GreekSeq");
			for( var j=0; j < gseqns.length; j++)
			gseqs[j] = gseqns[j].textContent;
		}
		for( var j=0; j < gseqs.length; j++){
			var gseq = gseqs[j];
			for( var k=0; k < seqs.length; k++){
				if( seqs[k]==gseq)
				words[iCount++] = w;
			}
		}
	}
	return words;
}
//tableMap have []for each language, [][]for each column [][][]for each word
var tableMap;
function makeTableMap(verseNode){
	var columns = verseNode.getElementsByTagName('column');
	var grkUsed = new Array();
	for( var i=0; i < columns.length; i++)
	grkUsed[i] = false;
	var langRows = new Array();
	//words for each version mapping according to selected versions,
	//words in version by sequence: langRows[version][word]
	for( var i=0; i < selLangTags.length; i++){
		if( isGreek(i)){
			langRows[i] = verseNode.getElementsByTagName(selLangTags[i]);
			var arr = new Array();
			for( var j=0; j < langRows[i].length; j++){
				arr[j] = langRows[i][j].getElementsByTagName("word")[0];
			}
			langRows[i] = arr;
		}else{
			var langR = verseNode.getElementsByTagName(selLangTags[i]);
			if( langR.length > 0)
			langRows[i] = langR[0].getElementsByTagName("word");
			else
			langRows[i] = null;
		}
	}
	tableMap = new Array();
	for( var i=0; i < selLangTags.length; i++)
		tableMap[i] = new Array();
	var selWords = langRows[seqLangChoosed];
	var selectedGr = isGreek(seqLangChoosed);
	//loop through each word in the selected language
	for( var i=0; i < selWords.length; i++){
		var w = selWords[i];
		//get linked Greek word(s) sequence#
		var gseqns = w.getElementsByTagName("GreekSeq");
		var gseqs = new Array();
		for( var j=0; j < gseqns.length; j++){
			gseqs[j] = gseqns[j].textContent;
			var seq = parseInt(gseqs[j])-1;
			if( seq >= 0 && seq < grkUsed.length)
			grkUsed[seq] = true;
		}
		//loop through selected versions
		for( var j=0; j < selLangTags.length; j++){
			tableMap[j][i] = new Array();
			var curRowGr = isGreek(j);
			var seqs = new Array();
			if( j == seqLangChoosed)
			tableMap[j][i][0] = langRows[j][i];
			else if( selectedGr){
				if( curRowGr)
				tableMap[j][i][0] = langRows[j][i];
				else{
					seqs[0] = (i+1).toString();
					tableMap[j][i] = findWordsBySeqs( curRowGr, langRows[j], seqs);
				}
			}else{
				tableMap[j][i] = findWordsBySeqs( curRowGr, langRows[j], gseqs);
			}
		}
	}
	if( selectedGr)
	return;
	//loop through unlinked Greek words.
	var idx = selWords.length;
	for( var i = 0; i < grkUsed.length; i++){
		if( grkUsed[i])
		continue;
		//loop through selected versions
		for( var j=0; j < selLangTags.length; j++){
			tableMap[j][idx] = new Array();
			var curRowGr = isGreek(j);
			var seqs = new Array();
			if( j != seqLangChoosed){
				if( curRowGr)
				tableMap[j][idx][0] = langRows[j][i];
				else{
					seqs[0] = (i+1).toString();
					tableMap[j][idx] = findWordsBySeqs( curRowGr, langRows[j], seqs);
				}
			}
		}
		idx++;
	}
}
var tabRowArr;
function w1Inw2( words1, words2){//also words2 in words1 will return True
	if( words1.length > words2.length){
		var tmp = words2;
		words2 = words1;
		words1 = tmp;
	}
	var ii = 0;
	for( ; ii < words2.length-words1.length+1; ii++){
		if( words1[0] !== words2[ii])
			continue;
		var iii = 1;
		ii++;
		while( iii < words1.length && ii < words2.length){
			if( words1[iii] == words2[ii])
				iii++;
			ii++;
		}
		if( iii == words1.length){
			return true;
		}
	}
	return false;
}
function nextColspan( cell){
	var cs = cell.getAttribute("colspan");
	var csInt = 1;
	if( cs != null)
		csInt = parseInt( cs);
	return csInt+1;
}
function setCellTxt( cell, words, seqA, curLang, note){
	for( var kkk=0; kkk < words.length; kkk++){
		var txt = "";
		//loop through words in the cell
		var seq = words[kkk].getAttribute('seq');
		//check duplicated word
		var kkkk=0;
		for( ; kkkk < seqA.length; kkkk++){
			if( seq == seqA[kkkk]) break;
		}
		if( kkkk == seqA.length){
			seqA[kkkk] = seq;
			if( kkk != 0) {
				if( (parseInt(seq)-parseInt( seqA[kkk-1])!=1) && 'Strong' != curLang &&'Morph' != curLang)
					txt += '…';
				else
					txt += ' ';
			} 
			if( words[kkk].firstChild != null)
			txt += words[kkk].firstChild.textContent;
			txt += '<sup>'+seq+'</sup>';
			var ntxt = words[kkk].getAttribute('note');
			if( ntxt != null){
				if( note.str.length > 0)
					note.str += "<br\>";
				note.str += ntxt;
			}
		}
		var element = document.createElement("div");
		if('Morph' == curLang){
			for( var idx = txt.indexOf(','); idx > 0;){
				idx++;
				element.innerHTML = txt.substring(0, idx);
				cell.appendChild( element);
				txt = txt.substring( idx);
				idx = txt.indexOf(',');
				element = document.createElement("div");
			}					
		}
		element.innerHTML = txt;
		cell.appendChild( element);
	}//end of kkk
}
function makeTableColumns( verseNode, tabRow, seqLang){
	//first column for verse number
	seqLangChoosed = seqLang;
	var num = verseNode.getAttribute('number');
	var verse = (parseInt(num)-1);
	tabRow.setAttribute("class","Verse");
	tabRow.setAttribute("id","Verse"+(verse+1));
	var tc;
	var numStr = "";
	numStr += (num<=9)?("0"+num):num;
	tc = document.createElement("td");
	tabRow.appendChild( tc);

	//table for each verse
	var table = document.createElement("table");
	table.setAttribute("bgcolor","#00aa00");
	table.setAttribute("width","auto");
	table.setAttribute("verse",verse);
	tc.appendChild( table);
	var tabRows = new Array();
	//create rows for each language
	for( var k = 0; k < selLangTags.length; k++){
		tabRows[k] = document.createElement("tr") ;
		table.appendChild( tabRows[k]);//new row for each column
	}
	makeTableMap( verseNode);
	var columns = verseNode.getElementsByTagName('column');
	var langs;
	//first column for each bible version selection
	//add language seq select button
	var bgcolor="white";
	for( var kk=0; kk < tableMap.length; kk++){
		var cell = document.createElement("td");
		cell.setAttribute("bgcolor",bgcolor);
		var txt = "<div class='aSeqTag'>";
		if(kk == seqLangChoosed)
			txt += numStr + ":";
		if( selLangTags[kk] == "Greek"){
			txt += '&nbsp&nbsp<ons-icon icon="ion-android-sync" size="20px"></ons-icon>';
			cell.setAttribute("style", 'background-color:#e0ffff');
			cell.onclick = showParaRow;
		}
		else{
			cell.onclick = changeSeqLang;
			txt += selLangArray[kk];
		}
		txt += "</div>";
		cell.innerHTML = txt;
		tabRows[kk].appendChild( cell);
		tabRows[kk].setAttribute( "lang", kk);
	}
	//second column is the table for the whole verse
	for( var kk=0; kk < tableMap.length; kk++){
		//loop through each language
		//cell is last added td element
		var curLang = selLangTags[kk];
		for( var k = 0; k < tableMap[kk].length; k++){
			//loop through each column according the 'seq' tag of the word by the sequence of seqLangChoosed
			var subE = null;
			var words = tableMap[kk][k];
			var note = { str : "" };
			//prevent duplicate words
			var seqA = new Array();
			var found = false;
			if( k > 0){//take care many Greek words to one translation
				var words1 = tableMap[kk][k-1];
				if( words.length == 0){//word do not map to any Greek
					if( words1.length == 0)
						found = true;
				}else{
					if( words1.length == 0){
						if( k > 1){//check mapped words seperated by unmapped word
							words1 = tableMap[kk][k-2];
							if( words1.length > 0){
								found = w1Inw2( words1, words);
								if( found){
									//var cellTmp = cell.previousElementSibling;
									tabRows[kk].removeChild( cell);
									cell = tabRows[kk].lastElementChild;
									//nextColspan() add 1 to the last span found in cell		
									cell.setAttribute("colspan","" + (nextColspan(cell)));
								}
							}
						}
					}else{
						found = w1Inw2( words1, words);
					}
				}
			}
			if( found){
				if( words.length <= words1.length){
					cell.setAttribute("colspan",""+nextColspan(cell));
					continue;
				}else{
					tabRows[kk].removeChild( cell);
					var spanNum = nextColspan(cell);//save current span value
					cell = document.createElement("td");
					cell.setAttribute("colspan",""+spanNum);
				}
			}else
				cell = document.createElement("td");
			setCellTxt( cell, words, seqA, curLang, note);
			
			if( 'Strong' == curLang){
				cell.setAttribute("class","strongCode");
				cell.onclick = strongCodeClicked;
			}else if('Morph' == curLang){
				cell.setAttribute("class","morphCode");
				cell.onclick = morphCodeClicked;
			}else if('Greek' == curLang){
				cell.setAttribute("class","greekTD");
				cell.onclick = greekClicked;
			}else{//set the background color and click listener
				if( note.str.length > 0){
					cell.setAttribute( "note", note.str);
					cell.onclick = noteClicked;
					cell.setAttribute("class","noteWord");
				}else{
					var bcolor="white";
					if( tableMap[seqLangChoosed][k].length == 0)
						bcolor = 'rgb(210, 210, 200)';
					if( kk == seqLangChoosed){
						bcolor='yellow';
						cell.onclick = showParaRow;
					}else{
						cell.onclick = changeSeqLang;
					}
					cell.setAttribute("style", 'background-color:'+bcolor);
				}
			}
			tabRows[kk].appendChild( cell);
		}//end of k
	}//end of kk
}
function getVerseNum( evt){
	var target = evt.target;
	while( target.tagName != "TR"){
		target = target.parentElement;
		if( target == null)
			return false;
	}
	var ob = {lang:target.getAttribute("lang"), verse:target.parentElement.getAttribute("verse")};
	return ob;
}
function changeSeqLang(evt){
	var ob = getVerseNum( evt);
	if( ob == null)
		return;
	var lang = ob.lang;
	var verse = ob.verse;
	var tabRow = tabRowArr[verse];
	tabRow.innerHTML="";
	makeTableColumns( verseNodes[verse], tabRow, lang);
}
function showParaRow(evt){
	var ob = getVerseNum( evt);
	if( ob == null)
		return;
	var lang = ob.lang;
	var verse = ob.verse;
	var tabRow = tabRowArr[verse];
	tabRow.innerHTML="";
	makeParaTableColumns( verseNodes[verse], tabRow, lang);
}
function isGreek( idx){
	var idx = ['Greek', 'Lema', 'Morph', 'Strong', 'LMcode'].indexOf(selLangTags[idx]);
	return (idx >= 0);
}
function isChinese( key){
	var idx = ['RCVChinese', 'UChinese', 'NCV', 'LCV'].indexOf(key);
	return (idx >= 0);
}
function makeParaTableMap(verseNode){
	var paraTableMap = new Array();
	//words for each version mapping according to selected versions,
	//words in version by sequence: paraTableMap[version][word]
	for( var i=0; i < selLangTags.length; i++){
		if( isGreek(i)){
			paraTableMap[i] = verseNode.getElementsByTagName(selLangTags[i]);
			var arr = new Array();
			for( var j=0; j < paraTableMap[i].length; j++){
				arr[j] = paraTableMap[i][j].getElementsByTagName("word")[0];
			}
			paraTableMap[i] = arr;
		}else{
			var langR = verseNode.getElementsByTagName(selLangTags[i]);
			if( langR.length > 0)
				paraTableMap[i] = langR[0].getElementsByTagName("word");
			else
				paraTableMap[i] = null;
		}
	}
	return paraTableMap;
}
function makeParaTableColumns( verseNode, tabRow){
	//first column for verse number
	var num = verseNode.getAttribute('number');
	var verse = (parseInt(num)-1);
	tabRow.setAttribute("class","Verse");
	tabRow.setAttribute("id","Verse"+(verse+1));
	var tc;
	var numStr = "";
	numStr += (num<=9)?("0"+num):num;
	tc = document.createElement("td");
	tc.setAttribute("class","Verse");
	tabRow.appendChild( tc);
	//table for each verse
	var table = document.createElement("table");
	table.setAttribute("bgcolor","#00aa00");
	table.setAttribute("width","auto");
	table.setAttribute("verse",verse);
	//table.onclick = verseClicked;
	tc.appendChild( table);
	var tabRows = new Array();
	//create rows for each language
	for( var k = 0; k < selLangTags.length; k++){
		tabRows[k] = document.createElement("tr") ;
		table.appendChild( tabRows[k]);//new row for each column
	}
	var paraTableMap = makeParaTableMap( verseNode);
	var langs;
	//first column for each bible version selection
	//add language seq select button
	var bgcolor="white";
	for( var kk=0; kk < paraTableMap.length; kk++){
		var cell = document.createElement("td");
		cell.setAttribute("bgcolor",bgcolor);
		cell.style.textAlign = 'left';
		var txt = "";
		if( kk==0)
			txt = numStr + ":";
		else
			txt = "&nbsp&nbsp&nbsp&nbsp";
		if( selLangTags[kk] == "Greek"){
			txt += '&nbsp&nbsp<ons-icon icon="ion-android-volume-up" size="20px"></ons-icon>';
			cell.setAttribute("style", 'background-color:#e0ffff');
			cell.onclick = greekVClicked;
		}else{
			txt += selLangArray[kk];
		}
		cell.innerHTML = txt;
		var tabRow = tabRows[kk];
		tabRow.appendChild( cell);
		tabRow.setAttribute( "lang", kk);
		tabRow.onclick = changeSeqLang;
	}
	var addSpace = !isChinese(selLangTags[kk]);
	//second column is the table for the whole verse
	for( var kk=0; kk < paraTableMap.length; kk++){
		//loop through each language
		cell = document.createElement("td");
		for( var k = 0; k < paraTableMap[kk].length; k++){
			var subE = null;
			var word = paraTableMap[kk][k];
			var note = "";
			var txt = "";
			if( word.firstChild != null)
				txt += word.firstChild.textContent;
			var ntxt = word.getAttribute('note');
			if( ntxt != null){
				if( note.length > 0)
					note += "<br\>";
				note += ntxt;
			}
			var element = document.createElement("div");
			if( addSpace)
				txt += ' ';
			element.innerHTML = txt;
			cell.appendChild( element);
			if( note != null && note.length > 0){
				element.setAttribute( "note", note);
				element.onclick = noteClicked;
				element.setAttribute("class","noteWord");
				element.setAttribute("style", 'background-color:'+"lightgrey");
			}else if( !isGreek(kk)){
				var chel = word.firstElementChild;
				if( chel == null || chel.nodeName != "GreekSeq")
					element.setAttribute("style", 'background-color:'+"lightblue");
			}
		}//end of k
		cell.setAttribute("bgcolor",bgcolor);
		cell.style.textAlign = 'left';
		tabRows[kk].appendChild( cell);
	}//end of kk
}
function verseRef( book, chapter, verse){
	return BookName(bookLan, book)+' '+chapter+":"+verse;
}
function setTitle(){
	document.getElementById("verseTitle").innerHTML = verseRef( curBook, curChapter, curVerse);
}
function showVNumber(){
	var top = document.getElementById("verseTitle").getBoundingClientRect().bottom + 10;
	for( var i=0; i<tabRowArr.length; i++){
		var el = tabRowArr[i];
		var rect = el.getBoundingClientRect();
	    var elemBottom = rect.bottom;

	    // Only completely visible elements return true:
	    if( elemBottom >= top){
	    	curVerse = i + 1;
	    	setTitle();
			//console.log("scroll."+i);
			break;
		}
	}
}
var verseNodes;
var fParallet = false;
function flipParallet(){
	fParallet = ~fParallet;
	setActionItemTxt();
	showVerse();
}
function setActionItemTxt(){
	if( fParallet)
		$("#actionInterlinear").text( langV.get("Interlinear"));
	else
		$("#actionInterlinear").text( langV.get("ParalletView"));

}
function showModal() {
  	var modal = document.querySelector('ons-modal');
  	modal.show();
}  	
function hideModal() {
  	var modal = document.querySelector('ons-modal');
   	modal.hide();
}
function showVerse(){
	//need get element always, for the page jqm reload the page. if( verseTab == null)
	verseTab = document.getElementById("verse");
	verseTab.innerHTML = "" ;

	//alert("$('home').find('h1'): " + $('div > h1').html());
	tabRowArr = new Array();
	for (var i = 0; i < verseNodes.length; ++i) {
		//following few lines we make each row is a table also.
		var tabRow = document.createElement("tr");
		tabRowArr[i] = tabRow;
		verseTab.appendChild(tabRow);

		var verseNode = verseNodes[i];
		if( fParallet)
			makeParaTableColumns( verseNode, tabRow, 0);
		else
			makeTableColumns( verseNode, tabRow, 0);
	}
	setTitle();
	
	hideModal();
	return true;
}
function openOverlay() {
    document.getElementById("overlay").style.width = "100%";
}
function closeOverlay() {
	if( window.event.defaultPrevented)
		return;
    window.event.preventDefault();
	document.getElementById("overlay").style.width = "0%";
	var popuptxt = document.getElementById("popoverTxt");
	popuptxt.classList.toggle("show");
}
function popTooltip( txt){
	openOverlay();
	var popuptxt = document.getElementById("popoverTxt");
	if( typeof txt === "string"){
		popuptxt.innerHTML = txt;
	}
	else{
		popuptxt.innerHTML = "";
		popuptxt.appendChild( txt);
	}
	var popup = document.getElementById("popup");
	popup.style.position = "absolute";
	if( LastTdPopup===null){
		var w = $(window).width();
		var h = $(window).height();
		var d = $(popup);
		var divW = d.width();
		var divH = d.height();
		popup.style.top = (h/2)-(divH/2)+"px";
		popup.style.left = (w/2)-(divW/2)+"px";
	}else{
		var rc = LastTdPopup.getBoundingClientRect();
		popup.style.top = ""+rc.top+"px";
		popup.style.left = ""+ ((rc.left+rc.right)/2) +"px";
	}
	popuptxt.classList.toggle("show");
}
var LastTdPopup;
// might need later
var showTextFunc;
function addItem( ul, radioId){
	var poplistItem = document.createElement("li");
	poplistItem.appendChild( document.createTextNode( radioId));
	poplistItem.style.listStyleType="none";
	//css li has been defined poplistItem.style.minHeight = "20px";
	poplistItem.onclick = function(){
		closeOverlay();
		chose = this.textContent.trim();
		if( chose !== "none")
			showTextFunc( chose);
	};
	ul.appendChild(poplistItem);
}
function loadList(){
	var ul = document.createElement('ul');
	ul.classList.add("popuplist");
	addItem( ul, "none");
	for(var i=0; i < ea.length; i++){//loop through div
		var radioId = ea[i].childNodes[0].textContent;
		addItem( ul, radioId);
	}; 
	popTooltip( ul);
}
function popupList( evt, showText) {    
	ea = evt.currentTarget.childNodes;
    if( ea.length == 0)
		return;
	evt.stopPropagation();
	if( ea.length == 1){//only one item in the td element
		showText( ea[0].childNodes[0].textContent.trim());
		return;
	}
	showTextFunc = showText;
	loadList();
	LastTdPopup.id = "CodeListPopup";
} 
function showStrongCode( code){
	//console.log('showStrongCode='+window.navigator.onLine+", cordova="+cordova+", window.open="+window.open);
	if(window.navigator.onLine){
		var url = 'http://www.blueletterbible.org/lang/lexicon/lexicon.cfm?Strongs=';
		if( bookLan == 'C')
			url = "http://bible.fhl.net/new/s.php?N=0&m=&k=";
		url += code;
		if( typeof cordova !== "undefined"){
			cordova.InAppBrowser.open(url, '_system', 'location=yes');
		}else{
			var win = window.open( url, "_blank");
			if( win == null)
				alert("Open link failed.")
		}
	}else{
		code = strongsGreekDictionary['G'+code];
		var txt = code["strongs_def"];
		popTooltip(txt);
	}
}
function greekVClicked(evt){
	ea = evt.currentTarget.nextSibling.childNodes;
    if( ea.length == 0)
		return;
		
	if( typeof vibrate !== "undefined")
        vibrate();
	evt.stopPropagation();
	var txt = "";
	for( var i=0; i < ea.length; i++){
		if( i > 0)
			txt += " ";
		txt += ea[i].childNodes[0].textContent.trim();
	}
	speakGr( txt);
}
function greekClicked( evt) {    
	ea = evt.currentTarget.childNodes;
    if( ea.length == 0)
		return;
	evt.stopPropagation();
	var txt = "";
	if( ea[0].className=="aSeqTag"){//read verse
		var tds =ea[0].parentNode.parentNode.childNodes;
		var wa = [];
		for( var i=1; i < tds.length; i++){
			var td = tds[i].childNodes;
			for( var j=0; j < td.length; j++){
				var te = td[j].childNodes;
				wa[te[1].textContent] = te[0].textContent;
			}
		}
		for( var i=1; i < wa.length; i++){
			if( i > 1)
				txt += " ";
			txt += wa[i];
		}
	}else{
		for( var i=0; i < ea.length; i++){
			if( i > 0)
				txt += " ";
			txt += ea[i].childNodes[0].textContent.trim();
		}
	}
	speakGr( txt);
}
function strongCodeClicked( evt){
	evt.stopPropagation();
	LastTdPopup = this;
	popupList( evt, showStrongCode);
}
function showMorphCode( code, winopen){
	if( winopen)
		return;
	var idx = code.indexOf(',');
	if( idx > 0)
		code = code.substring(0, idx);
	var txt = morphDictionary(code);
	popTooltip(txt);
}
function morphCodeClicked( evt){
	evt.stopPropagation();
	LastTdPopup = this;
	popupList( evt, showMorphCode);
}
function noteClicked( evt){
	evt.stopPropagation();
	LastTdPopup = this;
	var txt = $(this)[0].getAttribute("note");
	popTooltip(txt);
}
function fileName( langTag, book, chapter){
    var url = '';
    if( langTag.length > 0)
        url += langTag + '/';
	return url + book+'_'+chapter  + '.xml';
}
function goBackMain(){
	if( !util.isTopMain())
		util.load( 'main.html')
		//util.popPage();
}
var verseXmlNodes;
function showChapter(){
	verseNodes = verseXmlNodes;
	goBackMain();
	var check = function(){
		if( showVerse()){
			console.log('showChapter success.');
			langV = new Lang(bookLan, translArr);
			setActionItemTxt();
			util.showVerseEl();
		}
		else {
			setTimeout(check, 500); // check again in a second
		}
	}
	check();
}
var lastGreekIdx = 4;
var oldlangTags = ["Greek", "Lema", "Morph", "Strong", "KJV", "RCVEnglish", "RCVChinese", "UChinese"];
function isOtherXmlFile( tag){
	var idx = oldlangTags.indexOf( tag);
	if( idx === -1){
		return true;
	}else{//for localhost
		return idx >= lastGreekIdx;
	}
}
//following three functions load xml dom from server or local
var missingVersion;
function addVersions(book, chapter){
	for( var i = 0; i < selLangTags.length; i++){
		//load all the xml files except Greek
		var tag = selLangTags[i];
		if( isOtherXmlFile( tag)){//load version xml file
			loadXMLDoc(book, chapter, tag)
		}
	}
}
function mergeVersion( txd, versionTag, book, chapter){
    var vxn = txd.documentElement.getElementsByTagName("verse");
    if( verseXmlNodes == null){//add Greek node
        verseXmlNodes = vxn;
        addVersions( book, chapter);
    }else{
        for (var i = 0; i < verseXmlNodes.length; ++i) {
            //following few lines we make each row is a table also.
            var verseNode = verseXmlNodes[i];
            var vn = vxn[i];
            var langR = vn.getElementsByTagName(versionTag)[0];
            vn.removeChild( langR);
            verseNode.appendChild( langR);
        }
    }
}
var xmlFileCount;
function loadXMLDoc(book, chapter, versionTag){
    if( versionTag.length == 0){
        xmlFileCount = 0;
        verseXmlNodes = null;
    }
    if( typeof IsAndroid == 'undefined'){
    	//alert("start load zip file")
    	if( typeof zip == 'undefined')//only for localhost
        	loadXMLWeb( book, chapter, versionTag);
        else
        	loadXMLZip(book, chapter, versionTag);
	}else//only for android
        readXMLocal( book, chapter, versionTag);
}
// localhost debug only
function loadXMLWeb( book, chapter, versionTag){
	var url = '/Greek/verses/' + fileName( versionTag, book, chapter);;
	xmlFileCount++;
	//var myMask = Ext.getCmp("setting").getMasked();
	//myMask.show();
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if ( xmlhttp.readyState==4){
			xmlFileCount--;
			if( xmlhttp.status==200 || xmlhttp.status==0){
				var txd;
				if (bookLan==='S' || !xmlhttp.responseXML) {
					var txt = xmlhttp.responseText;
					if( bookLan==='S' && isChinese(versionTag))
						txt = t2s( txt);
					txd = (new DOMParser()).parseFromString(txt, 'text/xml');
				}else{
					txd = xmlhttp.responseXML;
				}
				mergeVersion( txd, versionTag, book, chapter);
				if(xmlFileCount==0)
					showChapter();
			}else if( xmlhttp.status==0){
				alert( "xml format error:"+url);
			}else{
				alert('Loading ' + url + ' file failed.');
			}
		}//end readyStat==4
	}//end of onreadstatechange function
	try{
		xmlhttp.open("POST",url,true);
		if (xmlhttp.overrideMimeType){
			xmlhttp.overrideMimeType("text/xml") ;
		}
		xmlhttp.setRequestHeader ("Content-Type", "text/xml; charset='utf-8'") ;
		xmlhttp.send();
	}catch(err){
		txt="There was an error on loading file:"+url;
		txt+="\nError description: " + err.message + "\n";
		txt+="Click OK to continue.\n";
		console.error(txt);
	}
}
// loading a zip file
var zip;
function loadXMLZip( book, chapter, versionTag){
	var url = 'verses/' + fileName( versionTag, book, chapter);
	var fileObj = zip.file( url);
	if( fileObj != null){
		xmlFileCount++;
		fileObj.async("string").then(function (data) {
			if( bookLan==='S' && isChinese(versionTag))
				data = t2s( data);
			var txd = (new DOMParser()).parseFromString(data, 'text/xml');
			console.log( "zipfile="+versionTag+", "+book+", "+chapter);
			mergeVersion( txd, versionTag, book, chapter);
			if(--xmlFileCount==0)
				showChapter();
		});
	}else{
		alert("Missing file: "+url);
		missingVersion.push( versionTag);
	}
}
function loadZip() {
	JSZipUtils.getBinaryContent("averses.zip", 
		function (err, data) {
			if(err) {
				alert("getBinaryContent error: " + err.message + (new Error().stack)); // or handle the error
			}else{
				zip = new JSZip();
				var promise = zip.loadAsync(data);
				promise.then( 
					function(){
						console.log("zip load succeed!");
						drawTable();
					}
				).catch( function (e) {
					    // Error: Corrupted zip : CRC32 mismatch
						alert("zip load error:" + e.message);
					}
				);
			}
		}
	);      
}
var historyArr = [];
function addHistory(){
	var item = curBook+":"+curChapter+":"+curVerse;
	for( var i=0; i < historyArr.length; i++){
		if( historyArr[i] ===item){
			historyArr.splice( i, 1);
			break;			
		}
	}
	historyArr.push( item);
}
function makeHistoryList(){
	var i = 0, str = "<ons-list-header>"+langV.get("History")+"</ons-list-header>";
	if( historyArr.length === 0)
		return str += "<ons-list-item>"+langV.get("None")+"</ons-list-item>";
	for(; i < historyArr.length; i++){
		var verse = historyArr[i];
		var idx = verse.indexOf(":");
		var book = verse.substring(0, idx);
		var reff = verse.substring( idx+1);
		str += "<ons-list-item tappable onclick='return goHistory(\""+verse+"\");'>" + BookName(bookLan, book)+" "+reff + "</ons-list-item>";
	}
	return str;
}
