var res = {
    BackGround_png : "res/bg.png",
    Bird_png : "res/bird.png",
    Bird_plist : "res/bird.plist"
};

var g_resources = [];
for (var i in res) {
    if(!res.hasOwnProperty(i)){
        continue;
    }
    g_resources.push(res[i]);
}