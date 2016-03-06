function isMobile(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    var bIsMobile = !!sUserAgent.match(/applewebkit.*mobile.*/); //是否为移动终端
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsMobile) {
        return true;
    } else {
        return false;
    }
}
if(!isMobile()){
    require('../component/redirect.css');
    document.body.innerHTML = `<span>
<p>亲，翻个爱豆做男友～</p>
    <img src="images/QR_code.png"/>
    <p>请用手机扫描二维码</p>
</span>`;
}