/**
 * Created by dong on 2014/9/1 0001.
 *
 * animation加载
 */

var animate = animate || {};
animate.loadAnime = function (plist, frameNm, delay) {
    var animeCache = cc.animationCache;

    var anm = animeCache.getAnimation(frameNm);
    if (anm !== null)return anm;

    var spriteFrameCache = cc.spriteFrameCache;
    spriteFrameCache.addSpriteFrames(plist);

    var animFrames = [];
    for (var i = 1; i < 100; i++) {
        var _fm = frameNm + i + '.png';
        var frame = spriteFrameCache.getSpriteFrame(_fm);
        if (!frame)break;
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, delay);
    animation.setRestoreOriginalFrame(true);
    animeCache.addAnimation(animation, frameNm);
    return animation;
};

animate.getFirstSprite = function (frameNm) {
    var spriteFrameCache = cc.spriteFrameCache;
    var frame = spriteFrameCache.getSpriteFrame(frameNm + '1.png');
    if (!frame) {
        throw new Error('frame doesnt exist!');
    }
    return cc.Sprite.create(frame);
};

animate.unLoadPlist = function (plist) {
    var spriteFrameCache = cc.spriteFrameCache;
    spriteFrameCache.removeSpriteFramesFromFile(plist);
};

animate.unloadAnime = function (frameNm) {
    var animeCache = cc.animationCache;
    var anm = animeCache.getAnimation(frameNm);
    if (anm !== null)animeCache.removeAnimation(frameNm);
};
