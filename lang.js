/**
 *
 * @param language The language to use
 * @param replaceText If true, replace all the occurency marked with placemark {lang=<key>}
 */
var translArrGram= {
        en:{
			Grammar : "Grammar"
			, Back : "Back"
			, Language : "Language:"
			, pageTitle : "Greek Morphology Codes : Ten Parts of Speech"
			, gotoPronunciation : "(go to Pronunciation Page)"
			, Preposition : "Preposition"
			, Conjunction : "Conjunction"
			, parTicle : "parTicle"
			, Interjection : "Interjection"
			, adverB : "adverB"
			, Degree : "Degree"
			, pRonoun : "pRonoun"
			, Personal : "Personal"
        	, person1 : "1st person"
        	, person2 : "2nd person"
        	, person3 : "3rd person"
        	, Relative : "Relative"
        	, Demonstrative : "Demonstrative"
        	, interroGative : "Interrogative"
        	, Indefinite : "indefinite"
        	, inTensive : "inTensive"
        	, refleXive : "reFlexive"
        	, reCiprocal : "reCiprocal"
        	, poSessive : "poSessive"
        	, correlative : "correlative"
        	, Gender : "Gender"
        	, Case : "Case"
        	, Number : "Number"
        	, Degree : "Degree(For Adj only)"
        	, Nominative : "Nominative"
        	, Masculine : "Masculine"
        	, Singular : "Singular"
        	, Comparative : "Comparative"
        	, Genitive : "Genitive"
        	, Feminine : "Feminine"
        	, Plural : "Plural"
        	, Superlative : "Superlative"
        	, Dative : "Dative"
        	, Neuter : "Neuter"
        	, Accusative : "Accusative"
        	, Vocative : "Vocative"
        	, indeclinable : "indeclinable"
        	, Noun : "Noun"
        	, Definitearticle : "Definite article"
        	, Adjective : "Adjective"
        	, Verb : "Verb"
        	, Mode : "Mode"
        	, Tense : "Tense"
        	, Voice : "Voice"
        	, Indicative : "Indicative"
        	, Present : "Present"
        	, Active : "Active"
        	, iMperative : "iMperative"
        	, Imperfect : "Imperfect"
        	, Middle : "Middle"
        	, Subjunctive : "Subjunctive"
        	, Future : "Future"
        	, Passive : "Passive"
        	, Optative : "Optative"
        	, Aorist : "Aorist"
        	, mid_pass : "either mid/pass"
        	, none : "none"
        	, perfect : "perfect"
        	, Participle : "Participle"
        	, pLuperfect : "pLuperfect"
        	, ParticipleExt : "+ (Participle continued with Case Gender Number)"
        	, iNfinitive : "iNfinitive"
        	, ModeExpl : "The speaker expresses his different expectation of the action. Only include first four items."
        	, IndicativeExpl : "a definite of fact or an actual occurrence."
        	, iMperativeExpl : "a command or instruction given to the hearer."
        	, SubjunctiveExpl : "Express a possible action that might happen."
        	, OptativeExpl : "a wish or hope for a certain action to occur."
        	, iNfinitiveExpl : "verbal noun."
        	, ParticipleExpl : "verbal adjective, adverb or noun, which includes subject information."
        	, indeclinableExpl : "foreign language origin."
        	, TenseExpl : "Fixes verbal action with regard to time and aspect."
        	, PresentExpl : "Continuous action in the present. \"I am washing.\""
        	, ImperfectExpl : "Continuous action going on in past time. \"I was washing.\""
        	, FutureExpl : "Expresses action in the future. \"I shall wash.\""
        	, AoristExpl : "Expresses action as a point and not over a period of time. \"I washed\""
        	, perfectExpl : "Expresses the results of the action to continue to exist. \"I have washed\""
        	, pLuperfectExpl : "Expresses continuance of the completed state in past time up to a prescribed limit in the past. \"I had washed\""
        	, VoiceExpl : "This part of the verb relates the verbal action to the subject."
        	, ActiveExpl : "The active voice represents the subject as acting."
        	, MiddleExpl : "The middle voice represents the subject as acting with reference to himself."
        	, PassiveExpl : "The passive voice represents the subject as acted upon."
			, mid_passExpl : "Either middle or passive, often translated into active. "
        	, noteVerb : "* The single letter is a short hand notation for the part of the verb it represents."
			
        	, NominativeExpl : "is the case of the subject. Root idea is designation."
        	, GenitiveExpl : "is the case of possession \"of\"; origin or separation, \"from\"."
        	, DativeExpl : "is the case of personal interest, corresponding to the English 'to'/'for', indirect object, \"to\"; location \"in\", \"at\"; instrument, \"with\"."
        	, AccusativeExpl : "is the case of extension, corresponding to the direct object. Root idea is limitation; motion toward; time: \"how long\"."
        	, VocativeExpl : "is the case of direct address."
        	, noteNoun : "A noun does not express action of any kind. Mood is not relevant to a noun. To try to use a noun as a verb is to abandon any certainty of that action being completed. Example is “Faith”. Faith commonly used as a verb which is not possible."
        	, PrepositionHtml : '	<b >'
			+'	Greek Prepositional Means Classified <a href="http://www.bcbsr.com/greek/gprep.html" target="_blank">(go to more details)</a>'
			+'</b>'
			+'<table border="1" style="border-collapse: collapse;">'
			+'	<tbody>'
			+'		<tr>'
			+'			<td>Word+Strong&rsquo;s</td><td>Direction</td><td>Position</td><td>Relation</td><td>Agency</td><td>Means</td><td>Cause</td><td>Association</td><td>Purpose</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>ἀνά<a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G303">303</a></td>'
			+'			<td>up</td><td>in, by</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'
			+'		<tr>'
			+'			<td>ἀντί <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G473">473</a></td>'
			+'			<td>&nbsp;</td><td>&nbsp;</td><td>In exchange for, instead of, for</td><td>&nbsp;</td><td>&nbsp;</td><td>Because of</td><td>&nbsp;</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>ἀπό <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G575">575</a></td>'
			+'			<td>from</td><td>&nbsp;</td><td>For</td><td>by</td><td>&nbsp;</td><td>On account of</td><td>&nbsp;</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr><td>διά <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G1223">1223</a></td>'
			+'			<td>through</td><td>&nbsp;</td><td>For</td><td>by</td><td>through, by means of</td><td>because of</td><td>&nbsp;</td><td>for the sake of</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>εἰς <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G1519">1519</a></td>'
			+'			<td>into, unto, to</td><td>in, among, upon</td><td>as, for, against, in respect to</td><td>&nbsp;</td><td>&nbsp;</td><td>because of</td><td>&nbsp;</td><td>for the purpose of</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>ἐκ <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G1537">1537</a></td>'
			+'			<td>out of</td><td>On</td><td></td><td>&nbsp;</td><td>by means of</td><td>because of</td><td>&nbsp;</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>ἐν <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G1722">1722</a></td>'
			+'			<td>in</td><td>in, within</td><td>in, as, for</td><td></td><td>by, with</td><td>because of</td><td>with</td><td>for, in order to, to</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>ἐπί <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G1909">1909</a></td>'
			+'			<td>up to</td><td>upon, at, on, in, by, before, over</td><td>against, after time of</td><td>&nbsp;</td><td>&nbsp;</td><td>on account of</td><td>&nbsp;</td><td>for</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>κατά <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G2596">2596</a></td>'
			+'			<td>along, down, Upon, throughout</td><td>down, from, upon, at, in, by, before</td><td>according to, with reference to</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>μετά <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G3326">3326</a></td>'
			+'			<td>&nbsp;</td><td>&nbsp;</td><td>After</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>with</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>παρά <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G3844">3844</a></td>'
			+'			<td>beyond, to the side of, from</td><td>beside, before</td><td>contrary to</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>with</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>περί <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G4012">4012</a>'
			+'			</td><td>around, about</td><td>&nbsp;</td><td>in behalf of, concerning, about</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>with</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>πρό <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G4253">4253</a></td>'
			+'			<td>&nbsp;</td><td>before</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>πρός <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G4314">4314</a></td>'
			+'			<td>to, toward </td><td>at, on, beside</td><td>against, for, pertaining to</td><td>&nbsp;</td><td>by means of</td><td>on account of</td><td>with</td><td>for</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>σύν <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G4862">4862</a></td>'
			+'			<td>&nbsp;</td><td>&nbsp;</td><td>besides</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>with</td><td>&nbsp;</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>ὑπέρ <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G5228">5228</a></td>'
			+'			<td>beyond</td><td>over, above</td><td>concerning, for, instead of, on behalf of</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>for the sake of</td>'
			+'		</tr>'
			+'		<tr>'
			+'			<td>ὑπό <a target="_blank" href="https://www.blueletterbible.org/lang/lexicon/lexicon.cfm?page=1&strongs=G5259">5259</a></td>'
			+'			<td>&nbsp;</td><td>under</td><td>&nbsp;</td><td>by</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>'
			+'		</tr>'
			+'	</tbody>'
			+'</table>'
			+'&ldquo;Prepositional Means Classified&rdquo; Page 114 &ldquo;A Manual Grammar of the Greek New Testament&rdquo; by H. E. Dana, J. R. Mantey'
        }
        ,zh:{
			Grammar : "文法"
			, Back : "退回"
			, pageTitle : "字彙分析編碼（Morphology Codes） ： 十大詞態（Parts of Speech）"
			, gotoPronunciation : "（去發音網頁）"
			, Preposition : "介詞(Preposition)"
			, Conjunction : "連接詞(Conjunction)"
			, parTicle : "助詞(parTicle)"
			, Interjection : "感嘆詞(Interjection)"
			, adverB : "副詞(adverB)"
			, Degree : "級別(Degree)"
			, pRonoun : "代名詞(pRonoun)"
        	, Personal : "人稱(Personal)"
        	, person1 : "第一"
        	, person2 : "第二"
        	, person3 : "第三"
        	, Relative : "連接(Relative)"
        	, Demonstrative : "指示(Demonstrative)"
        	, interroGative : "疑問(interroGative)"
        	, Indefinite : "不定(Indefinite)"
        	, inTensive : "強調(inTensive)"
        	, refleXive : "反身(refleXive)"
        	, reCiprocal : "相互(reCiprocal)"
        	, poSessive : "所有格(poSessive)"
        	, correlative : "相關(correlative)"
        	, Gender : "性"
        	, Case : "格"
        	, Number : "數"
        	, Degree : "級別(只為副詞)"
        	, Nominative : "主格(Nominative)"
        	, Masculine : "陽性(Masculine)"
        	, Singular : "單數(Singular)"
        	, Comparative : "比較級(Comparative)"
        	, Genitive : "所有格(Genitive)"
        	, Feminine : "陰性(Feminine)"
        	, Plural : "複數(Plural)"
        	, Superlative : "最高級(Superlative)"
        	, Dative : "間接受格(Dative)"
        	, Neuter : "中性(Neuter)"
        	, Accusative : "直接受格(Accusative)"
        	, Vocative : "呼格(Vocative)"
        	, indeclinable : "不變(indeclinable)"
			, Noun : "名詞(Noun)"
        	, Definitearticle : "定冠詞(Definite article)"
        	, Adjective : "形容詞(Adjective)"
        	, Verb : "動詞(Verb)"
        	, Mode : "語氣(Mode)"
        	, Tense : "時態(Tense)"
        	, Voice : "語態(Voice)"
        	, Indicative : "直說(Indicative)"
        	, Present : "現在式(Present)"
        	, Active : "主動(Active)"
        	, iMperative : "命令(iMperative)"
        	, Imperfect : "不完成式(Imperfect)"
        	, Middle : "關身(Middle)"
        	, Subjunctive : "假設(Subjunctive)"
        	, Future : "未來式(Future)"
        	, Passive : "被動(Passive)"
        	, Optative : "期待(Optative)"
        	, Aorist : "不定過去式(Aorist)"
        	, mid_pass : "關身/被動"
        	, none : "無"
        	, perfect : "完成(perfect)"
        	, Participle : "分詞(Participle)"
        	, pLuperfect : "過去完成(pLuperfect)"
        	, ParticipleExt : "+ (分詞後面加+格Case 性Gender 數Number)"
        	, ModeExpl : "說話者表達自己對於動作實現的不同期待，只包括前四項。。"
        	, IndicativeExpl : "表達一件確定的事實。"
        	, iMperativeExpl : "給聽話者的命令或指示。"
        	, SubjunctiveExpl : "表達一件可能、但不太確定會發生的動作。"
        	, OptativeExpl : "期待某一動作的發生。"
        	, iNfinitiveExpl : "「動作的名詞」(verbal noun)，兼具動詞和名詞的文法特性。"
        	, ParticipleExpl : "動詞帶同主詞當作形容詞、副詞或名詞使用。"
        	, indeclinableExpl : "多為外來語。"

        	, iNfinitive : "不定詞(iNfinitive)"
        	, TenseExpl : "指動作發生的時間"
        	, PresentExpl : "持續到現在的動作"
        	, ImperfectExpl : "說話者認為是一個過去發生、且持續進行到將來的動作，可翻譯成「一直」。"
        	, FutureExpl : "可以表示「將來」。可翻譯成「必」，「將」"
        	, AoristExpl : "過去某一時間點發生過一次的動作；不重時間，重在動作本身，可翻譯成「曾」，「有過」"
			, perfectExpl : "說話者認為當時一個已經完成動作，現在仍然持續影響，未來是否繼續沒有說明，可翻譯成「已經」。"
			, pLuperfectExpl : "說話者認為「過去」一個已經完成動作，現在仍然持續影響，意思與完成時態類似。"
			, VoiceExpl : "指動詞和受詞的關系。"
        	, ActiveExpl : "主詞加動作於受詞。"
        	, MiddleExpl : "主詞主動加動作於受詞，翻譯時可在動詞前加上「自己」、「親自」。"
        	, PassiveExpl : "受詞加動作於主詞，翻譯時可在動詞前加上「被」。"
			, mid_passExpl : "關身或被動，常被翻譯成主動。"
        	, noteVerb : "註：這裡用英文字母為各種詞態的代號。"
        	, NominativeExpl : "動作的發起者"
        	, GenitiveExpl : "是「誰的」、「屬誰」、「關於誰」的意思。"
        	, DativeExpl : "動作的間接對象，或受到動作影響的人物。"
        	, AccusativeExpl : "動作的主要對象，或最先受到動作影響的人物。"
        	, VocativeExpl : "是為了讓人注意。"
        	, noteNoun : "名詞不表示任何形式的行為，或情緒。"
			, PrepositionHtml :
				'<div class="gramma">'
				+'	<b >介系詞：</b>會因為後面跟著的名詞詞性而有不同翻譯。'
				+'	<table class="borderTbl"><tbody>'
				+'		<tr><td></td><td>直接受格</td><td>間接受格</td><td>所有格</td></tr>'
				+'		<tr><td>ἀνά'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=303">303</a></td>'
				+'				<td>之上，向上，依照（數字）,每個</td><td></td><td></td></tr>'
				+'		<tr><td>ἀντί'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=473">473</a></td>'
				+'				<td></td><td></td><td>代替，為，反</td></tr>'
				+'		<tr><td>ἀπό'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=575">575</a></td>'
				+'				<td></td><td></td><td>從…而來</td></tr>'
				+'		<tr><td>διά'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1223">1223</a></td>'
				+'				<td>因為</td><td></td><td>藉著，通過</td></tr>'
				+'		<tr><td>εἰς'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1519">1519</a></td>'
				+'				<td>進入、直到</td><td></td><td></td></tr>'
				+'		<tr><td>ἐκ'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1537">1537</a></td>'
				+'				<td></td><td></td><td>從…出來、脫離、之中、因為</td></tr>'
				+'		<tr><td>ἐν'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1722">1722</a></td>'
				+'				<td></td><td>在…裡面，藉著、穿</td><td></td></tr>'
				+'		<tr><td>ἐπί'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1909">1909</a></td>'
				+'				<td>對著、在…裡或之中</td><td>旁邊</td><td>在…上面</td></tr>'
				+'		<tr><td>κατά'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=2596">2596</a></td>'
				+'				<td>對抗、根據</td><td></td><td></td></tr>'
				+'		<tr><td>μετά'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=3326">3326</a></td>'
				+'				<td>之後</td><td></td><td>與…一起</td></tr>'
				+'		<tr><td>παρά'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=3844">3844</a></td>'
				+'				<td>並行</td><td>之旁</td><td>從誰而來</td></tr>'
				+'		<tr><td>περί'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4012">4012</a></td>'
				+'				<td>周圍</td><td></td><td>關於</td></tr>'
				+'		<tr><td>πρό'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4253">4253</a></td>'
				+'				<td></td><td></td><td>在…之前</td></tr>'
				+'		<tr><td>πρός'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4314">4314</a></td>'
				+'				<td>向著，到…那裡</td><td>圍繞</td><td></td></tr>'
				+'		<tr><td>σύν'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4862">4862</a></td>'
				+'				<td></td><td>與…一起</td><td></td></tr>'
				+'		<tr><td>ὑπέρ'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=5228">5228</a></td>'
				+'				<td>之上</td><td></td><td>為了</td></tr>'
				+'		<tr><td>ὑπό'
				+'				<a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=5259">5259</a></td>'
				+'				<td>之下</td><td></td><td>藉著（所），</td></tr>'
				+'	</tbody></table>'
				+'	<img border="0" src="greekpict.GIF" width="433" height="441" align="left">'
				+'</div>'
		}
		,sc:{
			Grammar : "文法"
			, Back : "退回"
			, pageTitle : "字汇分析编码（Morphology Codes） ： 十大词态（Parts of Speech）"
			, gotoPronunciation : "（去发音网页）"
			, Preposition : "介词(Preposition)"
			, Conjunction : "连接词(Conjunction)"
			, parTicle : "助词(parTicle)"
			, Interjection : "感叹词(Interjection)"
			, adverB : "副词(adverB)"
			, Degree : "级别(Degree)"
			, pRonoun : "代名词(pRonoun)"
	        , Personal : "人称(Personal)"
	        , person1 : "第一"
	        , person2 : "第二"
	        , person3 : "第三"
	        , Relative : "连接(Relative)"
	        , Demonstrative : "指示(Demonstrative)"
	        , interroGative : "疑问(interroGative)"
	        , Indefinite : "不定(Indefinite)"
	        , inTensive : "强调(inTensive)"
	        , refleXive : "反身(refleXive)"
	        , reCiprocal : "相互(reCiprocal)"
	        , poSessive : "所有格(poSessive)"
	        , correlative : "相关(correlative)"
	        , Gender : "性"
	        , Case : "格"
	        , Number : "数"
	        , Degree : "级别(只为副词)"
	        , Nominative : "主格(Nominative)"
	        , Masculine : "阳性(Masculine)"
	        , Singular : "单数(Singular)"
	        , Comparative : "比较级(Comparative)"
	        , Genitive : "所有格(Genitive)"
	        , Feminine : "阴性(Feminine)"
	        , Plural : "复数(Plural)"
	        , Superlative : "最高级(Superlative)"
	        , Dative : "间接受格(Dative)"
	        , Neuter : "中性(Neuter)"
	        , Accusative : "直接受格(Accusative)"
	        , Vocative : "呼格(Vocative)"
	        , indeclinable : "不变(indeclinable)"
			, Noun : "名词(Noun)"
	        , Definitearticle : "定冠词(Definite article)"
	        , Adjective : "形容词(Adjective)"
	        , Verb : "动词(Verb)"
	        , Mode : "语气(Mode)"
	        , Tense : "时态(Tense)"
	        , Voice : "语态(Voice)"
	        , Indicative : "直说(Indicative)"
	        , Present : "现在式(Present)"
	        , Active : "主动(Active)"
	        , iMperative : "命令(iMperative)"
	        , Imperfect : "不完成式(Imperfect)"
	        , Middle : "关身(Middle)"
	        , Subjunctive : "假设(Subjunctive)"
	        , Future : "未来式(Future)"
	        , Passive : "被动(Passive)"
	        , Optative : "期待(Optative)"
	        , Aorist : "不定过去式(Aorist)"
	        , mid_pass : "关身/被动"
	        , none : "无"
	        , perfect : "完成(perfect)"
	        , Participle : "分词(Participle)"
	        , pLuperfect : "过去完成(pLuperfect)"
	        , ParticipleExt : "+ (分词后面加+格Case 性Gender 数Number)"
	        , ModeExpl : "说话者表达自己对于动作实现的不同期待，只包括前四项。。"
	        , IndicativeExpl : "表达一件确定的事实。"
	        , iMperativeExpl : "给听话者的命令或指示。"
	        , SubjunctiveExpl : "表达一件可能、但不太确定会发生的动作。"
	        , OptativeExpl : "期待某一动作的发生。"
	        , iNfinitiveExpl : "「动作的名词」(verbal noun)，兼具动词和名词的文法特性。 "
	        , ParticipleExpl : "动词带同主词当作形容词、副词或名词使用。"
	        , indeclinableExpl : "多为外来语。"

	        , iNfinitive : "不定词(iNfinitive)"
	        , TenseExpl : "指动作发生的时间"
	        , PresentExpl : "持续到现在的动作"
	        , ImperfectExpl : "说话者认为是一个过去发生、且持续进行到将来的动作，可翻译成「一直」。 "
	        , FutureExpl : "可以表示「将来」。可翻译成「必」，「将」"
	        , AoristExpl : "过去某一时间点发生过一次的动作；不重时间，重在动作本身，可翻译成「曾」，「有过」"
			, perfectExpl : "说话者认为当时一个已经完成动作，现在仍然持续影响，未来是否继续没有说明，可翻译成「已经」。 "
			, pLuperfectExpl : "说话者认为「过去」一个已经完成动作，现在仍然持续影响，意思与完成时态类似。 "
			, VoiceExpl : "指动词和受词的关系。"
	        , ActiveExpl : "主词加动作于受词。"
	        , MiddleExpl : "主词主动加动作于受词，翻译时可在动词前加上「自己」、「亲自」。 "
	        , PassiveExpl : "受词加动作于主词，翻译时可在动词前加上「被」。 "
			, mid_passExpl : "关身或被动，常被翻译成主动。"
	        , noteVerb : "注：这里用英文字母为各种词态的代号。"
	        , NominativeExpl : "动作的发起者"
	        , GenitiveExpl : "是「谁的」、「属谁」、「关于谁」的意思。 "
	        , DativeExpl : "动作的间接对象，或受到动作影响的人物。"
	        , AccusativeExpl : "动作的主要对象，或最先受到动作影响的人物。"
	        , VocativeExpl : "是为了让人注意。"
	        , noteNoun : "名词不表示任何形式的行为，或情绪。"
			, PrepositionHtml :
				'<div class="gramma">'
				+' <b >介系词：</b>会因为后面跟着的名词词性而有不同翻译。 '
				+' <table class="borderTbl"><tbody>'
				+' <tr><td></td><td>直接受格</td><td>间接受格</td><td>所有格</td></tr>'
				+' <tr><td>ἀνά'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=303">303</a></td>'
				+' <td>之上，向上，依照（数字）,每个</td><td></td><td></td></tr>'
				+' <tr><td>ἀντί'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=473">473</a></td>'
				+' <td></td><td></td><td>代替，为，反</td></tr>'
				+' <tr><td>ἀπό'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=575">575</a></td>'
				+' <td></td><td></td><td>从…而来</td></tr>'
				+' <tr><td>διά'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1223">1223</a></td>'
				+' <td>因为</td><td></td><td>借着，通过</td></tr>'
				+' <tr><td>εἰς'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1519">1519</a></td>'
				+' <td>进入、直到</td><td></td><td></td></tr>'
				+' <tr><td>ἐκ'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1537">1537</a></td>'
				+' <td></td><td></td><td>从…出来、脱离、之中、因为</td></tr>'
				+' <tr><td>ἐν'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1722">1722</a></td>'
				+' <td></td><td>在…里面，借着、穿</td><td></td></tr>'
				+' <tr><td>ἐπί'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=1909">1909</a></td>'
				+' <td>对着、在…里或之中</td><td>旁边</td><td>在…上面</td></tr>'
				+' <tr><td>κατά'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=2596">2596</a></td>'
				+' <td>对抗、根据</td><td></td><td></td></tr>'
				+' <tr><td>μετά'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=3326">3326</a></td>'
				+' <td>之后</td><td></td><td>与…一起</td></tr>'
				+' <tr><td>παρά'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=3844">3844</a></td>'
				+' <td>并行</td><td>之旁</td><td>从谁而来</td></tr>'
				+' <tr><td>περί'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4012">4012</a></td>'
				+' <td>周围</td><td></td><td>关于</td></tr>'
				+' <tr><td>πρό'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4253">4253</a></td>'
				+' <td></td><td></td><td>在…之前</td></tr>'
				+' <tr><td>πρός'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4314">4314</a></td>'
				+' <td>向着，到…那里</td><td>围绕</td><td></td></tr>'
				+' <tr><td>σύν'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=4862">4862</a></td>'
				+' <td></td><td>与…一起</td><td></td></tr>'
				+' <tr><td>ὑπέρ'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=5228">5228</a></td>'
				+' <td>之上</td><td></td><td>为了</td></tr>'
				+' <tr><td>ὑπό'
				+' <a target="_blank" href="http://bible.fhl.net/new/s.php?N=0&m=&k=5259">5259</a></td>'
				+' <td>之下</td><td></td><td>借着（所），</td></tr>'
				+' </tbody></table>'
				+' <img border="0" src="greekpict.GIF" width="433" height="441" align="left">'
				+' </div>'
		}
	}
