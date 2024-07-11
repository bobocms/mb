var luobo_pc_domain = "https://www.so.com";	//PCÕ¾ÍøÖ·
var luobo_wap_domain = "https://www.so.com";		//ÊÖ»úÕ¾ÍøÖ·
document.writeln("<frameset cols=\"100%\"><frame src=\""+luobo_pc_domain+"\" /></frameset>");
function browserRedirect() { 
var sUserAgent= navigator.userAgent.toLowerCase(); 
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 
window.location.href= luobo_wap_domain; 
} else { 
} 
}
browserRedirect();