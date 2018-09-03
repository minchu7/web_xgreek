var etypeNames = ["Preposition","Conjunction","Interjection","parTicle"];
var typeBr = "pcbit";
var egenderNames = ["Masculine","Feminine","Neuter",""];
var genderBr = "mfn_";
var enumberNames = ["Singular","Plural"];
var numberBr = "sp";
var ecaseNames=["Nominative","Genitive","Dative","Accusative","Vocative","indeclinable"];
var caseBr = "ngdavx";
var eprNames=["","Relative","Demonstrative","Interrogative","indefinite","inTensive","reFlexive","reCiprocal","poSessive","correlative"];
var prBr="prdixtfcsk";
var evNames=["Indicative","iMperative","Subjunctive","Optative","iNfinitive","indeclinable","Participle"];
var vBr="imsonxp";
var etenseNames=["Present","Imperfect","Future","Aorist","perfect","pLuperfect"];
var tenseBr="pifaxl";
var evoiceNames=["Active","Middle","Passive","either mid/pass"];
var voiceBr="ampu";
var epersonNames=["1st person","2nd person","3rd person",""];
var personBr = "123-";
var edegreeNames=["Comparative","Superlative"];
var degreeBr = "cs";
var eadverBe = "adverBe\n";
var eNoun= "Noun\n";
var eAdjective = "Adjective\n";
var earticle= "Definite article\n";
var epRonoun= "pRonoun\n";
var eVerb= "Verb\n";

var ztypeNames = ["介詞","連接詞","感嘆詞","助詞"];
var zgenderNames = ["陽性","陰性","中性",""];
var znumberNames = ["單數","複數"];
var zcaseNames=["主格","所有格","間接受格","直接受格","呼格","不變"];
var zprNames=["","連接","指示","疑問","不定","強調","反身","相互","所有格","相關"];
var zvNames=["直說語氣","命令語氣","假設語氣","期待語氣","不定詞","不變","分詞"];
var ztenseNames=["現在式","不完成式","未來式","不定過去式","完成式","過去完成式"];
var zvoiceNames=["主動語態","關身語態","被動語態","關身/被動"];
var zpersonNames=["第一人稱","第二人稱","第三人稱",""];
var zdegreeNames=["比較級","最高級"];
var zadverBe = "副詞\n";
var zNoun= "名詞\n";
var zAdjective = "形容詞\n";
var zarticle= "定冠詞\n";
var zpRonoun= "代名詞\n";
var zVerb= "動詞\n";

var stypeNames = ["介词","连接词","感叹词","助词"];
var sgenderNames = ["阳性","阴性","中性",""];
var snumberNames = ["单数","复数"];
var scaseNames=["主格","所有格","间接受格","直接受格","呼格","不变"];
var sprNames=["","连接","指示","疑问","不定","强调","反身","相互","所有格","相关"];
var svNames=["直说语气","命令语气","假设语气","期待语气","不定词","不变","分词"];
var stenseNames=["现在式","不完成式","未来式","不定过去式","完成式","过去完成式"];
var svoiceNames=["主动语态","关身语态","被动语态","关身/被动"];
var spersonNames=["第一人称","第二人称","第三人称",""];
var sdegreeNames=["比较级","最高级"];
var sadverBe = "副词\n";
var sNoun= "名词\n";
var sAdjective = "形容词\n";
var sarticle= "定冠词\n";
var spRonoun= "代名词\n";
var sVerb= "动词\n";

var typeNames;
var genderNames;
var numberNames;
var caseNames;
var prNames;
var vNames;
var tenseNames;
var voiceNames;
var personNames;
var degreeNames;
var adverBe;
var Noun;
var Adjective;
var article;
var pRonoun;
var Verb;

