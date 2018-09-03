NS = (document.layers) ? 1 : 0;
IE = (document.all) ? 1 : 0;

var BookMaxArray = new Array(27);
BookMaxArray[0] = [28,25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20];
BookMaxArray[1] = [16,45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20];
BookMaxArray[2] = [24,80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53];
BookMaxArray[3] = [21,51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25];
BookMaxArray[4] = [28,26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31];
BookMaxArray[5] = [16,32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27];
BookMaxArray[6] = [16,31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24];
BookMaxArray[7] = [13,24,17,18,18,21,18,16,24,15,18,33,21,14];
BookMaxArray[8] = [6,24,21,29,31,26,18];
BookMaxArray[9] = [6,23,22,21,32,33,24];
BookMaxArray[10] = [4,30,30,21,23];
BookMaxArray[11] = [4,29,23,25,18];
BookMaxArray[12] = [5,10,20,13,18,28];
BookMaxArray[13] = [3,12,17,18];
BookMaxArray[14] = [6,20,15,16,16,25,21];
BookMaxArray[15] = [4,18,26,17,22];
BookMaxArray[16] = [3,16,15,15];
BookMaxArray[17] = [1,25];
BookMaxArray[18] = [13,14,18,19,16,14,20,28,13,28,39,40,29,25];
BookMaxArray[19] = [5,27,26,18,17,20];
BookMaxArray[20] = [5,25,25,22,19,14];
BookMaxArray[21] = [3,21,22,18];
BookMaxArray[22] = [5,10,29,24,21,21];
BookMaxArray[23] = [1,13];
BookMaxArray[24] = [1,14];
BookMaxArray[25] = [1,25];
BookMaxArray[26] = [22,20,29,22,11,14,17,17,13,21,11,19,18,18,20,8,21,18,24,21,15,27,21];

var EbookNames = new Array(27), EbookAb = new Array(27), CbookNames= new Array(27);
CbookNames[0]  = "馬太福音", EbookNames[0]  = "Matthew",			EbookAb[0]="Matt";        
CbookNames[1]  = "馬可福音", EbookNames[1]  = "Mark",			EbookAb[1]="Mark";
CbookNames[2]  = "路加福音", EbookNames[2]  = "Luke",			EbookAb[2]="Luke";
CbookNames[3]  = "約翰福音", EbookNames[3]  = "John",			EbookAb[3]="John";
CbookNames[4]  = "使徒行傳", EbookNames[4]  = "Acts",			EbookAb[4]="Acts";
CbookNames[5]  = "羅馬書", EbookNames[5]  = "Romans",			EbookAb[5]="Rom";
CbookNames[6]  = "哥林多前書", EbookNames[6]  = "1 Corinth",	    EbookAb[6]= "1Cor";
CbookNames[7]  = "哥林多後書", EbookNames[7]  = "2 Corinth",	    EbookAb[7]= "2Cor";
CbookNames[8]  = "加拉太書", EbookNames[8]  = "Galatians",		EbookAb[8]= "Gal";
CbookNames[9]  = "以弗所書", EbookNames[9]  = "Ephesians",		EbookAb[9]= "Eph";
CbookNames[10] = "腓立比書", EbookNames[10] = "Philippians",		EbookAb[10]="Phil";
CbookNames[11] = "歌羅西書", EbookNames[11] = "Colossians",		EbookAb[11]="Col";
CbookNames[12] = "帖前", EbookNames[12] = "1 Thessa",	EbookAb[12]="1The";
CbookNames[13] = "帖後", EbookNames[13] = "2 Thessa",	EbookAb[13]="2The";
CbookNames[14] = "提摩太前書", EbookNames[14] = "1 Timothy",		EbookAb[14]="1Tim";
CbookNames[15] = "提摩太後書", EbookNames[15] = "2 Timothy",		EbookAb[15]="2Tim";
CbookNames[16] = "提多書", EbookNames[16] = "Titus",				EbookAb[16]="Tit";
CbookNames[17] = "腓利門書", EbookNames[17] = "Philemon",		EbookAb[17]="Phlm";
CbookNames[18] = "希伯來書", EbookNames[18] = "Hebrews",			EbookAb[18]="Heb";
CbookNames[19] = "雅各書", EbookNames[19] = "James",				EbookAb[19]="Jas";
CbookNames[20] = "彼得前書", EbookNames[20] = "1 Peter",			EbookAb[20]="1Pet";
CbookNames[21] = "彼得後書", EbookNames[21] = "2 Peter",			EbookAb[21]="2Pet";
CbookNames[22] = "約翰一書", EbookNames[22] = "1 John",			EbookAb[22]="1John";
CbookNames[23] = "約翰二書", EbookNames[23] = "2 John", 			EbookAb[23]="2John";
CbookNames[24] = "約翰三書", EbookNames[24] = "3 John",			EbookAb[24]="3John";
CbookNames[25] = "猶大書", EbookNames[25] = "Jude",				EbookAb[25]="Jude";
CbookNames[26] = "啟示錄", EbookNames[26] = "Revelation",		EbookAb[26]="Rev";
var CbookAb = new Array(27);
CbookAb[0]  = "馬太";
CbookAb[1]  = "馬可";
CbookAb[2]  = "路加";
CbookAb[3]  = "約翰";
CbookAb[4]  = "行傳";
CbookAb[5]  = "羅馬";
CbookAb[6]  = "林前";
CbookAb[7]  = "林後";
CbookAb[8]  = "加拉太";
CbookAb[9]  = "以弗所";
CbookAb[10] = "腓立比";
CbookAb[11] = "歌羅西";
CbookAb[12] = "帖前";
CbookAb[13] = "帖後";
CbookAb[14] = "提前";
CbookAb[15] = "提後";
CbookAb[16] = "提多";
CbookAb[17] = "腓利門";
CbookAb[18] = "希伯來";
CbookAb[19] = "雅各";
CbookAb[20] = "彼前";
CbookAb[21] = "彼後";
CbookAb[22] = "約一";
CbookAb[23] = "約二";
CbookAb[24] = "約三";
CbookAb[25] = "猶大";
CbookAb[26] = "啟示錄";

