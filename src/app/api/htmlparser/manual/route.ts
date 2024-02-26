'use strict'
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"
import { parse } from 'node-html-parser';
import { HTMLToJSON } from 'html-to-json-parser'; 
// import Jlpt from "@/app/models/jlptModel";
import JlptTest from "@/app/models/jlptTestModel";
import { parseContent } from "@/app/utils/common";

const CLASSIFICATION = 'reading';

export async function GET(request: NextRequest) {

  // await connectDB();

  const LEVEL = ['N3'];
  const MONTH_ARR = [
    '07',
    // '12',
  ]
  let resultCnt = 0;
  let invalidSaves = Array();

  // for (let levelIdx = 0; levelIdx < LEVEL.length; levelIdx++) {
  //   for (let index = 2019; index <= 2019; index++) {
  //     for (let order = 0; order < MONTH_ARR.length; order++) {
  //       let sortNo = 1;
  //       let questionNo = 1;

  //       let month = MONTH_ARR[order];

  //       let resHtml = `<form name="dttn" class="dttn">
  //       <div class="chuyen_trang">
  //       <a href="javascript:MoveNextText(1,201907,'N3','en');" > << Letters and Vocabulary</a><input type="button" onclick="Saiten()" class="btn-info" value="Check result"><a href="javascript:MoveNextText(4,201907,'N3','en');" > Listening (聴解) >></a>		</div>
          
        
  //                   <!-- bat dau mot chương mới-->
  //                   <div class="big_item"> 文法</br>問題 1つぎの文の( )に入れるのに最もよいものを、1・2・3・4から一つえらびなさい。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 1．高校の友達に会ったら、うれしくて何時間（ ）話してしまった。 </div>
  //             <div style="display:none" id="diemso1">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS11">1) は </div>
  //                   <input  type="radio"  value ="1) は 　" name="QS1" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS12">2) も </div>
  //                   <input  type="radio"  value ="2) も 　" name="QS1" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS13">3) が </div>
  //                   <input  type="radio"  value ="3) が 　" name="QS1" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS14">4) を</div>
  //                   <input  type="radio"  value ="4) を　" name="QS1" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS1" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type1">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 2．このファッション誌は、20～25 歳の女性（ ）中心に多くの人に人気があます。 </div>
  //             <div style="display:none" id="diemso2">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS21">1) に </div>
  //                   <input  type="radio"  value ="1) に 　" name="QS2" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS22">2) で </div>
  //                   <input  type="radio"  value ="2) で 　" name="QS2" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS23">3) は </div>
  //                   <input  type="radio"  value ="3) は 　" name="QS2" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS24">4) を</div>
  //                   <input  type="radio"  value ="4) を　" name="QS2" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS2" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type2">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 3．昨日のパーティーで、知り合いになった人といっぱいお話したけど、彼の名前を（ ）思い出せない。 </div>
  //             <div style="display:none" id="diemso3">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS31">1) 必ず </div>
  //                   <input  type="radio"  value ="1) 必ず 　" name="QS3" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS32">2) 必ずしも </div>
  //                   <input  type="radio"  value ="2) 必ずしも 　" name="QS3" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS33">3) どうか </div>
  //                   <input  type="radio"  value ="3) どうか 　" name="QS3" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS34">4) どうしても</div>
  //                   <input  type="radio"  value ="4) どうしても　" name="QS3" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS3" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type3">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 4．奨学金を申請するには、申込書（ ）成績証明書などの情報が必要です。 </div>
  //             <div style="display:none" id="diemso4">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS41">1) のほかに </div>
  //                   <input  type="radio"  value ="1) のほかに 　" name="QS4" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS42">2) のことで </div>
  //                   <input  type="radio"  value ="2) のことで 　" name="QS4" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS43">3) について </div>
  //                   <input  type="radio"  value ="3) について 　" name="QS4" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS44">4) にくらべて</div>
  //                   <input  type="radio"  value ="4) にくらべて　" name="QS4" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS4" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type4">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 5．A：「あ、今雨が降り出した。」<br>
  //    B ：「あ、本当ですね。今夜は大雨が降るそうですね。
  //   大雨が降らない（ ）急いで帰りましょう。」 </div>
  //             <div style="display:none" id="diemso5">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS51">1) ように </div>
  //                   <input  type="radio"  value ="1) ように 　" name="QS5" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS52">2) うちに </div>
  //                   <input  type="radio"  value ="2) うちに 　" name="QS5" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS53">3) ために </div>
  //                   <input  type="radio"  value ="3) ために 　" name="QS5" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS54">4) までに</div>
  //                   <input  type="radio"  value ="4) までに　" name="QS5" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS5" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type5">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 6．社長はいつも私たちのために出張帰りに、お土産を買ってきて（ ）。 </div>
  //             <div style="display:none" id="diemso6">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS61">1) くださいます </div>
  //                   <input  type="radio"  value ="1) くださいます 　" name="QS6" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS62">2) いただきます
  //   </div>
  //                   <input  type="radio"  value ="2) いただきます
  //   　" name="QS6" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS63">3) 差し上げます </div>
  //                   <input  type="radio"  value ="3) 差し上げます 　" name="QS6" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS64">4) 召し上がります</div>
  //                   <input  type="radio"  value ="4) 召し上がります　" name="QS6" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS6" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type6">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 7．妹:「お姉さん、もうすぐ電車（ ）！」<br>
  //   姉：「わかった。急ごう。」 </div>
  //             <div style="display:none" id="diemso7">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS71">1) 来てる </div>
  //                   <input  type="radio"  value ="1) 来てる 　" name="QS7" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS72">2) 来とく </div>
  //                   <input  type="radio"  value ="2) 来とく 　" name="QS7" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS73">3) 来ちゃう </div>
  //                   <input  type="radio"  value ="3) 来ちゃう 　" name="QS7" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS74">4) 来なきゃ</div>
  //                   <input  type="radio"  value ="4) 来なきゃ　" name="QS7" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS7" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type7">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 8．息子「私の算数の教科書、どこ？ここにないね。」
  //   母「え？（ ）でしょ。昨日明日が宿題をしているのを見たから。探してください。 </div>
  //             <div style="display:none" id="diemso8">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS81">1) ないに違いない </div>
  //                   <input  type="radio"  value ="1) ないに違いない 　" name="QS8" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS82">2) ないはずがない
  //   </div>
  //                   <input  type="radio"  value ="2) ないはずがない
  //   　" name="QS8" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS83">3) なくてはいけない </div>
  //                   <input  type="radio"  value ="3) なくてはいけない 　" name="QS8" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS84">4) なくてもおかしくない</div>
  //                   <input  type="radio"  value ="4) なくてもおかしくない　" name="QS8" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS8" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type8">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 9．私の大学の近くには、森中駅と南川駅がありますが、（ ）大学に行けます。いつもは森中駅から歩いていきますね。 </div>
  //             <div style="display:none" id="diemso9">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS91">1) どちらからでも </div>
  //                   <input  type="radio"  value ="1) どちらからでも 　" name="QS9" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS92">2) どちらかどうか
  //   </div>
  //                   <input  type="radio"  value ="2) どちらかどうか
  //   　" name="QS9" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS93">3) どっちかも </div>
  //                   <input  type="radio"  value ="3) どっちかも 　" name="QS9" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS94">4) あっちこっちから</div>
  //                   <input  type="radio"  value ="4) あっちこっちから　" name="QS9" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS9" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type9">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 10．（料理教室で）<br>
  //   先生: 沸騰したら、お湯に塩とキャベツを入れて、キャベツが（ ）まで待ってください。 </div>
  //             <div style="display:none" id="diemso10">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS101">1) 柔らかくする </div>
  //                   <input  type="radio"  value ="1) 柔らかくする 　" name="QS10" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS102">2) 柔らかくにる
  //   </div>
  //                   <input  type="radio"  value ="2) 柔らかくにる
  //   　" name="QS10" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS103">3) 柔らかくなる </div>
  //                   <input  type="radio"  value ="3) 柔らかくなる 　" name="QS10" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS104">4) 柔らかく</div>
  //                   <input  type="radio"  value ="4) 柔らかく　" name="QS10" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS10" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type10">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 11．昨日初めてパンを作ってみた。インタネットに書いてあったレシピー通りに作った（）失敗した。 </div>
  //             <div style="display:none" id="diemso11">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS111">1) から </div>
  //                   <input  type="radio"  value ="1) から 　" name="QS11" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS112">2) のに </div>
  //                   <input  type="radio"  value ="2) のに 　" name="QS11" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS113">3) のは </div>
  //                   <input  type="radio"  value ="3) のは 　" name="QS11" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS114">4) ので</div>
  //                   <input  type="radio"  value ="4) ので　" name="QS11" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS11" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type11">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 12．田中「僕、テニス始めたばかりだけど、山下君はテニスできる？」<br>
  //    山下「そうだね。前、学校でテニス部に（ ）」 </div>
  //             <div style="display:none" id="diemso12">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS121">1) 入ったままなんだ </div>
  //                   <input  type="radio"  value ="1) 入ったままなんだ 　" name="QS12" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS122">2) 入ってばかりだったんだ   </div>
  //                   <input  type="radio"  value ="2) 入ってばかりだったんだ   　" name="QS12" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS123">3) 入っていたことがあるんだ </div>
  //                   <input  type="radio"  value ="3) 入っていたことがあるんだ 　" name="QS12" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS124">4) 入っているところだったんだ</div>
  //                   <input  type="radio"  value ="4) 入っているところだったんだ　" name="QS12" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS12" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type12">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 13．A：「日本語の辞書、いろいろありますね。どれを買うか迷いますね。」<br>
  //    B:「これはどうですか。他のものと比べて、例文がたくさんありますし、使い（ ）と思います。」 </div>
  //             <div style="display:none" id="diemso13">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS131">1) すぎる </div>
  //                   <input  type="radio"  value ="1) すぎる 　" name="QS13" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS132">2) やすい </div>
  //                   <input  type="radio"  value ="2) やすい 　" name="QS13" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS133">3) てもいい </div>
  //                   <input  type="radio"  value ="3) てもいい 　" name="QS13" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS134">4) そうだ</div>
  //                   <input  type="radio"  value ="4) そうだ　" name="QS13" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS13" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type13">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <div class="big_item"> 問題 2つぎの文の_★_ に入る最もよいものを、1・2・3・4から一つえらびなさい。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 14．X 学校と Y 学校のバスケットボールの試合は 10 時開始の予定だったが、大雨 ___ ___ _★_ ___ になった。 </div>
  //             <div style="display:none" id="diemso14">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS141">1) のため </div>
  //                   <input  type="radio"  value ="1) のため 　" name="QS14" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS142">2) による </div>
  //                   <input  type="radio"  value ="2) による 　" name="QS14" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS143">3) 11時開始 </div>
  //                   <input  type="radio"  value ="3) 11時開始 　" name="QS14" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS144">4) 電車の遅れ</div>
  //                   <input  type="radio"  value ="4) 電車の遅れ　" name="QS14" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- phan giai thich cho dap an thi an di -->
  //             <div style="display:none;color:red;padding-left:5px;" id="GT14" >Reference: による電車の遅れ <u>のため</u> 11時開始</div>	
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS14" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type14">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 15．昨日行ったさくら動物園には、500 種類以上の動物がいた。あんなにいろいろな ___ ___ _★_ ___ ないだろう。 </div>
  //             <div style="display:none" id="diemso15">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS151">1) 動物が </div>
  //                   <input  type="radio"  value ="1) 動物が 　" name="QS15" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS152">2) なかなか </div>
  //                   <input  type="radio"  value ="2) なかなか 　" name="QS15" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS153">3) 動物園は </div>
  //                   <input  type="radio"  value ="3) 動物園は 　" name="QS15" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS154">4) 見られる</div>
  //                   <input  type="radio"  value ="4) 見られる　" name="QS15" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- phan giai thich cho dap an thi an di -->
  //             <div style="display:none;color:red;padding-left:5px;" id="GT15" >Reference: 動物が見られる <u>動物園は</u> なかなか</div>	
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS15" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type15">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 16．母は姉が ___ ___ _★_ ___ 泣きそうな顔をしていた。 </div>
  //             <div style="display:none" id="diemso16">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS161">1) 今にも </div>
  //                   <input  type="radio"  value ="1) 今にも 　" name="QS16" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS162">2) 大学に合格したという
  //   </div>
  //                   <input  type="radio"  value ="2) 大学に合格したという
  //   　" name="QS16" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS163">3) 知らせを聞いて </div>
  //                   <input  type="radio"  value ="3) 知らせを聞いて 　" name="QS16" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS164">4) 一番行きたがっていた</div>
  //                   <input  type="radio"  value ="4) 一番行きたがっていた　" name="QS16" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- phan giai thich cho dap an thi an di -->
  //             <div style="display:none;color:red;padding-left:5px;" id="GT16" >Reference: 一番行きたがっていた大学に合格したという <u>知らせを聞いて</u> 今にも </div>	
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS16" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type16">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 17．20 階建ての大きいマンションが ___ ___ _★_ ___ 昼でも部屋の中が暗い。 </div>
  //             <div style="display:none" id="diemso17">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS171">1) 隣に </div>
  //                   <input  type="radio"  value ="1) 隣に 　" name="QS17" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS172">2) 私の家に
  //   </div>
  //                   <input  type="radio"  value ="2) 私の家に
  //   　" name="QS17" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS173">3) 建ったことで </div>
  //                   <input  type="radio"  value ="3) 建ったことで 　" name="QS17" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS174">4) 日が当たらなくなって</div>
  //                   <input  type="radio"  value ="4) 日が当たらなくなって　" name="QS17" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- phan giai thich cho dap an thi an di -->
  //             <div style="display:none;color:red;padding-left:5px;" id="GT17" >Reference: 隣に建ったことで <u>私の家に</u> 日が当たらなくなって</div>	
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS17" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type17">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 18．田中「山下さんって、パソコンにすごく詳しいですね。」
  //    木村「うん、大学生の ___ ___ _★_ ___ よ。」 </div>
  //             <div style="display:none" id="diemso18">1</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS181">1) とき </div>
  //                   <input  type="radio"  value ="1) とき 　" name="QS18" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS182">2) アルバイトしていた
  //   </div>
  //                   <input  type="radio"  value ="2) アルバイトしていた
  //   　" name="QS18" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS183">3) みたいだ </div>
  //                   <input  type="radio"  value ="3) みたいだ 　" name="QS18" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS184">4) コンピューター会社で</div>
  //                   <input  type="radio"  value ="4) コンピューター会社で　" name="QS18" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- phan giai thich cho dap an thi an di -->
  //             <div style="display:none;color:red;padding-left:5px;" id="GT18" >Reference: ときコンピューター会社で <u>アルバイトしていた</u> みたいだ</div>	
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS18" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type18">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <div class="big_item"> 問題3 つぎの文章を読んで、 文章全体の内容を考えて、 【19】から 【23】 の中に入る最もよいものを、 1・2・3・4 から一つえらびなさい。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> 以下は、留学生の作文である。<br><center><b>日本の生活の中で考えたこと</b></center><br><div style="text-align:right">ジョーンズ エミリー</div><br>日本に来てから2か月間、私は日本人の友達ができませんでした。大学では日本語の授業にだけ出ていたので日本人学生と話す機会はなく、どうしたら日本人の友達が【19】。<br><br>先月、大学の中の普段通らない道を通ると、体育館でバスケットボールクラブの学生が練習をしていました。私もバスケットボールが好きなので、しばらく見ていました。【20】、クラブに入れば日本人の友達ができるのではないかと考えました。入り方を聞こうとしましたが、私は日本語でうまく話せるか不安で、なかなか聞けませんでした。でも、クラブに入らなかったら、ずっと日本人学生と友達になる機会は【21】。私は近くにいた学生に話しかけてみました。彼女は質問に丁寧に【22】。少し見学をした後、私はクラブに入ることにしました。<br><br>クラブに入って1か月たちました。今は日本人の友達もたくさんいます。【23】あきらめないでクラブの入り方を聞いたから、こんなに速く友達ができたのだと思います。不安でも行動してみることが大切だと思いました。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 19 </div>
  //             <div style="display:none" id="diemso19">1.4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS191"> 1) できるのか知りたいです </div>
  //                   <input  type="radio"  value =" 1) できるのか知りたいです 　" name="QS19" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS192">2) できたのかわかりません </div>
  //                   <input  type="radio"  value ="2) できたのかわかりません 　" name="QS19" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS193">3) できたのか知りたかったです</div>
  //                   <input  type="radio"  value ="3) できたのか知りたかったです　" name="QS19" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS194">4) できるのかわかりませんでした</div>
  //                   <input  type="radio"  value ="4) できるのかわかりませんでした　" name="QS19" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS19" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type19">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 20 </div>
  //             <div style="display:none" id="diemso20">1.4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS201"> 1) つまり </div>
  //                   <input  type="radio"  value =" 1) つまり 　" name="QS20" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS202">2) そして </div>
  //                   <input  type="radio"  value ="2) そして 　" name="QS20" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS203">3) ところが </div>
  //                   <input  type="radio"  value ="3) ところが 　" name="QS20" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS204">4) たとえば</div>
  //                   <input  type="radio"  value ="4) たとえば　" name="QS20" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS20" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type20">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 21 </div>
  //             <div style="display:none" id="diemso21">1.4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS211">1) ないそうです </div>
  //                   <input  type="radio"  value ="1) ないそうです 　" name="QS21" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS212">2) ないのでしょうか </div>
  //                   <input  type="radio"  value ="2) ないのでしょうか 　" name="QS21" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS213">3) ないと思ったからです </div>
  //                   <input  type="radio"  value ="3) ないと思ったからです 　" name="QS21" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS214">4) ないかもしれないと思いました</div>
  //                   <input  type="radio"  value ="4) ないかもしれないと思いました　" name="QS21" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS21" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type21">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 22 </div>
  //             <div style="display:none" id="diemso22">1.4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS221">1) 答えてやりました </div>
  //                   <input  type="radio"  value ="1) 答えてやりました 　" name="QS22" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS222">2) 答えてもらえました　</div>
  //                   <input  type="radio"  value ="2) 答えてもらえました　　" name="QS22" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS223">3) 答えてくれました </div>
  //                   <input  type="radio"  value ="3) 答えてくれました 　" name="QS22" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS224">4) 答えてあげられました</div>
  //                   <input  type="radio"  value ="4) 答えてあげられました　" name="QS22" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS22" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type22">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 23 </div>
  //             <div style="display:none" id="diemso23">1.4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_2row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS231">1) あのとき  </div>
  //                   <input  type="radio"  value ="1) あのとき  　" name="QS23" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS232">2) そんなとき </div>
  //                   <input  type="radio"  value ="2) そんなとき 　" name="QS23" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS233">3) このときも </div>
  //                   <input  type="radio"  value ="3) このときも 　" name="QS23" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS234">4) どんなときも</div>
  //                   <input  type="radio"  value ="4) どんなときも　" name="QS23" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS23" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type23">2</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <div class="big_item"> 問題4 つぎの(1)から(4) の文章を読んで、質問に答えなさい。 答えは、1・2・3・4から最もよいものを一つえらびなさい。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> (1)<br>以下は日本語学校の廊下に貼ってあるお知らせである。<br><center><b>大学、専門学校に進学を希望している皆さんへ</b></center><br>進学指導室には、大学案内や過去の入試問題など、いろいろな資料が置いてあります。また、進学指導の 先生に相談もできます。<br><br>進学指導室の資料は、開室時間中はいつでも自由に利用できます。進学について相談したい人は、進学指導室にあるパソコンで予約してください。予約の受け付けは二日前までです。当日は、遅れないように進学指導 室に行ってください。<br><br>進学指導室の開室時間: 月~金 10時~18時<br><div style="text-align:right">あずま日本語学校</div> </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> (24) 進学について相談をしたい人は、どうすればいいか。 </div>
  //             <div style="display:none" id="diemso24">3</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS241">1) 進学指導室のパソコンで二日前までに予約をし、当日、進学指導室に行く。
  //   </div>
  //                   <input  type="radio"  value ="1) 進学指導室のパソコンで二日前までに予約をし、当日、進学指導室に行く。
  //   　" name="QS24" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS242">2) 進学指導室のパソコンで当日までに予約をし、進学指導室に行く。
  //   </div>
  //                   <input  type="radio"  value ="2) 進学指導室のパソコンで当日までに予約をし、進学指導室に行く。
  //   　" name="QS24" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS243">3) 希望する時間を先生に言って予約をし、当日、進学指導室に行く。
  //   </div>
  //                   <input  type="radio"  value ="3) 希望する時間を先生に言って予約をし、当日、進学指導室に行く。
  //   　" name="QS24" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS244">4) 予約する必要はなく、好きな時間に進学指導室へ行く。</div>
  //                   <input  type="radio"  value ="4) 予約する必要はなく、好きな時間に進学指導室へ行く。　" name="QS24" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS24" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type24">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> (2)<br>先月引っ越しをした。その時、引っ越し会社の人が「荷物はこれに入れてください。」と言って持ってきたのは、白いダンボール箱だった。私は何度も引っ越しをしたが、今まで頼んだ引っ越し会社が持ってきたダンボール箱は、いつも茶色だった。白はきれいだけど、汚れやすい。どうしてだろう思って聞いてみた。同じ重さの荷物でも、白だとほかの色より軽く感じるのだそうだ。なるほど、重い荷物を運ぶ仕事をやりやすくする工夫だったのだ。  </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 25. 引っ越し会社の人によると、白い箱を使うのはどうしてか。 </div>
  //             <div style="display:none" id="diemso25">3</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS251">1) 白い箱のほうが茶色い箱より軽く作られているから
  //   </div>
  //                   <input  type="radio"  value ="1) 白い箱のほうが茶色い箱より軽く作られているから
  //   　" name="QS25" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS252">2) 白い箱は茶色い箱よりきれいに見えるから
  //   </div>
  //                   <input  type="radio"  value ="2) 白い箱は茶色い箱よりきれいに見えるから
  //   　" name="QS25" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS253">3) 白はほかの色より荷物の汚れがわかりやすい色だから </div>
  //                   <input  type="radio"  value ="3) 白はほかの色より荷物の汚れがわかりやすい色だから 　" name="QS25" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS254">4) 白はほかの色より荷物が軽いと感じる色だから</div>
  //                   <input  type="radio"  value ="4) 白はほかの色より荷物が軽いと感じる色だから　" name="QS25" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS25" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type25">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> 以下は会社の先輩からキムさんに届いたメールである。<br>キムさん<br>5日の商品説明会の資料について、お願いがあります。<br><br>実は、今日から4日まで2泊3日の急な出張が入り、今、新幹線に乗っています。私が、キムさんが今作っている資料と私の資料を一つにして完成させ、印刷する予定でしたが、できなくなりました。このメールと一緒に私の資料を送りますので、私の代わりに完成させて、必要な人数分を印刷しておいてください。<br><br>もし、印刷の前に私がキムさんの資料をチェックしたほうがいい場合は、明日(3日)の夜までにメールで送ってください。<br><br>よろしくお願いします。<br>田中 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> (26) キムさんがこのメールで頼まれていることはどれか。 </div>
  //             <div style="display:none" id="diemso26">3</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS261">1) 田中さんが出張に行く前に自分の資料を完成させ、必要な人数分を印刷すること
  //   </div>
  //                   <input  type="radio"  value ="1) 田中さんが出張に行く前に自分の資料を完成させ、必要な人数分を印刷すること
  //   　" name="QS26" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS262">2) 自分と田中さんの資料を一つにして完成させ、必要な人数分を印刷すること
  //   </div>
  //                   <input  type="radio"  value ="2) 自分と田中さんの資料を一つにして完成させ、必要な人数分を印刷すること
  //   　" name="QS26" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS263">3) 田中さんの資料に問題がないかどうかチェックして、資料を完成させること
  //   </div>
  //                   <input  type="radio"  value ="3) 田中さんの資料に問題がないかどうかチェックして、資料を完成させること
  //   　" name="QS26" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS264">4) 自分の資料が完成したら、3日の夜までに田中さんにメールで送ること</div>
  //                   <input  type="radio"  value ="4) 自分の資料が完成したら、3日の夜までに田中さんにメールで送ること　" name="QS26" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS26" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type26">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> (4)<br>最近、喫茶店で一人で勉強している人をよく見る。話し声がして落ち着かないのに、なぜこんな所で勉強するのだろうと思っていた。<br><br>でも、先日読んだ本に「集中したいときは、雨の音や話し声など少し音があるほうがいい。静かすぎると小さな音でも気になるからだ。だが、同じ話し声でも、興味がある内容が聞こえると、つい聞いてしまうから注意が必要だ。」と書かれていた。<br><br>私も電車の中のほうが、静かな部屋より集中して本が読めることに気づき、なるほどと思った。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 27. 文章によると、集中しやすいのは例えばどんな所か。
  //    </div>
  //             <div style="display:none" id="diemso27">3</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS271">1) 雨の音や話し声が聞こえる、うるさい部屋
  //   </div>
  //                   <input  type="radio"  value ="1) 雨の音や話し声が聞こえる、うるさい部屋
  //   　" name="QS27" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS272">2) 雨の音も話し声も何も聞こえない、静かな図書館
  //   </div>
  //                   <input  type="radio"  value ="2) 雨の音も話し声も何も聞こえない、静かな図書館
  //   　" name="QS27" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS273">3) 興味のない内容について話している声が少し聞こえる喫茶店
  //   </div>
  //                   <input  type="radio"  value ="3) 興味のない内容について話している声が少し聞こえる喫茶店
  //   　" name="QS27" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS274">4) 面白そうな内容について話している声が少し聞こえる電車の中</div>
  //                   <input  type="radio"  value ="4) 面白そうな内容について話している声が少し聞こえる電車の中　" name="QS27" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS27" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type27">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <div class="big_item"> 問題 5 つぎの (1) と (2) の文章を読んで、 質問に答えなさい。 答えは、1・2・3・4から最もよいものを一つえらびなさい。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> (1)<br>昨日、会社のみんなで昼ご飯を食べに行きました。 料理を待っている間、課長が<u>ずっとテーブルの上で指を動かしていました</u>。私が「指の体操ですか。」と尋ねると、「実は、ピアノを習い始めたんだよ。うまく指が動かなくてね。暇があると、つい練習してしまうんだ。」と楽しそうに話してくれました。<br><br>課長は、最近、朝から晩まで仕事のことばかり考えている自分に気づき、これではよくないと考えて、何か新しいことをやってみたいと思ったそうです。そんなときに、近所で「大人のためのピアノ教室」を見つけ、子供のころ習いたかったことを思い出して、行ってみたのだそうです。課長はうれしそうに「新しいことを始めるのは大変だったけれど、毎日楽しいし、前より仕事もうまくいくようになった気がするんだよ。」と言っていました。<br><br>課長の話を聞いて、私も何かやりたくなりました。実は、子供のころからバレエを習いたいと思っていたので、私も（　）つもりです。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 28. <u>ずっとテーブルの上で指を動かしていました</u>とあるが、なぜか。 </div>
  //             <div style="display:none" id="diemso28">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS281">1) 料理を注文するために、店の人を呼びたかったから
  //   </div>
  //                   <input  type="radio"  value ="1) 料理を注文するために、店の人を呼びたかったから
  //   　" name="QS28" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS282">2) ずっと前に注文した料理が、なかなか来なくて怒っていたから
  //   </div>
  //                   <input  type="radio"  value ="2) ずっと前に注文した料理が、なかなか来なくて怒っていたから
  //   　" name="QS28" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS283">3) 指がよく動くようになってから、ピアノを習い始めようと思っていたから
  //   </div>
  //                   <input  type="radio"  value ="3) 指がよく動くようになってから、ピアノを習い始めようと思っていたから
  //   　" name="QS28" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS284">4) ピアノがうまくなるように、指を動かす練習をしたかったから</div>
  //                   <input  type="radio"  value ="4) ピアノがうまくなるように、指を動かす練習をしたかったから　" name="QS28" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS28" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type28">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 29. 課長は、なぜ最近、新しいことをやってみたいと思ったのか。 </div>
  //             <div style="display:none" id="diemso29">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS291">1) 以前よりも、仕事が少し暇になってきたから
  //   </div>
  //                   <input  type="radio"  value ="1) 以前よりも、仕事が少し暇になってきたから
  //   　" name="QS29" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS292">2) 仕事のことばかり考えているのは、よくないと思ったから
  //   </div>
  //                   <input  type="radio"  value ="2) 仕事のことばかり考えているのは、よくないと思ったから
  //   　" name="QS29" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS293">3) 新しいことを始めると、もっと仕事がうまくいくようになると思ったから
  //   </div>
  //                   <input  type="radio"  value ="3) 新しいことを始めると、もっと仕事がうまくいくようになると思ったから
  //   　" name="QS29" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS294">4) 自分の子供と一緒に、 何かを始めたくなったから</div>
  //                   <input  type="radio"  value ="4) 自分の子供と一緒に、 何かを始めたくなったから　" name="QS29" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS29" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type29">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 
  //   30. （　） に入れるのに最もよいものはどれか。
  //    </div>
  //             <div style="display:none" id="diemso30">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS301">1) バレエ教室を探す
  //   </div>
  //                   <input  type="radio"  value ="1) バレエ教室を探す
  //   　" name="QS30" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS302">3) 仕事を早く終わらせる
  //   </div>
  //                   <input  type="radio"  value ="3) 仕事を早く終わらせる
  //   　" name="QS30" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS303">2) ピアノ教室を探す
  //   </div>
  //                   <input  type="radio"  value ="2) ピアノ教室を探す
  //   　" name="QS30" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS304">4) 何かやりたいことを見つける</div>
  //                   <input  type="radio"  value ="4) 何かやりたいことを見つける　" name="QS30" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS30" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type30">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> (2)<br>私は日本の大学を受験するため、去年から日本で勉強している。最近、こんな面白いことがあった。銀行で受験料を振り込んだとき、窓口の人が「頑張ってください。」と言って1本の鉛筆をくれた。そして、「その鉛筆、五角形なんですよ。『五角(ごかく)』 と『合格(ごうかく)』は発音が似ているから、合格を願って、受験生にお渡ししているんです。」と教えてくれた。<br><br>私は①<u>ちょっと意外だった</u>。私の国にも「五角」と「合格」のように、発音が似ていて意味が違う言葉はあるし、それを使った言葉遊びもある。でも、日本では銀行でこのようなサービスをしているのだ。思った。<br><br>②<u>このような応援</u>は、実際に効果があるかどうかわからない。しかし、大切なのは気持ちだ。自分が頑張っているときに、こうやって応援してもらったら、誰でもうれしいだろう。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 31. 銀行の窓口の人が「私」に鉛筆をくれたのは、どんな気持ちを伝えたかったからか。 </div>
  //             <div style="display:none" id="diemso31">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS311">1) 大学に入ってから勉強を頑張ってほしいという気持ち
  //   </div>
  //                   <input  type="radio"  value ="1) 大学に入ってから勉強を頑張ってほしいという気持ち
  //   　" name="QS31" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS312">2) 日本の大学を受験してほしいという気持ち
  //   </div>
  //                   <input  type="radio"  value ="2) 日本の大学を受験してほしいという気持ち
  //   　" name="QS31" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS313">3) 大学に合格してほしいという気持ち
  //   </div>
  //                   <input  type="radio"  value ="3) 大学に合格してほしいという気持ち
  //   　" name="QS31" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS314">4) 大学合格おめでとうという気持ち</div>
  //                   <input  type="radio"  value ="4) 大学合格おめでとうという気持ち　" name="QS31" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS31" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type31">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 32. ①<u>ちょっと意外だった</u>とあるが、何が意外だったのか。 </div>
  //             <div style="display:none" id="diemso32">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS321">1) 日本語の 「五角」 と 「合格」の発音が似ていること
  //   </div>
  //                   <input  type="radio"  value ="1) 日本語の 「五角」 と 「合格」の発音が似ていること
  //   　" name="QS32" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS322">2) 日本にも、発音が似ていて意味が違う言葉を使った遊びがあること
  //   </div>
  //                   <input  type="radio"  value ="2) 日本にも、発音が似ていて意味が違う言葉を使った遊びがあること
  //   　" name="QS32" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS323">3) 日本の銀行が、言葉遊びを使って面白いサービスをしていること
  //   </div>
  //                   <input  type="radio"  value ="3) 日本の銀行が、言葉遊びを使って面白いサービスをしていること
  //   　" name="QS32" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS324">4) 日本の銀行のサービスが、自分の国の銀行のサービスと似ていること</div>
  //                   <input  type="radio"  value ="4) 日本の銀行のサービスが、自分の国の銀行のサービスと似ていること　" name="QS32" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS32" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type32">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 33. ②<u>このような応援</u>について、「私」はどう考えているか。 </div>
  //             <div style="display:none" id="diemso33">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS331">1) 実際に効果があるので、応援してもらった人は喜ぶだろう。
  //   </div>
  //                   <input  type="radio"  value ="1) 実際に効果があるので、応援してもらった人は喜ぶだろう。
  //   　" name="QS33" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS332">2) 実際の効果があってもなくても、応援してもらった人は喜ぶだろう。
  //   </div>
  //                   <input  type="radio"  value ="2) 実際の効果があってもなくても、応援してもらった人は喜ぶだろう。
  //   　" name="QS33" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS333">3) 実際の効果はわからないので、もっと効果がある応援のほうがいいだろう。
  //   </div>
  //                   <input  type="radio"  value ="3) 実際の効果はわからないので、もっと効果がある応援のほうがいいだろう。
  //   　" name="QS33" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS334">4) 実際の効果はないので、応援している人がうれしいだけだろう。</div>
  //                   <input  type="radio"  value ="4) 実際の効果はないので、応援している人がうれしいだけだろう。　" name="QS33" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS33" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type33">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <div class="big_item"> 問題6 つぎの文章を読んで、質問に答えなさい。答えは、1・2・3・4から最もよいものを一つえらびなさい。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> 先日、雑誌で「持たない生活」をしている人を紹介する記事を読んだ。物をできるだけ減らして、自分にとって本当に必要で気に入っている物だけに囲まれて生活するようにしたら、毎日がとても気持ちよく送れるようになった、という話だった。私の家は物が多く、床や机の上に物があふれている。それがずっと当たり前だと思ってきた。でも、こんな生活があったのだ。私は早速、①<u>実行することにした</u>。<br><br>最初にしたのは、私の部屋にある自分の洋服や本、かばんなどを減らすことだ。本当に必要で気に入っている物だけを残して、人にあげたりリサイクルの店に持っていったりした。すると、部屋が広くなっただけでなく、片付けにも時間がかからなくなり、気持ちよく生活できるようになった。<br><br>そうしている間に、私は家にある家族の物も気になりだした。リビングの床には雑誌がたくさん重ねてあったが、古い物は誰も読んでいない。掃除機が2台あったが、1台は全く使われていない。それらが気になって、両親に聞かずに捨ててしまったのだ。すると、2父も母も怒ってしまった。雑誌は時間があるときにまた読むし、掃除機はまだ使えるのだから、もったいないと言う。みんなお金を出して買った物だから大切だ。それに、自分たちはどんどん捨ててしまう生活より、古い物でも捨てないで大切に使う生活のほうがいい、と言うのだ。<br><br>一緒に住んでいても、考え方は違う。今回、私はちょっとやりすぎてしまったようだ。これからは、「持たない生活」は自分の部屋だけで実行しようと思っている。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 34. 「持たない生活」はどのような生活か。 </div>
  //             <div style="display:none" id="diemso34">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS341">1) 雑誌に載っているような物だけに囲まれている生活
  //   </div>
  //                   <input  type="radio"  value ="1) 雑誌に載っているような物だけに囲まれている生活
  //   　" name="QS34" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS342">2) 欲しい物があっても我慢して買わないようにする生活
  //   </div>
  //                   <input  type="radio"  value ="2) 欲しい物があっても我慢して買わないようにする生活
  //   　" name="QS34" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS343">3) 必要で気に入っている物でもできるだけ減らす生活 </div>
  //                   <input  type="radio"  value ="3) 必要で気に入っている物でもできるだけ減らす生活 　" name="QS34" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS344">4) 必要で気に入っている物だけを持つようにする生活</div>
  //                   <input  type="radio"  value ="4) 必要で気に入っている物だけを持つようにする生活　" name="QS34" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS34" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type34">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 35. ①<u>実行することにした</u>とあるが、何から始めたのか。 </div>
  //             <div style="display:none" id="diemso35">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS351"> 1) 家中をきれいに掃除すること
  //   </div>
  //                   <input  type="radio"  value =" 1) 家中をきれいに掃除すること
  //   　" name="QS35" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS352">2) 自分の部屋にある自分の物を減らすこと
  //   </div>
  //                   <input  type="radio"  value ="2) 自分の部屋にある自分の物を減らすこと
  //   　" name="QS35" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS353">3) リビングの床や机の上の物を片付けること
  //   </div>
  //                   <input  type="radio"  value ="3) リビングの床や机の上の物を片付けること
  //   　" name="QS35" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS354">4) 今までより広い部屋を自分の部屋にすること</div>
  //                   <input  type="radio"  value ="4) 今までより広い部屋を自分の部屋にすること　" name="QS35" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS35" >2</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type35">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 36. ②<u>父も母も怒ってしまった</u>とあるが、なぜか。 </div>
  //             <div style="display:none" id="diemso36">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS361">1) 両親が大切だと思っている物を「私」が黙って捨てたから
  //   </div>
  //                   <input  type="radio"  value ="1) 両親が大切だと思っている物を「私」が黙って捨てたから
  //   　" name="QS36" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS362">2) 両親がよく使っている物を「私」が黙って捨てたから
  //   </div>
  //                   <input  type="radio"  value ="2) 両親がよく使っている物を「私」が黙って捨てたから
  //   　" name="QS36" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS363">3) 両親が持っている高そうな物を「私」が黙って捨てたから
  //   </div>
  //                   <input  type="radio"  value ="3) 両親が持っている高そうな物を「私」が黙って捨てたから
  //   　" name="QS36" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS364">4) 両親が買ったばかりの物を 「私」 が黙って捨てたから</div>
  //                   <input  type="radio"  value ="4) 両親が買ったばかりの物を 「私」 が黙って捨てたから　" name="QS36" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS36" >1</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type36">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 37. 「私」は今、 どう考えているか。 </div>
  //             <div style="display:none" id="diemso37">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS371">1) 「持たない生活」は素晴らしいので、両親にもぜひ始めてもらおう。
  //   </div>
  //                   <input  type="radio"  value ="1) 「持たない生活」は素晴らしいので、両親にもぜひ始めてもらおう。
  //   　" name="QS37" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS372">2) 両親の考えのほうが良いと思う点が多いので、「持たない生活」 はやめよう。
  //   </div>
  //                   <input  type="radio"  value ="2) 両親の考えのほうが良いと思う点が多いので、「持たない生活」 はやめよう。
  //   　" name="QS37" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS373">3) 両親は 「私」と考え方が違うので、自分の場所だけで「持たない生活」を続けていこう。
  //   </div>
  //                   <input  type="radio"  value ="3) 両親は 「私」と考え方が違うので、自分の場所だけで「持たない生活」を続けていこう。
  //   　" name="QS37" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS374">4) しばらくは「持たない生活」を自分の場所だけで続けて、両親の考え方が変わるのを待とう。</div>
  //                   <input  type="radio"  value ="4) しばらくは「持たない生活」を自分の場所だけで続けて、両親の考え方が変わるのを待とう。　" name="QS37" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS37" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type37">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <div class="big_item"> 問題7 右のページは、自然教室の案内である。これを読んで、下の質問に答えなさい。答えは、1・2・3・4から最もよいものを一つえらびなさい。 </div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 38. 大学生のマルコさんは寺西市に住んでいる。自然教室に参加しようと思っているが、1年コースに参加するためには、どのように申し込みをしなければならないか。
  //    </div>
  //             <div style="display:none" id="diemso38">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS381">1) 4月6日までに電話で申し込む。
  //   </div>
  //                   <input  type="radio"  value ="1) 4月6日までに電話で申し込む。
  //   　" name="QS38" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS382">2) 4月6日までに着くようにハガキで申し込む。
  //   </div>
  //                   <input  type="radio"  value ="2) 4月6日までに着くようにハガキで申し込む。
  //   　" name="QS38" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS383">3) 4月12日までに電話で申し込む。
  //   </div>
  //                   <input  type="radio"  value ="3) 4月12日までに電話で申し込む。
  //   　" name="QS38" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS384">4) 4月12日までに着くようにハガキで申し込む。</div>
  //                   <input  type="radio"  value ="4) 4月12日までに着くようにハガキで申し込む。　" name="QS38" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS38" >4</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type38">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                               <!-- dong cau hoi -->
  //             <div class="question_list"> 39. 会社員のディヤナさんは寺西市に住んでいる。1回コースの冬のプログラム 「雪の世界」に申し込もうと思っているが、参加費はいつまでに振り込まなければならないか。
  //    </div>
  //             <div style="display:none" id="diemso39">4</div>
  //             <!-- dong các đáp an -->
  //                         <div class="answer_1row">
  //                                                           <label class="container" >
  //                   <div class="answers" id="QS391">1) 4月19日</div>
  //                   <input  type="radio"  value ="1) 4月19日　" name="QS39" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS392">2) 12月2日の1週間前
  //   </div>
  //                   <input  type="radio"  value ="2) 12月2日の1週間前
  //   　" name="QS39" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS393">3) 1月11日の1週間前</div>
  //                   <input  type="radio"  value ="3) 1月11日の1週間前　" name="QS39" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                                   <label class="container" >
  //                   <div class="answers" id="QS394">4) 1月11日</div>
  //                   <input  type="radio"  value ="4) 1月11日　" name="QS39" >
  //                   <span class="checkmark"></span>
  //                 </label>
  //                                     </div>
    
  //                       <!-- dong cau tra loi bi an di-->
  //              <div style="display:none" id="AS39" >3</div>
               
  //             <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
  //              <div style="display:none" id="type39">3</div>
  //                       <!-- bat dau mot chương mới-->
  //                   <!-- dong nội dung bài cho phần đọc-->
  //           <div class="question_content"> <center><b>自然教室のご案内</b></center><br>
  //   寺西市自然の家では、各季節に寺西市の自然を学ぶ教室を行っています。<br><br>
  //   1年コース(全4回)と1回コースの2種類のコースがあります。市民の皆さん、ぜひ参加してください。<br><br>
  //   <b>【1年コース】 定員:40名</b><br>
  //   春夏秋冬の4回全てのプログラムに参加できる人を募集します。<br><br>
  //   <b>【1回コース】 定員: 各プログラム 10名</b><br>
  //   夏または冬のプログラムどちらかに1回だけ参加を希望する人を募集します。<br><br>
  //   <table><tr><th colspan="2">プログラム</th><th>月日※</th><th>内容</th><tr><tr><td>春</td><td>春を探そう</td><td>5/11(土)</td><td>大森山に生えている草花を観察します。</td></tr>
  //   <tr><td>夏</td><td>水の生き物</td><td>8/3(土)</td><td>大木川で見られる生き物を観察します。</td></tr><tr><td>秋</td><td>畑に感謝</td><td>1/9(土)</td><td>寺西市で取れる野菜について学んだ後に、市の畑に行って野菜を取ります。</td></tr>
  //   <tr><td>冬</td><td>雪の世界</td><td>1/11(土)</td><td>大森山で冬の自然を観察します。</td></tr></table><br>
  //   ※雨の場合は、延期になります<br><br><b>◆応募できる方</b> 寺西市に住んでいる方<br>(小学生以下の方は大人と一緒に参加してください。)<br><br>
  //   <b>◆申し込み方法</b>(定員の人数が集まったら締め切ります。)<br>1年コース: 氏名、住所、電話番号をハガキに書き、4月12日(金)までに着くようにお送りください。<br><br>
  //   ※希望者には4月6日(土)に説明会を行います。参加を希望する方は前日までに電話してください(説明会に参加しなくてもコースへのお申し込みは可能です。)<br>
  //   1回コース: 各募集期間中に電話でお申し込みください。<br>夏のプログラム募集期間:7/1 (月) ~ 7/12(金)<br>
  //   冬のプログラム募集期間: 12/2(月) ~ 12/13 (金)<br><br><b>◆参加費・振り込み期限</b><br>1年コース: 一人 3,500円・4/19(金)<br>1回コース: 一人 1,000円 各プログラム当日の1週間前<br>※小学生以下は無料です。<br><div style="text-align:right">寺西市自然の家<br>155-0002 寺西市森山町5-9 電話: 051-282-1788(10: 00~ 18: 00)</div> </div>
  //                       <!-- dong cuoi cung ghi tong so cau hoi-->
  //          <div style="display:none" id="totalQUestion" >39</div>
          
  //       <div class="chuyen_trang">
  //       <a href="javascript:MoveNextText(1,201907,'N3','en');" > << Letters and Vocabulary</a><input type="button" onclick="Saiten()" class="btn-info" value="Check result"><a href="javascript:MoveNextText(4,201907,'N3','en');" > Listening (聴解) >></a>		</div>
  //       <button class="btn-info" id="goToTop">
  //         <img src="hinh/icon/up-to-top.svg" class="custom-svg" alt="Lên đầu trang">
  //       </button>
  //     </form>`;
        
  //       const root = parse(resHtml);
        
  //       const fHtml = root.querySelector('.dttn')?.toString() || '';

  //       // Conversion
  //       let result = null;
        
  //       if(fHtml) {
  //         result = await HTMLToJSON(fHtml.replaceAll('\t', ''), true);
  //       } else {
  //         invalidSaves.push({level: LEVEL[levelIdx], year: index, month: month});
  //         continue;
  //       }

  //       const cHtml = JSON.parse(result.toString());
  //       let newQuestion = new JlptTest();

  //       let isChoice = false;

  //       for(let itemIdx = 0; itemIdx < cHtml.content.length; itemIdx++) {
  //         let item = cHtml.content[itemIdx];
          
  //         // 그룹문제
  //         if(item.attributes?.class === 'big_item') {
  //           newQuestion.question = { content: parseContent(item.content) };

  //           if(!newQuestion.question) {
  //             newQuestion = new JlptTest();
  //             continue;
  //           }

  //           newQuestion.questionType = 'group';
  //           newQuestion.sortNo = sortNo++;
  //         }

  //         // 본문
  //         if(item.attributes?.class === 'question_content') {
  //           newQuestion.question = { content: parseContent(item.content) };

  //           if(!newQuestion.question) {
  //             newQuestion = new JlptTest();
  //             continue;
  //           }

  //           newQuestion.questionType = 'content';
  //           newQuestion.sortNo = sortNo++;
  //         }

  //         // 문제
  //         if(item.attributes?.class === 'question_list') {
  //           newQuestion.question = { content: parseContent(item.content) };

  //           if(!newQuestion.question) {
  //             newQuestion = new JlptTest();
  //             continue;
  //           }

  //           newQuestion.questionType = 'normal';
  //           newQuestion.sortNo = sortNo++;
  //           newQuestion.questionNo = questionNo;
  //         }

  //         // 보기
  //         if(item.attributes?.class?.includes('answer_')) {
  //           let ansArr = new Array();
  //           let choiceIdx = 0;

  //           item.content.forEach((ansContent: any) => {
  //             let result = [];

  //             if(typeof ansContent === 'object') {
  //               result = ansContent.content.map((ans: any) => {
  //                 if(ans.attributes?.class === 'answers') {
  //                   return parseContent(ans?.content).trim();
  //                 } else {
  //                   return '';
  //                 }
  //               });
  //             } else {
  //               if(typeof ansContent === 'string') {
  //                 if(ansContent === '\r\n') {
  //                   return '';
  //                 }
  //               }
  //             }

  //             ansArr = [...ansArr, { no: ++choiceIdx, content: result.join('').trim()}];
  //           });

  //           newQuestion.choices = ansArr;
  //         }
          
  //         // 정답
  //         if((item.attributes?.id || '').includes('AS')) {
  //           // const newAnswer = new AnswersJlpt({
  //           //   year: index,
  //           //   month: month,
  //           //   level: LEVEL[levelIdx],
  //           //   classification: CLASSIFICATION,
  //           //   questionNo: questionNo,
  //           //   answer: parseContent(item?.content),
  //           // });

  //           // // console.log(newAnswer);
  //           // await newAnswer.save();
  //           // questionNo++;
  //           // resultCnt++;

  //           newQuestion.answer = Number(parseContent(item?.content));
  //           isChoice = true;
  //         }

  //         newQuestion.year = index;
  //         newQuestion.month = month;
  //         newQuestion.level = LEVEL[levelIdx];
  //         newQuestion.classification = CLASSIFICATION;
          
  //         if('group' === newQuestion?.questionType) {
  //           await newQuestion.save();

  //           // console.log(newQuestion);

  //           newQuestion = new JlptTest();
  //         } else if('content' === newQuestion?.questionType) {
  //           await newQuestion.save();

  //           // console.log(newQuestion);

  //           newQuestion = new JlptTest();
  //         } else if('normal' === newQuestion?.questionType) {
  //           if(isChoice) {
  //             await newQuestion.save();

  //             // console.log(newQuestion);

  //             newQuestion = new JlptTest();

  //             isChoice = false;
  //             questionNo++;
  //             resultCnt++;
  //           }
  //         }
  //       };
  //     }
  //   }
  // }

  return NextResponse.json({resultCnt: resultCnt, invalidSaves: invalidSaves})
}