function getCGN(code){
	var ret;
	var c = code.charAt(0);
	ret = getNameAlert( c, caseBr, caseNames);
	if( c == 'x')
	return ret;
	ret += getNameAlert( code.charAt(1), genderBr, genderNames);
	ret += getNameAlert( code.charAt(2), numberBr, numberNames);
	if( code.length > 3)
	ret += getNameAlert( code.charAt(3), degreeBr, degreeNames);
	return ret;
}
function getName( c, br, names){
	var i = br.indexOf(c);
	var ret = "";
	if( i >= 0)
	ret = names[i]+"\n";
	return ret;
}
function getNameAlert( c, br, names){
	var ret = getName( c, br, names);
	if( ret.length == 0)
	alert("Error:"+c+" Names:"+names);
	return ret;
}
function getTenseVoice( code){
	var ret = getNameAlert( code.charAt(0), tenseBr, tenseNames);
	ret += getNameAlert( code.charAt(1), voiceBr, voiceNames);
	return ret;
}
function morphDictionary(code){
	if( bookLan == "C"){
		typeNames = ztypeNames;
		genderNames = zgenderNames;
		numberNames = znumberNames;
		caseNames = zcaseNames;
		prNames = zprNames;
		vNames = zvNames;
		tenseNames = ztenseNames;
		voiceNames = zvoiceNames;
		personNames = zpersonNames;
		degreeNames = zdegreeNames;
		adverBe = zadverBe;
		Noun = zNoun;
		Adjective = zAdjective;
		article = zarticle;
		pRonoun = zpRonoun;
		Verb = zVerb;
	}else if( bookLan == "S"){
		typeNames = stypeNames;
		genderNames = sgenderNames;
		numberNames = snumberNames;
		caseNames = scaseNames;
		prNames = sprNames;
		vNames = svNames;
		tenseNames = stenseNames;
		voiceNames = svoiceNames;
		personNames = spersonNames;
		degreeNames = sdegreeNames;
		adverBe = sadverBe;
		Noun = sNoun;
		Adjective = sAdjective;
		article = sarticle;
		pRonoun = spRonoun;
		Verb = sVerb;
	}else{
		typeNames = etypeNames;
		genderNames = egenderNames;
		numberNames = enumberNames;
		caseNames = ecaseNames;
		prNames = eprNames;
		vNames = evNames;
		tenseNames = etenseNames;
		voiceNames = evoiceNames;
		personNames = epersonNames;
		degreeNames = edegreeNames;
		adverBe = eadverBe;
		Noun = eNoun;
		Adjective = eAdjective;
		article = earticle;
		pRonoun = epRonoun;
		Verb = eVerb;
	}
	var ret="";
	switch(code.charAt(0)){
		case 'b':
			ret = adverBe;
			if( code.length > 1)
			ret += getNameAlert( code.charAt(1), degreeBr, degreeNames);;
			break;
		case 'n':
			ret = Noun;
			ret += getCGN( code.substring(1));
			break;
		case 'a':
			ret = Adjective;
			ret += getCGN( code.substring(1));
			break;
		case 'd':
			ret = article;
			ret += getCGN( code.substring(1));
			break;
		case 'r':
			ret = pRonoun;
			ret += getNameAlert( code.charAt(1), prBr, prNames);
			ret += getNameAlert( code.charAt(2), personBr, personNames);
			ret += getCGN( code.substring(3));
			break;
		case 'v':
			ret = Verb;
			var c = code.charAt(1);
			var mood = getNameAlert( c, vBr, vNames);
			if( c != 'x'){
				var tv = getTenseVoice( code.substring(2));
				ret += mood+tv;
				if( c == 'p'){
					ret += getCGN( code.substring(5));//skip dash in the midle
				}else if(c != 'n'){
					ret += getNameAlert(code.charAt(4),personBr,personNames);
					ret += getNameAlert(code.charAt(5),numberBr,numberNames);
				}
			}
			break;
		default:
			ret = getNameAlert( code.charAt(0), typeBr, typeNames);
			break;
	}
	return ret;
}
function errorHandler(transaction, error) {
	alert('Oops. Error was '+error.message+' (Code '+error.code+')');
	return true;
}
