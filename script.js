(function(){
    var script = {
 "start": "this.init()",
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "paddingTop": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "definitions": [{
 "hfovMin": "120%",
 "label": "PAN-SB-1",
 "id": "panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -118.4,
   "backwardYaw": -11.12,
   "distance": 1,
   "panorama": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -20.92,
   "backwardYaw": 170.01,
   "distance": 1,
   "panorama": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.94,
   "backwardYaw": -167.38,
   "distance": 1,
   "panorama": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6"
  }
 ],
 "thumbnailUrl": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_E4779EC4_CEF2_4F24_41E1_945D5C0F6488",
  "this.overlay_E50966AD_CEF3_DF65_41E6_B3E1E6900E27",
  "this.overlay_E594F98F_CEF2_B524_41D8_4C4B1E3EAF20"
 ]
},
{
 "hfovMin": "120%",
 "label": "PAN-Liv-3",
 "id": "panorama_C27B8C05_CE52_F324_41DF_3341CA41455D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -157.59,
   "backwardYaw": -29.97,
   "distance": 1,
   "panorama": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -44.54,
   "backwardYaw": -173.41,
   "distance": 1,
   "panorama": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744"
  }
 ],
 "thumbnailUrl": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_DDEB3FD7_CE72_4D24_41E3_0C93E894B113",
  "this.overlay_DA99EAFE_CE73_D4E7_41E9_1C17C37A12D8",
  "this.overlay_DD8DAF08_CE72_4D2D_41E5_71ABA33A66E9"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE9FCD01_CF17_B92F_41DA_4D34D98863EA",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282",
   "camera": "this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD",
   "camera": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E",
   "camera": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5",
   "camera": "this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD",
   "camera": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884",
   "camera": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D",
   "camera": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2",
   "camera": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744",
   "camera": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F",
   "camera": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7",
   "camera": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92",
   "camera": "this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
   "camera": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659",
   "camera": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9",
   "camera": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06",
   "camera": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73",
   "camera": "this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA",
   "camera": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653",
   "camera": "this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99",
   "camera": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728",
   "camera": "this.panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C",
   "camera": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410",
   "camera": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6",
   "camera": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612",
   "camera": "this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517",
   "camera": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E",
   "camera": "this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D",
   "camera": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214",
   "camera": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7",
   "camera": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8",
   "camera": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982",
   "camera": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0A82C1E_CF17_BF54_41E7_32779B66788D",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "Pan-MB-W1.2",
 "id": "panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 90.62,
   "backwardYaw": -34.24,
   "distance": 1,
   "panorama": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.94,
   "backwardYaw": -6.6,
   "distance": 1,
   "panorama": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -84.73,
   "backwardYaw": -179.95,
   "distance": 1,
   "panorama": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06"
  }
 ],
 "thumbnailUrl": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_ECC5C27B_CE52_57EC_41CB_83A16C0B837F",
  "this.overlay_EA13A82A_CE53_D36F_41E1_AC93042DB559",
  "this.overlay_EBE0239F_CE52_7524_41A8_F12FBB486A76"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE265CCA_CF17_BF3D_4175_2EADE2CAB92B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DEC1DD35_CF17_B954_41DE_D2D213967025",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF323C54_CF17_BFD4_41D5_B232E18A7AF0",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-Liv-1",
 "id": "panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.09,
   "backwardYaw": -177.68,
   "distance": 1,
   "panorama": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -44.54,
   "backwardYaw": -135.73,
   "distance": 1,
   "panorama": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -176.18,
   "backwardYaw": 4.7,
   "distance": 1,
   "panorama": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD"
  }
 ],
 "thumbnailUrl": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_DE10BC1D_CE52_5324_41E3_865DA224C1CB",
  "this.overlay_DEC5FD65_CE52_4DE4_41E2_68AF6BB7B6E5",
  "this.overlay_DFC40ABB_CE53_D76D_41DD_EA13EFCA6382"
 ]
},
{
 "hfovMin": "120%",
 "label": "PAN-DB-1",
 "id": "panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -9.62,
   "backwardYaw": -100.31,
   "distance": 1,
   "panorama": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -150.8,
   "backwardYaw": 15.25,
   "distance": 1,
   "panorama": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744"
  }
 ],
 "thumbnailUrl": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_FDFE6DD7_CED2_4D25_41C0_AF4F94163E22",
  "this.overlay_FDC0A95A_CED6_552F_41DB_8F96127E479A"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE8C9D0D_CF17_B937_41E1_131974A36051",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DFCBDC9D_CF17_BF54_41AB_026BA047995B",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-SB-3",
 "id": "panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 48.41,
   "backwardYaw": -71.17,
   "distance": 1,
   "panorama": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6"
  }
 ],
 "thumbnailUrl": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_E40513A4_CEF2_D51B_41DB_4E66540EEEA2"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF692C76_CF17_BFD4_41B1_9AB12B721F9A",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "hfovMin": "120%",
 "label": "PAN-Liv-2",
 "id": "panorama_C2753BB7_CE52_D564_41CA_8C4627237884",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -29.97,
   "backwardYaw": -157.59,
   "distance": 1,
   "panorama": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.68,
   "backwardYaw": -4.09,
   "distance": 1,
   "panorama": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 91.88,
   "backwardYaw": -148.29,
   "distance": 1,
   "panorama": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F"
  }
 ],
 "thumbnailUrl": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_DA5804F1_CE71_DCFC_41E7_7C804BDCBCF6",
  "this.overlay_DA3B82FB_CE71_B4EC_41C8_61103785300B",
  "this.overlay_DABAEB3F_CE76_7564_41E4_922FCC315D19"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C060EBF5_CF17_B8D7_41DD_CB8C9527C75F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0439BE5_CF17_B8F4_41B7_C220694365C7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF7BEC70_CF17_BFEC_41D8_1444986D1C0C",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "Pan-SW-1",
 "id": "panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -100.56,
   "backwardYaw": 111.22,
   "distance": 1,
   "panorama": "this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 170.01,
   "backwardYaw": -20.92,
   "distance": 1,
   "panorama": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410"
  }
 ],
 "thumbnailUrl": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_E3CF33C5_CEF6_D525_41D3_49151C5BB4D8",
  "this.overlay_E3462F3B_CEF6_4D6C_41C0_25F289F0CBB2"
 ]
},
{
 "hfovMin": "120%",
 "label": "PAN-SB-2",
 "id": "panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -71.17,
   "backwardYaw": 48.41,
   "distance": 1,
   "panorama": "this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -167.38,
   "backwardYaw": 2.94,
   "distance": 1,
   "panorama": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410"
  }
 ],
 "thumbnailUrl": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_E272C448_CEF2_532C_41C2_A03384153C8D",
  "this.overlay_E2C869FC_CEF1_F4E4_41D5_8D6517059472"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DFB03C86_CF17_BF35_41D7_37632E9DBE33",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE5ADCDB_CF17_B8D3_41E3_BA3D6C1A809E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.33,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD22EB87_CF17_B933_41E9_D7C9F0167666",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 135.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD679B9D_CF17_B957_41AC_C984A5E95E79",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 80.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0252BCF_CF17_B934_41CA_BF37074596F8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -164.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DFF93CA4_CF17_BF75_41DB_50FE004E3B55",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD76CB97_CF17_B953_41E8_D976B0FCD541",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DFA65C8B_CF17_BF33_41E2_1BEA66BFCB11",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF0C2C4F_CF17_BF34_41DD_45940872D9EE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "Pan-MB-W2",
 "id": "panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -51.07,
   "backwardYaw": 6.71,
   "distance": 1,
   "panorama": "this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.95,
   "backwardYaw": -84.73,
   "distance": 1,
   "panorama": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659"
  }
 ],
 "thumbnailUrl": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_ED76CA9C_CE5E_D72B_41DE_E3A11F2D23DA",
  "this.overlay_EB1EAD16_CE5F_CD27_41AE_12A2E904DF2B"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF206C59_CF17_BFDC_41C0_C2016DCE767C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0544BDA_CF17_B8DC_41D4_2B576F51A9D9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C08BAC0C_CF17_BF35_41E4_EFDE3AFA190D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-MBW-2",
 "id": "panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99"
  }
 ],
 "thumbnailUrl": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D1315144_CE52_5524_41A3_358654C370EF",
  "this.overlay_EE773CF1_CE56_4CFC_41D2_0CD93AFE085F"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "Pan-MB-W4",
 "id": "panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 72.28,
   "backwardYaw": -59.36,
   "distance": 1,
   "panorama": "this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -70.92,
   "backwardYaw": -104.83,
   "distance": 1,
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -34.24,
   "backwardYaw": 90.62,
   "distance": 1,
   "panorama": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659"
  }
 ],
 "thumbnailUrl": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D769926E_CE71_B7E4_41E4_F0EFE98BD78F",
  "this.overlay_EAF33861_CE5E_531C_41DF_E9F891A314D1",
  "this.overlay_EB955F61_CE53_CD1D_41E0_6A09D95F6F99"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF479C63_CF17_BFF3_41A8_F0752DCEFE87",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD1B8D52_CF17_B92D_4198_588119BE17C2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 145.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DEF69D40_CF17_B92D_41E8_32A703F9C9F0",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-ENT-1",
 "id": "panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 2.44,
   "backwardYaw": -179.44,
   "distance": 1,
   "panorama": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD"
  }
 ],
 "thumbnailUrl": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_C00BD195_CE52_5524_41D3_6B7795D422E9"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD41FB92_CF17_B92D_41E8_9BD27367348C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-DB-3",
 "id": "panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -99.55,
   "backwardYaw": 25.55,
   "distance": 1,
   "panorama": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -9.62,
   "backwardYaw": 78.56,
   "distance": 1,
   "panorama": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8"
  }
 ],
 "thumbnailUrl": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_FB1B184A_CED1_B32C_41DC_58B88C810C54",
  "this.overlay_F8FF28A2_CED1_D31F_41D5_78D85687C0F7"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF567C5E_CF17_BFD5_41E7_F5CB39A6265A",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "Pan-SW-2",
 "id": "panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 111.22,
   "backwardYaw": -100.56,
   "distance": 1,
   "panorama": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517"
  }
 ],
 "thumbnailUrl": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_E3094F50_CEF1_CD3C_41C8_B7AF39CD96CB"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 135.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0E8AC44_CF17_BF34_41E2_51FCFD6A84EB",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-Liv-4",
 "id": "panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 46.15,
   "backwardYaw": 101.67,
   "distance": 1,
   "panorama": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744"
  }
 ],
 "thumbnailUrl": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D216570F_CE72_BD24_4184_D421F52C345F"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C075EBEA_CF17_B8FC_41E6_C82305136D43",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD096D58_CF17_B9DC_41C8_D43391F34E30",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-MB-4",
 "id": "panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -152.81,
   "backwardYaw": 97.4,
   "distance": 1,
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -16.4,
   "backwardYaw": 40.88,
   "distance": 1,
   "panorama": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 146.89,
   "backwardYaw": 131.07,
   "distance": 1,
   "panorama": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 61.48,
   "backwardYaw": 93.89,
   "distance": 1,
   "panorama": "this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92"
  }
 ],
 "thumbnailUrl": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D9ADD729_CE72_7D6D_41C5_A3D611991508",
  "this.overlay_D6293F02_CE72_4D1C_41D8_DACEABA0EED8",
  "this.overlay_D6E7ED8C_CE72_4D24_41E6_6E125FFE76E4",
  "this.overlay_D02A6214_CE52_B724_41C1_0C41A1C8D549"
 ]
},
{
 "hfovMin": "120%",
 "label": "PAN-DW-2",
 "id": "panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 128.3,
   "backwardYaw": -98.05,
   "distance": 1,
   "panorama": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982"
  }
 ],
 "thumbnailUrl": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_FC510E6C_CED6_CFEB_41C4_7F905A861E8E"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -107.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0860C06_CF17_BF35_41D1_51DAA17DD3E0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DEE45D45_CF17_B937_41DA_32E2F80D882A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE791CF1_CF17_B8EC_41CC_D9EDBC3473C7",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-MB-2",
 "id": "panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 40.88,
   "backwardYaw": -16.4,
   "distance": 1,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 141.37,
   "backwardYaw": -71.42,
   "distance": 1,
   "panorama": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F"
  }
 ],
 "thumbnailUrl": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D92BF904_CE7F_D524_41D8_21649F6BEBFF",
  "this.overlay_D9DA8C2C_CE7E_536B_41E8_63AF5FF1F288"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C2753BB7_CE52_D564_41CA_8C4627237884_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-MBW-3",
 "id": "panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -135.23,
   "backwardYaw": -2.83,
   "distance": 1,
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99"
  }
 ],
 "thumbnailUrl": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_EE15EFF7_CE56_4CE4_41DD_B8BD3FE4773A"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD3E2D5D_CF17_B9D4_41D6_E5CAC0876CEA",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-Kitchen-2",
 "id": "panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -178.19,
   "backwardYaw": -1.58,
   "distance": 1,
   "panorama": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E"
  }
 ],
 "thumbnailUrl": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_DFC07DF1_CE51_CCFC_41E0_0F0B0E794DCF"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -139.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF75BC6A_CF17_BFFC_41CA_2CCBAEDC0D8A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DEEACD4D_CF17_B937_41DF_6B46E6615E46",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-ENT-2",
 "id": "panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 4.7,
   "backwardYaw": -176.18,
   "distance": 1,
   "panorama": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.44,
   "backwardYaw": 2.44,
   "distance": 1,
   "panorama": "this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282"
  }
 ],
 "thumbnailUrl": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_C0B8B66B_CE56_7FED_41E7_75EAD7E88FE5",
  "this.overlay_C0BE05AA_CE56_7D6C_41D3_5EF003329E89"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DD507B8D_CF17_B937_41DE_0270EC75948B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0223BD5_CF17_B8D4_41D8_D5A64E83F5C9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0A77C18_CF17_BF5C_41C8_81B4A5533BC0",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-MB-3",
 "id": "panorama_DBA4520F_CE72_D724_41CA_442EC6273E92",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 93.89,
   "backwardYaw": 61.48,
   "distance": 1,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483"
  }
 ],
 "thumbnailUrl": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D3417818_CE4E_B32C_41E2_36DC244C6576"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE578CD1_CF17_BF2C_41AC_123C186CF130",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DED03D2A_CF17_B97D_41D5_99836B35E463",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-Liv-5",
 "id": "panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 101.67,
   "backwardYaw": 46.15,
   "distance": 1,
   "panorama": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.41,
   "backwardYaw": -44.54,
   "distance": 1,
   "panorama": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -11.12,
   "backwardYaw": -118.4,
   "distance": 1,
   "panorama": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 15.25,
   "backwardYaw": -150.8,
   "distance": 1,
   "panorama": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D"
  }
 ],
 "thumbnailUrl": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D22C1CBE_CE73_F364_41DF_619530D45637",
  "this.overlay_D067169B_CE71_DF2C_41CA_29DE6C637BA4",
  "this.overlay_D326CB56_CE4E_D527_41CF_3B669A818307",
  "this.overlay_D3FCFDF9_CE4E_4CEC_41D0_1A4BCD2355E6"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C09C9C00_CF17_BF2D_41D7_03687D709726",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE486CE5_CF17_B8F7_41E6_6EC1271BCF30",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0C88C31_CF17_BF6C_41E9_2C02DE9BB8B8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE02CCB6_CF17_BF54_41C1_2F0FBAF947B1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE6E3CF6_CF17_B8D5_41E2_AA21A5FB25E6",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-MB-1",
 "id": "panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -71.42,
   "backwardYaw": 141.37,
   "distance": 1,
   "panorama": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -148.29,
   "backwardYaw": 91.88,
   "distance": 1,
   "panorama": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884"
  }
 ],
 "thumbnailUrl": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D8AE2E35_CE7E_4F64_41E9_90FC8BDFA8C0",
  "this.overlay_D9E244A3_CE7E_731C_41DF_F376ACF48924"
 ]
},
{
 "hfovMin": "120%",
 "label": "PAN-MBW-1",
 "id": "panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -104.83,
   "backwardYaw": -70.92,
   "distance": 1,
   "panorama": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 97.4,
   "backwardYaw": -152.81,
   "distance": 1,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -45.79,
   "backwardYaw": -152.81,
   "distance": 1,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -2.83,
   "backwardYaw": -135.23,
   "distance": 1,
   "panorama": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C"
  }
 ],
 "thumbnailUrl": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D00543F1_CE52_54FD_41D3_C6726AEA043B",
  "this.overlay_D0903E71_CE53_CFFC_41E6_FDB0C04E0D64",
  "this.overlay_D1AC5445_CE56_5324_41DA_85824356E29B",
  "this.overlay_D1B7A8B8_CE56_B36C_41E5_5A85CC3D405E"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF8C9C80_CF17_BF2D_41D9_206349E1C021",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0DDAC25_CF17_BF77_41D4_3FF07AF0A30B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DFD79C90_CF17_BF2D_41E0_12E7A26CDA08",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE300CBB_CF17_BF5C_41D5_B3A1CB7A83FC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-DB-4",
 "id": "panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 78.56,
   "backwardYaw": -9.62,
   "distance": 1,
   "panorama": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 31.83,
   "backwardYaw": 135.84,
   "distance": 1,
   "panorama": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982"
  }
 ],
 "thumbnailUrl": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_FC700DF7_CED2_CCE4_41E0_A89375AF0CA6",
  "this.overlay_FBF8523F_CED3_F764_41E1_34202CB314C5"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C06B1BFA_CF17_B8DD_41D7_30F65212A3D9",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "PAN-Kitchen-1",
 "id": "panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.58,
   "backwardYaw": -178.19,
   "distance": 1,
   "panorama": "this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -135.73,
   "backwardYaw": -44.54,
   "distance": 1,
   "panorama": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD"
  }
 ],
 "thumbnailUrl": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_DEB6CF4D_CE52_4D24_41DD_56B107E6F740",
  "this.overlay_DF137E97_CE52_CF25_41E8_5C96C4126C0F"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DEA34D1F_CF17_B953_41E5_DE20589C000E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DFC59C97_CF17_BF54_41E3_A274DBA761DA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0C70C2A_CF17_BF7D_41E5_1BE3A742CF16",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C07F5BEF_CF17_B8F3_41DF_3A0EEAB49C64",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DFEF5CA9_CF17_BF7F_41D5_E20F565B1587",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF9F7C7B_CF17_BFDC_41E4_24F87BAAEEB4",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "Pan-MB-W1",
 "id": "panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 131.07,
   "backwardYaw": 146.89,
   "distance": 1,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.6,
   "backwardYaw": -177.94,
   "distance": 1,
   "panorama": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659"
  }
 ],
 "thumbnailUrl": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_D6FC97B4_CE72_7D64_41BC_2DE6C6DA6368",
  "this.overlay_ECA27FD9_CE52_4D2C_41D5_0822BC23A85A"
 ]
},
{
 "hfovMin": "120%",
 "label": "PAN-DB-2",
 "id": "panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 25.55,
   "backwardYaw": -99.55,
   "distance": 1,
   "panorama": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -100.31,
   "backwardYaw": -9.62,
   "distance": 1,
   "panorama": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D"
  }
 ],
 "thumbnailUrl": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_FD17FD88_CED6_4D2C_41E5_42C734BD868E",
  "this.overlay_F2EAF6AD_CEB2_5F64_41DB_35F7C8063ACD"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "Pan-MB-W3",
 "id": "panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 6.71,
   "backwardYaw": -51.07,
   "distance": 1,
   "panorama": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06"
  }
 ],
 "thumbnailUrl": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_EA1AAA4C_CE5E_B724_4183_3669EB2FA15F"
 ]
},
{
 "hfovMin": "120%",
 "label": "PAN-DW-1",
 "id": "panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -98.05,
   "backwardYaw": 128.3,
   "distance": 1,
   "panorama": "this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 135.84,
   "backwardYaw": 31.83,
   "distance": 1,
   "panorama": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8"
  }
 ],
 "thumbnailUrl": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_FC6E490C_CED2_752B_41CA_273E14212024",
  "this.overlay_FDC6C82D_CED1_B364_41D8_F27EBB7BDD54"
 ]
},
{
 "hfovMin": "120%",
 "label": "Pan-MB-W5",
 "id": "panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -59.36,
   "backwardYaw": 72.28,
   "distance": 1,
   "panorama": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA"
  }
 ],
 "thumbnailUrl": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_E8F002DC_CE52_572B_41E2_6AA189DCBF5F"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0FDAC38_CF17_BF5D_41E4_ECF7E36907C0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C05E6BDF_CF17_B8D3_419E_4C60F11D01BA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 128.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DEBDAD19_CF17_B95C_41DA_9A710930C29D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.85,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0E7EC3D_CF17_BF57_41D1_A4E6DC96CDBB",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DE1CACB0_CF17_BF6C_41E4_8513562719CC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C0BDFC11_CF17_BF2F_41CA_16F56A665B43",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 61.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_DF1EAC49_CF17_BF3C_41E7_37E50A225CE9",
 "automaticZoomSpeed": 10
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionDuration": 500,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.65,
   "image": "this.AnimatedImageResource_FB997BEE_CEF3_F4E4_41A4_5BBF74A2E694",
   "yaw": -118.4,
   "pitch": -34.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4779EC4_CEF2_4F24_41E1_945D5C0F6488",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744, this.camera_DD1B8D52_CF17_B92D_4198_588119BE17C2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.38,
   "image": "this.AnimatedImageResource_FB99BBEE_CEF3_F4E4_4196_5269A9B9958B",
   "yaw": -20.92,
   "pitch": -17.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E50966AD_CEF3_DF65_41E6_B3E1E6900E27",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517, this.camera_DD096D58_CF17_B9DC_41C8_D43391F34E30); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.07,
   "image": "this.AnimatedImageResource_FB982BEF_CEF3_F4E4_41D1_7E3D4151CC2F",
   "yaw": 2.94,
   "pitch": -28.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E594F98F_CEF2_B524_41D8_4C4B1E3EAF20",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6, this.camera_DD3E2D5D_CF17_B9D4_41D6_E5CAC0876CEA); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.93,
   "image": "this.AnimatedImageResource_E05B0540_CE56_5D1C_41E0_CBF78E02F93E",
   "yaw": -157.59,
   "pitch": -29.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDEB3FD7_CE72_4D24_41E3_0C93E894B113",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884, this.camera_DF323C54_CF17_BFD4_41D5_B232E18A7AF0); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.63,
   "image": "this.AnimatedImageResource_E058C540_CE56_5D1C_41C8_6BC5C8DFB75E",
   "yaw": -44.54,
   "pitch": -33.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA99EAFE_CE73_D4E7_41E9_1C17C37A12D8",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744, this.camera_DF206C59_CF17_BFDC_41C0_C2016DCE767C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.42,
   "image": "this.AnimatedImageResource_E0584540_CE56_5D1C_41E5_29C5EDFC740B",
   "yaw": 26.31,
   "pitch": -23.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD8DAF08_CE72_4D2D_41E5_71ABA33A66E9",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.37,
   "image": "this.AnimatedImageResource_E05D7542_CE56_5D1C_41E0_4ED3E243ECE3",
   "yaw": -177.94,
   "pitch": -68.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECC5C27B_CE52_57EC_41CB_83A16C0B837F",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9, this.camera_DEE45D45_CF17_B937_41DA_32E2F80D882A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -68.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.56,
   "image": "this.AnimatedImageResource_E05D2542_CE56_5D1C_41C1_7519A1C25593",
   "yaw": 90.62,
   "pitch": -52.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA13A82A_CE53_D36F_41E1_AC93042DB559",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA, this.camera_DEF69D40_CF17_B92D_41E8_32A703F9C9F0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.34,
   "image": "this.AnimatedImageResource_E052B542_CE56_5D1C_41E2_B3100ADA4FA9",
   "yaw": -84.73,
   "pitch": -54.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBE0239F_CE52_7524_41A8_F12FBB486A76",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06, this.camera_DEEACD4D_CF17_B937_41DF_6B46E6615E46); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.2,
   "image": "this.AnimatedImageResource_E05AD53B_CE56_5D6C_41C6_3BDC2594C0DA",
   "yaw": -176.18,
   "pitch": -22.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE10BC1D_CE52_5324_41E3_865DA224C1CB",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD, this.camera_DEC1DD35_CF17_B954_41DE_D2D213967025); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.21,
   "image": "this.AnimatedImageResource_DA3A22CC_CE56_7724_41DA_2B93C454EBD5",
   "yaw": -44.54,
   "pitch": -47.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEC5FD65_CE52_4DE4_41E2_68AF6BB7B6E5",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E, this.camera_DED03D2A_CF17_B97D_41D5_99836B35E463); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.18,
   "image": "this.AnimatedImageResource_DA3AE2CC_CE56_7724_41A7_D596304B27B0",
   "yaw": -4.09,
   "pitch": -26.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFC40ABB_CE53_D76D_41DD_EA13EFCA6382",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884, this.camera_DEA34D1F_CF17_B953_41E5_DE20589C000E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.27,
   "image": "this.AnimatedImageResource_F2BAB146_CEB2_5527_41D5_F6B832E18628",
   "yaw": -150.8,
   "pitch": -20.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDFE6DD7_CED2_4D25_41C0_AF4F94163E22",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744, this.camera_DFF93CA4_CF17_BF75_41DB_50FE004E3B55); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_F2BD5146_CEB2_5527_41DD_A5715D3E0F58",
   "yaw": -9.62,
   "pitch": -25.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDC0A95A_CED6_552F_41DB_8F96127E479A",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214, this.camera_DFCBDC9D_CF17_BF54_41AB_026BA047995B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_FB9B7BEF_CEF3_F4E4_41E3_841086F7FA1B",
   "yaw": 48.41,
   "pitch": -35.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E40513A4_CEF2_D51B_41DB_4E66540EEEA2",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6, this.camera_C08BAC0C_CF17_BF35_41E4_EFDE3AFA190D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.01,
   "image": "this.AnimatedImageResource_E05A653B_CE56_5D6C_41E0_4F8AD3BB040A",
   "yaw": -29.97,
   "pitch": -28.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA5804F1_CE71_DCFC_41E7_7C804BDCBCF6",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D, this.camera_C0544BDA_CF17_B8DC_41D4_2B576F51A9D9); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.45,
   "image": "this.AnimatedImageResource_E05BF53B_CE56_5D6C_41C5_D5B9F5A4CE11",
   "yaw": -177.68,
   "pitch": -35.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA3B82FB_CE71_B4EC_41C8_61103785300B",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD, this.camera_C05E6BDF_CF17_B8D3_419E_4C60F11D01BA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.58,
   "image": "this.AnimatedImageResource_E05BB53B_CE56_5D67_41DE_B607E745598D",
   "yaw": 91.88,
   "pitch": -7.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DABAEB3F_CE76_7564_41E4_922FCC315D19",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F, this.camera_C0439BE5_CF17_B8F4_41B7_C220694365C7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.39,
   "image": "this.AnimatedImageResource_FB9BEBEF_CEF3_F4E4_41C9_F542A8E48A00",
   "yaw": -100.56,
   "pitch": -16.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3CF33C5_CEF6_D525_41D3_49151C5BB4D8",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E, this.camera_C0A82C1E_CF17_BF54_41E7_32779B66788D); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.25,
   "image": "this.AnimatedImageResource_FB9A3BEF_CEF3_F4E4_41E9_AFC0A60BE9DC",
   "yaw": 170.01,
   "pitch": -41.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3462F3B_CEF6_4D6C_41C0_25F289F0CBB2",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410, this.camera_C0DDAC25_CF17_BF77_41D4_3FF07AF0A30B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_F2B8C145_CEB2_5524_41D1_4E694E3F18D6",
   "yaw": -71.17,
   "pitch": -32.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E272C448_CEF2_532C_41C2_A03384153C8D",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612, this.camera_C0BDFC11_CF17_BF2F_41CA_16F56A665B43); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.83,
   "image": "this.AnimatedImageResource_FB98FBEF_CEF3_F4E4_41E6_B093265249F0",
   "yaw": -167.38,
   "pitch": -31.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2C869FC_CEF1_F4E4_41D5_8D6517059472",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410, this.camera_C0A77C18_CF17_BF5C_41C8_81B4A5533BC0); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.24,
   "image": "this.AnimatedImageResource_E05D3543_CE56_5D1C_41DF_1F286798C8AF",
   "yaw": -179.95,
   "pitch": -47.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED76CA9C_CE5E_D72B_41DE_E3A11F2D23DA",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659, this.camera_C09C9C00_CF17_BF2D_41D7_03687D709726); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "image": "this.AnimatedImageResource_E0529543_CE56_5D1C_41E4_006CE34DFAFB",
   "yaw": -51.07,
   "pitch": -41.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB1EAD16_CE5F_CD27_41AE_12A2E904DF2B",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73, this.camera_C06B1BFA_CF17_B8DD_41D7_30F65212A3D9); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.18,
   "image": "this.AnimatedImageResource_E056D54A_CE56_5D2F_41D2_219B319C86CA",
   "yaw": 178.55,
   "pitch": -47.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1315144_CE52_5524_41A3_358654C370EF",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.33,
   "image": "this.AnimatedImageResource_E056B54A_CE56_5D2F_41E4_9B3CE5E9B1DE",
   "yaw": 115.49,
   "pitch": -18.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE773CF1_CE56_4CFC_41D2_0CD93AFE085F",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.39,
   "image": "this.AnimatedImageResource_E053D543_CE56_5D27_41E2_6F5BFD7BE5D8",
   "yaw": -70.92,
   "pitch": -17.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D769926E_CE71_B7E4_41E4_F0EFE98BD78F",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99, this.camera_DFD79C90_CF17_BF2D_41E0_12E7A26CDA08); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_E0538549_CE56_5D2D_41DD_22A8EBE8B425",
   "yaw": -34.24,
   "pitch": -38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAF33861_CE5E_531C_41DF_E9F891A314D1",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659, this.camera_DFC59C97_CF17_BF54_41E3_A274DBA761DA); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.97,
   "image": "this.AnimatedImageResource_E0531549_CE56_5D2D_41D6_D7D9CF41EE2B",
   "yaw": 72.28,
   "pitch": -49.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB955F61_CE53_CD1D_41E0_6A09D95F6F99",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653, this.camera_DFA65C8B_CF17_BF33_41E2_1BEA66BFCB11); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.97,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.14,
   "image": "this.AnimatedImageResource_DCCFFB38_CE51_B56B_41D1_D370410CAF13",
   "yaw": 2.44,
   "pitch": -27.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C00BD195_CE52_5524_41D3_6B7795D422E9",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD, this.camera_DFB03C86_CF17_BF35_41D7_37632E9DBE33); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.85,
   "image": "this.AnimatedImageResource_F2BC7146_CEB2_5524_41D3_B150D20E99E9",
   "yaw": -99.55,
   "pitch": -30.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FB1B184A_CED1_B32C_41DC_58B88C810C54",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214, this.camera_DE300CBB_CF17_BF5C_41D5_B3A1CB7A83FC); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.29,
   "image": "this.AnimatedImageResource_F2BCF146_CEB2_5524_41D2_AC9DBC38CDA0",
   "yaw": -9.62,
   "pitch": -37.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F8FF28A2_CED1_D31F_41D5_78D85687C0F7",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8, this.camera_DE265CCA_CF17_BF3D_4175_2EADE2CAB92B); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.37,
   "image": "this.AnimatedImageResource_FB9ABBEF_CEF3_F4E4_41A9_3978A9D4A3D7",
   "yaw": 111.22,
   "pitch": -17.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3094F50_CEF1_CD3C_41C8_B7AF39CD96CB",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517, this.camera_DE8C9D0D_CF17_B937_41E1_131974A36051); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.33,
   "image": "this.AnimatedImageResource_E0580541_CE56_5D1C_41E2_6B7A0833C6DB",
   "yaw": 46.15,
   "pitch": -24.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D216570F_CE72_BD24_4184_D421F52C345F",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744, this.camera_DD22EB87_CF17_B933_41E9_D7C9F0167666); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_E05C8542_CE56_5D1C_41D6_CA183B5770D3",
   "yaw": -16.4,
   "pitch": -26.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9ADD729_CE72_7D6D_41C5_A3D611991508",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7, this.camera_DF75BC6A_CF17_BFFC_41CA_2CCBAEDC0D8A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.99,
   "image": "this.AnimatedImageResource_E05C5542_CE56_5D1C_41A9_2D4BFAD82E86",
   "yaw": 61.48,
   "pitch": -29.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6293F02_CE72_4D1C_41D8_DACEABA0EED8",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92, this.camera_DF692C76_CF17_BFD4_41B1_9AB12B721F9A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.41,
   "image": "this.AnimatedImageResource_E05C3542_CE56_5D1C_41DE_A5B7B3C7901B",
   "yaw": 146.89,
   "pitch": -16.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6E7ED8C_CE72_4D24_41E6_6E125FFE76E4",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9, this.camera_DF7BEC70_CF17_BFEC_41D8_1444986D1C0C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.41,
   "image": "this.AnimatedImageResource_E05DE542_CE56_5D1C_41AB_96A06C3FDDC2",
   "yaw": -152.81,
   "pitch": -16.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D02A6214_CE52_B724_41C1_0C41A1C8D549",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99, this.camera_DF479C63_CF17_BFF3_41A8_F0752DCEFE87); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.79,
   "image": "this.AnimatedImageResource_F2BEB147_CEB2_5525_41BF_6C6A393E0DE3",
   "yaw": 128.3,
   "pitch": -31.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC510E6C_CED6_CFEB_41C4_7F905A861E8E",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982, this.camera_DFEF5CA9_CF17_BF7F_41D5_E20F565B1587); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.1,
   "image": "this.AnimatedImageResource_E05FE541_CE56_5D1C_41D0_B64D7AF32E61",
   "yaw": 40.88,
   "pitch": -27.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D92BF904_CE7F_D524_41D8_21649F6BEBFF",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_C07F5BEF_CF17_B8F3_41DF_3A0EEAB49C64); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.27,
   "image": "this.AnimatedImageResource_E05F5541_CE56_5D1C_41E5_B842B29CD6FD",
   "yaw": 141.37,
   "pitch": -25.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9DA8C2C_CE7E_536B_41E8_63AF5FF1F288",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F, this.camera_C060EBF5_CF17_B8D7_41DD_CB8C9527C75F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.39,
   "image": "this.AnimatedImageResource_E056054A_CE56_5D2F_41BB_F904EC4FD98E",
   "yaw": -135.23,
   "pitch": -16.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE15EFF7_CE56_4CE4_41DD_B8BD3FE4773A",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99, this.camera_C075EBEA_CF17_B8FC_41E6_C82305136D43); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.58,
   "image": "this.AnimatedImageResource_DA05C2CC_CE56_7724_41E2_3441EBD70375",
   "yaw": -178.19,
   "pitch": -44.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFC07DF1_CE51_CCFC_41E0_0F0B0E794DCF",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E, this.camera_DF567C5E_CF17_BFD5_41E7_F5CB39A6265A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "image": "this.AnimatedImageResource_E064053A_CE56_5D6C_41DB_46E2AEF36A90",
   "yaw": -179.44,
   "pitch": -41.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C0B8B66B_CE56_7FED_41E7_75EAD7E88FE5",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282, this.camera_DE9FCD01_CF17_B92F_41DA_4D34D98863EA); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.6,
   "image": "this.AnimatedImageResource_DCC82B38_CE51_B56B_41A2_E1180242ACDB",
   "yaw": 4.7,
   "pitch": -6.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C0BE05AA_CE56_7D6C_41D3_5EF003329E89",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD, this.camera_DE6E3CF6_CF17_B8D5_41E2_AA21A5FB25E6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.1,
   "image": "this.AnimatedImageResource_E05F3542_CE56_5D1C_41D5_E122AE87F7DF",
   "yaw": 93.89,
   "pitch": -27.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D3417818_CE4E_B32C_41E2_36DC244C6576",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_C0FDAC38_CF17_BF5D_41E4_ECF7E36907C0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_E059E541_CE56_5D1C_41B1_184582055AAE",
   "yaw": 101.67,
   "pitch": -26.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D22C1CBE_CE73_F364_41DF_619530D45637",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2, this.camera_C0E7EC3D_CF17_BF57_41D1_A4E6DC96CDBB); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.43,
   "image": "this.AnimatedImageResource_E0595541_CE56_5D1C_41E4_5551E5968496",
   "yaw": -173.41,
   "pitch": -35.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D067169B_CE71_DF2C_41CA_29DE6C637BA4",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D, this.camera_C0E8AC44_CF17_BF34_41E2_51FCFD6A84EB); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.49,
   "image": "this.AnimatedImageResource_E0590541_CE56_5D1C_418F_A9177A0AA789",
   "yaw": 15.25,
   "pitch": -12.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D326CB56_CE4E_D527_41CF_3B669A818307",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D, this.camera_DF0C2C4F_CF17_BF34_41DD_45940872D9EE); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.52,
   "image": "this.AnimatedImageResource_E05EC541_CE56_5D1C_41E2_9E7F3D9FBF43",
   "yaw": -11.12,
   "pitch": -11.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D3FCFDF9_CE4E_4CEC_41D0_1A4BCD2355E6",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410, this.camera_DF1EAC49_CF17_BF3C_41E7_37E50A225CE9); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.69,
   "image": "this.AnimatedImageResource_E05E5541_CE56_5D1C_41DD_19A00E3611B0",
   "yaw": -148.29,
   "pitch": -33.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D8AE2E35_CE7E_4F64_41E9_90FC8BDFA8C0",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884, this.camera_DF8C9C80_CF17_BF2D_41D9_206349E1C021); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_E05E0541_CE56_5D1C_41D0_7B6F6577CB6C",
   "yaw": -71.42,
   "pitch": -25.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9E244A3_CE7E_731C_41DF_F376ACF48924",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7, this.camera_DF9F7C7B_CF17_BFDC_41E4_24F87BAAEEB4); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.55,
   "image": "this.AnimatedImageResource_E050A54A_CE56_5D2F_41D1_81671FD7965F",
   "yaw": 97.4,
   "pitch": -36.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D00543F1_CE52_54FD_41D3_C6726AEA043B",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_DE5ADCDB_CF17_B8D3_41E3_BA3D6C1A809E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.44,
   "image": "this.AnimatedImageResource_E050354A_CE56_5D2F_41D8_8B242CD98B91",
   "yaw": -2.83,
   "pitch": -15.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D0903E71_CE53_CFFC_41E6_FDB0C04E0D64",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C, this.camera_DE791CF1_CF17_B8EC_41CC_D9EDBC3473C7); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_E051954A_CE56_5D2F_41D1_442841A4824B",
   "yaw": -45.79,
   "pitch": -37.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1AC5445_CE56_5324_41DA_85824356E29B",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_DE486CE5_CF17_B8F7_41E6_6EC1271BCF30); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.04,
   "image": "this.AnimatedImageResource_E051454A_CE56_5D2F_41E4_58AC16359BD5",
   "yaw": -104.83,
   "pitch": -26.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1B7A8B8_CE56_B36C_41E5_5A85CC3D405E",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA, this.camera_DE578CD1_CF17_BF2C_41AC_123C186CF130); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.41,
   "image": "this.AnimatedImageResource_F2BF7146_CEB2_5524_41E4_A9F516CF0A1B",
   "yaw": 31.83,
   "pitch": -16.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC700DF7_CED2_CCE4_41E0_A89375AF0CA6",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982, this.camera_C0C88C31_CF17_BF6C_41E9_2C02DE9BB8B8); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.55,
   "image": "this.AnimatedImageResource_F2BF1147_CEB2_5525_41E3_E206B15D82CC",
   "yaw": 78.56,
   "pitch": -34.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FBF8523F_CED3_F764_41E1_34202CB314C5",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7, this.camera_C0C70C2A_CF17_BF7D_41E5_1BE3A742CF16); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_DA0572CC_CE56_7724_41CA_6B3222821007",
   "yaw": -1.58,
   "pitch": -32.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEB6CF4D_CE52_4D24_41DD_56B107E6F740",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5, this.camera_DD76CB97_CF17_B953_41E8_D976B0FCD541); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.12,
   "image": "this.AnimatedImageResource_DA0522CC_CE56_7724_41D5_38D04AF5AC50",
   "yaw": -135.73,
   "pitch": -48.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DF137E97_CE52_CF25_41E8_5C96C4126C0F",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD, this.camera_DD679B9D_CF17_B957_41AC_C984A5E95E79); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.85,
   "image": "this.AnimatedImageResource_E0521542_CE56_5D1C_41E9_963168F6223D",
   "yaw": 131.07,
   "pitch": -30.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6FC97B4_CE72_7D64_41BC_2DE6C6DA6368",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_DE1CACB0_CF17_BF6C_41E4_8513562719CC); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.67,
   "image": "this.AnimatedImageResource_E053D542_CE56_5D1C_4179_2048BDB69F1B",
   "yaw": -6.6,
   "pitch": -59.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECA27FD9_CE52_4D2C_41D5_0822BC23A85A",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659, this.camera_DE02CCB6_CF17_BF54_41C1_2F0FBAF947B1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -59.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.99,
   "image": "this.AnimatedImageResource_F2BDE146_CEB2_5524_41D9_E3031AD1B61F",
   "yaw": -100.31,
   "pitch": -29.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD17FD88_CED6_4D2C_41E5_42C734BD868E",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D, this.camera_C0223BD5_CF17_B8D4_41D8_D5A64E83F5C9); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_8C07EBA3_CEB6_F51D_41C2_CDEFFE5C4B11",
   "yaw": 25.55,
   "pitch": -26.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2EAF6AD_CEB2_5F64_41DB_35F7C8063ACD",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7, this.camera_C0252BCF_CF17_B934_41CA_BF37074596F8); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.09,
   "image": "this.AnimatedImageResource_E0524543_CE56_5D1C_41E6_2CD3B181E78E",
   "yaw": 6.71,
   "pitch": -39.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA1AAA4C_CE5E_B724_4183_3669EB2FA15F",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06, this.camera_DEBDAD19_CF17_B95C_41DA_9A710930C29D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.15,
   "image": "this.AnimatedImageResource_F2BFA147_CEB2_5525_41BA_36B8F2D28F54",
   "yaw": 135.84,
   "pitch": -42.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC6E490C_CED2_752B_41CA_273E14212024",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8, this.camera_DD41FB92_CF17_B92D_41E8_9BD27367348C); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.7,
   "image": "this.AnimatedImageResource_F2BE2147_CEB2_5525_41D4_D4317A0D9A2E",
   "yaw": -98.05,
   "pitch": -33.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDC6C82D_CED1_B364_41D8_F27EBB7BDD54",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20, this.camera_DD507B8D_CF17_B937_41DE_0270EC75948B); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.33,
   "image": "this.AnimatedImageResource_E050C549_CE56_5D2D_41E6_9040B2D40BF3",
   "yaw": -59.36,
   "pitch": -46.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E8F002DC_CE52_572B_41E2_6AA189DCBF5F",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA, this.camera_C0860C06_CF17_BF35_41D1_51DAA17DD3E0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -46.29
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB997BEE_CEF3_F4E4_41A4_5BBF74A2E694",
 "levels": [
  {
   "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB99BBEE_CEF3_F4E4_4196_5269A9B9958B",
 "levels": [
  {
   "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB982BEF_CEF3_F4E4_41D1_7E3D4151CC2F",
 "levels": [
  {
   "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05B0540_CE56_5D1C_41E0_CBF78E02F93E",
 "levels": [
  {
   "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E058C540_CE56_5D1C_41C8_6BC5C8DFB75E",
 "levels": [
  {
   "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0584540_CE56_5D1C_41E5_29C5EDFC740B",
 "levels": [
  {
   "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05D7542_CE56_5D1C_41E0_4ED3E243ECE3",
 "levels": [
  {
   "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05D2542_CE56_5D1C_41C1_7519A1C25593",
 "levels": [
  {
   "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E052B542_CE56_5D1C_41E2_B3100ADA4FA9",
 "levels": [
  {
   "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05AD53B_CE56_5D6C_41C6_3BDC2594C0DA",
 "levels": [
  {
   "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DA3A22CC_CE56_7724_41DA_2B93C454EBD5",
 "levels": [
  {
   "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DA3AE2CC_CE56_7724_41A7_D596304B27B0",
 "levels": [
  {
   "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BAB146_CEB2_5527_41D5_F6B832E18628",
 "levels": [
  {
   "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BD5146_CEB2_5527_41DD_A5715D3E0F58",
 "levels": [
  {
   "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB9B7BEF_CEF3_F4E4_41E3_841086F7FA1B",
 "levels": [
  {
   "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05A653B_CE56_5D6C_41E0_4F8AD3BB040A",
 "levels": [
  {
   "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05BF53B_CE56_5D6C_41C5_D5B9F5A4CE11",
 "levels": [
  {
   "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05BB53B_CE56_5D67_41DE_B607E745598D",
 "levels": [
  {
   "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB9BEBEF_CEF3_F4E4_41C9_F542A8E48A00",
 "levels": [
  {
   "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB9A3BEF_CEF3_F4E4_41E9_AFC0A60BE9DC",
 "levels": [
  {
   "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2B8C145_CEB2_5524_41D1_4E694E3F18D6",
 "levels": [
  {
   "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB98FBEF_CEF3_F4E4_41E6_B093265249F0",
 "levels": [
  {
   "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05D3543_CE56_5D1C_41DF_1F286798C8AF",
 "levels": [
  {
   "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0529543_CE56_5D1C_41E4_006CE34DFAFB",
 "levels": [
  {
   "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E056D54A_CE56_5D2F_41D2_219B319C86CA",
 "levels": [
  {
   "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E056B54A_CE56_5D2F_41E4_9B3CE5E9B1DE",
 "levels": [
  {
   "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E053D543_CE56_5D27_41E2_6F5BFD7BE5D8",
 "levels": [
  {
   "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0538549_CE56_5D2D_41DD_22A8EBE8B425",
 "levels": [
  {
   "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0531549_CE56_5D2D_41D6_D7D9CF41EE2B",
 "levels": [
  {
   "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCCFFB38_CE51_B56B_41D1_D370410CAF13",
 "levels": [
  {
   "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BC7146_CEB2_5524_41D3_B150D20E99E9",
 "levels": [
  {
   "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BCF146_CEB2_5524_41D2_AC9DBC38CDA0",
 "levels": [
  {
   "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB9ABBEF_CEF3_F4E4_41A9_3978A9D4A3D7",
 "levels": [
  {
   "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0580541_CE56_5D1C_41E2_6B7A0833C6DB",
 "levels": [
  {
   "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05C8542_CE56_5D1C_41D6_CA183B5770D3",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05C5542_CE56_5D1C_41A9_2D4BFAD82E86",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05C3542_CE56_5D1C_41DE_A5B7B3C7901B",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05DE542_CE56_5D1C_41AB_96A06C3FDDC2",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BEB147_CEB2_5525_41BF_6C6A393E0DE3",
 "levels": [
  {
   "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05FE541_CE56_5D1C_41D0_B64D7AF32E61",
 "levels": [
  {
   "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05F5541_CE56_5D1C_41E5_B842B29CD6FD",
 "levels": [
  {
   "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E056054A_CE56_5D2F_41BB_F904EC4FD98E",
 "levels": [
  {
   "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DA05C2CC_CE56_7724_41E2_3441EBD70375",
 "levels": [
  {
   "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E064053A_CE56_5D6C_41DB_46E2AEF36A90",
 "levels": [
  {
   "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCC82B38_CE51_B56B_41A2_E1180242ACDB",
 "levels": [
  {
   "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05F3542_CE56_5D1C_41D5_E122AE87F7DF",
 "levels": [
  {
   "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E059E541_CE56_5D1C_41B1_184582055AAE",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0595541_CE56_5D1C_41E4_5551E5968496",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0590541_CE56_5D1C_418F_A9177A0AA789",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05EC541_CE56_5D1C_41E2_9E7F3D9FBF43",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05E5541_CE56_5D1C_41DD_19A00E3611B0",
 "levels": [
  {
   "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E05E0541_CE56_5D1C_41D0_7B6F6577CB6C",
 "levels": [
  {
   "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E050A54A_CE56_5D2F_41D1_81671FD7965F",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E050354A_CE56_5D2F_41D8_8B242CD98B91",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E051954A_CE56_5D2F_41D1_442841A4824B",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E051454A_CE56_5D2F_41E4_58AC16359BD5",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BF7146_CEB2_5524_41E4_A9F516CF0A1B",
 "levels": [
  {
   "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BF1147_CEB2_5525_41E3_E206B15D82CC",
 "levels": [
  {
   "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DA0572CC_CE56_7724_41CA_6B3222821007",
 "levels": [
  {
   "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DA0522CC_CE56_7724_41D5_38D04AF5AC50",
 "levels": [
  {
   "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0521542_CE56_5D1C_41E9_963168F6223D",
 "levels": [
  {
   "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E053D542_CE56_5D1C_4179_2048BDB69F1B",
 "levels": [
  {
   "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BDE146_CEB2_5524_41D9_E3031AD1B61F",
 "levels": [
  {
   "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8C07EBA3_CEB6_F51D_41C2_CDEFFE5C4B11",
 "levels": [
  {
   "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E0524543_CE56_5D1C_41E6_2CD3B181E78E",
 "levels": [
  {
   "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BFA147_CEB2_5525_41BA_36B8F2D28F54",
 "levels": [
  {
   "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2BE2147_CEB2_5525_41D4_D4317A0D9A2E",
 "levels": [
  {
   "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E050C549_CE56_5D2D_41E6_9040B2D40BF3",
 "levels": [
  {
   "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
}],
 "height": "100%",
 "data": {
  "name": "Player475"
 },
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