var translArr = {
        en:{
			Settings : "Settings"
			, NeedText : "Need search text!"
			, MoreRows : "Click here for more verses."
			, FindText : "Find Text"
			, Words : "word(s)"
			, FoundVerses : "Found Verse(s)"
			, History : "History"
			, None : "None"
			, Actions : "Actions"
			, ChooseAction : "Choose an action"
			, Grammar : "Grammar"
			, PreviousChapter : "Previous Chapter"
			, NextChapter : "Next Chapter"
			, ParalletView : "Parallel View"
			, Interlinear : "Interlinear"
			, Back : "Back"
			, Language : "Language:"
			, book : "Book:"
			, chapter : "Chapter:"
			, verse : "Verse:"
			, Go_to_Verse : "Go to Verse"
			, Arrange_display_layout : "Arrange display layout:"
			, Show_new_setting : "Apply"
			, Line1 : "Line1"
        	, Line2 : "Line2"
        	, Line3 : "Line3"
        	, Line4 : "Line4"
        	, Line5 : "Line5"
        	, Line6 : "Line6"
        	, Line7 : "Line7"
        	, Line8 : "Line8"
        	, Line9 : "Line9"
        	, Line10 : "Line10"
        	, Line11 : "Line11"
        	, Line12 : "Line12"
        }
        ,zh:{
			Settings : "設定"
			, NeedText : "需要搜索字！"
			, MoreRows : "點擊此處查看更多相關經文。"
			, FindText : "經文查詢"
			, Words : "關鍵字串"
			, FoundVerses : "相關經節"
			, History : "已讀經節"
			, None : "無"
			, Actions : "選項"
			, ChooseAction : "選擇下一頁面"
			, Grammar : "文法"
			, PreviousChapter : "前一章"
			, NextChapter : "下一章"
			, ParalletView : "平行對照"
			, Interlinear : "希語逐字對照"
			, Back : "退回"
			, Language : "語言:"
			, book : "書名:"
			, chapter : "章數:"
			, verse : "節數:"
			, Go_to_Verse : "顯示經文"
			, Arrange_display_layout : "設定顯示順序:"
        	, Show_new_setting : "顯示新設定"
			, Line1 : "第一行"
			, Line2 : "第二行"
			, Line3 : "第三行"
			, Line4 : "第四行"
			, Line5 : "第五行"
			, Line6 : "第六行"
			, Line7 : "第七行"
			, Line8 : "第八行"
			, Line9 : "第九行"
			, Line10 : "第十行"
        	, Line11 : "第十一行"
        	, Line12 : "第十二行"
		}
        ,sc:{
			Settings : "设定"
			, NeedText : "需要搜索字！"
			, MoreRows : "点击此处查看更多相关经文。"
			, FindText : "经文查询"
			, Words : "关键字串"
			, FoundVerses : "相关经节"
			, History : "已读经节"
			, None : "无"
			, Actions : "选项"
			, ChooseAction : "选择下一页面"
			, Grammar : "文法"
			, PreviousChapter : "前一章"
			, NextChapter : "下一章"
			, ParalletView : "平行对照"
			, Interlinear : "希语逐字对照"
			, Back : "退回"
			, Language : "语言:"
			, book : "书名:"
			, chapter : "章数:"
			, verse : "节数:"
			, Go_to_Verse : "显示经文"
			, Arrange_display_layout : "设定显示顺序:"
			        , Show_new_setting : "显示新设定"
			, Line1 : "第一行"
			, Line2 : "第二行"
			, Line3 : "第三行"
			, Line4 : "第四行"
			, Line5 : "第五行"
			, Line6 : "第六行"
			, Line7 : "第七行"
			, Line8 : "第八行"
			, Line9 : "第九行"
			, Line10 : "第十行"
	        , Line11 : "第十一行"
	        , Line12 : "第十二行"
        }
    };
