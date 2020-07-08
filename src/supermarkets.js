import watsonLogo from "@/assets/supermarkets/ASW-VAG-rounded.png";
import yataLogo from "@/assets/supermarkets/yata-logo.jpg";
import dailyFarmLogo from "@/assets/supermarkets/DairyFarm_logo.jpg";
import citySuperLogo from "@/assets/supermarkets/citysuper-logo.png";
import aeonLogo from "@/assets/supermarkets/aeon-logo.png";
import msLogo from "@/assets/supermarkets/marksandspencer-logo2.jpg";
import vanguardLogo from "@/assets/supermarkets/vanguard-logo2.jpg";
//
import wellcomeLogo from "@/assets/supermarkets/wellcome-logo.png";
import parknshopLogo from "@/assets/supermarkets/parknshop-logo.jpg";
import marketplaceLogo from "@/assets/supermarkets/marksandspencer-logo2.jpg";
import tasteLogo from "@/assets/supermarkets/taste-logo.jpg";
import fusionLogo from "@/assets/supermarkets/fusion-logo.png";
import internationalLogo from "@/assets/supermarkets/international-logo.jpg";
import uselectLogo from "@/assets/supermarkets/uselect-logo.png";
import marksandspencerLogo from "@/assets/supermarkets/marksandspencer-logo.png";
//
const supermarkets = {
  Watson: {
    name: "屈臣氏集團",
    remark: "旗下超市包括百佳",
    logo: watsonLogo,
    score: 27.1,
    distributions: {
      policy: 26,
      reduction: 24,
      initiative: 26,
      transparency: 36
    },
    information:
      "屈臣氏集團旗下的超市品牌包括百佳、Fusion、Great、International、Taste等，市場佔有率最高。在綠色和平的全城查膠結果中，百佳、Fusion、International及Taste的包膠率分別達84%、74%、80%及88%。",
    evaluations: {
      policy:
        "成立負責與供應商制定合適走塑包裝指引的工作小組，以及在自家品牌設立使用對環境友善的包裝指引；可惜集團未有提供具體的走塑時間表和目標，或塑膠整體使用量的資料。",
      reduction:
        "實行減少「即棄塑膠製品」的措施，包括在燒味部提供自攜容器優惠、試行共享環保購物袋，及停售即棄塑膠飲管和含微膠珠的沖洗性產品。",
      initiative:
        "全港首間大型超市於旗下一間分店設立裸買補充站，讓顧客自備器皿購買個人護理及家居清潔用品，而且表示會擴展計劃，但暫未提供進一步的具體細節。此外，集團積極參與多個推動零售業界走塑的工作小組，包括推動膠樽生產者責任制等。",
      transparency:
        "在香港多間超市中，此集團的走塑政策透明度最高，提供較多資料，包括部份即棄塑膠製品的銷售量及主動公開裸賣蔬果試行計劃的成效等。不過即棄塑膠包裝使用量方面，只提供自家品牌的資料。另外，他們表示正考慮在企業社會責任報告中公開塑膠使用總量，綠色和平將繼續監督。"
    }
  },
  Yata: {
    name: "一田",
    remark: "",
    logo: yataLogo,
    score: 16.7,
    distributions: {
      policy: 14,
      reduction: 10,
      initiative: 20,
      transparency: 32
    },
    information:
      "一田屬香港新鴻基地產旗下的百貨公司，設有超市部，全港共有8間分店。在綠色和平早前的全城查膠結果中，包膠率達99%。",
    evaluations: {
      policy: "有單一的減塑措施，如在熟食部提供自攜容器優惠，但無提出整體的走塑計劃。",
      reduction: "在店內不擺放平頭保鮮膠袋，並在店外設有紙包飲品回收箱。",
      initiative:
        "提供裸裝貨品銷售，如油、醋、果仁 等，表示將會設立裸買補充站，但是沒有提供相關資料。",
      transparency:
        "唯一有提供全面塑膠包裝使用量的超市，並且表明願意配合每年回應相關問卷，希望一田往後能進一步提升資訊透明，主動向大眾公開用膠量及走塑進度。"
    }
  },
  DailyFarm: {
    name: "牛奶公司集團",
    remark: "旗下超市包括惠康",
    logo: dailyFarmLogo,
    score: 15.5,
    distributions: {
      policy: 11,
      reduction: 15,
      initiative: 13,
      transparency: 23
    },
    information:
      "牛奶公司旗下的超市品牌包括惠康及Market Place by Jasons，分店總數目是全港之冠，市場佔有率則排名第二。在綠色和平早前的全城查膠結果中，惠康及Market Place by Jasons的包膠率分別達82%及83%。",
    evaluations: {
      policy:
        "已制訂內部員工使用包裝指引，但無提出整體減少即棄塑膠使用量的計劃；著重減輕某些類別產品的即棄塑膠包裝重量，例如蔬果的包裝，但仍處於試行階段。",
      reduction:
        "在店內停止提供即棄塑膠餐具，以及停售含微膠珠的沖洗性產品；正研究如何減少部分蔬果包裝，卻未有提出全面減塑計劃。",
      initiative: "參與膠樽生產者責任制的業界討論，但是缺乏實際的創新政策與塑膠足跡紀錄。",
      transparency:
        "只提供自家品牌的飲品包裝使用量，針對其他即棄塑膠製品及塑膠包裝的使用量，牛奶公司僅稱難以取得數據。"
    }
  },
  CitySuper: {
    name: "city'super",
    remark:
      "沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。",
    logo: citySuperLogo,
    score: 1.9,
    distributions: {
      policy: 2,
      reduction: 2,
      initiative: 3,
      transparency: 1
    },
    information:
      "屬City Super Group旗下，在香港共有4間分店。在綠色和平早前的全城查膠結果中，包膠率達82%。",
    evaluations: {
      policy:
        "沒有公開資訊顯示其有全面的走塑政策，只有數項單一計劃，包括熟食部提供自攜容器折扣優惠。",
      reduction: "部分分店設有發泡膠果網回收點，但其他相關的公開資訊非常有限。",
      initiative: "city'super於售賣熟食及沙律方面，提供自備容器的折扣優惠，鼓勵顧客走塑。",
      transparency: "未能於公開資料中找到任何整體塑膠足跡的資訊，或整體減少即棄塑膠的措施或承諾。"
    }
  },
  AEON: {
    name: "AEON",
    remark:
      "沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。",
    logo: aeonLogo,
    score: 1,
    distributions: {
      policy: 2,
      reduction: 0,
      initiative: 0,
      transparency: 3
    },
    information:
      "AEON屬永旺（香港）百貨有限公司旗下的超市，總部設於日本，目前在香港設有11間超市分店。在綠色和平早前的全城查膠結果中，包膠率達89%。",
    evaluations: {
      policy:
        "AEON在店內張貼海報向顧客宣傳走塑，並不定期舉行活動鼓勵顧客自攜環保袋及器皿購物，但沒有整體淘汰即棄塑膠的策略或目標。",
      reduction: "無公開的減塑措施相關資料，在走塑的議題上相對被動。",
      initiative: "綠色和平在公開資訊中並未發現其有任何全面或具規模的走塑計劃。",
      transparency: "AEON從未發佈整體塑膠足跡的資訊，或整體減少即棄塑膠的措施或承諾。"
    }
  },
  MS: {
    name: "Marks & Spencer",
    remark:
      "沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。",
    logo: msLogo,
    score: 0,
    distributions: {
      policy: 0,
      reduction: 0,
      initiative: 0,
      transparency: 0
    },
    information:
      "Marks & Spencer原屬英國Marks & Spencer百貨，現在香港的7間分店由中東公司Al-Futtaim特許經營。在綠色和平早前的全城查膠結果中，包膠率達79%。",
    evaluations: {
      policy:
        "英國Marks & Spencer公佈的走塑計劃及時間表，並未表明適用於香港，而在香港的官方渠道上亦沒有任何相關資訊。",
      reduction: "在公開資訊中並未發現任何減塑措施，香港的Marks & Spencer在走塑的議題上相對被動。",
      initiative:
        "綠色和平未找到香港的Marks & Spencer為走塑作出創新的嘗試或計劃，也未見其打算投入資源發展無塑購物選項的規劃。",
      transparency:
        "不論在官方網站或媒體報道等公開資訊中，Marks & Spencer亦無公開其走塑政策、措施，或總體塑膠足跡。"
    }
  },
  Vanguard: {
    name: "華潤",
    remark:
      "沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。",
    logo: vanguardLogo,
    score: 0,
    distributions: {
      policy: 0,
      reduction: 0,
      initiative: 0,
      transparency: 0
    },
    information:
      "華潤萬家是由華潤集團擁有，Uselect則由華潤集團及英國超市聯營，各擁有17及47間分店。 在綠色和平早前的全城查膠結果中，華潤萬家及Uselect的包膠率分別達79%及78%。",
    evaluations: {
      policy: "綠色和平在公開資訊中並未找到華潤有公佈任何走塑相關的現行或長期政策。",
      reduction:
        "華潤沒有任何現行或即將推行的走塑行動，綠色和平亦找不到其減塑措施相關資料，在走塑的議題上相對被動。",
      initiative:
        "綠色和平在公開資訊中或華潤店鋪內，均並未發現其有任何走塑倡議，或創新的走塑計劃。",
      transparency: "無任何關於塑膠足跡的公開資訊，或整體減少即棄塑膠的做法或承諾。"
    }
  }
};
const supermarketImages = [
  wellcomeLogo,
  parknshopLogo,
  marketplaceLogo,
  tasteLogo,
  fusionLogo,
  internationalLogo,
  yataLogo,
  citySuperLogo,
  aeonLogo,
  vanguardLogo,
  uselectLogo,
  marksandspencerLogo
];
//
let supermarketLogos = [];
for (let sm in supermarkets) {
  supermarketLogos.push({
    supermarket: sm,
    name: supermarkets[sm].name,
    logo: supermarkets[sm].logo
  });
}
supermarketLogos.sort((a, b) => a.supermarket.localeCompare(b.supermarket));

export { supermarkets, supermarketImages };
