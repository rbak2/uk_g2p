function replace_phonemic(string){
    string = string.replace(/-/g, "");
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
    string = string.replace(/сц´ц/g, "с´ц");
    string = string.replace(/д[шч]с/g, "дс");
    string = string.replace(/стс´к/g, "с´к");
    string = string.replace(/(?<=[сшн])т(?=[чцдс])/g, "");
    string = string.replace(/тс(?=´к|тв)/g, "ц");
    string = string.replace(/(?<=с)т(?=н)/g, "");
    string = string.replace(/(?<=з)д(?=ц)/g, "");
    string = string.replace(/((?<=на|ві|пі)|(?<=[сп]ере))q/g, "qз");
    string = string.replace(/((?<=\sна|\sві)|(?<=пі|^на|^ві)|(?<=\sпере)|(?<=^пере))s/g, "sж");
    string = string.replace(/((?<=\sі|^не|^по)|(?<=\sне|\sпо)|(?<=\s|^і)|(?<=^))з(?=[сцчш])/g, "с");
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
    string = string.replace(/[дq]´?(?=[чжшs])/g, "s");
    string = string.replace(/[тц]´?(?=[чжшs])/g, "ч");
    string = string.replace(/з´?(?=[чжшs])/g, "ж");
    string = string.replace(/с´?(?=[чжшs])/g, "ш");
    string = string.replace(/ж(?=[зсцq])/g, "з");
    string = string.replace(/ш(?=[зсцq])/g, "с");
    string = string.replace(/((?<=н´і)|(?<=во|ле|де|кі)|(?<=д´[оі]))г(?=[кт])/g, "х");
    string = string.replace(/(?<=[дтнзсцлq])(?=[дтнзсцлq]´)/g, "´");
    string = string.replace(/q/g, "д͡з");
    string = string.replace(/s/g, "д͡ж");
return string;}