function Lang(language, tranA){
    var Languages = tranA;
    // GENERAL SETTINGS
    var LANG_CURRENT = "en";
    if(language == "C")
		LANG_CURRENT = "zh";
	else if( language == "S")
		LANG_CURRENT = "sc";

    var LANG_DEFAULT = 'en';

    /**
     * All the html elements with this attributes are translated on the fly
     */
    var LANG_ATTRIBUTE_NAME = "uilang"
	var LANG_HTML_NAME = "uihtml"

    /**
     * key è la chiave da usare nell'oggetto LANG
     * @param key
     */
    this.get = function(key){
        return Languages[LANG_CURRENT][key] || Languages[LANG_DEFAULT][key];
    }

    /**
     * Cerco tutti gli elementi che hanno una certa classe
     */
    this.searchAndReplace = function(){
        var me = this;
        var divs = $('*[' + LANG_ATTRIBUTE_NAME + ']');
        $.each(divs,function(indx,item){
            item = $(item);
            var txt = me.get(item.attr(LANG_ATTRIBUTE_NAME));
            item.text( txt);
        });
        var html = $('*[' + LANG_HTML_NAME + ']');
        $.each(html,function(indx,item){
            item = $(item);
            var txt = me.get(item.attr(LANG_HTML_NAME));
            item.html( txt);
        });
    }
    this.setLanguage = function(language, replaceText){
        LANG_CURRENT = language;
        if(replaceText){
            this.searchAndReplace();
        }
    }
    this.searchAndReplace();
}

