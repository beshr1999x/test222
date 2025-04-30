(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarMargin":2,"data":{"displayTooltipInTouchScreens":true,"history":{},"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"rate":1,"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false},"locales":{"en":"locale/en.txt"},"name":"Player423"},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"id":"rootPlayer","layout":"absolute","start":"this.init()","children":["this.MainViewer"],"width":"100%","defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","minHeight":0,"hash": "151e413c64d32c2c08262bf0024106786669dc3291eaef6255eacb54ac8ca615", "definitions": [{"hfovMax":130,"hfov":360,"vfov":180,"frames":[{"cube":{"levels":[{"height":2048,"colCount":24,"rowCount":4,"width":12288,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A_0/{face}/0/{row}_{column}.webp"},{"height":1024,"colCount":12,"rowCount":2,"width":6144,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A_0/{face}/1/{row}_{column}.webp"},{"height":512,"colCount":6,"rowCount":1,"width":3072,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A_0/{face}/2/{row}_{column}.webp"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A_t.webp","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A_t.webp","hfovMin":"135%","label":trans('panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A.label'),"id":"panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A","class":"Panorama","data":{"label":"IMG_20250430_132840_741"}},{"hfovMax":130,"hfov":360,"vfov":180,"frames":[{"cube":{"levels":[{"height":2048,"colCount":24,"rowCount":4,"width":12288,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6_0/{face}/0/{row}_{column}.webp"},{"height":1024,"colCount":12,"rowCount":2,"width":6144,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6_0/{face}/1/{row}_{column}.webp"},{"height":512,"colCount":6,"rowCount":1,"width":3072,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6_0/{face}/2/{row}_{column}.webp"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6_t.webp","class":"CubicPanoramaFrame"}],"hfovMin":"135%","overlays":["this.overlay_CB6C5333_8656_112F_41DC_EC78AE5BB3D5"],"id":"panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6","data":{"label":"IMG_20250430_131100_302"},"thumbnailUrl":"media/panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6_t.webp","adjacentPanoramas":[{"data":{"overlayID":"overlay_CB6C5333_8656_112F_41DC_EC78AE5BB3D5"},"distance":4.71,"yaw":-175.46,"panorama":"this.panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A","class":"AdjacentPanorama","select":"this.overlay_CB6C5333_8656_112F_41DC_EC78AE5BB3D5.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6.label'),"class":"Panorama"},{"initialSequence":"this.sequence_CEB72682_862A_33E9_41BD_23A5102FDA55","id":"panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"subtitlesFontSize":"3vmin","subtitlesBottom":50,"progressOpacity":0.7,"subtitlesTop":0,"progressRight":"33%","playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarHeight":10,"playbackBarHeadShadow":true,"subtitlesTextShadowHorizontalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipBorderColor":"#767676","progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"progressBackgroundColor":["#000000"],"toolTipTextShadowColor":"#000000","progressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesTextShadowVerticalLength":1,"progressBottom":10,"playbackBarLeft":0,"progressHeight":2,"progressBorderSize":0,"playbackBarProgressBorderRadius":0,"data":{"name":"Main Viewer"},"playbackBarRight":0,"vrPointerSelectionTime":2000,"progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderRadius":2,"subtitlesFontFamily":"Arial","vrThumbstickRotationStep":20,"subtitlesGap":0,"progressLeft":"33%","subtitlesBackgroundColor":"#000000","toolTipPaddingRight":6,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"id":"MainViewer","playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","firstTransitionDuration":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderRadius":0,"playbackBarHeadHeight":15,"playbackBarProgressBorderColor":"#000000","toolTipPaddingLeft":6,"subtitlesTextShadowOpacity":1,"playbackBarHeadWidth":6,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","toolTipFontSize":"1.11vmin","width":"100%","playbackBarBackgroundOpacity":1,"playbackBarHeadBorderSize":0,"minHeight":50,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"playbackBarProgressBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"playbackBarBottom":5,"minWidth":100,"toolTipFontColor":"#606060","height":"100%","vrPointerColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","propagateClick":false,"surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"toolTipShadowColor":"#333138","class":"ViewerArea","progressBackgroundColorRatios":[0]},{"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation"},{"initialSequence":"this.sequence_CA158C7D_862A_771B_41DA_774994884BEA","id":"panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"id":"mainPlayList","items":[{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","camera":"this.panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6_camera","media":"this.panorama_C983DB8A_862A_11F9_41DE_F61CEEB112E6"},"this.PanoramaPlayListItem_D67416DC_862A_1319_41C0_9FDA7558793A"],"class":"PlayList"},{"data":{"label":"GoToImg_20250430_131100_302","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_CA6813BA_8656_1119_41DE_756F203EFBC4"],"items":[{"pitch":-19.85,"distance":50,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"yaw":-175.46,"vfov":3.54,"data":{"label":"GoToImg_20250430_131100_302"},"scaleMode":"fit_inside","image":"this.res_CB3BC477_8657_F717_41E0_A731B56F53E8"}],"enabledInCardboard":true,"maps":[],"id":"overlay_CB6C5333_8656_112F_41DC_EC78AE5BB3D5","class":"HotspotPanoramaOverlay","useHandCursor":true},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"id":"sequence_CEB72682_862A_33E9_41BD_23A5102FDA55","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"id":"sequence_CA158C7D_862A_771B_41DA_774994884BEA","class":"PanoramaCameraSequence"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_D67416DC_862A_1319_41C0_9FDA7558793A","class":"PanoramaPlayListItem","camera":"this.panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A_camera","media":"this.panorama_D7D6B8B2_862A_1F29_41BC_4E750671C11A"},{"displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_CA6813BA_8656_1119_41DE_756F203EFBC4","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_D67416DC_862A_1319_41C0_9FDA7558793A, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea"},{"id":"res_CB3BC477_8657_F717_41E0_A731B56F53E8","levels":[{"height":56,"width":166,"class":"ImageResourceLevel","url":"media/res_CB3BC477_8657_F717_41E0_A731B56F53E8_0.webp"}],"class":"ImageResource"}],"scripts":{"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openLink":TDV.Tour.Script.openLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"isPanorama":TDV.Tour.Script.isPanorama,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initQuiz":TDV.Tour.Script.initQuiz,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playAudioList":TDV.Tour.Script.playAudioList,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPixels":TDV.Tour.Script.getPixels,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setValue":TDV.Tour.Script.setValue,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"executeJS":TDV.Tour.Script.executeJS,"initAnalytics":TDV.Tour.Script.initAnalytics,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"init":TDV.Tour.Script.init,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"historyGoForward":TDV.Tour.Script.historyGoForward,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getKey":TDV.Tour.Script.getKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"disableVR":TDV.Tour.Script.disableVR,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"existsKey":TDV.Tour.Script.existsKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"mixObject":TDV.Tour.Script.mixObject,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"clone":TDV.Tour.Script.clone,"showPopupImage":TDV.Tour.Script.showPopupImage,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"createTween":TDV.Tour.Script.createTween,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"textToSpeech":TDV.Tour.Script.textToSpeech,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"translate":TDV.Tour.Script.translate,"enableVR":TDV.Tour.Script.enableVR,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showWindow":TDV.Tour.Script.showWindow,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setLocale":TDV.Tour.Script.setLocale,"takeScreenshot":TDV.Tour.Script.takeScreenshot},"minWidth":0,"height":"100%","propagateClick":false,"gap":10,"class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Wed Apr 30 2025