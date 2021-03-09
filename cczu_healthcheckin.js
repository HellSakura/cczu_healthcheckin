auto.waitFor();
importClass(android.content.Context);
//屏幕高度
var height = device.height
var width = device.width

var pwd = hamibot.env;
log(pwd);
//解锁屏幕
var pwd = pwd.input;
if (pwd) {
  unlockIfNeed();
}else{
	log("无密码不解锁");
}
requestScreenCapture(false);
sleep(1000);
/**
 * 手机是否锁屏
 */
function isLocked() {
    var km = context.getSystemService(Context.KEYGUARD_SERVICE);
    return km.isKeyguardLocked() && km.isKeyguardSecure();
}

/**
 * 解锁屏幕
 */
function unlockIfNeed() {
   	device.wakeUpIfNeeded();
    if (!isLocked()) {
      	log("没有锁屏无需解锁");
        return;
    }
    enterPwd();
    
    log("解锁完毕");
}
function enterPwd() {
    //判断是否已经上滑至输入密码界面
//     for (int = 0; i < 10; i++) {
//         if (!text(i).clickable(true).exists() && !desc(i).clickable(true).exists()) {
//             log("解锁屏幕失败");
//             exit();
//         }
//     }
  sleep(2000);

  swipe(540, 1800, 540, 1300, 300);
  
    //点击
    if (text(0).clickable(true).exists()) {
        for (var i = 0; i < pwd.length; i++) {
            a = pwd.charAt(i)
            sleep(200);
            text(a).clickable(true).findOne().click()
        }
    } else {
        for (var i = 0; i < pwd.length; i++) {
            a = pwd.charAt(i)
            sleep(200);
            desc(a).clickable(true).findOne().click()
        }
    }
}
launch("com.tencent.wework"); //启动企业微信
toastLog('正在启动企业微信')
sleep(4000);
var workspace = id("en5").className("android.widget.TextView").text("工作台").findOne().parent().parent();//点击工作台
if (workspace){
  workspace.click();
  toastLog('打开工作台')
  sleep(1000);
}
else{
  toastLog('未找到工作台');
  exit();
}
sleep (500)
var daka = text("健康打卡（学生）").findOne().bounds();//寻找健康打卡
toastLog('健康打卡')
click(daka.centerX(), daka.centerY());
sleep (2000)
while(!click("正常",0));
sleep (500)
while(!setText(0,"36.2"));
sleep (500)
while(!click("否"));
sleep (1000)
while(!click("获取"));
sleep (5000)
swipe(540, 1800, 540, 1300, 300);
sleep (1000)
while(!click("提交"));