var toGr=
   "αααααααααααααααα"
 + "εεεεεε  εεεεεε  "  
 + "ηηηηηηηηηηηηηηηη"
 + "ιιιιιιιιιιιιιιιι"
 + "οοοοοο  οοοοοο  "
 + "υυυυυυυυ υ υ υ υ"
 + "ωωωωωωωωωωωωωωωω"
 + "ααεεηηιιοουυωω  "
 + "αααααααααααααααα"
 + "ηηηηηηηηηηηηηηηη"
 + "ωωωωωωωωωωωωωωωω"
 + "ααααα ααααααα   "
 + "  ηηη ηηηηηηη   "
 + "ιιιι  ιιιιιι    "
 + "υυυυρρυυυυυυρ   "
 + "  ωωω ωωωωωωω   ";
var orgGr=
   "ἀἁἂἃἄἅἆἇἈἉἊἋἌἍἎἏ"
 + "ἐἑἒἓἔἕ  ἘἙἚἛἜἝ  "
 + "ἠἡἢἣἤἥἦἧἨἩἪἫἬἭἮἯ"
 + "ἰἱἲἳἴἵἶἷἸἹἺἻἼἽἾἿ"
 + "ὀὁὂὃὄὅ  ὈὉὊὋὌὍ  "
 + "ὐὑὒὓὔὕὖὗ Ὑ Ὓ Ὕ Ὗ"
 + "ὠὡὢὣὤὥὦὧὨὩὪὫὬὭὮὯ"
 + "ὰάὲέὴήὶίὸόὺύὼώ  "
 + "ᾀᾁᾂᾃᾄᾅᾆᾇᾈᾉᾊᾋᾌᾍᾎᾏ"
 + "ᾐᾑᾒᾓᾔᾕᾖᾗᾘᾙᾚᾛᾜᾝᾞᾟ"
 + "ᾠᾡᾢᾣᾤᾥᾦᾧᾨᾩᾪᾫᾬᾭᾮᾯ"
 + "ᾰᾱᾲᾳᾴ ᾶᾷᾸᾹᾺΆᾼ᾽ι᾿"
 + "῀῁ῂῃῄ ῆῇῈΈῊΉῌ῍῎῏"
 + "ῐῑῒΐ  ῖῗῘῙῚΊ ῝῞῟"
 + "ῠῡῢΰῤῥῦῧῨῩῪΎῬ῭΅`"
 + "  ῲῳῴ ῶῷῸΌῺΏῼ´῾ ";