function replace_phonetic(string){
    string = string.replace(/д͡з/g, "q");
    string = string.replace(/д͡ж/g, "s");
    string = string.replace(/в(?!['аоеуіив])/g, "ў");
    string = string.replace(/(?<=[^́аеоуиі ])ў(?=\s|$)/g, "в");
    string = string.replace(/ф(?=[бдзжгґqs])/g, "в");
    string = string.replace(/j(?![аоеуіи])/g, "ĭ");
    string = string.replace(/(?<=[бвгжкмпфхчшґs])і/g, "'і");
    string = string.replace(/(?<=[мн][аеиоу])|(?<=м'[аеіу])|(?<=н´[аеоуі])/g, "̃");
    string = string.replace(/(?<=[j´'])(?=[аеоу])/g, "·");
    string = string.replace(/(?<=[бвгґжкпфхчшдзлрстцмнqsj'´])(?=·?[оу])/g, "°");
    string = string.replace(/(?<=[иіаеоу])(?=[мн])/g, "̃");
    string = string.replace(/((?<=[аеоу])|(?<=[аеоу]̃))(?=[дзлрстцнq]´|[jĭ]|[бвгжкмпфхчшґs]')/g, "·");
    string = string.replace(/(?<=[иіаеоу])́(?=[мн])/g, "̃́");
    string = string.replace(/((?<=[аеоу]́)|(?<=[аеоу]̃́))(?=[дзлрстцнq]´|[jĭ]|[бвгжкмпфхчшґs]')/g, "·");
    string = string.replace(/([бвгґжкпфхчшдзлрстцмнqs]´?)\1(['´]?°?)/g, "$1$2:");
    string = string.replace(/q/g, "д͡з");
    string = string.replace(/s/g, "д͡ж");
return string;}

function replace_stressed(string){
    string = string.replace(/(?<=·)е(?=̃?·)/g, "n");
    string = string.replace(/е(?!́|̃́)/g, "h");
    string = string.replace(/и(?!́|̃́)/g, "u");
    string = string.replace(/h(?=̃?(·в'і|м|·j°·у)?(\s|$))/g, "е");
    string = string.replace(/n(?=̃?(·в'і|·j°·у)(\s|$))/g, "е");
    string = string.replace(/u(?=̃?(х|ĭ|м|ш|т´)?(\s|$))/g, "и");
    string = string.replace(/u(?=[^аеоуиіnhuw ]+и̃?́)/g, "и");
    string = string.replace(/((?<=\s)|(?<=^))h/g, "е");
    string = string.replace(/((?<=\s)|(?<=^))u/g, "и");
    string = string.replace(/о(?=[^аеоуиіnhu ]+[уі]̃?́)/g, "w");
    string = string.replace(/h̃/g, "е̃(и)");
    string = string.replace(/ũ/g, "и̃(е)");
    string = string.replace(/ñ/g, "е̃(і)");
    string = string.replace(/h/g, "е(и)");
    string = string.replace(/u/g, "и(е)");
    string = string.replace(/n/g, "е(і)");
    string = string.replace(/w̃/g, "о̃(у)");
    string = string.replace(/w/g, "о(у)");
return string;    
}

function p2g(string){
    string = string.replace(/[^ а-яієїґ'´:ўjĭ͡()-]/g, "");
    string = string.replace(/д͡з/g, "q");
    string = string.replace(/д͡ж/g, "s");
    string = string.replace(/[°·̃́]/g, "");
    string = string.replace(/\([еиіу]\)/g, "");
    string = string.replace(/(.{1})´:/g, "$1$1´");
    string = string.replace(/(.{1})':/g, "$1$1'");
    string = string.replace(/(.{1}):/g, "$1$1");
    string = string.replace(/(?<=[дтнзсцq])´(?=[дтнзсцqл]´)/g, "");
    string = string.replace(/(?<=л)´(?=л´)/g, "");
    string = string.replace(/ў/g, "в");
    string = string.replace(/(?<=[бвгґжкпфхчшдзлрстцмнqs])(?=j[аеуі])/g, "1");
    string = string.replace(/[jĭ]/g, "й");
    string = string.replace(/['´]і/g, "і");
    string = string.replace(/['´й]а/g, "я");
    string = string.replace(/['´й]у/g, "ю");
    string = string.replace(/['´й]е/g, "є");
    string = string.replace(/йі/g, "ї");
    string = string.replace(/1/g, "'");
    string = string.replace(/´/g, "ь");
    string = string.replace(/шч/g, "щ");
    string = string.replace(/s/g, "дж");
    string = string.replace(/q/g, "дз");
    string = string.replace(/(?<=(\s|^)(на|якна|щона|щоякна))я/g, "йа");
    string = string.replace(/(?<=(\s|^)(на|якна|щона|щоякна))ю/g, "йу");
    string = string.replace(/(?<=(\s|^)(на|якна|щона|щоякна))є/g, "йе");
    string = string.replace(/(?<=(\s|^)(на|якна|щона|щоякна))ї/g, "йі");
    string = string.replace(/(?<=во|ле|де|кі|ні|ді|дьо)х(?=[кт])/g, "г");
    string = string.replace(/цця(?=\s|$)/g, "ться");
    string = string.replace(/(?<=[еиєїю])сся(?=\s|$)/g, "шся");
    string = string.replace(/цся(?=\s|$)/g, "чся");
    string = string.replace(/зся(?=\s|$)/g, "жся");
    string = string.replace(/сч/g, "щ");
    string = string.replace(/(?<=\s|^)міз(?=[зсц])/g, "між");
    string = string.replace(/(?<!д)жши/g, "зши");
    string = string.replace(/шш(?![яюі])/g, "сш");
    string = string.replace(/чш/g, "тш");
    string = string.replace(/чч(?!ин|[яюі])/g, "тч");
    string = string.replace(/цці(?=\s|$)/g, "чці");
    string = string.replace(/(?<=[уюї])сці(?=\s|$)/g, "шці");
    string = string.replace(/(?<=[юї])зці(?=\s|$)/g, "жці");
    string = string.replace(/цц(?!і(\s|$))/g, "тц");
    string = string.replace(/цс/g, "тс");
    string = string.replace(/д[зж](?=[сцзшжчщ])/g, "д");
    string = string.replace(/д[зж](?=д[зж])/g, "д");
    string = string.replace(/дзь(?=[сцзшжчщ])/g, "дь");
    string = string.replace(/дся(?=\s|$)/g, "дься");
    string = string.replace(/нся(?=\s|$)/g, "нься");
    string = string.replace(/ґ(?=[бдзжг])/g, "к");
    string = string.replace(/((?<=ро)|(?<=бе)|(?<=чере))ж(?=дж|[жчшщ])/g, "з");
    string = string.replace(/(?<=(^|\s)(і|не|по|напів|))ж(?=дж|[жчшщ])/g, "з");
    string = string.replace(/(?<=(^|\s)(і|не|по|напів|))[шс](?=[цсчшщ])/g, "з");
    return string;    
}

function p2g_dict(string){
    string = string.replace("","")
    return string; }

function phonetic_word(string){
    string = string.replace(/(?<=(^|\s)[бвгґжкпфхчшдзлрстцмн]{1}) /g, "")
    return string;    
}

function replace_ipa(string){
    return string;    
}

function replace_voiced(string){
    string = string.replace(/б(?=[птсшкхцч])/g, "п");
    string = string.replace(/д(?=´?[птсшкхцч])/g, "т");
    string = string.replace(/з(?=´?[птсшкхцч])/g, "с");
    string = string.replace(/ж(?=[птсшкхцч])/g, "ш");
    string = string.replace(/ґ(?=[птсшкхцч])/g, "к");
    string = string.replace(/г(?=[птсшкхцч])/g, "х");
    string = string.replace(/q(?=´?[птсшкхцч])/g, "ц");
    string = string.replace(/s(?=[птсшкхцч])/g, "ч");
    string = string.replace(/в(?=[птсшкхцч])/g, "ф");
    string = string.replace(/б(?=(\s|$))/g, "п");
    string = string.replace(/д(?=´?(\s|$))/g, "т");
    string = string.replace(/з(?=´?(\s|$))/g, "с");
    string = string.replace(/ж(?=(\s|$))/g, "ш");
    string = string.replace(/ґ(?=(\s|$))/g, "к");
    string = string.replace(/г(?=(\s|$))/g, "х");
    string = string.replace(/q(?=´?(\s|$))/g, "ц");
    string = string.replace(/s(?=(\s|$))/g, "ч");
    string = string.replace(/в(?=(\s|$))/g, "ф");
return string;   
}

function checkform(type){
    let string = document.getElementById("user_input").value;
    let stress = document.getElementById("stress")
    let word = document.getElementById("word")
    let voiced = document.getElementById("voiced")
    string = string.toLowerCase()
    if (word.checked==true && stress.checked==true){
        string = phonetic_word(string)
    }
    let string2 = replace_phonemic(string);
    if (voiced.checked==true){
        string2 = replace_voiced(string2);
    }
    if (type==1){
        string2 = replace_phonetic(string2);
        if (stress.checked==true){
            string2 = replace_stressed(string2);  
        }
    }
    if (type==2){
        string2 = replace_phonemic(string);
        string2 = replace_phonetic(string2);
    }
    if (type==3){
        string2 = p2g(string);
    }
    document.getElementById("output").innerHTML = string2;    
    return false;
}
