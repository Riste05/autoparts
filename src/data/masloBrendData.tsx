import liquimoly from "../pages/maslo/component/kategorii/image/liquimoly.png";
import castrol from "../pages/maslo/component/kategorii/image/castrol.png";
import total from "../pages/maslo/component/kategorii/image/total.png";
import shell from "../pages/maslo/component/kategorii/image/shell.png";
import eneos from "../pages/maslo/component/kategorii/image/eneos.png";
import febi from "../pages/maslo/component/kategorii/image/febi.png";

import mannol from "../pages/maslo/component/kategorii/image/mannol.png";
import rowe from "../pages/maslo/component/kategorii/image/rowe.png";
import dynamax from "../pages/maslo/component/kategorii/image/dynamax.png";
import wurth from "../pages/maslo/component/kategorii/image/wurth.png";

////////////////////////////////////////////////////

import liquiHeader from "../pages/maslo/component/kategorii/image/liquimoly-header.jpg";
import castrolHeader from "../pages/maslo/component/kategorii/image/castrol-header.jpg";
import totalHeader from "../pages/maslo/component/kategorii/image/total-header.jpg";
import shellHeader from "../pages/maslo/component/kategorii/image/shell-header.jpg";
import eneosHeader from "../pages/maslo/component/kategorii/image/eneos-header.jpg";
import febiHeader from "../pages/maslo/component/kategorii/image/febi-header.jpg";

/////////////////////////////////////////

import liquiBottle from "../pages/maslo/component/kategorii/image/liqui-bottle.png";
import castrolBottle from "../pages/maslo/component/kategorii/image/castrol-bottle.png";
import totalBottle from "../pages/maslo/component/kategorii/image/total-bottle.png";
import shellBottle from "../pages/maslo/component/kategorii/image/shell-bottle.png";
import eneosBottle from "../pages/maslo/component/kategorii/image/eneos-bottle.png";
import febiBottle from "../pages/maslo/component/kategorii/image/febi-bottle.png";

//////////////////////////////////////////

import mannolHeader from "../pages/maslo/component/kategorii/image/mannol-header.jpg";
import roweHeader from "../pages/maslo/component/kategorii/image/rowe-header.png";
import dynamaxHeader from "../pages/maslo/component/kategorii/image/dynamax-header.jpg";
import wurthHeader from "../pages/maslo/component/kategorii/image/wurth-header.jpg";

//////////////////////////////////////

import mannolBottle from "../pages/maslo/component/kategorii/image/mannol-bottle.png";
import roweBottle from "../pages/maslo/component/kategorii/image/rowe-bottle.png";
import dynamaxBottle from "../pages/maslo/component/kategorii/image/dynamx-bottle.png";
import liquiBottleAditiv from "../pages/maslo/component/kategorii/image/liqui-bottle-aditiv.png";
import wurthBottle from "../pages/maslo/component/kategorii/image/wurth-bottle.png";

//////////////////////////////////////////////////////

import tq5w401l from "../pages/maslo/component/kategorii/image/card-image/tq5w401L.png";
import tq5w405l from "../pages/maslo/component/kategorii/image/card-image/tq5w405L.png";
import tq10w401l from "../pages/maslo/component/kategorii/image/card-image/tq10w401L.png";
import tq10w405l from "../pages/maslo/component/kategorii/image/card-image/tq10w405l.png";
import tq5w301l from "../pages/maslo/component/kategorii/image/card-image/tq5w301l.png";
import tq5w305l from "../pages/maslo/component/kategorii/image/card-image/tq5w305l.png";