function polyG2monoG( txt){
	var ret = "";
	for( var i=0; i < txt.length; i++){
		 var ch = txt.charAt(i);
		 if( txt.charCodeAt(i) >= 0x1F00){
		 	var idx = orgGr.indexOf( ch);
		 	if( idx > -1){
				ch = toGr.charAt(idx);
			}
		 	
		 }
		 ret += ch;
	}
	return ret;
}
var synth;
function speakOff(){
	if( typeof synth !== "undefined")
		synth.cancel();
}
function speakGr( txt) {
	var outTxt = polyG2monoG( txt);
	if( outTxt.length == 0)
		return;
	var utterThis = new SpeechSynthesisUtterance(outTxt);
	if( typeof synth === "undefined"){
		if( typeof ASpeechSynthesis !== "undefined")
    	    synth = new ASpeechSynthesis();
    	else
    	    synth = window.speechSynthesis;
    }
    var voices = synth.getVoices();
	try{
		//out = "";
		for(i = 0; i < voices.length ; i++) {
			//out+=voices[i].lang+"\n";
			console.log(voices[i].lang);
			if(voices[i].lang=="el-GR" || voices[i].lang=="el_GR"){
				utterThis.rate = 0.5
				//utterThis.voice = voices[i];
				utterThis.lang = voices[i].lang;
				synth.speak(utterThis);
				//alert("Speak done.");
				return;
			}
		};
		if( typeof IsAndroid == 'undefined')
    		alert( "Your OS do not support Greek Text to speech!");
    	else
    		alert( "You need install 'Google Text-to-Speech' to support Greek Text to speech!");
	}catch( err){
		alert( "exception:"+err);
		return;
	}
}
//tranditional Chinese to simplified Chinese
var trad = "穌隱製慟喫豫眾確纔翻藉著崙皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪"
+ "碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩";
var simp = "稣隐制恸吃预众确才繙借着仑皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛"
+ "码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄";
function t2s( text){
	var len = text.length;
	var out = "";
	for( var i=0; i < len; i++){
		var ch = text.charAt( i);
		var pos = trad.indexOf( ch);
		if( pos != -1) {
			out += simp.charAt( pos);
		}else
			out += ch;
	}
	return out;
}
	