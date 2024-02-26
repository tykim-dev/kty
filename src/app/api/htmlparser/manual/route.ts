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

  await connectDB();

  const LEVEL = ['N1'];
  let resultCnt = 0;
  let invalidSaves = Array();


  for (let levelIdx = 0; levelIdx < LEVEL.length; levelIdx++) {
    for (let index = 2019; index <= 2019; index++) {
      for (let order = 1; order < 2; order++) {
        let sortNo = 1;
        let questionNo = 1;

        let month = order === 0 ? '07' : '12';

        let resHtml = `<form name="dttn" class="dttn">
        <div class="chuyen_trang">
        <a href="javascript:MoveNextText(1,201607,'N1','en');"> << Letters and Vocabulary,Grammar</a><input type="button" onclick="Saiten()" class="btn-info" value="Check result"><a href="javascript:MoveNextText(4,201607,'N1','en');" >Listening (聴解) >></a>		</div>
          
        
                    <!-- bat dau mot chương mới-->
                    <div class="big_item"> 問題8 次の(1)から(4) の文章を読んで、後の問いに対する答えとして最もよいものを、1・2・3・4 から一つ選びなさい。 </div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> (1)<br/> 以下は、ある会社の海外駐在員が受け取ったメールである。<br/><div class="lephai">ムンバイ工場 主任<br/>
    高城洋二様</div> <br/>お世話になっております。本社秘書課の横山です。 <br/>来月の副社長出張のスケジュールに関して以下変更のご直絡です <br/>8月8日(月)にムンバイ工場視察の予定でしたが、本社にて会議が入り、副社長のムンバイ到着は9日(火)22時となる見込みです。お手数をおかけしますが、視察日程の調整を翌日の後でお願いいたします。また視察後に予定していた、ムンバイ 日本商工会会長の竹内様との面談の調整もお願いいたします。なお、ムンバイ出発は8月12日 (金) で変更ありません。 <br/>以上、よろしくお願いいたします。<br/><div class="lephai">秘書課<br/>横山陽一</div> </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 46. このメールを受け取った人がしなければならないことは何か。 </div>
              <div style="display:none" id="diemso1">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS11">1) 副社長の工場視察を8月9日に変更し、竹内さんとの面談日程も調整する。 </div>
                    <input  type="radio"  value ="1) 副社長の工場視察を8月9日に変更し、竹内さんとの面談日程も調整する。 　" name="QS1" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS12">2) 副社長の工場視察と竹内さんとの面談を8月1) 0日以降で再調整する。</div>
                    <input  type="radio"  value ="2) 副社長の工場視察と竹内さんとの面談を8月1) 0日以降で再調整する。　" name="QS1" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS13">3) 副社長の工場視察の日程と帰国日が変更になったことを竹内さんに連絡する。</div>
                    <input  type="radio"  value ="3) 副社長の工場視察の日程と帰国日が変更になったことを竹内さんに連絡する。　" name="QS1" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS14">4) 副社長の工場視察後の面談がキャンセルになったことを竹内さんに連絡する。</div>
                    <input  type="radio"  value ="4) 副社長の工場視察後の面談がキャンセルになったことを竹内さんに連絡する。　" name="QS1" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS1" >2</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type1">3</div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> (2)<br/> 「自分は間違ってない」と思うことから始まる怒りは、当りです。少ししろめたくありません。 <br/><br/>むしろ、「間違ってない」と思いながら怒りをごまかしてしまったときのほうが後味は悪いのです。「なんで怒らなかったんだろう」という後悔は、惨めな気持ちになって長く続きます。<br/><br/>怒りを抑えてばかりいると、この惨めな気持ちにも慣れてしまいます。敗北感に慣らされてしまうのです。わたしはこれがいちばん怖いと思っています。<br/><br/><div class="lephai">(和田秀樹「腹が立ったら怒りなさい」による) </div> </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 47 筆者の考えに合うのはどれか。 </div>
              <div style="display:none" id="diemso2">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS21">1) 怒りの原因を明らかにしたいなら、怒りをごまかさないほうがいい。 </div>
                    <input  type="radio"  value ="1) 怒りの原因を明らかにしたいなら、怒りをごまかさないほうがいい。 　" name="QS2" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS22">2) 怒りを抑えていると、ますます怒りが増してしまう。 </div>
                    <input  type="radio"  value ="2) 怒りを抑えていると、ますます怒りが増してしまう。 　" name="QS2" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS23">3) 自分が間違っていないと思うなら、怒りを抑えなくていい。</div>
                    <input  type="radio"  value ="3) 自分が間違っていないと思うなら、怒りを抑えなくていい。　" name="QS2" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS24">4) 自分が間違っていると気づけば、怒りは長く続かない。</div>
                    <input  type="radio"  value ="4) 自分が間違っていると気づけば、怒りは長く続かない。　" name="QS2" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS2" >3</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type2">3</div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> (3)<br/> 引っ越しというのは、誰にとっても面倒だが、いい面もあるだろう。すなわち、これまでの生活を振り返り、今後望むような生活を思い描きながら、そのために不要なものをどんどん処分する機会である、と。そういう意味では、引っ越しは日常生活を更生させるよいきっかけでもあるはずだ。<br/><br/>私はいつもそのきっかけを活かしたいと思いながらも、なかなか実行するに至らない。むしろ何十年も、まるで亀の ごとく重い物を背負いながら転々としてきたわけである。<br/><br/><div class="lephai">(マイク・モラスキー 日本経済新聞2014年3月25日付夕刊による) </div> </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 48. 引っ越しについて、筆者はどのように述べているか。 </div>
              <div style="display:none" id="diemso3">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS31">1) 不要なものを捨てる機会であり、自分もそのための引っ越しを何度もしている。 </div>
                    <input  type="radio"  value ="1) 不要なものを捨てる機会であり、自分もそのための引っ越しを何度もしている。 　" name="QS3" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS32">2) 望むような生活をするためであり、自分もいい場所があれば引っ越しをしたい。 </div>
                    <input  type="radio"  value ="2) 望むような生活をするためであり、自分もいい場所があれば引っ越しをしたい。 　" name="QS3" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS33">3) 生活を一新する機会だが、自分は引っ越しをしてもそれを活かせていない。 </div>
                    <input  type="radio"  value ="3) 生活を一新する機会だが、自分は引っ越しをしてもそれを活かせていない。 　" name="QS3" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS34">4) いい面もあるが、自分は面倒であまり引っ越しをしていない。 </div>
                    <input  type="radio"  value ="4) いい面もあるが、自分は面倒であまり引っ越しをしていない。 　" name="QS3" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS3" >3</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type3">3</div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> (4)<br/>
    いま人間の欲望がいろいろと問題になっているのは、それが余りにも脹みすぎて、欲望の充足それ自体が目的と化し、本来の意味、つまり私たちの必要を満たし、私たちに心身の安定とやすらぎ(幸福)をもたらす範囲を遥かに逸脱してしまったことにある。<br/><br/>私たちの多くはこの過度に肥大した欲望ゆえに、日々を楽しく過せるどころか、絶えざる欲求不満に苛まれるという不幸な状態に陥っている。<br/><br/><div class="lephai">(本学大「人にはどれだけの物が必要のミニマム生活のすすめ」による) </div> </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 49. 欲望について、筆者はどのように述べているか </div>
              <div style="display:none" id="diemso4">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS41">1) 欲望が満たされたため、本当に必要なものかわからなくなっている。 </div>
                    <input  type="radio"  value ="1) 欲望が満たされたため、本当に必要なものかわからなくなっている。 　" name="QS4" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS42">2) 欲望が簡単に満たされるために、日々の楽しみが失われている。 </div>
                    <input  type="radio"  value ="2) 欲望が簡単に満たされるために、日々の楽しみが失われている。 　" name="QS4" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS43">3) 欲望が脹みすぎて、欲望を満たすことをあきらめるようになっている。
    </div>
                    <input  type="radio"  value ="3) 欲望が脹みすぎて、欲望を満たすことをあきらめるようになっている。
    　" name="QS4" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS44">4) 欲望が脹みすぎたため、幸福が感じられなくなっている。</div>
                    <input  type="radio"  value ="4) 欲望が脹みすぎたため、幸福が感じられなくなっている。　" name="QS4" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS4" >4</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type4">3</div>
                        <!-- bat dau mot chương mới-->
                    <div class="big_item"> 問題9 次の(1)から(3)の文章を読んで後の問いに対する答えとして最もよいものを、 1・2・3・4から一つ選びなさい。 </div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> (1)<br/>
    いつでも帰ってこられる場所があると思っていられるのは、ずいぶんと心強いことだと思うんです。別に帰ってこなくてもいい。「帰れるところがある」と思っている人と、そんな場所がない人では、人生の選択肢の数が違う。当たり前ですけれど、「退路のある」人の方が発想がずっと自由になれる。ずっと冒険的になれる。<br/><br/>親子関係も同じじゃないかと思います。10年ほど前に高校を卒業した娘が東京へ行くときに、ぼくが娘に言ったのは二つだけです。「金なら貸すぞ」と「困ったらいつでも帰っておいで」。
    親が子どもに向かって言ってあげられる言葉はこれに尽きるん(注1)じゃないでしょうか。泊まるところがなかったら、いつだって君のためのご飯とベッドは用意してあるよ。この言葉だけは親はどんなことがあっても意地でも言い続けないといけないと思うんです。「そんなに甘やかすと自立の妨げになる」と苦言を言う人もいますけれど、ぼくはそれは違うと思う。<br/><br/>「人間は弱い」というのがぼくの人間観の根本なんです。だから、最優先の仕事はどうやってその弱い人間を慰め、癒し、支援する場を安定的に確保するか、です。(中略)家は、メンバーのポテンシャル(注2)を高めたり、
    競争に勝っために鍛えたりするための場じゃない。そういう機会なら家の外にいくらでもある。家というのは、外に出て、傷つき、力尽き、壊れてしまったメンバーがその傷を癒して、また外へ出て行く元気を回復するための備えの場であるべきだどぼくは思っています。<br/><div class="lephai">(内田樹「ぼくの住まい論」による) </div><br/>(注1)これに尽きる:これしかない<br/>(注2) ポテンシャル:ここでは、可能性 </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 50. 「帰れるところがある」と思っている人について、筆者はどのように述べているか。 </div>
              <div style="display:none" id="diemso5">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS51">1) 人生の選択肢に迷わない。 </div>
                    <input  type="radio"  value ="1) 人生の選択肢に迷わない。 　" name="QS5" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS52">2) 人生の可能性が広がる。 </div>
                    <input  type="radio"  value ="2) 人生の可能性が広がる。 　" name="QS5" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS53">3) 自分に自信が持てる。 </div>
                    <input  type="radio"  value ="3) 自分に自信が持てる。 　" name="QS5" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS54">4) 将来に不安を感じない。</div>
                    <input  type="radio"  value ="4) 将来に不安を感じない。　" name="QS5" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS5" >2</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type5">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 51.  筆者は親が子どものためにどうすればよいと考えているか 
     </div>
              <div style="display:none" id="diemso6">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS61">1) いつでも助けてあげられることを伝える。「人間は弱い」ということを教える。 </div>
                    <input  type="radio"  value ="1) いつでも助けてあげられることを伝える。「人間は弱い」ということを教える。 　" name="QS6" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS62">3) 自立の妨げになることをしない。
    </div>
                    <input  type="radio"  value ="3) 自立の妨げになることをしない。
    　" name="QS6" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS63">4) 将来お金に困らないようにする。</div>
                    <input  type="radio"  value ="4) 将来お金に困らないようにする。　" name="QS6" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS6" >1</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type6">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 52. 筆者は、家はどのような場であるべきだと考えているか。  </div>
              <div style="display:none" id="diemso7">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS71">1) 競争に勝つためにさらに自信をつける場
    </div>
                    <input  type="radio"  value ="1) 競争に勝つためにさらに自信をつける場
    　" name="QS7" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS72">2) 社会で自立するための能力を身につける場 </div>
                    <input  type="radio"  value ="2) 社会で自立するための能力を身につける場 　" name="QS7" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS73">3) どんなときでも、穏やかな気持ちになれる場</div>
                    <input  type="radio"  value ="3) どんなときでも、穏やかな気持ちになれる場　" name="QS7" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS74">4) つらくなったときでも、活力を取り戻せる場</div>
                    <input  type="radio"  value ="4) つらくなったときでも、活力を取り戻せる場　" name="QS7" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS7" >4</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type7">3</div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> (2)<br/> 何であれ、一個の製品を完璧に仕上げるのに要求される技能は、たいへんなものです。そんな芸当(注1)が可能な職人の数は限られていることでしょう。作り出せる製品の数も、自然と限られています。ところが、作業工程を細分化してみますと、個々の工程は意外に単純だったりします。より単純な、一つひとつの工程であれば、きちんとこなせる職人の数は、製品をまるごと作れる職人の数に比べて、ずっと多くなるでしょう。また、未熟練だった職人が腕を上げる(注2)のも、より単純な一工程に限定しての話であれば、ずっと容易です。作業の細分化と役割分担、つまり分業化は、確かに①<u>生産性を向上させる</u>ものなのです。<br/><br/>一個の経済に属するということは、その経済に属する他の人たちと分業関係を取り結ぶことを意味します。あなたの仕事も、同じ日本に住んでいる面識もない誰かの仕事も、2<u>同じ分業の網の目に属している</u>のです。今では分業関係は世界全体に広がっていますから、あなたがした仕事が、地球の裏側にいる誰かのした仕事と組み合わせているということも、さらにあります。そして、分業の網の目が全世界に広がり、たとえば一個の工業製品を生産するために、構想からデザイン、原型の製作、部品の製造、組み立てといったさまざまな作業が全世界に広がっている現代は、確かに人類史上最も豊かな時代なのです。<div class="lephai">(徳川家広「自分を守る経済学」による)</div> <br/>(注1) 芸当:普通の人にはまねのできない技<br/>
    (注2)腕を上げる : 技術を上達させる  </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 53. ①<u>生産性を向上させる</u>とあるが、なぜか。 </div>
              <div style="display:none" id="diemso8">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS81">1) 作業工程が細分化されると、一つひとつの作業が速くなるから </div>
                    <input  type="radio"  value ="1) 作業工程が細分化されると、一つひとつの作業が速くなるから 　" name="QS8" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS82">2) 作業工程が細分化されると、職人でなくてもできるから </div>
                    <input  type="radio"  value ="2) 作業工程が細分化されると、職人でなくてもできるから 　" name="QS8" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS83">3) 一工程であれば、仕上げられる職人の数が増えるから </div>
                    <input  type="radio"  value ="3) 一工程であれば、仕上げられる職人の数が増えるから 　" name="QS8" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS84">4) 一工程であれば、どんな職人でもできるから</div>
                    <input  type="radio"  value ="4) 一工程であれば、どんな職人でもできるから　" name="QS8" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS8" >3</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type8">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 54. ②<u>同じ分業の網の目に属している</u>とは、どのようなことを意味しているか。 </div>
              <div style="display:none" id="diemso9">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS91"> 1) 一連の作業工程の中の一つの役割を担っているということ</div>
                    <input  type="radio"  value =" 1) 一連の作業工程の中の一つの役割を担っているということ　" name="QS9" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS92">2) 作業工程が細分化されて分業関係が多様であるということ
    </div>
                    <input  type="radio"  value ="2) 作業工程が細分化されて分業関係が多様であるということ
    　" name="QS9" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS93">3) 誰もがどの工程でもこなせる状態にあるということ </div>
                    <input  type="radio"  value ="3) 誰もがどの工程でもこなせる状態にあるということ 　" name="QS9" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS94">4) 同じ工程を分担している人が数多くいるということ</div>
                    <input  type="radio"  value ="4) 同じ工程を分担している人が数多くいるということ　" name="QS9" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS9" >1</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type9">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 55. 筆者は現代をどのような時代だと考えているか。 </div>
              <div style="display:none" id="diemso10">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS101">1) 世界全体に熟練した職人の技術が広められている。 </div>
                    <input  type="radio"  value ="1) 世界全体に熟練した職人の技術が広められている。 　" name="QS10" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS102">2) 世界全体の分業関係で経済が成り立っている。 </div>
                    <input  type="radio"  value ="2) 世界全体の分業関係で経済が成り立っている。 　" name="QS10" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS103">3) 世界中で工業製品の品質が高くなっている。 </div>
                    <input  type="radio"  value ="3) 世界中で工業製品の品質が高くなっている。 　" name="QS10" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS104">4) 世界のすべての国で分業が重視されている。</div>
                    <input  type="radio"  value ="4) 世界のすべての国で分業が重視されている。　" name="QS10" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS10" >2</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type10">3</div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> (3)<br/> 以下は、長年インタビューを仕事にしている人が書いた文章である。<br/> 何かと取材しつくされたような今の時代にも、乗った電車で横に座った、ぐらいの近くにいる普通の人たちの辿った過去、精神的な道のりを取材することには①<u>可能性</u>が残されている。これは幸福な感触だった。普通の人に対して、話題の人物と同じような方法でなるべく丁寧に話をうかがってみたけれど
    (そのうちの一部分は、これはある職業における普通の人たちへのインタビューとして、昨年発表した拙著「善き書店員」という本にまとめた)。特殊な人物の発言よりむしろそんな普通の人たちの実感こそ、数十年後に振り返れば時代の証言にも聞こえるのではと思うようになっていった。②<u>有意義な取材</u>が開拓されきったような空白の時代に、特別で極端な物語はもういいやという状況で隙間を見つけようとして、そこら辺にごろんと転がっている声の実りにたまたま気づかされたわけだ。 <br/><br/>過去は、文句の言えない形で③<u>「これだ」と見せられるようなものではない</u>。映像などで記録されていてさえ、人物の内面で起きた心の大事件みたいなものは捉えられなかったりもする。解釈は変化するから、同じ出来事への同じ人物の談話も十年前と今でかなり異なることもよくあり、つまり過去は人物の内面で揺れ動き続けていて、形を持たない怪物のようでもある。過去の解釈は、本人が切実に感じているからこそ人生に陰影を与えるため、主観の記憶の何が真実かさえも重要ではない場面がある。有名無名を問わず、さまざまな方に取材で話をうかがううちに、この過去という確固たる形を持たず動き続ける怪物にこそ人間は振り回されたり、あるいは歩き続けていくための滋養(注)をもらったりするようだな、と思うようになっていった。<br/>
    <div class="lephai">(木村俊介「暮しの手帖」2014 年6-7 月号による)</div> <br/>(注)滋養: ここでは、力 </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 56. ①<u>可能性</u>とはどのようなことか。 </div>
              <div style="display:none" id="diemso11">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS111">1) 普通の人のほうが、丁寧に取材に応じてくれること</div>
                    <input  type="radio"  value ="1) 普通の人のほうが、丁寧に取材に応じてくれること　" name="QS11" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS112">2) 普通の人の実感に、取材すべきものを見いだせること </div>
                    <input  type="radio"  value ="2) 普通の人の実感に、取材すべきものを見いだせること 　" name="QS11" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS113">3) 普通の人への取材では、共感できる話を聞けること</div>
                    <input  type="radio"  value ="3) 普通の人への取材では、共感できる話を聞けること　" name="QS11" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS114">4) 普通の人への取材のほうが、幸福な時間に感じられること</div>
                    <input  type="radio"  value ="4) 普通の人への取材のほうが、幸福な時間に感じられること　" name="QS11" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS11" >2</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type11">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 57. ②<u>有意義な取材</u>とはどのようなものだったか。
     </div>
              <div style="display:none" id="diemso12">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS121">1) 普通の人から時代の証言になるような話を聞く。 </div>
                    <input  type="radio"  value ="1) 普通の人から時代の証言になるような話を聞く。 　" name="QS12" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS122">2) 普通の人から数多くの普通の話を聞く。 </div>
                    <input  type="radio"  value ="2) 普通の人から数多くの普通の話を聞く。 　" name="QS12" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS123">3) 話題の人物から日常の何げない話を聞く。</div>
                    <input  type="radio"  value ="3) 話題の人物から日常の何げない話を聞く。　" name="QS12" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS124">4) 特別な人から特別な話を聞く。</div>
                    <input  type="radio"  value ="4) 特別な人から特別な話を聞く。　" name="QS12" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS12" >4</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type12">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 58. 過去は③<u>「これだ」と見せられるようなものではない</u>とあるが、なぜか </div>
              <div style="display:none" id="diemso13">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS131">1) 過去は心の中で形を変えていくものだから </div>
                    <input  type="radio"  value ="1) 過去は心の中で形を変えていくものだから 　" name="QS13" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS132">2) 過去はあまりに多くの出来事を含んでいるから </div>
                    <input  type="radio"  value ="2) 過去はあまりに多くの出来事を含んでいるから 　" name="QS13" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS133">3) 過去の記録は過去の一部でしかないから </div>
                    <input  type="radio"  value ="3) 過去の記録は過去の一部でしかないから 　" name="QS13" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS134">4) 過去の記憶は徐々に薄れていくものだから</div>
                    <input  type="radio"  value ="4) 過去の記憶は徐々に薄れていくものだから　" name="QS13" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS13" >1</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type13">3</div>
                        <!-- bat dau mot chương mới-->
                    <div class="big_item"> 問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、1・2・3・4から一つ選びなさい。 </div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> 視覚や聴覚などの情報処理においては、脳の働きの個人差は比較的少ない。丸いものを提示すれば、脳はそれを丸いものとして認識する。丸いものを提示した時に、それを「丸」と認識する人と「三角」と認識する人が相半ばする(注1)ということはあり得ない。同様に、あるピッチの音を聴いた時に、その情報処理に個人差はあまり見られない。<br/><br/>その一方で、ある事象に対する感情の反応においては、個人によるばらつきが大きくなるのが通例(注2)である。 同じものを前にしても、全ての人がそれを好きだと感じたり、逆に全ての人がそれを嫌いだと思うとは限らない。ある人が好きだと感じるものを、別の人が嫌いだと思うのはごく普通のことである。感情においては、脳の反応に大きな個人差が見られるのである。<br/><br/>そもそも、感情の働きとは何であろうか?ひと昔前には、感情とはある特定の刺激に対する類型的な(注3)反応であると考えられてきた。大脳新皮質(注4)が担っている理性の働きが環境の変化に応じて柔軟な情報処理を行うのに対して、「爬虫類の脳」とも呼ばれる古い脳の部位が重要な役割を担う感情は、一定の決まり切った反応をするものと思われていたのである。<br/><br/>しかし、近年の脳科学の発達により、感情は、むしろ生きる上で避けることのできない不確実性に対する適応戦略であることが明らかになってきた。理性では割り切れない、結果がどうなるかわからないような生の状況において、それでも判断し、決断することを支えるための情報処理のメカニズムとして、感情は存在していると考えられるに至ったのである。<br/>(中略)<br/> 感情が不確実性に対する適応であると考えると、その反応において個人差が生じるのは自然なことである。不確実な状況の下では、とるべき選択肢の「正解」は一つとは限らないからである。<br/><br/>さまざまな人々が異なる戦略をとり、全体としてバラエティが増したほうが、人間という生物種全体としては、むしろ適応的である。生死にかかわるような状況においては、たとえ、ある選択をした人が不幸にして死んでしまったとしても、
    別の選択をした人が生きのびれば生物種としては存続できるからである。全体が同じ選択肢を選んでしまっては、環境の変化や予想のできない事態に対して脆弱になって(注5)しまう。<br/><br/>
    他人が異なる感情の反応を見せることを許容することの倫理的基礎は、まさにこの点にある。他人が自分と異なる感情の中にあることに反発するのは自然な心の動きであるが、とらわれて(注6)はいけない。
    自他の差異に対して許容的であることが、すぐれて生命哲学上の原理にかなっているのである。<br/><div class="lephai">
    (茂木健一郎「疾走する精神」による)</div> <br/>(注1) 相半ばする:同じくらいである<br/> (注2) 通例:一般的<br/>
    (注3) 類型的な:型どおりの <br/>(注4) 大脳新皮質:脳の一部分 <br/>(注5) 脆弱になる : もろくて弱くなる <br/>(注6) とらわれる : ここでは、ある考えに縛られる </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 59. 知覚の情報処理と感情の反応について、筆者はどのように述べているか。  </div>
              <div style="display:none" id="diemso14">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS141">1) いずれも大きな個人差が見られる。 </div>
                    <input  type="radio"  value ="1) いずれも大きな個人差が見られる。 　" name="QS14" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS142">2) いずれも個人差はあまり見られない。 </div>
                    <input  type="radio"  value ="2) いずれも個人差はあまり見られない。 　" name="QS14" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS143">3) 知覚の情報処理のほうが大きな個人差が見られる。 </div>
                    <input  type="radio"  value ="3) 知覚の情報処理のほうが大きな個人差が見られる。 　" name="QS14" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS144">4) 感情の反応のほうが大きな個人差が見られる。</div>
                    <input  type="radio"  value ="4) 感情の反応のほうが大きな個人差が見られる。　" name="QS14" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS14" >4</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type14">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 60. 近年、感情の働きはどのようなものだと考えられるようになったか。  </div>
              <div style="display:none" id="diemso15">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS151">1) 避けられない状況を受け入れるためのもの
    </div>
                    <input  type="radio"  value ="1) 避けられない状況を受け入れるためのもの
    　" name="QS15" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS152">2) 避けられない状況において、理性を保つためのもの </div>
                    <input  type="radio"  value ="2) 避けられない状況において、理性を保つためのもの 　" name="QS15" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS153">3) 不確実な状況において、判断して決断するためのもの </div>
                    <input  type="radio"  value ="3) 不確実な状況において、判断して決断するためのもの 　" name="QS15" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS154">4) 不確実な状況において、正解を求めるためのもの </div>
                    <input  type="radio"  value ="4) 不確実な状況において、正解を求めるためのもの 　" name="QS15" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS15" >3</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type15">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 61. 個人差が生じることがどのようなことにつながるか。 </div>
              <div style="display:none" id="diemso16">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS161"> 1) 人間という生物種の存続 </div>
                    <input  type="radio"  value =" 1) 人間という生物種の存続 　" name="QS16" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS162">2) 人間と他の生物種との共存 </div>
                    <input  type="radio"  value ="2) 人間と他の生物種との共存 　" name="QS16" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS163">3) 生死にかかわるような事態の減少 </div>
                    <input  type="radio"  value ="3) 生死にかかわるような事態の減少 　" name="QS16" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS164">4) 環境の変化に対応できる生物種の増加</div>
                    <input  type="radio"  value ="4) 環境の変化に対応できる生物種の増加　" name="QS16" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS16" >1</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type16">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list">  62. 筆者の考えに合うのはどれか。 </div>
              <div style="display:none" id="diemso17">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS171">1) 人々が生きていくためには、感情の個人差を敏感に察知すべきだ。 </div>
                    <input  type="radio"  value ="1) 人々が生きていくためには、感情の個人差を敏感に察知すべきだ。 　" name="QS17" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS172">2) 人々が生きていく上では、感情の反応の個人差を受け入れたほうがいい。 </div>
                    <input  type="radio"  value ="2) 人々が生きていく上では、感情の反応の個人差を受け入れたほうがいい。 　" name="QS17" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS173">3) 感情の反応に個人差があることこそが、人間であることのあかしである。</div>
                    <input  type="radio"  value ="3) 感情の反応に個人差があることこそが、人間であることのあかしである。　" name="QS17" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS174">4) 感情の反応に個人差があることは、人間を取り巻く環境の変化によるものである。</div>
                    <input  type="radio"  value ="4) 感情の反応に個人差があることは、人間を取り巻く環境の変化によるものである。　" name="QS17" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS17" >2</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type17">3</div>
                        <!-- bat dau mot chương mới-->
                    <div class="big_item"> 問題11 次のAとBの文章を読んで、後の問いに対する答えとして最もよいものを、1・2・3・4から一つ選びなさい。 </div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> A<br/>企業のような組織では、上下関係、年齢、性別などのさまざまな要因により、普段からメンバー全員がフラットに(注1) 話し合える雰囲気がない場合も少なくありません。さらに、会議の場になると、誰かに対する遠慮や、ライバル心などが作用して、メンバーからまったく発言が出なかったり、話が平行線のまますり合わない、などといったことが起こってしまいます。<br/><br/>こうした状況を活性化させて、メンバー全員でアイデアを出していくために重要なのが、チームリーダーからメンバーへ質問をすることです。<br/><br/>
    チームリーダーという立場になると、ついつい、自分の考えや答えを、メンバーに提示してしまいがちですが、そうやって出た結論は得てして(注2)予定調和(注3)になりがちです。<br/><br/>チームで創造的なアイデアを出していくためには、メンバーの内側にあるものを引き出すことが重要であり、そのきっかけを与えるのが「質問」なのです。<br/><div class="lephai">(博報堂ブランドデザイン「チームのアイデアカ。アイデアが出るチームになるための5つのステップ」による)</div> </div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> B<br/>組織の力を生かすには、メンバー同士の積極的な意見交換が欠かせない。しかし再三会議は行われるものの、役職や人間関係を気にしすぎて積極的な議論にならず、生産性がないという声も聞かれる。こうした状況を打開するために、リーダーは会議でどうすべきか。<br/><br/>まずリーダーが自身の明確なビジョンをメンバーに提示し、それについて広く意見を求めることが大切だ。目標がはっきり定まっていて、それに向けて具体的方策を練るという議論ならば、メンバーも発言しやすい。また、さまざまな方向性の意見が出て一つの結論へ収束させられないという非効率な事態も避けられる。リーダーは、目指すべき方向を示し、メンバーと議論を深めていける場を作ることが重要だ。 <br/><br/>(注1) フラットに : ここでは、対等に <br/>(注2) 得てして: ともすれば <br/>(注3) 予定調和:ここでは、無難なもの  </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 63. 企業の問題点として、AとBが共通して指摘している点は何か。  </div>
              <div style="display:none" id="diemso18">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS181">1) 社内の人間関係が悪いこと </div>
                    <input  type="radio"  value ="1) 社内の人間関係が悪いこと 　" name="QS18" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS182">2) 社内で無駄な会議が多すぎること </div>
                    <input  type="radio"  value ="2) 社内で無駄な会議が多すぎること 　" name="QS18" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS183">3) 社内会議で活発な議論が行われないこと </div>
                    <input  type="radio"  value ="3) 社内会議で活発な議論が行われないこと 　" name="QS18" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS184">4) 社内会議の結論が業績向上に結びつかないこと</div>
                    <input  type="radio"  value ="4) 社内会議の結論が業績向上に結びつかないこと　" name="QS18" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS18" >3</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type18">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 64. 会議でのリーダーの姿勢について、AとBはどのように述べているか。 </div>
              <div style="display:none" id="diemso19">2</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS191">1) AもBも、メンバーから出た意見をうまく調整することが重要だと述べている。 </div>
                    <input  type="radio"  value ="1) AもBも、メンバーから出た意見をうまく調整することが重要だと述べている。 　" name="QS19" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS192">2) AもBも、自身の意見は控えて、質問でメンバーの意見を引き出すことが重要だと述べている。 </div>
                    <input  type="radio"  value ="2) AもBも、自身の意見は控えて、質問でメンバーの意見を引き出すことが重要だと述べている。 　" name="QS19" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS193">3) Aはメンバー同士で話し合うことが重要だと述べ、Bは自身の考えを示してメンバーも意見を求めるべきだと述べている。
    </div>
                    <input  type="radio"  value ="3) Aはメンバー同士で話し合うことが重要だと述べ、Bは自身の考えを示してメンバーも意見を求めるべきだと述べている。
    　" name="QS19" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS194">4) Aは質問をしてメンバーの意見を集めるべきだと述べ、Bは目標を明確に示して議論を進めることが重要だと述べている。</div>
                    <input  type="radio"  value ="4) Aは質問をしてメンバーの意見を集めるべきだと述べ、Bは目標を明確に示して議論を進めることが重要だと述べている。　" name="QS19" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS19" >4</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type19">3</div>
                        <!-- bat dau mot chương mới-->
                    <div class="big_item"> 問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、1・2・3・4から一つ選びなさい。 </div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> わたしは、暮らしや家族の中にある科学をテーマにして、雑誌に記事を書くことがあります。料理の科学、生活の中にある器具のしくみなどを取りあげて、科学を専門としない人たちにも関心を持ってもらえるよう記事づくりを工夫します。そんなとき①<u>編集者の注文</u>はこうです。<br/><br/>「一般の主婦の方々にとっつきやすくする(注1) ために、内容は科学のことであっても「科学」ということばは使わないでください。「科学」と聞いただけて引いてしまう(そのページを読むことをやめてしまう)人がけっこういますから」<br/><br/>これは、わたしにとってはむずかしい注文であることが多いのですが、編集者の言うことは、一般の人に対する情報発信の心構えとして、現時点では適切と言うほかありません。「科学」ということばを使うか否かが大きな問題なのではありません。
    読者である「一般の人たち」も、発信する側である「編集者」も、科学に対して距離を感じているということであり、それは、現在の「科学技術」と②<u>「それを使う人たち」</u>の関係を象徴しています。作る側、発信する側は、当然その内容を熟知し将来の方向性を提案しますが、それを使う側の人は与えられたものを十分に理解せず「買う」という行動だけで受け入れていると言いかえられます。<br/>(中略)<br/> 技術、そして科学技術は、その時代に生きている人々によって求められ発展してきたものであるはずですから、わたしたちはそれらの科学技術を使う主人公です。しかし、はたしてわたしたちの科学技術に対する理解は、科学の発展とともに進んでいるでしょうか...?<br/><br/>たとえば、あなたの周りで、「科学はむずかしいから」と決めつけて、苦手だと思っている人はいませんか。あなた自身はどうでしょう。科学的理論と実用化のレベルが複雑で高度なために、一握りの人たちにしかわからないむずかしいものになってしまっているのは事実です。<br/><br/>専門家や技術者が作り出したものを、マニュアルの通りに使うことさえできれば、③<u>そのしくみなどを知る必要はない</u>、という人もいるかもしれません。
    しかし、そのような使い方では、供給する側から示された技術の「良い部分」しか見えません。科学技術を提供する側からは「良い部分」しか聞かれないのだとしたら...。それらを使う主人公であるわたしたちは、
    与えられる情報だけではなく、科学的背景やしくみを少しでも知った上で、生活の中に取り入れるか、取り入れないのかを判断することが必要です。 <br/><br/>
    良いこと(ベネフィット)も悪いこと(リスク)も考えながら科学技術とつきあっていく、その第一歩は、「知ること」です。<br/><div class="lephai">
    (佐倉純/古田ゆかり/リビング・サイエンス・ラボ「おはようからおやすみまでの科学」による)</div><br/> (注)とっつきやすくする : ここでは、受け入れられやすくする </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 65. ①<u>編集者の注文とあるが、編集者はなぜ注文したのか。 </div>
              <div style="display:none" id="diemso20">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS201">1) 読者が科学に苦手意識を持っていると考えているから </div>
                    <input  type="radio"  value ="1) 読者が科学に苦手意識を持っていると考えているから 　" name="QS20" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS202">2) 読者が科学の専門的なことばを理解できないと考えているから </div>
                    <input  type="radio"  value ="2) 読者が科学の専門的なことばを理解できないと考えているから 　" name="QS20" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS203">3) 読者が考える科学と暮らしの中の科学は違うと考えているから
    </div>
                    <input  type="radio"  value ="3) 読者が考える科学と暮らしの中の科学は違うと考えているから
    　" name="QS20" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS204">4) 読者が持っている科学のイメージがはっきりしないと考えているから</div>
                    <input  type="radio"  value ="4) 読者が持っている科学のイメージがはっきりしないと考えているから　" name="QS20" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS20" >1</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type20">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 66. ②<u>「それを使う人たち」</u>について、筆者はどのように述べでいるか。 </div>
              <div style="display:none" id="diemso21">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS211">1) 科学技術は使っているうちに理解できると思っている。</div>
                    <input  type="radio"  value ="1) 科学技術は使っているうちに理解できると思っている。　" name="QS21" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS212">2) 科学技術を使ってはいるが、理解しているとは言えない。
    </div>
                    <input  type="radio"  value ="2) 科学技術を使ってはいるが、理解しているとは言えない。
    　" name="QS21" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS213">3) 科学技術を理解してはいるが、使いこなせていない。 </div>
                    <input  type="radio"  value ="3) 科学技術を理解してはいるが、使いこなせていない。 　" name="QS21" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS214">4) 科学技術を理解しているつもりで使っている。</div>
                    <input  type="radio"  value ="4) 科学技術を理解しているつもりで使っている。　" name="QS21" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS21" >2</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type21">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 67. ③<u>そのしくみなどを知る必要はない</u>と考えることの問題点は何か。  </div>
              <div style="display:none" id="diemso22">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS221">1) マニュアルがないと製品が使えないこと </div>
                    <input  type="radio"  value ="1) マニュアルがないと製品が使えないこと 　" name="QS22" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS222">2) マニュアル以外の使い方ができなくなること </div>
                    <input  type="radio"  value ="2) マニュアル以外の使い方ができなくなること 　" name="QS22" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS223">3) 供給する側の伝えたい情報が理解できないこと </div>
                    <input  type="radio"  value ="3) 供給する側の伝えたい情報が理解できないこと 　" name="QS22" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS224">4) 供給する側に都合のいい情報しか得られないこと </div>
                    <input  type="radio"  value ="4) 供給する側に都合のいい情報しか得られないこと 　" name="QS22" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS22" >4</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type22">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 68. 筆者が言いたいことは何か。 </div>
              <div style="display:none" id="diemso23">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS231">1) 科学技術の知識を豊富に身につけることが大切だ。 </div>
                    <input  type="radio"  value ="1) 科学技術の知識を豊富に身につけることが大切だ。 　" name="QS23" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS232">2) 科学技術をマニュアルに頼らず使いこなすことが大切だ。 </div>
                    <input  type="radio"  value ="2) 科学技術をマニュアルに頼らず使いこなすことが大切だ。 　" name="QS23" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS233">3) 科学技術を取り入れ、そのしくみを知ろうとすることが大切だ。
    </div>
                    <input  type="radio"  value ="3) 科学技術を取り入れ、そのしくみを知ろうとすることが大切だ。
    　" name="QS23" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS234">4) 科学技術を知り、生活に取り入れるかどうかを判断することが大切だ。</div>
                    <input  type="radio"  value ="4) 科学技術を知り、生活に取り入れるかどうかを判断することが大切だ。　" name="QS23" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS23" >4</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type23">3</div>
                        <!-- bat dau mot chương mới-->
                    <div class="big_item"> 問題13 下のページは、ある市役所のホームページにある「学生レポーター」の募集案内である。下の問いに対する答えとし
    て最もよいものを、1・2 13.4から一つ選びなさい。 </div>
                        <!-- bat dau mot chương mới-->
                    <!-- dong nội dung bài cho phần đọc-->
            <div class="question_content"> 「川村市>レポート募集>学生レポート募集<br/><center><b>学生レポート募集について</b></center><br/><br/>川村市では、市の魅力を伝えるため、市のホームページに掲載するレポートを執筆する「学生レポート」を募集します。<br/><br/><b>[活動内容]</b><br/> 川村市の自然、農産、文化などについて取材し、年度中に4本程度の写真つき記事を出していただきます。<br/><br/> <b>[任期]</b><br/> 2017年4月~2018年3月(1年間) <br/><br/><b>[謝札]</b><br/> 謝礼(年額 10,000)と記念品を差し上げます。<br/><br/><b>[応募資格]</b><br/> 任期中を通じて、以下のa) ~ c) の条件をすべて満たす方<br/> a) 大学院、大学、短期大学または専門学校に通う学生である。
    <br/>　　・外国人学生の方も、歓迎します。 <br/><br/>b) 川村市内に在住、または、川村市にある学校に在学にします<br/><br/> 
    c)2017年3月18日(土)に川村市役所で行われる事前説明会に出席できる。<br/><br/><b>[応募方法]</b><br/> 市役所広報課にメール (1)、(2) をご提出ください。(2017年2月24日(金) 締切り)。折り返し、面接日についてご連絡します。面接では写真を使ったプレゼンテーション (5分程度)もしていただきます。 必ず (3) をご待参ください。 採否は、志望理由書及び面接により決定します。 </b></b>(1) 申込書</b> ・・・本ホームページからダウンロードし、必要事項を記入してください。 </b></b>(2)</b> 志望理由書 ・・・書式自由。川村市学生レポートに応募した理由について200字程度でいてくだい。 </b></b> (3)</b> 写真(テーマ「私は伝えたいの村市」 人物、風景、物など、何でも結種です。) <br/>* 面接時、学生証と現在所がわかるものを確認しますので、ご待参ください。 <br/><br/>[その他]<br/> レポーターをお願いする方には、市で指定するボランティア保険に加入していただきまする。(保険の費用は、市で負 担致します。)<br/>お問合せ:川村市役所広報課081-6543-2100/kouhou@kawamura.jp<br/><br/><table class="table_dokai"> <tr><th>名前</th><th>通っている大学</th><th>住む所</th><th>その他</th></tr>
    <tr><th>キムさん</th><th>岩里市にある大学</th><th>岩里市</th><th></th></tr>
    <tr><th>カーンさん</th><th>川村市の専門学校</th><th>岩里市</th><th>2017年3月9日から20日までの間、<br/>しばらく帰国する予定。</th></tr>
    <tr><th>ホンさん</th><th>岩里市にある大学</th><th>川村市</th><th>2017年1月から川村市に住む</th></tr>
    <tr><th>クルスさん</th><th>川村市にある大学院</th><th>川村市</th><th>2017年9月修士課程終了後、10月 <br/>に帰国する予定。</th></tr>
    </table><br/> </div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 69. 次の4人は、全員「学生レポーター」に応募しようと思っている。この中で、「学生レポーター」に応募できるのは誰か。  </div>
              <div style="display:none" id="diemso24">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS241">1) キムさん </div>
                    <input  type="radio"  value ="1) キムさん 　" name="QS24" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS242">2) カーンさん</div>
                    <input  type="radio"  value ="2) カーンさん　" name="QS24" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS243">3) ホンさん </div>
                    <input  type="radio"  value ="3) ホンさん 　" name="QS24" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS244">4) クルスさん</div>
                    <input  type="radio"  value ="4) クルスさん　" name="QS24" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS24" >3</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type24">3</div>
                        <!-- bat dau mot chương mới-->
                                <!-- dong cau hoi -->
              <div class="question_list"> 70. 「学生レポーター」に応募人が2017年2月24日（金）までに必ずしなければならないことは何か。 </div>
              <div style="display:none" id="diemso25">3</div>
              <!-- dong các đáp an -->
                          <div class="answer_1row">
                                                            <label class="container" >
                    <div class="answers" id="QS251">1) 申込書、志望理由書をメールで提出する。</div>
                    <input  type="radio"  value ="1) 申込書、志望理由書をメールで提出する。　" name="QS25" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS252">2) 申込書、 志望理由書を持参して提出する。 </div>
                    <input  type="radio"  value ="2) 申込書、 志望理由書を持参して提出する。 　" name="QS25" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS253">3) 申込書、志望理由書、写真をメールで提出する。 </div>
                    <input  type="radio"  value ="3) 申込書、志望理由書、写真をメールで提出する。 　" name="QS25" >
                    <span class="checkmark"></span>
                  </label>
                                                    <label class="container" >
                    <div class="answers" id="QS254">4) 申込書、志望理由書、写真を持参して提出する。</div>
                    <input  type="radio"  value ="4) 申込書、志望理由書、写真を持参して提出する。　" name="QS25" >
                    <span class="checkmark"></span>
                  </label>
                                      </div>
    
                        <!-- dong cau tra loi bi an di-->
               <div style="display:none" id="AS25" >1</div>
               
              <!-- dong cho biet cau nay thuoc kieu thi nao, tu vung hay doc hieu-->
               <div style="display:none" id="type25">3</div>
                        <!-- dong cuoi cung ghi tong so cau hoi-->
           <div style="display:none" id="totalQUestion" >25</div>
          
        <div class="chuyen_trang">
        <a href="javascript:MoveNextText(1,201607,'N1','en');"> << Letters and Vocabulary,Grammar</a><input type="button" onclick="Saiten()" class="btn-info" value="Check result"><a href="javascript:MoveNextText(4,201607,'N1','en');" >Listening (聴解) >></a>		</div>
        <button class="btn-info" id="goToTop">
          <img src="hinh/icon/up-to-top.svg" class="custom-svg" alt="Lên đầu trang">
        </button>
      </form>`;
        
        const root = parse(resHtml);
        
        const fHtml = root.querySelector('.dttn')?.toString() || '';

        // Conversion
        let result = null;
        
        if(fHtml) {
          result = await HTMLToJSON(fHtml.replaceAll('\t', ''), true);
        } else {
          invalidSaves.push({level: LEVEL[levelIdx], year: index, month: month});
          continue;
        }

        const cHtml = JSON.parse(result.toString());
        let newQuestion = new JlptTest();

        let isChoice = false;

        for(let itemIdx = 0; itemIdx < cHtml.content.length; itemIdx++) {
          let item = cHtml.content[itemIdx];
          
          // 그룹문제
          if(item.attributes?.class === 'big_item') {
            newQuestion.question = { content: parseContent(item.content) };

            if(!newQuestion.question) {
              newQuestion = new JlptTest();
              continue;
            }

            newQuestion.questionType = 'group';
            newQuestion.sortNo = sortNo++;
          }

          // 본문
          if(item.attributes?.class === 'question_content') {
            newQuestion.question = { content: parseContent(item.content) };

            if(!newQuestion.question) {
              newQuestion = new JlptTest();
              continue;
            }

            newQuestion.questionType = 'content';
            newQuestion.sortNo = sortNo++;
          }

          // 문제
          if(item.attributes?.class === 'question_list') {
            newQuestion.question = { content: parseContent(item.content) };

            if(!newQuestion.question) {
              newQuestion = new JlptTest();
              continue;
            }

            newQuestion.questionType = 'normal';
            newQuestion.sortNo = sortNo++;
            newQuestion.questionNo = questionNo;
          }

          // 보기
          if(item.attributes?.class?.includes('answer_')) {
            let ansArr = new Array();
            let choiceIdx = 0;

            item.content.forEach((ansContent: any) => {
              let result = [];

              if(typeof ansContent === 'object') {
                result = ansContent.content.map((ans: any) => {
                  if(ans.attributes?.class === 'answers') {
                    return parseContent(ans?.content).trim();
                  } else {
                    return '';
                  }
                });
              } else {
                if(typeof ansContent === 'string') {
                  if(ansContent === '\r\n') {
                    return '';
                  }
                }
              }

              ansArr = [...ansArr, { no: ++choiceIdx, content: result.join('').trim()}];
            });

            newQuestion.choices = ansArr;
          }
          
          // 정답
          if((item.attributes?.id || '').includes('AS')) {
            // const newAnswer = new AnswersJlpt({
            //   year: index,
            //   month: month,
            //   level: LEVEL[levelIdx],
            //   classification: CLASSIFICATION,
            //   questionNo: questionNo,
            //   answer: parseContent(item?.content),
            // });

            // // console.log(newAnswer);
            // await newAnswer.save();
            // questionNo++;
            // resultCnt++;

            newQuestion.answer = Number(parseContent(item?.content));
            isChoice = true;
          }

          newQuestion.year = index;
          newQuestion.month = month;
          newQuestion.level = LEVEL[levelIdx];
          newQuestion.classification = CLASSIFICATION;
          
          if('group' === newQuestion?.questionType) {
            await newQuestion.save();

            // console.log(newQuestion);

            newQuestion = new JlptTest();
          } else if('content' === newQuestion?.questionType) {
            await newQuestion.save();

            // console.log(newQuestion);

            newQuestion = new JlptTest();
          } else if('normal' === newQuestion?.questionType) {
            if(isChoice) {
              await newQuestion.save();

              // console.log(newQuestion);

              newQuestion = new JlptTest();

              isChoice = false;
              questionNo++;
              resultCnt++;
            }
          }
        };
      }
    }
  }

  return NextResponse.json({resultCnt: resultCnt, invalidSaves: invalidSaves})
}