function getBookName( idx){
	if(idx < 0)
		return "";
 	var bookNames;
	if( bookLan === 'E')
		return EbookAb[idx]; 
	else if( bookLan === 'C')
		return CbookAb[idx];
	else
		return t2s( CbookAb[idx]);
}
function BookIndex( book){
	for (i=0; i<EbookAb.length; i++) {
		if( book == EbookAb[i]){
			return i;
		}
	}
	return -1
}
function BookName( lang, bookAb){
	var idx = BookIndex( bookAb);
	if(idx < 0)
		return "";
 	var bookNames;
	if( lang === 'E')
		return EbookNames[idx]; 
	else if( lang === 'C')
		return CbookNames[idx];
	else
		return t2s( CbookNames[idx]);
}
function BookChapterNum(book){
	var i=BookIndex(book);
	if( i >= 0){
		return BookMaxArray[i].length;
	}else
		return -1;
}
function FillBooks( lang){
  var BookList = $('#bookCB')[0];
  var bookNames;
  localStorage.setItem('bookLanguage', lang );
  ClearList(BookList);

  for (i=0; i<EbookAb.length; i++) {
    var NewOption = new Option( getBookName(i), EbookAb[i], false,false);
    BookList.options[i] = NewOption;
  }
  FillChapters();
}
function FillChapters(){
  var BookList = $('#bookCB')[0];
  var ChapterList = $('#chapterCB')[0];
  
  ClearList(ChapterList);
  
  var NoChapters = BookMaxArray[BookList.selectedIndex][0];
  
  for (i=1; i<=NoChapters; i++) {
    var NewOption = new Option(i,""+i,false,false);
    n = ChapterList.length;
    ChapterList.options[n] = NewOption;
  }
  setSelByVal( 'chapterCB', "1");
  
  FillVerses();
}

function FillVerses(){
  var BookList = $('#bookCB')[0];
  var ChapterList = $('#chapterCB')[0];
  var VerseList = $('#verseCB')[0];
  var NoVerses;
  
  ClearList(VerseList);
  //console.log("FillVerses selected:"+BookList.selectedIndex);
  var s = BookMaxArray[BookList.selectedIndex];
  NoVerses = s[ChapterList.selectedIndex+1];//s[0] are the length
  
  for (var i=1; i<=NoVerses; i++) {
    var NewOption = new Option(i,""+i,false,false);
    var n = VerseList.length;
    VerseList.options[n] = NewOption;
  }
  
  setSelByVal( 'verseCB', "1");
}

function ClearList(L){
  if( L==null)
    return;
  for (var i=L.options.length-1; i>=0; i--)
    L.options[i] = null;
}