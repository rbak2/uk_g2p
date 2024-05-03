
function replace_phonemic(string){
string = string.replace(/\+/g, "́");
string = string.replace(/щ/g, "шч");
string = string.replace(/ь/g, "´");
string = string.replace(/'/g, "2");
string = string.replace(/дз/g, "q");
string = string.replace(/дж/g, "s");
string = string.replace(/я/g, "jа");
string = string.replace(/ю/g, "jу");
string = string.replace(/є/g, "jе");
string = string.replace(/(?<=[дзлнрстцq])j/g, "´");
string = string.replace(/(?<=[бвгжкмпфхчшґs])j/g, "'");
string = string.replace(/ї/g, "jі");
string = string.replace(/й/g, "j");
string = string.replace(/(?<=[дзлнрстцq])і/g, "´і");
string = string.replace(/2/g, "");
string = string.replace(/т´с(?=´а)/g, "ц´ц");
string = string.replace(/(?<=н)т(?=с´к|ств)/g, "");
string = string.replace(/стс´к/g, "с´к");
string = string.replace(/(?<=с)т(?=[чцндс])/g, "");
string = string.replace(/(?<=з)д(?=ц)/g, "");
string = string.replace(/тс/g, "ц");
//string = string.replace(/(?<=\bсере|на|пі|пре|пере|ві)q/g, "qз");
//string = string.replace(/(?<=\bсере|на|пі|пре|пере|ві)s/g, "sж");
string = string.replace(/(?<=^|\s)з(?=[сцчш])/g, "с");
string = string.replace(/п(?=[бдзжгґqs])/g, "б");
string = string.replace(/т(?=´?[бдзжгґqs])/g, "д");
string = string.replace(/с(?=´?[бдзжгґqs])/g, "з");
string = string.replace(/ш(?=[бдзжгґqs])/g, "ж");
string = string.replace(/к(?=[бдзжгґqs])/g, "ґ");
string = string.replace(/х(?=[бдзжгґqs])/g, "г");
string = string.replace(/ц(?=´?[бдзжгґqs])/g, "q");
string = string.replace(/ч(?=[бдзжгґqs])/g, "s");
string = string.replace(/[дs](?=´?[цзсq])/g, "q");
string = string.replace(/[тч](?=´?[цзсq])/g, "ц");
string = string.replace(/[дq](?=´?[чжшs])/g, "s");
string = string.replace(/[тц](?=´?[чжшs])/g, "ч");
string = string.replace(/з(?=´?[чжшs])/g, "ж");
string = string.replace(/с(?=´?[чжшs])/g, "ш");
string = string.replace(/(?<=[жчшs])´/g, "");
string = string.replace(/ж(?=[зсцq])/g, "з");
string = string.replace(/ш(?=[зсцq])/g, "с");
string = string.replace(/(?<![ин])г(?!ти\s|ти$)(?=[кт])/g, "х");
string = string.replace(/(?<=[дтнзсцлq])(?=[дтнзсцлq]´)/g, "´");
string = string.replace(/q/g, "д͡з");
string = string.replace(/s/g, "д͡ж");
return string;}

function replace_phonetic(string){
string = string.replace(/д͡з/g, "q");
string = string.replace(/д͡ж/g, "s");
string = string.replace(/в(?!['аоеуіив])/g, "ў");
string = string.replace(/(?<=[^́аеоуиі ])ў(?=\s|$)/g, "в");
string = string.replace(/j(?![аоеуіи])/g, "ĭ");
string = string.replace(/(?<=[бвгжкмпфхчшґs])і/g, "'і");
string = string.replace(/(?<=[мн][аеиоу])|(?<=м'[аеіу])|(?<=н´[аеоуі])/g, "̃");
string = string.replace(/(?<=[j´'])(?=[аеоу])/g, "·");
string = string.replace(/(?<=[бвгґжкпфхчшдзлрстцмнqsj'´])(?=·?[оу])/g, "°");
string = string.replace(/(?<=[иіаеоу])(?=[мн])/g, "̃");
string = string.replace(/((?<=[аеоу])|(?<=[аеоу]̃))(?=[дзлрстцнq]´|[jĭ]|[бвгжкмпфхчшґs]')/g, "·");
string = string.replace(/(?<=[иіаеоу])́(?=[мн])/g, "̃́");
string = string.replace(/((?<=[аеоу]́)|(?<=[аеоу]̃́))(?=[дзлрстцнq]´|[jĭ]|[бвгжкмпфхчшґs]')/g, "·");
string = string.replace(/(?<=([дтнлзсцqр]´))\1°/g, "°:");
string = string.replace(/(?<=([жчшs]))\1'°/g, "'°:");
string = string.replace(/(?<=([бвгґжкпфхчшдзлрстцмнqs]))\1°/g, "°:");
string = string.replace(/(?<=([дтнлзсцqр]´))\1/g, ":");
string = string.replace(/(?<=([жчшs]))\1'/g, "':");
string = string.replace(/(?<=([бвгґжкпфхчшдзлрстцмнqs]))\1/g, ":");
string = string.replace(/q/g, "д͡з");
string = string.replace(/s/g, "д͡ж");
return string;}

function checkform(type){
    let string = document.getElementById("user_input").value;
    let string2 = replace_phonemic(string);
    if (type==1){
        string2 = replace_phonetic(string2);
    }
    document.getElementById("output").innerHTML = string2    
    return false;
}

