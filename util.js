var langV, popupMenu;
var util = {};

document.addEventListener('init', function(event){
	var view = event.target.id;
	if( view === 'main' ){
		util.mainInit( event.target);
	}
	}, false);
util.showVerseEl = function(){
	var elV = document.getElementById('Verse'+curVerse);
	if( !elV){
		console.log("no element found. curVerse="+curVerse);
		return false;
	}
	console.log('showVerse='+elV.offsetTop);
	elV.scrollIntoView();
}
util.mainInit = function( target){
	var scrollDiv = document.querySelector('#main .page__content');
	scrollDiv.addEventListener('scroll', function(){
		showVNumber();
	});
	//target.addEventListener('show', util.showVerseEl);
	//setTimeout(util.showVerseEl, 600);
}
util.open = function() {
	var menu = document.getElementById('splitter-menu');
	menu.open();
}
util.menuClose = function() {
	var menu = document.getElementById('splitter-menu');
    menu.close();
}
util.load = function(page, data) {
	var myNavigator = document.getElementById('myNavigator');
	var menu = document.getElementById('splitter-menu');
	myNavigator.bringPageTop( page, {animation: 'none'});
	menu.close();
};
util.goPage = function(page, data) {
	var content = document.getElementById('myNavigator');
	var cp = content.topPage;
	if( page != cp)
		content.pushPage(page, data);
};
util.popPage = function() {
	var content = document.getElementById('myNavigator');
	content.popPage();
};
util.isTopMain = function() {
	var content = document.getElementById('myNavigator');
	var cp = content.topPage;
	return cp.id === 'main';
};

//settings view functions
var orgbookLang;
function InitSetting(){
	document.getElementById('SettingBackBT').onClick = function(event) {
  		// Reset the whole stack instead of popping 1 page
  		if( orgbookLang === bookLan || bookLan === 'E' || (	orgbookLang == 'E' && bookLan === 'C'))
	  		goBackMain();
	  	else
	  		goVerse( false);//will not go to selected verse
  		//document.querySelector('ons-navigator').resetToPage('home.html');
	};

	bookLan = localStorage.getItem(bookLanguage);
	orgbookLang = bookLan;
	if( !bookLan){
		bookLan = 'E';
		localStorage.setItem(bookLanguage, bookLan);
	}
	new Lang(bookLan, translArr);
	selLangArrayTmp = selLangArray.slice(0);
	setLangRadio( bookLan);
	$("#ShowSettingBt").attr("disabled","disabled");
	FillBooks(bookLan);

	if( curBook){
		setSelByVal( 'bookCB', curBook);
		FillChapters();
		setSelByVal( 'chapterCB', curChapter);
		FillVerses();
		setSelByVal( 'verseCB', curVerse);
	}
	populateList(0);
}
function getSelVal( id) {
	sel = document.getElementById(id);
	return sel.options[sel.selectedIndex].value;
}
function setSelByVal( id, val) {
	var element = document.getElementById(id);
    element.value = val;
}
function setLangRadio( bookLan){
	if (bookLan == 'C') {
        $( "#radio-opt-english" ).prop( "checked", false );
        $( "#radio-opt-simplified" ).prop( "checked", false );
        $( "#radio-opt-chinese" ).prop( "checked", true );
    }else if (bookLan == 'S') {
        $( "#radio-opt-english" ).prop( "checked", false );
        $( "#radio-opt-simplified" ).prop( "checked", true );
        $( "#radio-opt-chinese" ).prop( "checked", false );
    }else{
        $( "#radio-opt-english" ).prop( "checked",  true);
        $( "#radio-opt-simplified" ).prop( "checked", false );
        $( "#radio-opt-chinese" ).prop( "checked", false );
    }
}
function populateList(k) {
	lanRows = $('#showNewSetting select');
	var arLen=langArray.length;
	for(; k<lanRows.length; k++){
		lanRows[k].options = [];
		if( k > selLangArrayTmp.length){
			lanRows[k].style.visibility = 'hidden';
			continue;
		}
		lanRows[k].style.visibility = 'visible';
		var sval = -1;
		for(var i=0,j=0; i<arLen; i++){
			if( !isSelIn(k, langArray[i])){
				lanRows[k].options[j]=new Option(langArray[i], i);
				if( langArray[i] == selLangArrayTmp[k])
					sval = i;
				j++;
			}
		}
		var jqo = $(lanRows[k]);
		if( sval !== -1)
			jqo.val( sval);
		else
			jqo[0].selectedIndex = 0;
	}
}
function changeBookLang( lang){
	bookLan = lang;
	langV = new Lang(bookLan, translArr);
	localStorage.setItem(bookLanguage, lang);
	FillBooks(lang);
	setSelByVal( 'bookCB', curBook);
	FillChapters();
	setSelByVal( 'chapterCB', curChapter);
	setSelByVal( 'verseCB', curVerse);
}
function changeDisplayLang(){
	lang = $("input[name='radio_language']:checked").val();
	changeBookLang( lang);
	setTitle();
	checkFindView(lang);
}
function goVerse(fromSetting){
	if( fromSetting){
		addHistory();
		curBook = getSelVal('bookCB');
		curChapter = getSelVal('chapterCB');
		curVerse = getSelVal('verseCB');
	}
	if( typeof curBook !== "undefined"){
		localStorage.setItem(lastBook, curBook);
		localStorage.setItem(lastChapter, curChapter );
		localStorage.setItem(lastVerse, curVerse );
		loadVerse( curBook, curChapter);
	}else{
		alert("goVerse type to set undefined curBook.");
	}
}
function compareArr( a, b){
	if( a.length == b.length){
		for( var i=0; i < a.length; i++){
			if( a[i] != b[i])
				return false;
		}
		return true;
	}
	return false;
}
function showNewSetting(e){
	if($("#ShowSettingBt").attr("disabled")=="disabled"){
		//return onclick do nothing
		evt.stopPropagation();
		return;
	}
	if( !compareArr(selLangArray, selLangArrayTmp))
		window.setTimeout(function (){
			selLangArray = selLangArrayTmp;
			selLangTags = newLanTag(selLangArray, langArray, langTags);
			localStorage.setItem(language, selLangTags.join(',')); //Save new setting
			goVerse( true);
		}, 0);//let rendering thread work
}
function newLanTag( srcArr, mapArr, outArr){
	var a = [];
	for(var i=0; i<srcArr.length; ){
		var found = mapSel2Lang(srcArr[i], mapArr, outArr);
		if( found !== null){
			a[i++] = found;
		}else{//remove invalid item
			srcArr.splice(i, 1);
		}
	}
	return a;
}
function selectLanChange( selEl, k){
	$("#ShowSettingBt").removeAttr("disabled");
	var tok = selEl.options[selEl.selectedIndex].text;
	selLangArrayTmp[k]=tok;
	var i=k+1;
	if( langArray[0]==tok)
		i = k;
	for(; i<selLangArrayTmp.length; i++){
		if( selLangArrayTmp[i] == tok){
			for(i++;i<selLangArrayTmp.length;i++)
			selLangArrayTmp[i-1]=selLangArrayTmp[i];
			selLangArrayTmp.splice(i-1, 1);
		}
	}
	populateList(k);
}