const maslo = {
  maslo: [
    {
      id: "maslo1",
      name: "Liqui Moly",
      img: liquimoly,
      headerImg: liquiHeader,
      bottle: liquiBottle,
      text: "Liqui Moly GmbH е германска компанија специјализирана за масла, лубриканти и адитиви.Главниот прозивод е моторно масло со MoS2, но има и други лубриканти со Mos2 и самиот адитив Mos2 кои крајниот корисник ги додава при промена на масло.Цела палета е развиена од овој додаток, со над 4000 производи.",
    },
    {
      id: "maslo2",
      name: "Castrol",
      img: castrol,
      headerImg: castrolHeader,
      bottle: castrolBottle,
      text: "Castrol Limited е британска нафтена компанија која продава индустриски и автомобилски лубриканти, нудејќи широк спектар на масла, маснотии и слични производи за повеќето апликации за подмачкување.Производите на Castrol сè уште се продаваат според шемата на црвена, бела и зелена боја која датира од лансирањето на моторното масло Castrol во 1909 година.",
    },
    {
      id: "maslo3",
      name: "Total Quartz",
      img: total,
      headerImg: totalHeader,
      bottle: totalBottle,
      text: "TotalEnergies SE е француска мултинационална интегрирана енергетска и нафтена компанија основана во 1924 година и е една од седумте големи нафтени компании.Нејзините бизниси го покриваат целиот синџир на нафта и гас, од истражување и производство на сурова нафта и природен гас до производство на електрична енергија.",
      tipovi: [
        {
          id: "tq1",
          img: tq5w401l,
          tip: "9000 5W40 1L",
          cena: "1000",
        },
        {
          id: "tq2",
          img: tq5w405l,
          tip: "9000 5W40 5L",
          cena: "1000",
        },
        {
          id: "tq3",
          img: tq10w401l,
          tip: "7000 10W40 1L",
          cena: "1000",
        },
        {
          id: "tq4",
          img: tq10w405l,
          tip: "7000 10W40 5L",
          cena: "1000",
        },
        {
          id: "tq5",
          img: tq5w301l,
          tip: "INEO 5W30 1L",
          cena: "1000",
        },
        {
          id: "tq6",
          img: tq5w305l,
          tip: "INEO 5W30 5L",
          cena: "1000",
        },
      ],
    },
    {
      id: "maslo4",
      name: "Shell",
      img: shell,
      headerImg: shellHeader,
      bottle: shellBottle,
      text: "Shell plc е британска мултинационална компанија за нафта и гас со седиште во Лондон, Англија. Shell е втората најголема компанија за нафта и гас во светот. Shell работи во над 99 земји и  произведува околу 3,7 милиони барели еквивалент нафта дневно.Shell е вертикално интегрирана и е активна во секоја област на нафтената и гасната индустрија, ",
    },
    {
      id: "maslo5",
      name: "Eneos",
      img: eneos,
      headerImg: eneosHeader,
      bottle: eneosBottle,
      text: "Eneos Corporation е јапонска нафтена компанија. Нејзините бизниси вклучуваат истражување, увоз и рафинирање на сурова нафта, производство и продажба на нафтени продукти, вклучувајќи горива и мазива. Таа е најголемата нафтена компанија во Јапонија, а во последните години ги проширува своите операции и во други земји.",
    },
    {
      id: "maslo6",
      name: "Febi Bilsten",
      img: febi,
      headerImg: febiHeader,
      bottle: febiBottle,
      text: "bilstein group е седма генерација, семејна група на компании со седиште во Енепетал, Германија. Покривајќи европски и азиски автомобили, лесни комерцијални возила и камиони, febi има се што ви треба, секогаш кога ви е потребно. Висококвалитетни течности се од суштинско значење за непреченото функционирање на возилото.",
    },
  ],
  aditivi: [
    {
      id: "aditiv1",
      name: "Mannol",
      img: mannol,
      headerImg: mannolHeader,
      bottle: mannolBottle,
      text: "UAB SCT Lubricants е водечки производител на висококвалитетни моторни масла и автомобилски течности лоциран во Клаипеда, Литванија.Нашата палета на производи вклучува моторно масло, масло за менувач, масло за камиони/автобуси, масла за мотоцикли, хидраулични масла, маснотии, адитиви, течности за ладење, филтри, производи за нега и многу други прозиводи.",
    },
    {
      id: "aditiv2",
      name: "Rowe",
      img: rowe,
      headerImg: roweHeader,
      bottle: roweBottle,
      text: "Rowe Mineralölwerk GmbH е производител на лубриканти со седиште во Вормс, Германија.Палетата производи на Rowe вклучува моторни масла, масла за менувачи и хидраулични масла, адитиви за гориво, но исто така и антифриз за радијатори и шофершајбни и разни производи за нега на автомобили.",
    },
    {
      id: "aditiv3",
      name: "Dynamax",
      img: dynamax,
      headerImg: dynamaxHeader,
      bottle: dynamaxBottle,
      text: "Адитивите за дизел и бензин што DYNAMAX ги носи на автомобилскиот пазар обезбедуваат непречено работење на моторот, неопходна заштита на сите елементи на системот и, како бонус, можат позитивно да влијаат на стартните карактеристики на возилото.",
    },
    {
      id: "aditiv4",
      name: "Liqui-Moly",
      img: liquimoly,
      headerImg: liquiHeader,
      bottle: liquiBottleAditiv,
      text: "Liqui Moly GmbH е германска компанија специјализирана за масла, лубриканти и адитиви.Главниот прозивод е моторно масло со MoS2, но има и други лубриканти со Mos2 и самиот адитив Mos2 кои крајниот корисник ги додава при промена на масло.Цела палета е развиена од овој додаток, со над 4000 производи.",
    },
    {
      id: "aditiv5",
      name: "Wurth",
      img: wurth,
      headerImg: wurthHeader,
      bottle: wurthBottle,
      text: "Würth Group е лидер на глобалниот пазар во развојот, производството и продажбата на материјали за прицврстување и склопување. Повеќе од 400 компании кои работат преку 2.700 филијали и продавници во 80 земји се дел од овој глобален семеен бизнис, кој потекнува од германскиот град Кунзелсау.",
    },
  ],
};

export default maslo;
