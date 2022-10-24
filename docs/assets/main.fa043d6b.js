/**
 * @license Apache-2.0
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const ee="modulepreload",te=function(r){return"/"+r},R={},U=function(i,n,e){return!n||n.length===0?i():Promise.all(n.map(t=>{if(t=te(t),t in R)return;R[t]=!0;const a=t.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":ee,a||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),a)return new Promise((f,o)=>{s.addEventListener("load",f),s.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i())},ne={"Absolute Orientation Sensor":{regEx:/new\s+AbsoluteOrientationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"AbsoluteOrientationSensor"in self)(),featureDetection:"(async () => 'AbsoluteOrientationSensor' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:1900},Accelerometer:{regEx:/new\s+Accelerometer\s*\(/g,where:"JavaScript",supported:(async()=>"Accelerometer"in self)(),featureDetection:"(async () => 'Accelerometer' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:1899},"Add to Home Screen":{regEx:/["']beforeinstallprompt["']|\.onbeforeinstallprompt/g,where:"JavaScript",supported:(async()=>"BeforeInstallPromptEvent"in self)(),featureDetection:"(async () => 'BeforeInstallPromptEvent' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent",blinkFeatureID:1436},"Ambient Light Sensor":{regEx:/new\s+AmbientLightSensor\s*\(\)/g,where:"JavaScript",supported:(async()=>"AmbientLightSensor"in self)(),featureDetection:"(async () => 'AmbientLightSensor' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:1901},"Async Clipboard":{regEx:/navigator\.clipboard\.writeText\s*\(/g,where:"JavaScript",supported:(async()=>"clipboard"in navigator&&"writeText"in navigator.clipboard)(),featureDetection:"(async () => 'clipboard' in navigator && 'writeText' in navigator.clipboard)()",documentation:"https://web.dev/async-clipboard/",blinkFeatureID:2372},"Async Clipboard (Images)":{regEx:/navigator\.clipboard\.write\s*\(/g,where:"JavaScript",supported:(async()=>"clipboard"in navigator&&"write"in navigator.clipboard)(),featureDetection:"(async () => 'clipboard' in navigator && 'write' in navigator.clipboard)()",documentation:"https://web.dev/async-clipboard/",blinkFeatureID:2370},"Background Fetch":{regEx:/\.backgroundFetch\.fetch\s*\(["']/g,where:"JavaScript",supported:(async()=>"BackgroundFetchManager"in self)(),featureDetection:"(async () => 'BackgroundFetchManager' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API",blinkFeatureID:2549},"Background Sync":{regEx:/\.sync\.register\s*\(["']/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"sync"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'sync' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API",blinkFeatureID:745},Badging:{regEx:/navigator\.setAppBadge\s*\(/g,where:"JavaScript",supported:(async()=>"setAppBadge"in navigator)(),featureDetection:"(async () => 'setAppBadge' in navigator)()",documentation:"https://web.dev/badging-api/",blinkFeatureID:2726},"Cache Storage":{regEx:/caches\.open\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"caches"in self)(),featureDetection:"(async () => 'serviceWorker' in navigator && 'caches' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage",blinkFeatureID:3022},"Compression Streams":{regEx:/new\s+CompressionStream\s*\(/g,where:"JavaScript",supported:(async()=>"CompressionStream"in self)(),featureDetection:"(async () => 'CompressionStream' in self)()",documentation:"https://wicg.github.io/compression/",blinkFeatureID:3060},"Compute Pressure":{regEx:/new\s+ComputePressureObserver\s*\(/g,where:"JavaScript",supported:(async()=>"ComputePressureObserver"in self)(),featureDetection:"(async () => 'ComputePressureObserver' in self)()",documentation:"https://web.dev/compute-pressure/",blinkFeatureID:3899},"Contact Picker":{regEx:/navigator\.contacts\.select\s*\(/g,where:"JavaScript",supported:(async()=>"contacts"in navigator)(),featureDetection:"(async () => 'contacts' in navigator)()",documentation:"https://web.dev/contact-picker/",blinkFeatureID:2993},"Content Index":{regEx:/index\.getAll\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"index"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'index' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://web.dev/content-indexing-api/",blinkFeatureID:2985},"Credential Management":{regEx:/navigator\.credentials\.get\s*\(/g,where:"JavaScript",supported:(async()=>"credentials"in navigator)(),featureDetection:"(async () => 'credentials' in navigator)()",documentation:"https://developers.google.com/web/updates/2016/04/credential-management-api",blinkFeatureID:960},"Device Memory":{regEx:/navigator\.deviceMemory/g,where:"JavaScript",supported:(async()=>"deviceMemory"in navigator)(),featureDetection:"(async () => 'deviceMemory' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API",blinkFeatureID:2121},"Device Posture":{regEx:/navigator\.devicePosture/g,where:"JavaScript",supported:(async()=>"devicePosture"in navigator)(),featureDetection:"(async () => 'devicePosture' in navigator)()",documentation:"https://github.com/w3c/device-posture/blob/gh-pages/README.md",blinkFeatureID:void 0},"Digital Goods":{regEx:/getDigitalGoodsService\s*\(/g,where:"JavaScript",supported:(async()=>"getDigitalGoodsService"in self)(),featureDetection:"(async () => 'getDigitalGoodsService' in self)()",documentation:"https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/",blinkFeatureID:3397},EyeDropper:{regEx:/new\s+EyeDropper\s*\(\)/g,where:"JavaScript",supported:(async()=>"EyeDropper"in self)(),featureDetection:"(async () => 'EyeDropper' in self)()",documentation:"https://github.com/WICG/eyedropper-api/blob/main/README.md",blinkFeatureID:void 0},"File Handling":{regEx:/"file_handlers"/g,where:"Web App Manifest",supported:(async()=>"launchQueue"in self&&"files"in LaunchParams.prototype)(),featureDetection:"(async () => 'launchQueue' in self && 'files' in LaunchParams.prototype)()",documentation:"https://web.dev/file-handling/",blinkFeatureID:3875},"File System Access":{regEx:/showOpenFilePicker\s*\(|showSaveFilePicker\s*\(|showDirectoryPicker\s*\(/g,where:"JavaScript",supported:(async()=>"showOpenFilePicker"in self)(),featureDetection:"(async () => 'showOpenFilePicker' in self)()",documentation:"https://web.dev/file-system-access/",blinkFeatureID:3340},Gamepad:{regEx:/navigator\.getGamepads\s*\(/g,where:"JavaScript",supported:(async()=>"getGamepads"in navigator)(),featureDetection:"(async () => 'getGamepads' in navigator)()",documentation:"https://web.dev/gamepad/",blinkFeatureID:1916},getInstalledRelatedApps:{regEx:/navigator\.getInstalledRelatedApps\s*\(/g,where:"JavaScript",supported:(async()=>"getInstalledRelatedApps"in navigator)(),featureDetection:"(async () => 'getInstalledRelatedApps' in navigator)()",documentation:"https://web.dev/get-installed-related-apps/",blinkFeatureID:1870},"Gravity Sensor":{regEx:/new\s+GravitySensor\s*\(/g,where:"JavaScript",supported:(async()=>"GravitySensor"in self)(),featureDetection:"(async () => 'GravitySensor' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:3795},Gyroscope:{regEx:/new\s+Gyroscope\s*\(/g,where:"JavaScript",supported:(async()=>"Gyroscope"in self)(),featureDetection:"(async () => 'Gyroscope' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:1906},"Handwriting Recognition":{regEx:/navigator\.queryHandwritingRecognizerSupport\s*\(/g,where:"JavaScript",supported:(async()=>"queryHandwritingRecognizerSupport"in navigator)(),featureDetection:"(async () => 'queryHandwritingRecognizerSupport' in navigator)()",documentation:"https://web.dev/handwriting-recognition/",blinkFeatureID:3893},HapticsDevice:{regEx:/\.haptics\.play\s*\(/g,where:"JavaScript",supported:(async()=>"HapticsDevice"in self)(),featureDetection:"(async () => 'HapticsDevice' in self)()",documentation:"https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/HapticsDevice/explainer.md",blinkFeatureID:void 0},"Idle Detection":{regEx:/new\s+IdleDetector\s*\(/g,where:"JavaScript",supported:(async()=>"IdleDetector"in self)(),featureDetection:"(async () => 'IdleDetector' in self)()",documentation:"https://web.dev/idle-detection/",blinkFeatureID:2834},Ink:{regEx:/navigator\.ink\.requestPresenter\s*\(/g,where:"JavaScript",supported:(async()=>"ink"in navigator)(),featureDetection:"(async () => 'ink' in navigator)()",documentation:"https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/",blinkFeatureID:void 0},"Insertable streams for MediaStreamTrack":{regEx:/MediaStreamTrackProcessor\s*\(/g,where:"JavaScript",supported:(async()=>"MediaStreamTrackProcessor"in self&&"MediaStreamTrackGenerator"in self)(),featureDetection:"(async () => 'MediaStreamTrackProcessor' in self && 'MediaStreamTrackGenerator' in self)()",documentation:"https://web.dev/mediastreamtrack-insertable-media-processing/",blinkFeatureID:3729},"Launch Handler":{regEx:/"launch_handler"/g,where:"Web App Manifest",supported:(async()=>"launchQueue"in self&&"targetURL"in LaunchParams.prototype)(),featureDetection:"(async () => 'launchQueue' in self && 'targetURL' in LaunchParams.prototype)()",documentation:"https://web.dev/launch-handler/",blinkFeatureID:void 0},"Linear Acceleration Sensor":{regEx:/new\s+LinearAccelerationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"LinearAccelerationSensor"in self)(),featureDetection:"(async () => 'LinearAccelerationSensor' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:2051},"Local Font Access":{regEx:/queryLocalFonts\s*\(/g,where:"JavaScript",supported:(async()=>"queryLocalFonts"in self)(),featureDetection:"(async () => 'queryLocalFonts' in self)()",documentation:"https://web.dev/local-fonts/",blinkFeatureID:4211},Magnetometer:{regEx:/new\s+Magnetometer\s*\(/g,where:"JavaScript",supported:(async()=>"Magnetometer"in self)(),featureDetection:"(async () => 'Magnetometer' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:1907},"Media Capabilities":{regEx:/navigator\.mediaCapabilities\.decodingInfo\s*\(/g,where:"JavaScript",supported:(async()=>"mediaCapabilities"in navigator)(),featureDetection:"(async () => 'mediaCapabilities' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API",blinkFeatureID:2239},"Media Session":{regEx:/navigator\.mediaSession\.setActionHandler|navigator\.mediaSession\.metadata/g,where:"JavaScript",supported:(async()=>"mediaSession"in navigator)(),featureDetection:"(async () => 'mediaSession' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API",blinkFeatureID:1792},"Multi-Screen Window Placement":{regEx:/getScreens\s*\(\)/g,where:"JavaScript",supported:(async()=>"getScreens"in self)(),featureDetection:"(async () => 'getScreens' in self)()",documentation:"https://web.dev/multi-screen-window-placement/",blinkFeatureID:3388},"Navigation Preload":{regEx:/\.navigationPreload\.enable\s*\(\)/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"navigationPreload"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'navigationPreload' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/NavigationPreloadManager",blinkFeatureID:1803},"Payment Handler":{regEx:/\.paymentManager\.instruments\.set\s*\(/g,where:"JavaScript",supported:(async()=>"PaymentInstruments"in self)(),featureDetection:"(async () => 'PaymentInstruments' in self)()",documentation:"https://web.dev/registering-a-web-based-payment-app/",blinkFeatureID:2397},"Payment Request":{regEx:/new\s+PaymentRequest\s*\(/g,where:"JavaScript",supported:(async()=>"PaymentRequest"in self)(),featureDetection:"(async () => 'PaymentRequest' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API",blinkFeatureID:2894},"Periodic Background Sync":{regEx:/periodicSync\.register\s*\(/g,where:"JavaScript",supported:(async()=>"PeriodicSyncManager"in self)(),featureDetection:"(async () => 'PeriodicSyncManager' in self)()",documentation:"https://web.dev/periodic-background-sync/",blinkFeatureID:2931},"Persistent Storage":{regEx:/navigator\.storage\.persist\s*\(\)/g,where:"JavaScript",supported:(async()=>"storage"in navigator&&"persist"in navigator.storage)(),featureDetection:"(async () => 'storage' in navigator && 'persist' in navigator.storage)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist",blinkFeatureID:1369},"Pointer Lock (unadjustedMovement)":{regEx:/unadjustedMovement\s*\:\s*/g,where:"JavaScript",supported:(async()=>await(async()=>{try{return!!await document.createElement("p").requestPointerLock({unadjustedMovement:!0})}catch{return"requestPointerLock"in HTMLParagraphElement.prototype}})())(),featureDetection:`(async () => await (async () => { try { return !!await document.createElement("p").requestPointerLock({ unadjustedMovement: true }) } catch { return 'requestPointerLock' in HTMLParagraphElement.prototype } })())()`,documentation:"https://web.dev/disable-mouse-acceleration/",blinkFeatureID:3027},"Protocol Handlers":{regEx:/"protocol_handlers"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/url-protocol-handler/",blinkFeatureID:3884},Push:{regEx:/\.pushManager\.subscribe\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"pushManager"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'pushManager' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API",blinkFeatureID:769},"Relative Orientation Sensor":{regEx:/new\s+RelativeOrientationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"RelativeOrientationSensor"in self)(),featureDetection:"(async () => 'RelativeOrientationSensor' in self)()",documentation:"https://web.dev/generic-sensor/",blinkFeatureID:2019},"Screen Wake Lock":{regEx:/navigator\.wakeLock\.request\s*\(/g,where:"JavaScript",supported:(async()=>"wakeLock"in navigator)(),featureDetection:"(async () => 'wakeLock' in navigator)()",documentation:"https://web.dev/wake-lock/",blinkFeatureID:3005},"Service Worker":{regEx:/navigator\.serviceWorker\.register\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator)(),featureDetection:"(async () => 'serviceWorker' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",blinkFeatureID:990},"Shape Detection (Barcodes)":{regEx:/new\s+BarcodeDetector\s*\(/g,where:"JavaScript",supported:(async()=>"BarcodeDetector"in self)(),featureDetection:"(async () => 'BarcodeDetector' in self)()",documentation:"https://web.dev/shape-detection/",blinkFeatureID:3711},"Shape Detection (Faces)":{regEx:/new\s+FaceDetector\s*\(/g,where:"JavaScript",supported:(async()=>"FaceDetector"in self)(),featureDetection:"(async () => 'FaceDetector' in self)()",documentation:"https://web.dev/shape-detection/",blinkFeatureID:3712},"Shape Detection (Texts)":{regEx:/new\s+TextDetector\s*\(/g,where:"JavaScript",supported:(async()=>"TextDetector"in self)(),featureDetection:"(async () => 'TextDetector' in self)()",documentation:"https://web.dev/shape-detection/",blinkFeatureID:3713},Shortcuts:{regEx:/"shortcuts"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/app-shortcuts/",blinkFeatureID:void 0},"Storage Estimation":{regEx:/navigator\.storage\.estimate\s*\(\)/g,where:"JavaScript",supported:(async()=>"storage"in navigator&&"estimate"in navigator.storage)(),featureDetection:"(async () => 'storage' in navigator && 'estimate' in navigator.storage)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate",blinkFeatureID:1371},"Tabbed Application Mode":{regEx:/"tabbed"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/tabbed-application-mode/",blinkFeatureID:void 0},VirtualKeyboard:{regEx:/navigator\.virtualKeyboard/g,where:"JavaScript",supported:(async()=>"virtualKeyboard"in navigator)(),featureDetection:"(async () => 'virtualKeyboard' in navigator)()",documentation:"https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/VirtualKeyboardAPI/explainer.md",blinkFeatureID:void 0},"Web App Link Handling":{regEx:/"handle_links"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://github.com/WICG/pwa-url-handler/blob/main/handle_links/explainer.md",blinkFeatureID:void 0},"Web Share":{regEx:/navigator\.share\s*\(/g,where:"JavaScript",supported:(async()=>"share"in navigator)(),featureDetection:"(async () => 'share' in navigator)()",documentation:"https://web.dev/web-share/",blinkFeatureID:1501},"Web Share (Files)":{regEx:/navigator\.canShare\s*\(/g,where:"JavaScript",supported:(async()=>"canShare"in navigator)(),featureDetection:"(async () => 'canShare' in navigator)()",documentation:"https://web.dev/web-share/",blinkFeatureID:2737},"Web Share Target":{regEx:/"share_target"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/web-share-target/",blinkFeatureID:void 0},"Web Share Target (Files)":{regEx:/"enctype"\s*\:\s*"multipart\/form\-data"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/web-share-target/",blinkFeatureID:void 0},WebBluetooth:{regEx:/navigator\.bluetooth\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"bluetooth"in navigator)(),featureDetection:"(async () => 'bluetooth' in navigator)()",documentation:"https://web.dev/bluetooth/",blinkFeatureID:1670},WebCodecs:{regEx:/new\s+MediaStreamTrackProcessor\s*\(/g,where:"JavaScript",supported:(async()=>"MediaStreamTrackProcessor"in self)(),featureDetection:"(async () => 'MediaStreamTrackProcessor' in self)()",documentation:"https://web.dev/webcodecs/",blinkFeatureID:3728},WebGPU:{regEx:/navigator\.gpu\.requestAdapter\s*\(/g,where:"JavaScript",supported:(async()=>"gpu"in navigator)(),featureDetection:"(async () => 'gpu' in navigator)()",documentation:"https://web.dev/webgpu",blinkFeatureID:3888},WebHID:{regEx:/navigator\.hid\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"hid"in navigator)(),featureDetection:"(async () => 'hid' in navigator)()",documentation:"https://web.dev/hid/",blinkFeatureID:2866},WebMIDI:{regEx:/navigator\.requestMIDIAccess\s*\(/g,where:"JavaScript",supported:(async()=>"requestMIDIAccess"in navigator)(),featureDetection:"(async () => 'requestMIDIAccess' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API",blinkFeatureID:2029},WebNFC:{regEx:/new\s+NDEFReader\s*\(/g,where:"JavaScript",supported:(async()=>"NDEFReader"in self)(),featureDetection:"(async () => 'NDEFReader' in self)()",documentation:"https://web.dev/nfc/",blinkFeatureID:3094},WebOTP:{regEx:/transport\s*\:\s*\[["']sms["']\]/g,where:"JavaScript",supported:(async()=>"OTPCredential"in self)(),featureDetection:"(async () => 'OTPCredential' in self)()",documentation:"https://web.dev/web-otp/",blinkFeatureID:2880},WebSerial:{regEx:/navigator\.serial\.requestPort\s*\(/g,where:"JavaScript",supported:(async()=>"serial"in navigator)(),featureDetection:"(async () => 'serial' in navigator)()",documentation:"https://web.dev/serial/",blinkFeatureID:2546},WebSocketStream:{regEx:/new\s+WebSocketStream\s*\(/g,where:"JavaScript",supported:(async()=>"WebSocketStream"in self)(),featureDetection:"(async () => 'WebSocketStream' in self)()",documentation:"https://web.dev/websocketstream/",blinkFeatureID:3018},WebTransport:{regEx:/new\s+WebTransport\s*\(/g,where:"JavaScript",supported:(async()=>"WebTransport"in self)(),featureDetection:"(async () => 'WebTransport' in self)()",documentation:"https://web.dev/webtransport/",blinkFeatureID:3472},WebUSB:{regEx:/navigator\.usb\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"usb"in navigator)(),featureDetection:"(async () => 'usb' in navigator)()",documentation:"https://web.dev/usb/",blinkFeatureID:1520},"Window Controls Overlay":{regEx:/"window\-controls\-overlay"/g,where:"Web App Manifest",supported:(async()=>"windowControlsOverlay"in navigator)(),featureDetection:"(async () => 'windowControlsOverlay' in navigator)()",documentation:"https://web.dev/window-controls-overlay/",blinkFeatureID:3902}};var re=function(r){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=r,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&typeof e=="object"&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&typeof e!="string")for(var c in e)n.d(a,c,function(s){return e[s]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(r,i,n){var e=n(2),t=n(3),a=n(4);r.exports=function(c){return e(c)||t(c)||a()}},function(r,i,n){n.r(i),n.d(i,"sparkline",function(){return f});var e=n(0),t=n.n(e);function a(o,u,d,p){return parseFloat((u-p*u/o+d).toFixed(2))}function c(o){return o.value}function s(o,u){var d=document.createElementNS("http://www.w3.org/2000/svg",o);for(var p in u)d.setAttribute(p,u[p]);return d}function f(o,u,d){var p;if(p=o,t()(p.querySelectorAll("*")).forEach(function(l){return p.removeChild(l)}),!(u.length<=1)){d=d||{},typeof u[0]=="number"&&(u=u.map(function(l){return{value:l}}));var A=d.onmousemove,_=d.onmouseout,j="interactive"in d?d.interactive:!!A,k=d.spotRadius||2,w=2*k,N=d.cursorWidth||2,W=parseFloat(o.attributes["stroke-width"].value),z=d.fetch||c,I=u.map(function(l){return z(l)}),$=parseFloat(o.attributes.width.value)-2*w,x=parseFloat(o.attributes.height.value),O=x-2*W-w,T=Math.max.apply(Math,t()(I)),m=-1e3,q=I.length-1,V=$/q,D=[],K=a(T,O,W+k,I[0]),M="M".concat(w," ").concat(K);I.forEach(function(l,h){var v=h*V+w,b=a(T,O,W+k,l);D.push(Object.assign({},u[h],{index:h,x:v,y:b})),M+=" L ".concat(v," ").concat(b)});var Q=s("path",{class:"sparkline--line",d:M,fill:"none"}),Y=s("path",{class:"sparkline--fill",d:"".concat(M," V ").concat(x," L ").concat(w," ").concat(x," Z"),stroke:"none"});if(o.appendChild(Y),o.appendChild(Q),j){var S=s("line",{class:"sparkline--cursor",x1:m,x2:m,y1:0,y2:x,"stroke-width":N}),E=s("circle",{class:"sparkline--spot",cx:m,cy:m,r:k});o.appendChild(S),o.appendChild(E);var J=s("rect",{width:o.attributes.width.value,height:o.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});o.appendChild(J),J.addEventListener("mouseout",function(l){S.setAttribute("x1",m),S.setAttribute("x2",m),E.setAttribute("cx",m),_&&_(l)}),J.addEventListener("mousemove",function(l){var h=l.offsetX,v=D.find(function(Z){return Z.x>=h});v||(v=D[q]);var b,F=D[D.indexOf(v)-1],L=(b=F?F.x+(v.x-F.x)/2<=h?v:F:v).x,X=b.y;E.setAttribute("cx",L),E.setAttribute("cy",X),S.setAttribute("x1",L),S.setAttribute("x2",L),A&&A(l,b)})}}}i.default=f},function(r,i){r.exports=function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},function(r,i){r.exports=function(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}},function(r,i){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);const ae="https://chromestatus.com/data/timeline/featurepopularity?bucket_id=",ie="https://chromestatus.com/metrics/feature/timeline/popularity/",H="No data",G=document.querySelector("tbody"),g=document.querySelector("meter"),P=document.querySelector(".meter"),B=document.querySelector("label"),oe=document.querySelector("code"),se=document.querySelector("template");let y=0,C=0;const ce=(r,i)=>{const e=r.target.closest("svg").nextElementSibling,t=new Date(i.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});e.hidden=!1,e.textContent=`On ${t} on ${i.value.toFixed(6)}% of pages`,e.style.top=`${r.offsetY}px`,e.style.left=`${r.offsetX+20}px`},ue=r=>{const n=r.target.closest("svg").nextElementSibling;n.hidden=!0},de=async(r,i)=>{let n=await fetch(ae+i).then(e=>e.json());if(n=n.map(e=>({date:e.date,value:e.day_percentage*100})),n.filter(e=>e.value!==0).length===0){const e=r.parentNode.parentNode;r.parentNode.remove(),e.textContent=H;return}re.sparkline(r,n,{onmousemove:ce,onmouseout:ue}),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.style.display="block"};window.addEventListener("load",async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.register("./sw.js");let r=await Promise.all(Object.entries(ne).map(n=>new Promise(async e=>{n[1].supported=await n[1].supported,n[1].supported&&C++,n[1].supported!==void 0&&y++,e(n)})));r=r.sort((n,e)=>!n[1].supported&&e[1].supported?1:n[1].supported&&!e[1].supported?-1:0),r=[!0,!1,void 0].map(n=>r.filter(e=>e[1].supported===n).sort((e,t)=>(e=e[0].toLowerCase(),t=t[0].toLowerCase(),e>t?1:e<t?-1:0))).flat();for(const[n,e]of r){const t=document.createElement("tr");G.append(t);const a=document.createElement("td"),c=document.createElement("td"),s=document.createElement("td");t.append(a),t.append(c),t.append(s);const f=document.createElement("a");if(f.textContent=n,f.href=e.documentation,a.append(f),c.classList.add("icon"),c.textContent=e.supported?"\u2705 Yes":e.supported===void 0?"\u{1F937} Unknown":"\u{1F6AB} No",e.blinkFeatureID){const o=se.content.cloneNode(!0),u=o.querySelector("svg");u.style.display="none";const d=o.querySelector("span"),p=document.createElement("a");p.href=`${ie}${e.blinkFeatureID}`,s.append(p),p.append(u),p.append(d),de(u,e.blinkFeatureID)}else s.textContent=H}G.parentNode.hidden=!1;const i=`${Math.floor(C/y*100)}%`;g.max=y,g.low=Math.floor(.2*y),g.high=Math.floor(.8*y),g.optimum=Math.floor(.9*y),g.value=C,P.querySelector("span").style.width=i,g.value<g.low?P.classList.add("red"):g.value<=g.low&&g.value<=g.high?P.classList.add("orange"):P.classList.add("green"),B.textContent=i,B.parentNode.hidden=!1,oe.textContent=navigator.userAgent,U(()=>import("./share.2011f271.js"),[]),/Apple/.test(navigator.vendor)&&U(()=>import("./pwacompat.e2d4ab51.js"),[])});
