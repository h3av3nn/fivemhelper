
module.exports = { 
  
    version: '0.0.1',
 
baseConvert: function(x, y, base) {
  var z = [];
  var n = Math.max(x.length, y.length);
  var carry = 0;
  var i = 0;
  while (i < n || carry) {
    var xi = i < x.length ? x[i] : 0;
    var yi = i < y.length ? y[i] : 0;
    var zi = carry + xi + yi;
    z.push(zi % base);
    carry = Math.floor(zi / base);
    i++;
  }
  return z;
},

 blaConvert: function(num, x, base) {
  if (num < 0) return null;
  if (num == 0) return [];

  var result = [];
  var power = x;
  while (true) {
    if (num & 1) {
      result = this.baseConvert(result, power, base);
    }
    num = num >> 1;
    if (num === 0) break;
    power = this.baseConvert(power, power, base);
  }

  return result;
},

digitConvert: function(str, base) {
  var digits = str.split('');
  var ary = [];
  for (var i = digits.length - 1; i >= 0; i--) {
    var n = parseInt(digits[i], base);
    if (isNaN(n)) return null;
    ary.push(n);
  }
  return ary;
},
  
 hexConvert: function(str, fromBase, toBase) {
  var digits = this.digitConvert(str, fromBase);
  if (digits === null) return null;

  var outArray = [];
  var power = [1];
  for (var i = 0; i < digits.length; i++) {
    // invariant: at this point, fromBase^i = power
    if (digits[i]) {
      outArray = this.baseConvert(outArray, this.blaConvert(digits[i], power, toBase), toBase);
    }
    power = this.blaConvert(fromBase, power, toBase);
  }

  var out = '';
  for (var i = outArray.length - 1; i >= 0; i--) {
    out += outArray[i].toString(toBase);
  }
  if (out === '') {
    out = '0';
  }
  return out;
},
  
  decimalCalculate: function(decStr,opts) {
  var hidePrefixgjd = opts && opts.prefix === true;
  var hex = this.hexConvert(decStr, 10, 16);
  return hex ? (hidePrefixgjd ? hex : hex) : null;


  },
  
tensCalculate: function(hexStr) {
  if (hexStr.substring(0, 2) === '0x') hexStr = hexStr.substring(2);
  hexStr = hexStr.toLowerCase();
  return this.hexConvert(hexStr, 16, 10);
},
   hexHash: function(decStr,opts) {
  var hidePrefixgjd = opts && opts.prefix === true;
  var hex = this.hexConvert(decStr, 10, 16);
  return hex ? (hidePrefixgjd ? hex : hex) : null;


  },
   SteamUrltoHex: function(link,opts) {
	   if(link.includes("https://steamcommunity.com/profiles/") || link.includes("http://steamcommunity.com/profiles/")) {
       if(link.includes("https://steamcommunity.com/profiles/")) {
        var steam = opts && opts.steamprefix === true;

    let steamdecid = link.replace("https://steamcommunity.com/profiles/","").replace("/","")
    let hexid = this.hexHash(steamdecid)
    return hexid ? (steam ? "steam:"+hexid : hexid) : null;
  } else {
    var steam = opts && opts.steamprefix === true;

    let steamdecid = link.replace("http://steamcommunity.com/profiles/","").replace("/","")
    let hexid = this.hexHash(steamdecid)
    return hexid ? (steam ? "steam:"+hexid : hexid) : null;
  }

     } else {
let hata = "Steam URL error!!"
return hata
     }
},

HextoSteamUrl: function(hex,opts) {
  if(hex.includes("steam:")) {
    var steam = opts && opts.url === true;

let hexs = hex.replace("steam:","")
let onluk = this.tensCalculate(hexs) 
return onluk ? (steam ? "https://steamcommunity.com/profiles/"+onluk : onluk) : null;
  } else {
let hata = "Steam hex error!!"
return hata
  }
}

}
