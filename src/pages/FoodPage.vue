<template>
  <div class="window-width">
    <q-card>
      <q-tabs v-model="tab" dense class="text-grey text-h4 text-weight-bold" active-color="blue" indicator-color="blue" align="justify">
        <q-tab name="mails" icon="mdi-food-fork-drink" style="height:80px;"/>
        <q-tab name="alarms" icon="mdi-bed" />
        <q-tab name="movies" icon="mdi-wallet-giftcard" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails" class="q-pa-none">

          <q-splitter v-model="splitterModel">

            <template v-slot:before>
              <q-tabs v-model="innerTab" vertical class="text-blue text-subtitle1">
                <q-tab name="innerMails" color="middleblue" icon="mail" label="南竿鄉" />
                <q-tab name="innerAlarms" icon="alarm" label="北竿鄉" />
                <q-tab name="innerMovies" icon="movie" label="莒光鄉" />
                <q-tab name="innerHome" icon="home" label="東引鄉" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels v-model="innerTab" animated transition-prev="slide-down" transition-next="slide-up">
                <!-- 南竿鄉 -->
                <q-tab-panel name="innerMails" class="window-height justify-start">
                  <!-- <div class="text-h4 q-mb-md">美食餐廳</div> -->
                  <!-- 美食餐廳 -->
                  <div id="food" class="row q-col-gutter-xs" style="background:pink">
                    <q-card class="my-card col-md-3 col-xs-12 ">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2914&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          明星樓餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        南竿的「明星樓餐廳」以提供物美價廉的馬祖風味菜聞名，老闆堅持海鮮食材必須當天新鮮現做，加上深厚廚藝，許多遊客不遠千里而來。
                      </q-card-section>
                      <q-card-section class="section">
                        <hr class="q-mt-none">
                        連江縣南竿鄉馬祖村50號
                        <br>
                        886-836-22143
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2916&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          依嬤的店
                        </div>
                      </q-img>
                      <q-card-section>
                        友誼山莊坐落莒光鄉西莒田沃村，於2002年開張，是一座現代化旅館，站在頂樓陽臺上，登高望遠、海天一色、視野極佳。一樓餐廳部有各式簡餐、點心及宵夜，並提供旅遊團體預約的「馬祖風味餐合菜」經濟特餐。
                      </q-card-section>
                      <q-card-section class="section">
                        <hr class="q-mt-none">
                        連江縣南竿鄉復興村72-1號
                        <br>
                        886-912-261414
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2918&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          醉仙樓餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        位在麗堤民宿一樓的醉仙樓，寬敞又氣派，還設有三間包廂，讓遊客能盡情把酒言歡；餐廳主廚原先是一位旅臺鄉親，返回原鄉南竿定居後，在介壽商場開設一家兼具臺菜與福州菜特色的美食餐廳，深受各界人士喜愛。
                      </q-card-section>
                      <q-card-section class="section">
                        <hr class="q-mt-none">
                        連江縣南竿鄉介壽村245之1號
                        <br>
                        0836-26999
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2919&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          儷儐飲食店
                        </div>
                      </q-img>
                      <q-card-section>
                        想吃到平價好吃的道地海鮮料理，不妨來儷儐飲食店吧！位在南竿清水村的儷儐餐廳食材新鮮、餐點美味、價格公道，因此不只受到觀光客喜愛，也獲得不少在地馬祖人的肯定。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉清水村107號
                        <br>
                        0836-25198
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2921&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          九榕閣餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        九榕閣餐廳鄰近南竿福澳港不遠處，由石砌與木造牆面搭起的古色古香外觀別有一番風情，除了復古建築造型，也能在這吃到在地馬祖風味料理，也是許多遊客的口袋名單之一。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉福沃村41號
                        <br>
                        886-836-22888
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2943&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          馬港香林小館
                        </div>
                      </q-img>
                      <q-card-section>
                        手工自製魚麵、手工魚丸、精製黃金地瓜餃、酒糟雞
                        九榕閣餐廳鄰近南竿福澳港不遠處，由石砌與木造牆面搭起的古色古香外觀別有一番風情，除了復古建築造型，也能在這吃到在地馬祖風味料理，也是許多遊客的口袋名單之一。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉馬祖村70號
                        <br>
                        886-836-25370
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2922&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          夫人咖啡館
                        </div>
                      </q-img>
                      <q-card-section>
                        建築本體是座近80年的老石屋，咖啡館提供特色飲品、馬祖特色小菜、美味簡餐等餐飲，期望透過老屋空間活化，讓老屋能再次展現光芒，不妨來這裡享受徐徐海風和浪濤聲，度過美好午後時光吧！
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉四維(夫人)村40-1號
                        <br>
                        886-836-25138
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2944&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          力安複合式簡餐坊
                        </div>
                      </q-img>
                      <q-card-section>
                        力安複合式餐坊的前身是一間簡餐坊，為了提升餐飲多元化，融入了新元素，將其改為複合式經營方式，餐飲項目多，其中小火鍋是力安的主力強棒。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉馬祖村11號
                        <br>
                        886-836-25109
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2396&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          阿妹的店鼎邊糊
                        </div>
                      </q-img>
                      <q-card-section>
                        位於介壽村獅子市場2樓的「阿妹的店」是馬祖著名的鼎邊糊餐廳，鼎邊糊是福州人的傳統飲食，把米漿糊在高湯鍋邊加熱煮熟，米糊受熱熟透後鏟至高湯中，就成了一碗鮮美的鼎邊糊，是難得的道地特殊料理。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉介壽村363號
                        <br>
                        886-836-26375
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2946&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          和田屋麵館
                        </div>
                      </q-img>
                      <q-card-section>
                        道地馬祖風味料理，餐點選擇多樣化，有湯麵、乾麵、水餃、炒飯、燴飯、簡餐類及各式小菜湯品，份量大且價格實惠。
                      </q-card-section>
                      <q-card-section class="absolute-bottom">
                        <hr class="q-mt-none">
                        連江縣南竿鄉馬祖村78號
                        <br>
                        886-836-25616
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2945&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          大眾飲食店
                        </div>
                      </q-img>
                      <q-card-section>
                        大眾飲食店為馬港美食街道地的風味小吃之一，1978年營業至今的老店，店內沒有華麗裝潢，就像一般住家，櫃台後的牆面擺設各式紀念酒，非常特別。菜色以馬祖當地食材和特色料理為主，許多遊客慕名而來，常常客滿。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉馬祖村80號
                        <br>
                        0836-22185
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2948&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          三六九小館
                        </div>
                      </q-img>
                      <q-card-section>
                        「三六九小館」原先位置在舊澳口旁，如今藏身於介壽村中，店內佈置乾淨整齊，最受遊客喜愛的招牌餐點是滷味、炸醬麵和炒麵。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣南竿鄉介壽村64號
                        <br>
                        886-836-26639
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
                <!-- 北竿鄉 -->
                <q-tab-panel name="innerAlarms">
                  <div id="food" class="q-pa-md row q-col-gutter-xs">
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2936&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          龍福山莊中餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        龍福山莊是民宿，也設有餐廳可以用餐，距離北竿機場走路只要三分鐘，距離塘后道沙灘走路只要十分鐘，環境寬敞舒適，地理位置方便，餐點用心好吃。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣北竿鄉塘岐村273-8號
                        <br>
                        886-836-55077
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2938&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          龍和閩東風味館
                        </div>
                      </q-img>
                      <q-card-section>
                        龍和閩東風味館菜色料理多元化，除了馬祖菜還有臺式料理以及燒臘，一次嚐盡多種風味！店內裝潢雖簡單，但空間寬敞，舒適的用餐環境讓遊客用平民價格，就能享受一流環境與美味，透明式廚房設計，就是要讓客人吃得安心。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣北竿鄉塘岐村88號
                        <br>
                        886-836-55576
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2937&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          鴻星平海鮮樓
                        </div>
                      </q-img>
                      <q-card-section>
                        北竿知名海鮮餐廳，要來大快朵頤美味馬祖風味菜和道地海鮮料裡，不可錯過鴻星平海鮮樓喔！
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣北竿鄉塘岐村242號
                        <br>
                        886-836-55426
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2939&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          臺江大飯店
                        </div>
                      </q-img>
                      <q-card-section>
                        臺江大飯店位在北竿首善之區的塘岐村，距離北竿機場約只有兩百公尺，在翠綠的壁山、短坡山環繞下，前方緊臨塘后道沙灘，依山傍海、風景秀麗。晨起從陽臺向東方望去，金色朝陽從大沃山緩緩升起，就此展開豐富多彩的旅遊假期。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣北竿鄉塘岐村200號
                        <br>
                        886-836-55256
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2940&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          嘉賓餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        馬祖北竿的海鮮料理餐廳，師傅的手藝家喻戶曉，時常高朋滿座，餐點火侯道地、魚獲新鮮，歡迎來嘉賓品嘗這份海陸交融的美味。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣北竿鄉塘岐村219號
                        <br>
                        886-836-55535
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2400&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          發師傅協和食品行
                        </div>
                      </q-img>
                      <q-card-section>
                        協和食品行創立於1976年，負責人王敦發先生有感於發揚馬祖傳統技藝之精神，於北竿塘岐創立協和食品行。近四十年協和食品行始終戰戰兢兢的延續馬祖傳統美食─馬祖酥、芙蓉酥、蘿蔔絲餅、黃金地瓜餃以及婚慶禮餅等傳統美食，深受地方人士喜愛。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣北竿鄉塘岐村229號
                        <br>
                        886-836-55236
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2398&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          黃金地瓜餃
                        </div>
                      </q-img>
                      <q-card-section>
                        黃金地瓜餃
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣北竿鄉橋仔村廣場
                        <br>
                        0836-55590
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
                <!-- 莒光鄉 -->
                <q-tab-panel name="innerMovies">
                  <div id="food" class="q-pa-md row q-col-gutter-xs">
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2394&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          巧屋餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        「巧屋餐廳」位在船老大民宿內，餐點最大特色就是新鮮健康、無菜單的美味料理，東莒海域漁產種類豐富加上用心栽種的有機蔬果，平均一個人只要300元左右的預算就可品嘗到海味滿點、健康美味的豐盛大餐。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣莒光鄉大坪村72號
                        <br>
                        0836-88022
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2913&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          友誼山莊簡餐
                        </div>
                      </q-img>
                      <q-card-section>
                        友誼山莊坐落莒光鄉西莒田沃村，於2002年開張，是一座現代化旅館，站在頂樓陽臺上，登高望遠、海天一色、視野極佳。一樓餐廳部有各式簡餐、點心及宵夜，並提供旅遊團體預約的「馬祖風味餐合菜」經濟特餐。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣莒光鄉田澳村67號
                        <br>
                        0836-88028
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2942&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          楓樹林小吃
                        </div>
                      </q-img>
                      <q-card-section>
                        東莒島上唯二的小吃店之一，餐點好吃份量夠、價位合理、環境整潔，是許多觀光客到東莒的必吃美食小店。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣莒光鄉東莒大坪村26號
                        <br>
                        0836-89037
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=3339&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          找茶冰品店
                        </div>
                      </q-img>
                      <q-card-section>
                        在東莒想喝冰涼飲品，就要來「找茶冰品店」喝人氣仙草奶凍，滑口仙草配上濃厚奶香，除了是東莒島上有名的冷飲，更紅遍全馬祖；除了仙草奶凍，店內的珍珠類飲品也很受歡迎，老闆堅持珍珠每日現煮，確保新鮮品質。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣莒光鄉東莒大坪村30號
                        <br>
                        886-836-88009
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=3371&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          一起@驛站
                        </div>
                      </q-img>
                      <q-card-section>
                        一起@驛站位於莒光遊客中心旁，用餐環境可以一覽海灘、聚落以及東莒燈塔的絶色美景，有著最美咖啡廳的美稱。餐廳提供新鮮手作麵包、點心、PIZZA、咖啡、飲品，以及每日限定異國風味套餐，現作餐點，提早預約。另外可以預約團體包場或外燴活動等事宜。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣莒光鄉福正村1號
                        <br>
                        886-836-89388
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
                <!-- 東引鄉 -->
                <q-tab-panel name="innerHome">
                  <div id="food" class="q-pa-md row q-col-gutter-xs">
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2924&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          長堤荇菜廚房
                        </div>
                      </q-img>
                      <q-card-section>
                        在成為荇菜廚房之前，長堤是間保有80年代風情、主打西式簡餐的咖啡屋，隨著小島消費者結構的改變，蔡家日常的私房菜成了顧客們指定的桌上佳餚，秉持著「來東引吃到真正的東引菜」，2017年正式以「荇菜廚房」取代「咖啡屋」。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣東引島中柳村90號
                        <br>
                        886-836-77365
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2925&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          青葉餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        本店自戰地政務起已開業30多年，福州風味菜，最具特色是老媽子的魚丸、魚麵純手工製作.有種外島獨特香甜滋味。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣東引鄉中柳村110號
                        <br>
                        0836-88028
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2926&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          麥味登早餐
                        </div>
                      </q-img>
                      <q-card-section>
                        東引頗負盛名的早餐店，馬祖限定繼光餅不能錯過！
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣東引鄉樂華村123號（十二棟）
                        <br>
                        886-836-77255
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2927&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          珍膳美餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        若想在東引吃頓豪華大餐，最常被當地人推薦的就是珍膳美餐廳。外觀是復古的閩東式建築，內部用餐環境舒適，料理口味更是一絕，老闆阿光師廚藝了得，店內沒有菜單，但菜色保證驚喜！
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣莒光鄉東莒大坪村30號
                        <br>
                        886-836-88009
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2929&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          呷尚寶早餐
                        </div>
                      </q-img>
                      <q-card-section>
                        西式早餐
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣東引鄉樂華村80號
                        <br>
                        0836-76123
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2928&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          劉家麵館
                        </div>
                      </q-img>
                      <q-card-section>
                        東引劉家麵館樸實裝設，卻隱藏著大大美味，店內「招牌炸麻醬」麵結合炸醬鹹味和麻醬的香甜，特別的滋味，值得品嘗。
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣東引島樂華村102號
                        <br>
                        886-836-76036
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2930&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          今友緣餐廳
                        </div>
                      </q-img>
                      <q-card-section>
                        今友緣客棧老闆的好手藝、高CP值，連在地人都十分捧場，這裡的菜色多變、口味道地、價格又平實，來東引，想一次品嘗在地好料，來今友緣就對了！
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣東引鄉樂華村95號
                        <br>
                        886-836-77079
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2971&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          香記小吃店
                        </div>
                      </q-img>
                      <q-card-section>
                        香記火鍋小吃店是一間開了20多年的老店，老闆是為人親切客氣的香爸，聽說香爸以前也是在東引當兵，在1976年香爸就與這裡有密不可分的關係，香爸常以東引為傲，退伍後在此經營香記火鍋小吃店，店內的食材應有盡有，是適合用餐的好地方！
                      </q-card-section>
                      <q-card-section>
                        <hr class="q-mt-none">
                        連江縣東引島樂華村128號
                        <br>
                        886-836-77191
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </q-tab-panel>

        <!-- 住宿資訊 -->
        <q-tab-panel name="alarms">
          <q-splitter class="window-height" v-model="splitterModel">
            <template v-slot:before>
              <q-tabs v-model="innerTab" vertical class="text-blue">
                <q-tab name="innerMails" icon="mail" label="南竿鄉" />
                <q-tab name="innerAlarms" icon="alarm" label="北竿鄉" />
                <q-tab name="innerMovies" icon="movie" label="莒光鄉" />
                <q-tab name="innerHome" icon="home" label="東引鄉" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels v-model="innerTab" animated transition-prev="slide-down" transition-next="slide-up">
                <q-tab-panel name="innerMails">
                  <div id="food" class="q-pa-md row q-col-gutter-xs">
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2924&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          牛角好窩民宿餐飲
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村149號
                        <br>
                        0836-23530
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/43892.JPG">
                        <div class="absolute-bottom text-h6">
                          夫人民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉四維村40之1號
                        <br>
                        0836-25138
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/151092.jpeg">
                        <div class="absolute-bottom text-h6">
                          日光春和
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉仁愛村1之1號
                        <br>
                        0836-26666
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://taiwan.taiwanstay.net.tw/twpic/40982.JPG">
                        <div class="absolute-bottom text-h6">
                          三隻腳民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村23號
                        <br>
                        0836-25580
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/160328.jpg">
                        <div class="absolute-bottom text-h6">
                          牛角海邊民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村121號
                        <br>
                        0939-259266
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/26599.jpg">
                        <div class="absolute-bottom text-h6">
                          卡蹓英雄館
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村101之1號
                        <br>
                        0836-25025
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/159962.jpg">
                        <div class="absolute-bottom text-h6">
                          好日子民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村113-1號
                        <br>
                        0836-23332
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/17834.jpg">
                        <div class="absolute-bottom text-h6">
                          好望角景觀民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉福沃村98號
                        <br>
                        0836-25868
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
                <!-- 北竿 -->
                <q-tab-panel name="innerAlarms">
                  <div id="food" class="q-pa-md row q-col-gutter-xs">
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2924&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          牛角好窩民宿餐飲
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村149號
                        <br>
                        0836-23530
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/43892.JPG">
                        <div class="absolute-bottom text-h6">
                          夫人民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉四維村40之1號
                        <br>
                        0836-25138
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/151092.jpeg">
                        <div class="absolute-bottom text-h6">
                          日光春和
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉仁愛村1之1號
                        <br>
                        0836-26666
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://taiwan.taiwanstay.net.tw/twpic/40982.JPG">
                        <div class="absolute-bottom text-h6">
                          三隻腳民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村23號
                        <br>
                        0836-25580
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/160328.jpg">
                        <div class="absolute-bottom text-h6">
                          牛角海邊民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村121號
                        <br>
                        0939-259266
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/26599.jpg">
                        <div class="absolute-bottom text-h6">
                          卡蹓英雄館
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村101之1號
                        <br>
                        0836-25025
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/159962.jpg">
                        <div class="absolute-bottom text-h6">
                          好日子民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村113-1號
                        <br>
                        0836-23332
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/17834.jpg">
                        <div class="absolute-bottom text-h6">
                          好望角景觀民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉福沃村98號
                        <br>
                        0836-25868
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
                <!-- 莒光 -->
                <q-tab-panel name="innerMovies">
                  <div id="food" class="q-pa-md row q-col-gutter-xs">
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2924&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          牛角好窩民宿餐飲
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村149號
                        <br>
                        0836-23530
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/43892.JPG">
                        <div class="absolute-bottom text-h6">
                          夫人民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉四維村40之1號
                        <br>
                        0836-25138
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/151092.jpeg">
                        <div class="absolute-bottom text-h6">
                          日光春和
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉仁愛村1之1號
                        <br>
                        0836-26666
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://taiwan.taiwanstay.net.tw/twpic/40982.JPG">
                        <div class="absolute-bottom text-h6">
                          三隻腳民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村23號
                        <br>
                        0836-25580
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/160328.jpg">
                        <div class="absolute-bottom text-h6">
                          牛角海邊民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村121號
                        <br>
                        0939-259266
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/26599.jpg">
                        <div class="absolute-bottom text-h6">
                          卡蹓英雄館
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村101之1號
                        <br>
                        0836-25025
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/159962.jpg">
                        <div class="absolute-bottom text-h6">
                          好日子民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村113-1號
                        <br>
                        0836-23332
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/17834.jpg">
                        <div class="absolute-bottom text-h6">
                          好望角景觀民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉福沃村98號
                        <br>
                        0836-25868
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
                <!-- 東引 -->
                <q-tab-panel name="innerHome">
                  <div id="food" class="q-pa-md row q-col-gutter-xs">
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2924&w=960&h=640">
                        <div class="absolute-bottom text-h6">
                          牛角好窩民宿餐飲
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村149號
                        <br>
                        0836-23530
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/43892.JPG">
                        <div class="absolute-bottom text-h6">
                          夫人民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉四維村40之1號
                        <br>
                        0836-25138
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/151092.jpeg">
                        <div class="absolute-bottom text-h6">
                          日光春和
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉仁愛村1之1號
                        <br>
                        0836-26666
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img src="https://taiwan.taiwanstay.net.tw/twpic/40982.JPG">
                        <div class="absolute-bottom text-h6">
                          三隻腳民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村23號
                        <br>
                        0836-25580
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/160328.jpg">
                        <div class="absolute-bottom text-h6">
                          牛角海邊民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉復興村121號
                        <br>
                        0939-259266
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/26599.jpg">
                        <div class="absolute-bottom text-h6">
                          卡蹓英雄館
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村101之1號
                        <br>
                        0836-25025
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/159962.jpg">
                        <div class="absolute-bottom text-h6">
                          好日子民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉馬祖村113-1號
                        <br>
                        0836-23332
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card col-md-3 col-xs-12">
                      <q-img :ratio="4 / 3" src="https://taiwan.taiwanstay.net.tw/twpic/17834.jpg">
                        <div class="absolute-bottom text-h6">
                          好望角景觀民宿
                        </div>
                      </q-img>
                      <q-card-section class="text-subtitle1">
                        連江縣南竿鄉福沃村98號
                        <br>
                        0836-25868
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </q-tab-panel>
<!-- 特產 -->
        <q-tab-panel name="movies">
          <div class="text-h6 row q-col-gutter-md">
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/72891081_2602229549835041_2286057576644739072_o.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">老酒麵線</div>
                老酒麵線是馬祖人調養身體，坐月子必備的料理，帶點鹹味的麵線川燙後，以老酒、煎蛋共同煮透，老酒的香氣與甘甜，搭上滑順入喉的麵線，冬天吃一碗，整個身子都跟著暖起來了。
              </div>
            </div>
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/%E7%B4%AB%E8%8F%9C.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">紫菜</div>
                說紫菜是「黑金」一點也不為過，不多不少的陽光、雨水、薄霧，再加上寒冷的天候催生，便能孕育出上等的野生紫菜。紫菜生長於淺海岩石上，可分為「冬菜」和「春菜」兩種，冬菜在冬天採集，長而無沙粒，脆中帶有韌性，屬上等品，但由於採集不易，故售價較貴，特別是農曆年前到清明這段時節，春寒料峭，晨霧中的紫菜帶著海水的滋潤。而春菜是冬菜採收後又生長的，品質略遜。紫菜採拾後晒乾，可以保存許久。
              </div>
            </div>
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/%E6%B7%A1%E8%8F%9C2.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">淡菜</div>
                淡菜又名貽貝，俗稱「殼菜」，是貝類的一種，生長於淺海岩礁處，全台只有馬祖有，不然得去歐洲吃囉！淡菜不僅味道甘美，同時也富含維他命、礦物質等營養，性溫補，在很多國家的料理中，都有被採用。馬祖人自行研發的淡菜養殖法，讓當季的每粒淡菜都渾圓飽滿，一口咬下，多汁又軟嫩的貝肉，散發海的潮水香，是值得現嚐的當季美味。
              </div>
            </div>
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/%E9%BC%8E%E9%82%8A.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">鼎邊糊</div>
                鼎邊糊是源於福州的一道小吃美食，其主料為米漿，鍋湯燒開後，將米漿淋置鍋邊，待燒熱的鐵鼎中快速煎製，接著用小鏟刮入鍋中，與海鮮（如海蠣）、蔬菜、肉類等配料熬煮成的湯頭混合燉煮，就成為一道洋溢著濃濃海鮮味的小吃美食了。過去每到農曆立夏時節，福州居民都要做鼎邊糊「做夏」。因為立夏已進入農忙旺季，這一天煮鼎邊糊，不僅是一家人吃飽吃好然後下田勞動，還要互贈左鄰右舍一起品嘗。像涮鼎邊糊一樣，「一涮就熟」，藉以聯絡感情。這道美食可以在南竿鄉山隴獅子市場二樓品嚐到，每天早上的早市期間供應，週日休業。
              </div>
            </div>
          </div>
          <div class="text-h6 row q-col-gutter-md">
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/IMG_2279.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">馬祖老酒</div>
                老酒是釀造酒的一種，選上好糯米做為材料，是釀老酒的重要關鍵之一，以糯米浸泡、蒸煮、落醰，加紅麴發酵，只要三十天就可出酒，由於夏季的高溫將會使重要的糯米腐壞，因此釀酒的季節以冬季為主。經過長時間低溫密封貯藏，酒色會愈加褐色暗沉，酒味也會愈發濃郁香醇，「開罈百里香，洗甕醉千家」。紅麴可製老酒，連橫《臺灣通史》＜風俗志．飲食篇＞中記載：「酒已成禮。祀神宴客，多用老酒，以朮釀之，味甘而醇；陳者尤佳，故曰老酒。」
              </div>
            </div>
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/%E5%9C%B0%E7%93%9C%E9%A4%83.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">地瓜餃</div>
                馬祖土地貧瘠，地瓜便是最好的糧食作物。地瓜餃，是馬祖道地的甜點，將地瓜與麵粉混合製成麵皮，包入以碎花生、紅糖、乾蔥、芝麻，另外再加酌量的五香粉、豬油等調製而成的餡料，外型的變化上，可以包成水餃、三角圓或咖哩角等形狀。不論是油炸或煮甜湯，另外或是蒸煮，都別有風味。咬一口，熱燙香甜的「爆漿」滋味，讓人永生難忘。
              </div>
            </div>
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/%E5%9C%B0%E7%93%9C%E9%A4%83.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">地瓜餃</div>
                馬祖土地貧瘠，地瓜便是最好的糧食作物。地瓜餃，是馬祖道地的甜點，將地瓜與麵粉混合製成麵皮，包入以碎花生、紅糖、乾蔥、芝麻，另外再加酌量的五香粉、豬油等調製而成的餡料，外型的變化上，可以包成水餃、三角圓或咖哩角等形狀。不論是油炸或煮甜湯，另外或是蒸煮，都別有風味。咬一口，熱燙香甜的「爆漿」滋味，讓人永生難忘。
              </div>
            </div>
            <div class="products col-md-3">
              <q-img
                src="https://www.matsu-nsa.gov.tw/UserFiles/image/food/%E5%9C%B0%E7%93%9C%E9%A4%83.jpg">
              </q-img>
              <div class="intro">
                <div class="q-ma-md text-weight-bold text-h5 text-center">地瓜餃</div>
                馬祖土地貧瘠，地瓜便是最好的糧食作物。地瓜餃，是馬祖道地的甜點，將地瓜與麵粉混合製成麵皮，包入以碎花生、紅糖、乾蔥、芝麻，另外再加酌量的五香粉、豬油等調製而成的餡料，外型的變化上，可以包成水餃、三角圓或咖哩角等形狀。不論是油炸或煮甜湯，另外或是蒸煮，都別有風味。咬一口，熱燙香甜的「爆漿」滋味，讓人永生難忘。
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('mails')
const innerTab = ref('innerMails')
const splitterModel = ref(20)
</script>

<style>
.q-tab__label {
  font-size: 15px;
}
.q-tab__icon {
  font-size: 30px;
}
</style>
