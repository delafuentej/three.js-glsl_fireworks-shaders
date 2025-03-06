/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="166",Ji={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,Bl=1,Vh=2,ru=1,Wh=2,Vn=3,xi=0,qt=1,Yn=2,mi=0,Er=1,zl=2,kl=3,Hl=4,Xh=5,Fi=100,Yh=101,qh=102,Zh=103,Kh=104,$h=200,jh=201,Jh=202,Qh=203,fo=204,po=205,ef=206,tf=207,nf=208,rf=209,sf=210,af=211,of=212,lf=213,cf=214,uf=0,hf=1,ff=2,aa=3,df=4,pf=5,mf=6,_f=7,su=0,gf=1,vf=2,_i=0,xf=1,Sf=2,Mf=3,Ef=4,yf=5,Tf=6,bf=7,au=300,Rr=301,Cr=302,mo=303,_o=304,xa=306,go=1e3,Kn=1001,vo=1002,Yt=1003,Af=1004,Es=1005,Bt=1006,Ra=1007,hi=1008,Qn=1009,ou=1010,lu=1011,es=1012,hl=1013,Xi=1014,dn=1015,$n=1016,fl=1017,dl=1018,Pr=1020,cu=35902,uu=1021,hu=1022,pn=1023,fu=1024,du=1025,yr=1026,Lr=1027,pl=1028,ml=1029,pu=1030,_l=1031,gl=1033,$s=33776,js=33777,Js=33778,Qs=33779,xo=35840,So=35841,Mo=35842,Eo=35843,yo=36196,To=37492,bo=37496,Ao=37808,wo=37809,Ro=37810,Co=37811,Po=37812,Lo=37813,Do=37814,Io=37815,Uo=37816,No=37817,Oo=37818,Fo=37819,Bo=37820,zo=37821,ea=36492,ko=36494,Ho=36495,mu=36283,Go=36284,Vo=36285,Wo=36286,wf=3200,Rf=3201,Cf=0,Pf=1,qn="",bn="srgb",Un="srgb-linear",vl="display-p3",Sa="display-p3-linear",oa="linear",ht="srgb",la="rec709",ca="p3",er=7680,Gl=519,Lf=512,Df=513,If=514,_u=515,Uf=516,Nf=517,Of=518,Ff=519,Vl=35044,Wl="300 es",jn=2e3,ua=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,Xo=180/Math.PI;function cs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ft(r,e,t){return Math.max(e,Math.min(t,r))}function Bf(r,e){return(r%e+e)%e}function Ca(r,e,t){return(1-t)*r+t*e}function Hr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zf={DEG2RAD:ta};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],x=n[8],g=i[0],m=i[3],_=i[6],A=i[1],E=i[4],R=i[7],D=i[2],P=i[5],C=i[8];return s[0]=a*g+o*A+l*D,s[3]=a*m+o*E+l*P,s[6]=a*_+o*R+l*C,s[1]=c*g+u*A+h*D,s[4]=c*m+u*E+h*P,s[7]=c*_+u*R+h*C,s[2]=d*g+p*A+x*D,s[5]=d*m+p*E+x*P,s[8]=d*_+p*R+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,x=t*h+n*d+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Ye;function gu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ts(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kf(){const r=ts("canvas");return r.style.display="block",r}const Xl={};function vu(r){r in Xl||(Xl[r]=!0,console.warn(r))}function Hf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Yl=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[Un]:{transfer:oa,primaries:la,toReference:r=>r,fromReference:r=>r},[bn]:{transfer:ht,primaries:la,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Sa]:{transfer:oa,primaries:ca,toReference:r=>r.applyMatrix3(ql),fromReference:r=>r.applyMatrix3(Yl)},[vl]:{transfer:ht,primaries:ca,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ql),fromReference:r=>r.applyMatrix3(Yl).convertLinearToSRGB()}},Gf=new Set([Un,Sa]),rt={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Gf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ys[e].toReference,i=ys[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ys[r].primaries},getTransfer:function(r){return r===qn?oa:ys[r].transfer}};function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function La(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let tr;class Vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=ts("canvas")),tr.width=e.width,tr.height=e.height;const n=tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Tr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wf=0;class xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Da(i[a].image)):s.push(Da(i[a]))}else s=Da(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Da(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xf=0;class Ht extends Ki{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Kn,i=Kn,s=Bt,a=hi,o=pn,l=Qn,c=Ht.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=cs(),this.name="",this.source=new xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=au;Ht.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,i=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],x=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,R=(p+1)/2,D=(_+1)/2,P=(u+d)/4,C=(h+g)/4,N=(x+m)/4;return E>R&&E>D?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=P/n,s=C/n):R>D?R<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(R),n=P/i,s=N/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=C/s,i=N/s),this.set(n,i,s,t),this}let A=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(h-g)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yf extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Yf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Su extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],x=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==x){let m=1-o;const _=l*d+c*p+u*x+h*g,A=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const D=Math.sqrt(E),P=Math.atan2(D,_*A);m=Math.sin(m*P)/D,o=Math.sin(o*P)/D}const R=o*A;if(l=l*m+d*R,c=c*m+p*R,u=u*m+x*R,h=h*m+g*R,m===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*p-c*d,e[t+1]=l*x+u*d+c*h-o*p,e[t+2]=c*x+u*p+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"YZX":this._x=d*u*h+c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h-d*p*x;break;case"XZY":this._x=d*u*h-c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new q,Zl=new qi;class us{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),bs.subVectors(this.max,Gr),nr.subVectors(e.a,Gr),ir.subVectors(e.b,Gr),rr.subVectors(e.c,Gr),ii.subVectors(ir,nr),ri.subVectors(rr,ir),wi.subVectors(nr,rr);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-wi.z,wi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-wi.y,wi.x,0];return!Ua(t,nr,ir,rr,bs)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,nr,ir,rr,bs))?!1:(As.crossVectors(ii,ri),t=[As.x,As.y,As.z],Ua(t,nr,ir,rr,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new q,new q,new q,new q,new q,new q,new q,new q],gn=new q,Ts=new us,nr=new q,ir=new q,rr=new q,ii=new q,ri=new q,wi=new q,Gr=new q,bs=new q,As=new q,Ri=new q;function Ua(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ri.fromArray(r,s);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zf=new us,Vr=new q,Na=new q;class Ma{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Na)),this.expandByPoint(Vr.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new q,Oa=new q,ws=new q,si=new q,Fa=new q,Rs=new q,Ba=new q;class xl{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oa.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Oa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ws),o=si.dot(this.direction),l=-si.dot(ws),c=si.lengthSq(),u=Math.abs(1-a*a);let h,d,p,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Oa).addScaledVector(ws,d),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,s){Fa.subVectors(t,e),Rs.subVectors(n,e),Ba.crossVectors(Fa,Rs);let a=this.direction.dot(Ba),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(Rs.crossVectors(si,Rs));if(l<0)return null;const c=o*this.direction.dot(Fa.cross(si));if(c<0||l+c>a)return null;const u=-o*si.dot(Ba);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,i,s,a,o,l,c,u,h,d,p,x,g,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,p,x,g,m)}set(e,t,n,i,s,a,o,l,c,u,h,d,p,x,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=p,_[7]=x,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,x=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,x=c*u,g=c*h;t[0]=d+g*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,x=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,x=o*u,g=o*h;t[0]=l*u,t[4]=x*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+x,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kf,e,$f)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ai.crossVectors(n,en),ai.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ai.crossVectors(n,en)),ai.normalize(),Cs.crossVectors(en,ai),i[0]=ai.x,i[4]=Cs.x,i[8]=en.x,i[1]=ai.y,i[5]=Cs.y,i[9]=en.y,i[2]=ai.z,i[6]=Cs.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],x=n[2],g=n[6],m=n[10],_=n[14],A=n[3],E=n[7],R=n[11],D=n[15],P=i[0],C=i[4],N=i[8],y=i[12],T=i[1],U=i[5],V=i[9],H=i[13],$=i[2],ne=i[6],X=i[10],re=i[14],j=i[3],me=i[7],ge=i[11],Te=i[15];return s[0]=a*P+o*T+l*$+c*j,s[4]=a*C+o*U+l*ne+c*me,s[8]=a*N+o*V+l*X+c*ge,s[12]=a*y+o*H+l*re+c*Te,s[1]=u*P+h*T+d*$+p*j,s[5]=u*C+h*U+d*ne+p*me,s[9]=u*N+h*V+d*X+p*ge,s[13]=u*y+h*H+d*re+p*Te,s[2]=x*P+g*T+m*$+_*j,s[6]=x*C+g*U+m*ne+_*me,s[10]=x*N+g*V+m*X+_*ge,s[14]=x*y+g*H+m*re+_*Te,s[3]=A*P+E*T+R*$+D*j,s[7]=A*C+E*U+R*ne+D*me,s[11]=A*N+E*V+R*X+D*ge,s[15]=A*y+E*H+R*re+D*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],x=e[3],g=e[7],m=e[11],_=e[15];return x*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+g*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],x=e[12],g=e[13],m=e[14],_=e[15],A=h*m*c-g*d*c+g*l*p-o*m*p-h*l*_+o*d*_,E=x*d*c-u*m*c-x*l*p+a*m*p+u*l*_-a*d*_,R=u*g*c-x*h*c+x*o*p-a*g*p-u*o*_+a*h*_,D=x*h*l-u*g*l-x*o*d+a*g*d+u*o*m-a*h*m,P=t*A+n*E+i*R+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=A*C,e[1]=(g*d*s-h*m*s-g*i*p+n*m*p+h*i*_-n*d*_)*C,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*_+n*l*_)*C,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*C,e[4]=E*C,e[5]=(u*m*s-x*d*s+x*i*p-t*m*p-u*i*_+t*d*_)*C,e[6]=(x*l*s-a*m*s-x*i*c+t*m*c+a*i*_-t*l*_)*C,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*C,e[8]=R*C,e[9]=(x*h*s-u*g*s-x*n*p+t*g*p+u*n*_-t*h*_)*C,e[10]=(a*g*s-x*o*s+x*n*c-t*g*c-a*n*_+t*o*_)*C,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=D*C,e[13]=(u*g*i-x*h*i+x*n*d-t*g*d-u*n*m+t*h*m)*C,e[14]=(x*o*i-a*g*i-x*n*l+t*g*l+a*n*m-t*o*m)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,x=s*h,g=a*u,m=a*h,_=o*h,A=l*c,E=l*u,R=l*h,D=n.x,P=n.y,C=n.z;return i[0]=(1-(g+_))*D,i[1]=(p+R)*D,i[2]=(x-E)*D,i[3]=0,i[4]=(p-R)*P,i[5]=(1-(d+_))*P,i[6]=(m+A)*P,i[7]=0,i[8]=(x+E)*C,i[9]=(m-A)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=sr.set(i[0],i[1],i[2]).length();const a=sr.set(i[4],i[5],i[6]).length(),o=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/s,u=1/a,h=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=jn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,x;if(o===jn)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ua)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=jn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,p=(n+i)*u;let x,g;if(o===jn)x=(a+s)*h,g=-2*h;else if(o===ua)x=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new q,vn=new At,Kf=new q(0,0,0),$f=new q(1,1,1),ai=new q,Cs=new q,en=new q,Kl=new At,$l=new qi;class ei{constructor(e=0,t=0,n=0,i=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jf=0;const jl=new q,ar=new qi,zn=new At,Ps=new q,Wr=new q,Jf=new q,Qf=new qi,Jl=new q(1,0,0),Ql=new q(0,1,0),ec=new q(0,0,1),tc={type:"added"},ed={type:"removed"},or={type:"childadded",child:null},za={type:"childremoved",child:null};class Zt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new q,t=new ei,n=new qi,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Ye}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Wr,Ps,this.up):zn.lookAt(Ps,Wr,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),ar.setFromRotationMatrix(zn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tc),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tc),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Zt.DEFAULT_UP=new q(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new q,kn=new q,ka=new q,Hn=new q,lr=new q,cr=new q,nc=new q,Ha=new q,Ga=new q,Va=new q;class Rn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xn.subVectors(i,t),kn.subVectors(n,t),ka.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(ka),c=kn.dot(kn),u=kn.dot(ka),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),kn.subVectors(e,t),xn.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;lr.subVectors(i,n),cr.subVectors(s,n),Ha.subVectors(e,n);const l=lr.dot(Ha),c=cr.dot(Ha);if(l<=0&&c<=0)return t.copy(n);Ga.subVectors(e,i);const u=lr.dot(Ga),h=cr.dot(Ga);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(lr,a);Va.subVectors(e,s);const p=lr.dot(Va),x=cr.dot(Va);if(x>=0&&p<=x)return t.copy(s);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(cr,o);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return nc.subVectors(s,i),o=(h-u)/(h-u+(p-x)),t.copy(i).addScaledVector(nc,o);const _=1/(m+g+d);return a=g*_,o=d*_,t.copy(n).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Wa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Bf(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Wa(a,s,e+1/3),this.g=Wa(a,s,e),this.b=Wa(a,s,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return rt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Ft(Ot.r*255,0,255))*65536+Math.round(Ft(Ot.g*255,0,255))*256+Math.round(Ft(Ot.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=bn){rt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Ls);const n=Ca(oi.h,Ls.h,t),i=Ca(oi.s,Ls.s,t),s=Ca(oi.l,Ls.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new st;st.NAMES=Eu;let td=0;class hs extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Er,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class yu extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zn=nd();function nd(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function id(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ft(r,-65504,65504),Zn.floatView[0]=r;const e=Zn.uint32View[0],t=e>>23&511;return Zn.baseTable[t]+((e&8388607)>>Zn.shiftTable[t])}function rd(r){const e=r>>10;return Zn.uint32View[0]=Zn.mantissaTable[Zn.offsetTable[e]+(r&1023)]+Zn.exponentTable[e],Zn.floatView[0]}const ic={toHalfFloat:id,fromHalfFloat:rd},yt=new q,Ds=new Ve;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}}class Tu extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ki extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sd=0;const un=new At,Xa=new Zt,ur=new q,tn=new us,Xr=new us,Pt=new q;class yi extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gu(e)?bu:Tu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(tn.min,Xr.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,Xr.max),tn.expandByPoint(Pt)):(tn.expandByPoint(Xr.min),tn.expandByPoint(Xr.max))}tn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),Pt.add(ur)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new q,l[N]=new q;const c=new q,u=new q,h=new q,d=new Ve,p=new Ve,x=new Ve,g=new q,m=new q;function _(N,y,T){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,y),x.fromBufferAttribute(s,T),u.sub(c),h.sub(c),p.sub(d),x.sub(d);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(U),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(U),o[N].add(g),o[y].add(g),o[T].add(g),l[N].add(m),l[y].add(m),l[T].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,y=A.length;N<y;++N){const T=A[N],U=T.start,V=T.count;for(let H=U,$=U+V;H<$;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new q,R=new q,D=new q,P=new q;function C(N){D.fromBufferAttribute(i,N),P.copy(D);const y=o[N];E.copy(y),E.sub(D.multiplyScalar(D.dot(y))).normalize(),R.crossVectors(P,y);const U=R.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,U)}for(let N=0,y=A.length;N<y;++N){const T=A[N],U=T.start,V=T.count;for(let H=U,$=U+V;H<$;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let _=0;_<u;_++)d[x++]=c[p++]}return new Ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new At,Ci=new xl,Is=new Ma,sc=new q,hr=new q,fr=new q,dr=new q,Ya=new q,Us=new q,Ns=new Ve,Os=new Ve,Fs=new Ve,ac=new q,oc=new q,lc=new q,Bs=new q,zs=new q;class Jn extends Zt{constructor(e=new yi,t=new yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ya.fromBufferAttribute(h,e),a?Us.addScaledVector(Ya,u):Us.addScaledVector(Ya.sub(t),u))}t.add(Us)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Is.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Is,sc)===null||Ci.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(rc.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],_=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let R=A,D=E;R<D;R+=3){const P=o.getX(R),C=o.getX(R+1),N=o.getX(R+2);i=ks(this,_,e,n,c,u,h,P,C,N),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=x,_=g;m<_;m+=3){const A=o.getX(m),E=o.getX(m+1),R=o.getX(m+2);i=ks(this,a,e,n,c,u,h,A,E,R),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],_=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let R=A,D=E;R<D;R+=3){const P=R,C=R+1,N=R+2;i=ks(this,_,e,n,c,u,h,P,C,N),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,_=g;m<_;m+=3){const A=m,E=m+1,R=m+2;i=ks(this,a,e,n,c,u,h,A,E,R),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ad(r,e,t,n,i,s,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===xi,o),l===null)return null;zs.copy(o),zs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(zs);return c<t.near||c>t.far?null:{distance:c,point:zs.clone(),object:r}}function ks(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,hr),r.getVertexPosition(l,fr),r.getVertexPosition(c,dr);const u=ad(r,e,t,n,hr,fr,dr,Bs);if(u){i&&(Ns.fromBufferAttribute(i,o),Os.fromBufferAttribute(i,l),Fs.fromBufferAttribute(i,c),u.uv=Rn.getInterpolation(Bs,hr,fr,dr,Ns,Os,Fs,new Ve)),s&&(Ns.fromBufferAttribute(s,o),Os.fromBufferAttribute(s,l),Fs.fromBufferAttribute(s,c),u.uv1=Rn.getInterpolation(Bs,hr,fr,dr,Ns,Os,Fs,new Ve)),a&&(ac.fromBufferAttribute(a,o),oc.fromBufferAttribute(a,l),lc.fromBufferAttribute(a,c),u.normal=Rn.getInterpolation(Bs,hr,fr,dr,ac,oc,lc,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new q,materialIndex:0};Rn.getNormal(hr,fr,dr,h.normal),u.face=h}return u}class fs extends yi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ki(c,3)),this.setAttribute("normal",new ki(u,3)),this.setAttribute("uv",new ki(h,2));function x(g,m,_,A,E,R,D,P,C,N,y){const T=R/C,U=D/N,V=R/2,H=D/2,$=P/2,ne=C+1,X=N+1;let re=0,j=0;const me=new q;for(let ge=0;ge<X;ge++){const Te=ge*U-H;for(let Pe=0;Pe<ne;Pe++){const He=Pe*T-V;me[g]=He*A,me[m]=Te*E,me[_]=$,c.push(me.x,me.y,me.z),me[g]=0,me[m]=0,me[_]=P>0?1:-1,u.push(me.x,me.y,me.z),h.push(Pe/C),h.push(1-ge/N),re+=1}}for(let ge=0;ge<N;ge++)for(let Te=0;Te<C;Te++){const Pe=d+Te+ne*ge,He=d+Te+ne*(ge+1),ee=d+(Te+1)+ne*(ge+1),ae=d+(Te+1)+ne*ge;l.push(Pe,He,ae),l.push(He,ee,ae),j+=6}o.addGroup(p,j,y),p+=j,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=Dr(r[t]);for(const i in n)e[i]=n[i]}return e}function od(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Au(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const ld={clone:Dr,merge:Vt};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wu extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new q,cc=new Ve,uc=new Ve;class En extends wu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,cc,uc),t.subVectors(uc,cc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class hd extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new En(pr,mr,e,t);i.layers=this.layers,this.add(i);const s=new En(pr,mr,e,t);s.layers=this.layers,this.add(s);const a=new En(pr,mr,e,t);a.layers=this.layers,this.add(a);const o=new En(pr,mr,e,t);o.layers=this.layers,this.add(o);const l=new En(pr,mr,e,t);l.layers=this.layers,this.add(l);const c=new En(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ru extends Ht{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fd extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ru(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fs(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:mi});s.uniforms.tEquirect.value=t;const a=new Jn(i,s),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=Bt),new hd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const qa=new q,dd=new q,pd=new Ye;class ui{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qa.subVectors(n,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pd.getNormalMatrix(e),i=this.coplanarPoint(qa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Ma,Hs=new q;class Cu{constructor(e=new ui,t=new ui,n=new ui,i=new ui,s=new ui,a=new ui){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],x=i[9],g=i[10],m=i[11],_=i[12],A=i[13],E=i[14],R=i[15];if(n[0].setComponents(l-s,d-c,m-p,R-_).normalize(),n[1].setComponents(l+s,d+c,m+p,R+_).normalize(),n[2].setComponents(l+a,d+u,m+x,R+A).normalize(),n[3].setComponents(l-a,d-u,m-x,R-A).normalize(),n[4].setComponents(l-o,d-h,m-g,R-E).normalize(),t===jn)n[5].setComponents(l+o,d+h,m+g,R+E).normalize();else if(t===ua)n[5].setComponents(o,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hs.x=i.normal.x>0?e.max.x:e.min.x,Hs.y=i.normal.y>0?e.max.y:e.min.y,Hs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function md(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),h.count===-1&&d.length===0&&r.bufferSubData(c,0,u),d.length!==0){for(let p=0,x=d.length;p<x;p++){const g=d[p];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ea extends yi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],x=[],g=[],m=[];for(let _=0;_<u;_++){const A=_*d-a;for(let E=0;E<c;E++){const R=E*h-s;x.push(R,-A,0),g.push(0,0,1),m.push(E/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let A=0;A<o;A++){const E=A+c*_,R=A+c*(_+1),D=A+1+c*(_+1),P=A+1+c*_;p.push(E,R,P),p.push(R,D,P)}this.setIndex(p),this.setAttribute("position",new ki(x,3)),this.setAttribute("normal",new ki(g,3)),this.setAttribute("uv",new ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ym=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:_d,alphahash_pars_fragment:gd,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:Sd,alphatest_pars_fragment:Md,aomap_fragment:Ed,aomap_pars_fragment:yd,batching_pars_vertex:Td,batching_vertex:bd,begin_vertex:Ad,beginnormal_vertex:wd,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Od,color_pars_vertex:Fd,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Vd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:Yd,colorspace_pars_fragment:qd,envmap_fragment:Zd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:$d,envmap_pars_vertex:jd,envmap_physical_pars_fragment:lp,envmap_vertex:Jd,fog_vertex:Qd,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:rp,lights_lambert_fragment:sp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:up,lights_phong_fragment:hp,lights_phong_pars_fragment:fp,lights_physical_fragment:dp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:_p,lights_fragment_end:gp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Mp,map_fragment:Ep,map_pars_fragment:yp,map_particle_fragment:Tp,map_particle_pars_fragment:bp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:wp,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Dp,normal_fragment_begin:Ip,normal_fragment_maps:Up,normal_pars_fragment:Np,normal_pars_vertex:Op,normal_vertex:Fp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Gp,opaque_fragment:Vp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:Yp,dithering_fragment:qp,dithering_pars_fragment:Zp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Qp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:rm,specularmap_fragment:sm,specularmap_pars_fragment:am,tonemapping_fragment:om,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:um,uv_pars_fragment:hm,uv_pars_vertex:fm,uv_vertex:dm,worldpos_vertex:pm,background_vert:mm,background_frag:_m,backgroundCube_vert:gm,backgroundCube_frag:vm,cube_vert:xm,cube_frag:Sm,depth_vert:Mm,depth_frag:Em,distanceRGBA_vert:ym,distanceRGBA_frag:Tm,equirect_vert:bm,equirect_frag:Am,linedashed_vert:wm,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Lm,meshlambert_frag:Dm,meshmatcap_vert:Im,meshmatcap_frag:Um,meshnormal_vert:Nm,meshnormal_frag:Om,meshphong_vert:Fm,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:km,meshtoon_vert:Hm,meshtoon_frag:Gm,points_vert:Vm,points_frag:Wm,shadow_vert:Xm,shadow_frag:Ym,sprite_vert:qm,sprite_frag:Zm},Ee={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},wn={basic:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([Ee.common,Ee.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([Ee.lights,Ee.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};wn.physical={uniforms:Vt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Gs={r:0,b:0,g:0},Li=new ei,Km=new At;function $m(r,e,t,n,i,s,a){const o=new st(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function x(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function g(A){let E=!1;const R=x(A);R===null?_(o,l):R&&R.isColor&&(_(R,1),E=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(A,E){const R=x(E);R&&(R.isCubeTexture||R.mapping===xa)?(u===void 0&&(u=new Jn(new fs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Dr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Li.copy(E.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Li)),u.material.toneMapped=rt.getTransfer(R.colorSpace)!==ht,(h!==R||d!==R.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,p=r.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Jn(new Ea(2,2),new Si({name:"BackgroundMaterial",uniforms:Dr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=rt.getTransfer(R.colorSpace)!==ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,p=r.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function _(A,E){A.getRGB(Gs,Au(r)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,_(o,l)},render:g,addToRenderList:m}}function jm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(T,U,V,H,$){let ne=!1;const X=h(H,V,U);s!==X&&(s=X,c(s.object)),ne=p(T,H,V,$),ne&&x(T,H,V,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,R(T,U,V,H),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,U,V){const H=V.wireframe===!0;let $=n[T.id];$===void 0&&($={},n[T.id]=$);let ne=$[U.id];ne===void 0&&(ne={},$[U.id]=ne);let X=ne[H];return X===void 0&&(X=d(l()),ne[H]=X),X}function d(T){const U=[],V=[],H=[];for(let $=0;$<t;$++)U[$]=0,V[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:H,object:T,attributes:{},index:null}}function p(T,U,V,H){const $=s.attributes,ne=U.attributes;let X=0;const re=V.getAttributes();for(const j in re)if(re[j].location>=0){const ge=$[j];let Te=ne[j];if(Te===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),ge===void 0||ge.attribute!==Te||Te&&ge.data!==Te.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function x(T,U,V,H){const $={},ne=U.attributes;let X=0;const re=V.getAttributes();for(const j in re)if(re[j].location>=0){let ge=ne[j];ge===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor));const Te={};Te.attribute=ge,ge&&ge.data&&(Te.data=ge.data),$[j]=Te,X++}s.attributes=$,s.attributesNum=X,s.index=H}function g(){const T=s.newAttributes;for(let U=0,V=T.length;U<V;U++)T[U]=0}function m(T){_(T,0)}function _(T,U){const V=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;V[T]=1,H[T]===0&&(r.enableVertexAttribArray(T),H[T]=1),$[T]!==U&&(r.vertexAttribDivisor(T,U),$[T]=U)}function A(){const T=s.newAttributes,U=s.enabledAttributes;for(let V=0,H=U.length;V<H;V++)U[V]!==T[V]&&(r.disableVertexAttribArray(V),U[V]=0)}function E(T,U,V,H,$,ne,X){X===!0?r.vertexAttribIPointer(T,U,V,$,ne):r.vertexAttribPointer(T,U,V,H,$,ne)}function R(T,U,V,H){g();const $=H.attributes,ne=V.getAttributes(),X=U.defaultAttributeValues;for(const re in ne){const j=ne[re];if(j.location>=0){let me=$[re];if(me===void 0&&(re==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),re==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),me!==void 0){const ge=me.normalized,Te=me.itemSize,Pe=e.get(me);if(Pe===void 0)continue;const He=Pe.buffer,ee=Pe.type,ae=Pe.bytesPerElement,he=ee===r.INT||ee===r.UNSIGNED_INT||me.gpuType===hl;if(me.isInterleavedBufferAttribute){const Se=me.data,Ue=Se.stride,ze=me.offset;if(Se.isInstancedInterleavedBuffer){for(let Ge=0;Ge<j.locationSize;Ge++)_(j.location+Ge,Se.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ge=0;Ge<j.locationSize;Ge++)m(j.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Ge=0;Ge<j.locationSize;Ge++)E(j.location+Ge,Te/j.locationSize,ee,ge,Ue*ae,(ze+Te/j.locationSize*Ge)*ae,he)}else{if(me.isInstancedBufferAttribute){for(let Se=0;Se<j.locationSize;Se++)_(j.location+Se,me.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Se=0;Se<j.locationSize;Se++)m(j.location+Se);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Se=0;Se<j.locationSize;Se++)E(j.location+Se,Te/j.locationSize,ee,ge,Te*ae,Te/j.locationSize*Se*ae,he)}}else if(X!==void 0){const ge=X[re];if(ge!==void 0)switch(ge.length){case 2:r.vertexAttrib2fv(j.location,ge);break;case 3:r.vertexAttrib3fv(j.location,ge);break;case 4:r.vertexAttrib4fv(j.location,ge);break;default:r.vertexAttrib1fv(j.location,ge)}}}}A()}function D(){N();for(const T in n){const U=n[T];for(const V in U){const H=U[V];for(const $ in H)u(H[$].object),delete H[$];delete U[V]}delete n[T]}}function P(T){if(n[T.id]===void 0)return;const U=n[T.id];for(const V in U){const H=U[V];for(const $ in H)u(H[$].object),delete H[$];delete U[V]}delete n[T.id]}function C(T){for(const U in n){const V=n[U];if(V[T.id]===void 0)continue;const H=V[T.id];for(const $ in H)u(H[$].object),delete H[$];delete V[T.id]}}function N(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:A}}function Jm(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let x=0;for(let g=0;g<h;g++)x+=u[g];for(let g=0;g<d.length;g++)t.update(x,n,d[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==pn&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const C=P===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qn&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!C)}function l(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:R,maxSamples:D}}function e_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ui,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,_=r.get(h);if(!i||x===null||x.length===0||s&&!m)s?u(null):c();else{const A=s?0:n,E=A*4;let R=_.clippingState||null;l.value=R,R=u(x,d,E,p);for(let D=0;D!==E;++D)R[D]=t[D];_.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,x){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const _=p+g*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<_)&&(m=new Float32Array(_));for(let E=0,R=p;E!==g;++E,R+=4)a.copy(h[E]).applyMatrix4(A,o),a.normal.toArray(m,R),m[R+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function t_(r){let e=new WeakMap;function t(a,o){return o===mo?a.mapping=Rr:o===_o&&(a.mapping=Cr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mo||o===_o)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fd(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class n_ extends wu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,hc=[.125,.215,.35,.446,.526,.582],Bi=20,Za=new n_,fc=new st;let Ka=null,$a=0,ja=0,Ja=!1;const Ni=(1+Math.sqrt(5))/2,_r=1/Ni,dc=[new q(-Ni,_r,0),new q(Ni,_r,0),new q(-_r,0,Ni),new q(_r,0,Ni),new q(0,Ni,-_r),new q(0,Ni,_r),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ka=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,$a,ja),this._renderer.xr.enabled=Ja,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:$n,format:pn,colorSpace:Un,depthBuffer:!1},i=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i_(s)),this._blurMaterial=r_(s,e,t)}return i}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,i){const o=new En(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fc),u.toneMapping=_i,u.autoClear=!1;const p=new yu({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),x=new Jn(new fs,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(fc),g=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):A===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const E=this._cubeSize;Vs(i,A*E,_>2?E:0,E,E),u.setRenderTarget(i),g&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rr||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=dc[(i-s-1)%dc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jn(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),g=s/x,m=isFinite(s)?1+Math.floor(u*g):Bi;m>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const _=[];let A=0;for(let C=0;C<Bi;++C){const N=C/g,y=Math.exp(-N*N/2);_.push(y),C===0?A+=y:C<m&&(A+=2*y)}for(let C=0;C<_.length;C++)_[C]=_[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-n;const R=this._sizeLods[i],D=3*R*(i>E-vr?i-E+vr:0),P=4*(this._cubeSize-R);Vs(t,D,P,3*R,2*R),l.setRenderTarget(t),l.render(h,Za)}}function i_(r){const e=[],t=[],n=[];let i=r;const s=r-vr+1+hc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-vr?l=hc[a-r+vr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,g=3,m=2,_=1,A=new Float32Array(g*x*p),E=new Float32Array(m*x*p),R=new Float32Array(_*x*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,N=P>2?0:-1,y=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];A.set(y,g*x*P),E.set(d,m*x*P);const T=[P,P,P,P,P,P];R.set(T,_*x*P)}const D=new yi;D.setAttribute("position",new Ln(A,g)),D.setAttribute("uv",new Ln(E,m)),D.setAttribute("faceIndex",new Ln(R,_)),e.push(D),i>vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mc(r,e,t){const n=new Yi(r,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function r_(r,e,t){const n=new Float32Array(Bi),i=new q(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function _c(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function gc(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===mo||l===_o,u=l===Rr||l===Cr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new pc(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new pc(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function a_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vu("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o_(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const g=d.morphAttributes[x];for(let m=0,_=g.length;m<_;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const g=p[x];for(let m=0,_=g.length;m<_;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,x=h.attributes.position;let g=0;if(p!==null){const A=p.array;g=p.version;for(let E=0,R=A.length;E<R;E+=3){const D=A[E+0],P=A[E+1],C=A[E+2];d.push(D,P,P,C,C,D)}}else if(x!==void 0){const A=x.array;g=x.version;for(let E=0,R=A.length/3-1;E<R;E+=3){const D=E+0,P=E+1,C=E+2;d.push(D,P,P,C,C,D)}}else return;const m=new(gu(d)?bu:Tu)(d,1);m.version=g;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function l_(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*a),t.update(p,n,1)}function c(d,p,x){x!==0&&(r.drawElementsInstanced(n,p,s,d*a,x),t.update(p,n,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,x);let m=0;for(let _=0;_<x;_++)m+=p[_];t.update(m,n,1)}function h(d,p,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d.length;_++)c(d[_]/a,p[_],g[_]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,x);let _=0;for(let A=0;A<x;A++)_+=p[A];for(let A=0;A<g.length;A++)t.update(_,n,g[A])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function c_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function u_(r,e,t){const n=new WeakMap,i=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),x===!0&&(E=2),g===!0&&(E=3);let R=o.attributes.position.count*E,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*D*4*h),C=new Su(P,R,D,h);C.type=dn,C.needsUpdate=!0;const N=E*4;for(let T=0;T<h;T++){const U=m[T],V=_[T],H=A[T],$=R*D*4*T;for(let ne=0;ne<U.count;ne++){const X=ne*N;p===!0&&(i.fromBufferAttribute(U,ne),P[$+X+0]=i.x,P[$+X+1]=i.y,P[$+X+2]=i.z,P[$+X+3]=0),x===!0&&(i.fromBufferAttribute(V,ne),P[$+X+4]=i.x,P[$+X+5]=i.y,P[$+X+6]=i.z,P[$+X+7]=0),g===!0&&(i.fromBufferAttribute(H,ne),P[$+X+8]=i.x,P[$+X+9]=i.y,P[$+X+10]=i.z,P[$+X+11]=H.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new Ve(R,D)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function h_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Lu extends Ht{constructor(e,t,n,i,s,a,o,l,c,u=yr){if(u!==yr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yr&&(n=Xi),n===void 0&&u===Lr&&(n=Pr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Du=new Ht,vc=new Lu(1,1),Iu=new Su,Uu=new qf,Nu=new Ru,xc=[],Sc=[],Mc=new Float32Array(16),Ec=new Float32Array(9),yc=new Float32Array(4);function zr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=xc[i];if(s===void 0&&(s=new Float32Array(i),xc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ya(r,e){let t=Sc[e];t===void 0&&(t=new Int32Array(e),Sc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function f_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function d_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function p_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function m_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function __(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;yc.set(n),r.uniformMatrix2fv(this.addr,!1,yc),Ct(t,n)}}function g_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Ec.set(n),r.uniformMatrix3fv(this.addr,!1,Ec),Ct(t,n)}}function v_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Mc.set(n),r.uniformMatrix4fv(this.addr,!1,Mc),Ct(t,n)}}function x_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function S_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function M_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function E_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function T_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function A_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function w_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(vc.compareFunction=_u,s=vc):s=Du,t.setTexture2D(e||s,i)}function R_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uu,i)}function C_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nu,i)}function P_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Iu,i)}function L_(r){switch(r){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return __;case 35675:return g_;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return S_;case 35668:case 35672:return M_;case 35669:case 35673:return E_;case 5125:return y_;case 36294:return T_;case 36295:return b_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}function D_(r,e){r.uniform1fv(this.addr,e)}function I_(r,e){const t=zr(e,this.size,2);r.uniform2fv(this.addr,t)}function U_(r,e){const t=zr(e,this.size,3);r.uniform3fv(this.addr,t)}function N_(r,e){const t=zr(e,this.size,4);r.uniform4fv(this.addr,t)}function O_(r,e){const t=zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function F_(r,e){const t=zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function B_(r,e){const t=zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function z_(r,e){r.uniform1iv(this.addr,e)}function k_(r,e){r.uniform2iv(this.addr,e)}function H_(r,e){r.uniform3iv(this.addr,e)}function G_(r,e){r.uniform4iv(this.addr,e)}function V_(r,e){r.uniform1uiv(this.addr,e)}function W_(r,e){r.uniform2uiv(this.addr,e)}function X_(r,e){r.uniform3uiv(this.addr,e)}function Y_(r,e){r.uniform4uiv(this.addr,e)}function q_(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Du,s[a])}function Z_(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Uu,s[a])}function K_(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nu,s[a])}function $_(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Iu,s[a])}function j_(r){switch(r){case 5126:return D_;case 35664:return I_;case 35665:return U_;case 35666:return N_;case 35674:return O_;case 35675:return F_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return k_;case 35668:case 35672:return H_;case 35669:case 35673:return G_;case 5125:return V_;case 36294:return W_;case 36295:return X_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return $_}}class J_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=L_(t.type)}}class Q_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j_(t.type)}}class eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Tc(r,e){r.seq.push(e),r.map[e.id]=e}function tg(r,e,t){const n=r.name,i=n.length;for(Qa.lastIndex=0;;){const s=Qa.exec(n),a=Qa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Tc(t,c===void 0?new J_(o,r,e):new Q_(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new eg(o),Tc(t,h)),t=h}}}class na{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);tg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function bc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ng=37297;let ig=0;function rg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function sg(r){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(r);let n;switch(e===t?n="":e===ca&&t===la?n="LinearDisplayP3ToLinearSRGB":e===la&&t===ca&&(n="LinearSRGBToLinearDisplayP3"),r){case Un:case Sa:return[n,"LinearTransferOETF"];case bn:case vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ac(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rg(r.getShaderSource(e),a)}else return i}function ag(r,e){const t=sg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function og(r,e){let t;switch(e){case xf:t="Linear";break;case Sf:t="Reinhard";break;case Mf:t="OptimizedCineon";break;case Ef:t="ACESFilmic";break;case Tf:t="AgX";break;case bf:t="Neutral";break;case yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function cg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ug(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function qr(r){return r!==""}function wc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(r){return r.replace(hg,dg)}const fg=new Map;function dg(r,e){let t=Xe[e];if(t===void 0){const n=fg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(r){return r.replace(pg,mg)}function mg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _g(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function gg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function xg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case gf:e="ENVMAP_BLENDING_MIX";break;case vf:e="ENVMAP_BLENDING_ADD";break}return e}function Sg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mg(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_g(t),c=gg(t),u=vg(t),h=xg(t),d=Sg(t),p=lg(t),x=cg(s),g=i.createProgram();let m,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qr).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qr).join(`
`),_.length>0&&(_+=`
`)):(m=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),_=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_i?og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ag("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Yo(a),a=wc(a,t),a=Rc(a,t),o=Yo(o),o=wc(o,t),o=Rc(o,t),a=Cc(a),o=Cc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=A+m+a,R=A+_+o,D=bc(i,i.VERTEX_SHADER,E),P=bc(i,i.FRAGMENT_SHADER,R);i.attachShader(g,D),i.attachShader(g,P),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(U){if(r.debug.checkShaderErrors){const V=i.getProgramInfoLog(g).trim(),H=i.getShaderInfoLog(D).trim(),$=i.getShaderInfoLog(P).trim();let ne=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,D,P);else{const re=Ac(i,D,"vertex"),j=Ac(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+re+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||$==="")&&(X=!1);X&&(U.diagnostics={runnable:ne,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:_}})}i.deleteShader(D),i.deleteShader(P),N=new na(i,g),y=ug(i,g)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,ng)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=P,this}let Eg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tg(e),t.set(e,n)),n}}class Tg{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}}function bg(r,e,t,n,i,s,a){const o=new Mu,l=new yg,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,T,U,V,H){const $=V.fog,ne=H.geometry,X=y.isMeshStandardMaterial?V.environment:null,re=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),j=re&&re.mapping===xa?re.image.height:null,me=x[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ge=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Te=ge!==void 0?ge.length:0;let Pe=0;ne.morphAttributes.position!==void 0&&(Pe=1),ne.morphAttributes.normal!==void 0&&(Pe=2),ne.morphAttributes.color!==void 0&&(Pe=3);let He,ee,ae,he;if(me){const $e=wn[me];He=$e.vertexShader,ee=$e.fragmentShader}else He=y.vertexShader,ee=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const Se=r.getRenderTarget(),Ue=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,Ge=!!y.map,et=!!y.matcap,O=!!re,at=!!y.aoMap,Ke=!!y.lightMap,Je=!!y.bumpMap,Re=!!y.normalMap,dt=!!y.displacementMap,Be=!!y.emissiveMap,ke=!!y.metalnessMap,I=!!y.roughnessMap,b=y.anisotropy>0,K=y.clearcoat>0,oe=y.dispersion>0,ce=y.iridescence>0,se=y.sheen>0,Le=y.transmission>0,Me=b&&!!y.anisotropyMap,be=K&&!!y.clearcoatMap,Oe=K&&!!y.clearcoatNormalMap,de=K&&!!y.clearcoatRoughnessMap,Ae=ce&&!!y.iridescenceMap,qe=ce&&!!y.iridescenceThicknessMap,we=se&&!!y.sheenColorMap,ve=se&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,De=!!y.specularColorMap,Ze=!!y.specularIntensityMap,M=Le&&!!y.transmissionMap,W=Le&&!!y.thicknessMap,F=!!y.gradientMap,J=!!y.alphaMap,le=y.alphaTest>0,Ce=!!y.alphaHash,Fe=!!y.extensions;let mt=_i;y.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(mt=r.toneMapping);const St={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:He,fragmentShader:ee,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Un,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:et,envMap:O,envMapMode:O&&re.mapping,envMapCubeUVHeight:j,aoMap:at,lightMap:Ke,bumpMap:Je,normalMap:Re,displacementMap:d&&dt,emissiveMap:Be,normalMapObjectSpace:Re&&y.normalMapType===Pf,normalMapTangentSpace:Re&&y.normalMapType===Cf,metalnessMap:ke,roughnessMap:I,anisotropy:b,anisotropyMap:Me,clearcoat:K,clearcoatMap:be,clearcoatNormalMap:Oe,clearcoatRoughnessMap:de,dispersion:oe,iridescence:ce,iridescenceMap:Ae,iridescenceThicknessMap:qe,sheen:se,sheenColorMap:we,sheenRoughnessMap:ve,specularMap:Ne,specularColorMap:De,specularIntensityMap:Ze,transmission:Le,transmissionMap:M,thicknessMap:W,gradientMap:F,opaque:y.transparent===!1&&y.blending===Er&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:Ce,combine:y.combine,mapUv:Ge&&g(y.map.channel),aoMapUv:at&&g(y.aoMap.channel),lightMapUv:Ke&&g(y.lightMap.channel),bumpMapUv:Je&&g(y.bumpMap.channel),normalMapUv:Re&&g(y.normalMap.channel),displacementMapUv:dt&&g(y.displacementMap.channel),emissiveMapUv:Be&&g(y.emissiveMap.channel),metalnessMapUv:ke&&g(y.metalnessMap.channel),roughnessMapUv:I&&g(y.roughnessMap.channel),anisotropyMapUv:Me&&g(y.anisotropyMap.channel),clearcoatMapUv:be&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(y.sheenRoughnessMap.channel),specularMapUv:Ne&&g(y.specularMap.channel),specularColorMapUv:De&&g(y.specularColorMap.channel),specularIntensityMapUv:Ze&&g(y.specularIntensityMap.channel),transmissionMapUv:M&&g(y.transmissionMap.channel),thicknessMapUv:W&&g(y.thicknessMap.channel),alphaMapUv:J&&g(y.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Re||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(Ge||J),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yn,flipSided:y.side===qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function _(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(A(T,y),E(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function A(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.doubleSided&&o.enable(10),T.flipSided&&o.enable(11),T.useDepthPacking&&o.enable(12),T.dithering&&o.enable(13),T.transmission&&o.enable(14),T.sheen&&o.enable(15),T.opaque&&o.enable(16),T.pointsUvs&&o.enable(17),T.decodeVideoTexture&&o.enable(18),T.alphaToCoverage&&o.enable(19),y.push(o.mask)}function R(y){const T=x[y.type];let U;if(T){const V=wn[T];U=ld.clone(V.uniforms)}else U=y.uniforms;return U}function D(y,T){let U;for(let V=0,H=u.length;V<H;V++){const $=u[V];if($.cacheKey===T){U=$,++U.usedTimes;break}}return U===void 0&&(U=new Mg(r,T,y,s),u.push(U)),U}function P(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:R,acquireProgram:D,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:N}}function Ag(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function wg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,x,g,m){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},r[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=g,_.group=m),e++,_}function o(h,d,p,x,g,m){const _=a(h,d,p,x,g,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,d,p,x,g,m){const _=a(h,d,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||wg),n.length>1&&n.sort(d||Lc),i.length>1&&i.sort(d||Lc)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Rg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Dc,r.set(n,[a])):i>=s.length?(a=new Dc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new st};break;case"SpotLight":t={position:new q,direction:new q,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function Pg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Lg=0;function Dg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ig(r){const e=new Cg,t=Pg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new At,a=new At;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,x=0,g=0,m=0,_=0,A=0,E=0,R=0,D=0,P=0,C=0;c.sort(Dg);for(let y=0,T=c.length;y<T;y++){const U=c[y],V=U.color,H=U.intensity,$=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=V.r*H,h+=V.g*H,d+=V.b*H;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],H);C++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,j=t.get(U);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=U.shadow.matrix,A++}n.directional[p]=X,p++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(V).multiplyScalar(H),X.distance=$,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[g]=X;const re=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,re.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[g]=re.matrix,U.castShadow){const j=t.get(U);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=ne,R++}g++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(V).multiplyScalar(H),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=X,m++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const re=U.shadow,j=t.get(U);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,j.shadowCameraNear=re.camera.near,j.shadowCameraFar=re.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=ne,n.pointShadowMatrix[x]=U.shadow.matrix,E++}n.point[x]=X,x++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(H),X.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[_]=X,_++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==_||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==R||N.numSpotMaps!==D||N.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=R+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.directionalLength=p,N.pointLength=x,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=_,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=R,N.numSpotMaps=D,N.numLightProbes=C,n.version=Lg++)}function l(c,u){let h=0,d=0,p=0,x=0,g=0;const m=u.matrixWorldInverse;for(let _=0,A=c.length;_<A;_++){const E=c[_];if(E.isDirectionalLight){const R=n.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(m),h++}else if(E.isSpotLight){const R=n.spot[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const R=n.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const R=n.point[d];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const R=n.hemi[g];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Ic(r){const e=new Ig(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ug(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ic(r),e.set(i,[o])):s>=a.length?(o=new Ic(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ng extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Og extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zg(r,e,t){let n=new Cu;const i=new Ve,s=new Ve,a=new Lt,o=new Ng({depthPacking:Rf}),l=new Og,c={},u=t.maxTextureSize,h={[xi]:qt,[qt]:xi,[Yn]:Yn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Fg,fragmentShader:Bg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new yi;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Jn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let _=this.type;this.render=function(P,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),V=r.state;V.setBlending(mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=_!==Vn&&this.type===Vn,$=_===Vn&&this.type!==Vn;for(let ne=0,X=P.length;ne<X;ne++){const re=P[ne],j=re.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const me=j.getFrameExtents();if(i.multiply(me),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/me.x),i.x=s.x*me.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/me.y),i.y=s.y*me.y,j.mapSize.y=s.y)),j.map===null||H===!0||$===!0){const Te=this.type!==Vn?{minFilter:Yt,magFilter:Yt}:{};j.map!==null&&j.map.dispose(),j.map=new Yi(i.x,i.y,Te),j.map.texture.name=re.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const ge=j.getViewportCount();for(let Te=0;Te<ge;Te++){const Pe=j.getViewport(Te);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),V.viewport(a),j.updateMatrices(re,Te),n=j.getFrustum(),R(C,N,j.camera,re,this.type)}j.isPointLightShadow!==!0&&this.type===Vn&&A(j,N),j.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(y,T,U)};function A(P,C){const N=e.update(g);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Yi(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(C,null,N,d,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(C,null,N,p,g,null)}function E(P,C,N,y){let T=null;const U=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)T=U;else if(T=N.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=T.uuid,H=C.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let ne=$[H];ne===void 0&&(ne=T.clone(),$[H]=ne,C.addEventListener("dispose",D)),T=ne}if(T.visible=C.visible,T.wireframe=C.wireframe,y===Vn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const V=r.properties.get(T);V.light=N}return T}function R(P,C,N,y,T){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===Vn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const H=e.update(P),$=P.material;if(Array.isArray($)){const ne=H.groups;for(let X=0,re=ne.length;X<re;X++){const j=ne[X],me=$[j.materialIndex];if(me&&me.visible){const ge=E(P,me,y,T);P.onBeforeShadow(r,P,C,N,H,ge,j),r.renderBufferDirect(N,null,H,ge,P,j),P.onAfterShadow(r,P,C,N,H,ge,j)}}}else if($.visible){const ne=E(P,$,y,T);P.onBeforeShadow(r,P,C,N,H,ne,null),r.renderBufferDirect(N,null,H,ne,P,null),P.onAfterShadow(r,P,C,N,H,ne,null)}}const V=P.children;for(let H=0,$=V.length;H<$;H++)R(V[H],C,N,y,T)}function D(P){P.target.removeEventListener("dispose",D);for(const N in c){const y=c[N],T=P.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function kg(r){function e(){let M=!1;const W=new Lt;let F=null;const J=new Lt(0,0,0,0);return{setMask:function(le){F!==le&&!M&&(r.colorMask(le,le,le,le),F=le)},setLocked:function(le){M=le},setClear:function(le,Ce,Fe,mt,St){St===!0&&(le*=mt,Ce*=mt,Fe*=mt),W.set(le,Ce,Fe,mt),J.equals(W)===!1&&(r.clearColor(le,Ce,Fe,mt),J.copy(W))},reset:function(){M=!1,F=null,J.set(-1,0,0,0)}}}function t(){let M=!1,W=null,F=null,J=null;return{setTest:function(le){le?he(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(le){W!==le&&!M&&(r.depthMask(le),W=le)},setFunc:function(le){if(F!==le){switch(le){case uf:r.depthFunc(r.NEVER);break;case hf:r.depthFunc(r.ALWAYS);break;case ff:r.depthFunc(r.LESS);break;case aa:r.depthFunc(r.LEQUAL);break;case df:r.depthFunc(r.EQUAL);break;case pf:r.depthFunc(r.GEQUAL);break;case mf:r.depthFunc(r.GREATER);break;case _f:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}F=le}},setLocked:function(le){M=le},setClear:function(le){J!==le&&(r.clearDepth(le),J=le)},reset:function(){M=!1,W=null,F=null,J=null}}}function n(){let M=!1,W=null,F=null,J=null,le=null,Ce=null,Fe=null,mt=null,St=null;return{setTest:function($e){M||($e?he(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function($e){W!==$e&&!M&&(r.stencilMask($e),W=$e)},setFunc:function($e,Mt,vt){(F!==$e||J!==Mt||le!==vt)&&(r.stencilFunc($e,Mt,vt),F=$e,J=Mt,le=vt)},setOp:function($e,Mt,vt){(Ce!==$e||Fe!==Mt||mt!==vt)&&(r.stencilOp($e,Mt,vt),Ce=$e,Fe=Mt,mt=vt)},setLocked:function($e){M=$e},setClear:function($e){St!==$e&&(r.clearStencil($e),St=$e)},reset:function(){M=!1,W=null,F=null,J=null,le=null,Ce=null,Fe=null,mt=null,St=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,A=null,E=null,R=null,D=null,P=new st(0,0,0),C=0,N=!1,y=null,T=null,U=null,V=null,H=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,X=0;const re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=X>=1):re.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=X>=2);let j=null,me={};const ge=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),Pe=new Lt().fromArray(ge),He=new Lt().fromArray(Te);function ee(M,W,F,J){const le=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(M,Ce),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<F;Fe++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(W,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(W+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return Ce}const ae={};ae[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),he(r.DEPTH_TEST),s.setFunc(aa),Je(!1),Re(Bl),he(r.CULL_FACE),at(mi);function he(M){c[M]!==!0&&(r.enable(M),c[M]=!0)}function Se(M){c[M]!==!1&&(r.disable(M),c[M]=!1)}function Ue(M,W){return u[M]!==W?(r.bindFramebuffer(M,W),u[M]=W,M===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=W),M===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=W),!0):!1}function ze(M,W){let F=d,J=!1;if(M){F=h.get(W),F===void 0&&(F=[],h.set(W,F));const le=M.textures;if(F.length!==le.length||F[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,Fe=le.length;Ce<Fe;Ce++)F[Ce]=r.COLOR_ATTACHMENT0+Ce;F.length=le.length,J=!0}}else F[0]!==r.BACK&&(F[0]=r.BACK,J=!0);J&&r.drawBuffers(F)}function Ge(M){return p!==M?(r.useProgram(M),p=M,!0):!1}const et={[Fi]:r.FUNC_ADD,[Yh]:r.FUNC_SUBTRACT,[qh]:r.FUNC_REVERSE_SUBTRACT};et[Zh]=r.MIN,et[Kh]=r.MAX;const O={[$h]:r.ZERO,[jh]:r.ONE,[Jh]:r.SRC_COLOR,[fo]:r.SRC_ALPHA,[sf]:r.SRC_ALPHA_SATURATE,[nf]:r.DST_COLOR,[ef]:r.DST_ALPHA,[Qh]:r.ONE_MINUS_SRC_COLOR,[po]:r.ONE_MINUS_SRC_ALPHA,[rf]:r.ONE_MINUS_DST_COLOR,[tf]:r.ONE_MINUS_DST_ALPHA,[af]:r.CONSTANT_COLOR,[of]:r.ONE_MINUS_CONSTANT_COLOR,[lf]:r.CONSTANT_ALPHA,[cf]:r.ONE_MINUS_CONSTANT_ALPHA};function at(M,W,F,J,le,Ce,Fe,mt,St,$e){if(M===mi){x===!0&&(Se(r.BLEND),x=!1);return}if(x===!1&&(he(r.BLEND),x=!0),M!==Xh){if(M!==g||$e!==N){if((m!==Fi||E!==Fi)&&(r.blendEquation(r.FUNC_ADD),m=Fi,E=Fi),$e)switch(M){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.ONE,r.ONE);break;case kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}_=null,A=null,R=null,D=null,P.set(0,0,0),C=0,g=M,N=$e}return}le=le||W,Ce=Ce||F,Fe=Fe||J,(W!==m||le!==E)&&(r.blendEquationSeparate(et[W],et[le]),m=W,E=le),(F!==_||J!==A||Ce!==R||Fe!==D)&&(r.blendFuncSeparate(O[F],O[J],O[Ce],O[Fe]),_=F,A=J,R=Ce,D=Fe),(mt.equals(P)===!1||St!==C)&&(r.blendColor(mt.r,mt.g,mt.b,St),P.copy(mt),C=St),g=M,N=!1}function Ke(M,W){M.side===Yn?Se(r.CULL_FACE):he(r.CULL_FACE);let F=M.side===qt;W&&(F=!F),Je(F),M.blending===Er&&M.transparent===!1?at(mi):at(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),i.setMask(M.colorWrite);const J=M.stencilWrite;a.setTest(J),J&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Be(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(M){y!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),y=M)}function Re(M){M!==Gh?(he(r.CULL_FACE),M!==T&&(M===Bl?r.cullFace(r.BACK):M===Vh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),T=M}function dt(M){M!==U&&(ne&&r.lineWidth(M),U=M)}function Be(M,W,F){M?(he(r.POLYGON_OFFSET_FILL),(V!==W||H!==F)&&(r.polygonOffset(W,F),V=W,H=F)):Se(r.POLYGON_OFFSET_FILL)}function ke(M){M?he(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function I(M){M===void 0&&(M=r.TEXTURE0+$-1),j!==M&&(r.activeTexture(M),j=M)}function b(M,W,F){F===void 0&&(j===null?F=r.TEXTURE0+$-1:F=j);let J=me[F];J===void 0&&(J={type:void 0,texture:void 0},me[F]=J),(J.type!==M||J.texture!==W)&&(j!==F&&(r.activeTexture(F),j=F),r.bindTexture(M,W||ae[M]),J.type=M,J.texture=W)}function K(){const M=me[j];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Le(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function be(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Oe(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function qe(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function we(M){Pe.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),Pe.copy(M))}function ve(M){He.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),He.copy(M))}function Ne(M,W){let F=l.get(W);F===void 0&&(F=new WeakMap,l.set(W,F));let J=F.get(M);J===void 0&&(J=r.getUniformBlockIndex(W,M.name),F.set(M,J))}function De(M,W){const J=l.get(W).get(M);o.get(W)!==J&&(r.uniformBlockBinding(W,J,M.__bindingPointIndex),o.set(W,J))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},j=null,me={},u={},h=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,A=null,E=null,R=null,D=null,P=new st(0,0,0),C=0,N=!1,y=null,T=null,U=null,V=null,H=null,Pe.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:he,disable:Se,bindFramebuffer:Ue,drawBuffers:ze,useProgram:Ge,setBlending:at,setMaterial:Ke,setFlipSided:Je,setCullFace:Re,setLineWidth:dt,setPolygonOffset:Be,setScissorTest:ke,activeTexture:I,bindTexture:b,unbindTexture:K,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:Ae,texImage3D:qe,updateUBOMapping:Ne,uniformBlockBinding:De,texStorage2D:Oe,texStorage3D:de,texSubImage2D:se,texSubImage3D:Le,compressedTexSubImage2D:Me,compressedTexSubImage3D:be,scissor:we,viewport:ve,reset:Ze}}function Uc(r,e,t,n){const i=Hg(n);switch(t){case uu:return r*e;case fu:return r*e;case du:return r*e*2;case pl:return r*e/i.components*i.byteLength;case ml:return r*e/i.components*i.byteLength;case pu:return r*e*2/i.components*i.byteLength;case _l:return r*e*2/i.components*i.byteLength;case hu:return r*e*3/i.components*i.byteLength;case pn:return r*e*4/i.components*i.byteLength;case gl:return r*e*4/i.components*i.byteLength;case $s:case js:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Js:case Qs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case So:case Eo:return Math.max(r,16)*Math.max(e,8)/4;case xo:case Mo:return Math.max(r,8)*Math.max(e,8)/2;case yo:case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ea:case ko:case Ho:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mu:case Go:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vo:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(r){switch(r){case Qn:case ou:return{byteLength:1,components:1};case es:case lu:case $n:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case Xi:case hl:case dn:return{byteLength:4,components:1};case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Gg(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,b){return p?new OffscreenCanvas(I,b):ts("canvas")}function g(I,b,K){let oe=1;const ce=ke(I);if((ce.width>K||ce.height>K)&&(oe=K/Math.max(ce.width,ce.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const se=Math.floor(oe*ce.width),Le=Math.floor(oe*ce.height);h===void 0&&(h=x(se,Le));const Me=b?x(se,Le):h;return Me.width=se,Me.height=Le,Me.getContext("2d").drawImage(I,0,0,se,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+se+"x"+Le+")."),Me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==Yt&&I.minFilter!==Bt}function _(I){r.generateMipmap(I)}function A(I,b,K,oe,ce=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let se=b;if(b===r.RED&&(K===r.FLOAT&&(se=r.R32F),K===r.HALF_FLOAT&&(se=r.R16F),K===r.UNSIGNED_BYTE&&(se=r.R8)),b===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(se=r.R8UI),K===r.UNSIGNED_SHORT&&(se=r.R16UI),K===r.UNSIGNED_INT&&(se=r.R32UI),K===r.BYTE&&(se=r.R8I),K===r.SHORT&&(se=r.R16I),K===r.INT&&(se=r.R32I)),b===r.RG&&(K===r.FLOAT&&(se=r.RG32F),K===r.HALF_FLOAT&&(se=r.RG16F),K===r.UNSIGNED_BYTE&&(se=r.RG8)),b===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(se=r.RG8UI),K===r.UNSIGNED_SHORT&&(se=r.RG16UI),K===r.UNSIGNED_INT&&(se=r.RG32UI),K===r.BYTE&&(se=r.RG8I),K===r.SHORT&&(se=r.RG16I),K===r.INT&&(se=r.RG32I)),b===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(se=r.RGB9_E5),b===r.RGBA){const Le=ce?oa:rt.getTransfer(oe);K===r.FLOAT&&(se=r.RGBA32F),K===r.HALF_FLOAT&&(se=r.RGBA16F),K===r.UNSIGNED_BYTE&&(se=Le===ht?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(I,b){let K;return I?b===null||b===Xi||b===Pr?K=r.DEPTH24_STENCIL8:b===dn?K=r.DEPTH32F_STENCIL8:b===es&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===Pr?K=r.DEPTH_COMPONENT24:b===dn?K=r.DEPTH_COMPONENT32F:b===es&&(K=r.DEPTH_COMPONENT16),K}function R(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Yt&&I.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function D(I){const b=I.target;b.removeEventListener("dispose",D),C(b),b.isVideoTexture&&u.delete(b)}function P(I){const b=I.target;b.removeEventListener("dispose",P),y(b)}function C(I){const b=n.get(I);if(b.__webglInit===void 0)return;const K=I.source,oe=d.get(K);if(oe){const ce=oe[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&N(I),Object.keys(oe).length===0&&d.delete(K)}n.remove(I)}function N(I){const b=n.get(I);r.deleteTexture(b.__webglTexture);const K=I.source,oe=d.get(K);delete oe[b.__cacheKey],a.memory.textures--}function y(I){const b=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let ce=0;ce<b.__webglFramebuffer[oe].length;ce++)r.deleteFramebuffer(b.__webglFramebuffer[oe][ce]);else r.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)r.deleteFramebuffer(b.__webglFramebuffer[oe]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=I.textures;for(let oe=0,ce=K.length;oe<ce;oe++){const se=n.get(K[oe]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(K[oe])}n.remove(I)}let T=0;function U(){T=0}function V(){const I=T;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),T+=1,I}function H(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function $(I,b){const K=n.get(I);if(I.isVideoTexture&&dt(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const oe=I.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(K,I,b);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+b)}function ne(I,b){const K=n.get(I);if(I.version>0&&K.__version!==I.version){He(K,I,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+b)}function X(I,b){const K=n.get(I);if(I.version>0&&K.__version!==I.version){He(K,I,b);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+b)}function re(I,b){const K=n.get(I);if(I.version>0&&K.__version!==I.version){ee(K,I,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+b)}const j={[go]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[vo]:r.MIRRORED_REPEAT},me={[Yt]:r.NEAREST,[Af]:r.NEAREST_MIPMAP_NEAREST,[Es]:r.NEAREST_MIPMAP_LINEAR,[Bt]:r.LINEAR,[Ra]:r.LINEAR_MIPMAP_NEAREST,[hi]:r.LINEAR_MIPMAP_LINEAR},ge={[Lf]:r.NEVER,[Ff]:r.ALWAYS,[Df]:r.LESS,[_u]:r.LEQUAL,[If]:r.EQUAL,[Of]:r.GEQUAL,[Uf]:r.GREATER,[Nf]:r.NOTEQUAL};function Te(I,b){if(b.type===dn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===Ra||b.magFilter===Es||b.magFilter===hi||b.minFilter===Bt||b.minFilter===Ra||b.minFilter===Es||b.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,j[b.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,j[b.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,j[b.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,me[b.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yt||b.minFilter!==Es&&b.minFilter!==hi||b.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Pe(I,b){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",D));const oe=b.source;let ce=d.get(oe);ce===void 0&&(ce={},d.set(oe,ce));const se=H(b);if(se!==I.__cacheKey){ce[se]===void 0&&(ce[se]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ce[se].usedTimes++;const Le=ce[I.__cacheKey];Le!==void 0&&(ce[I.__cacheKey].usedTimes--,Le.usedTimes===0&&N(b)),I.__cacheKey=se,I.__webglTexture=ce[se].texture}return K}function He(I,b,K){let oe=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=r.TEXTURE_3D);const ce=Pe(I,b),se=b.source;t.bindTexture(oe,I.__webglTexture,r.TEXTURE0+K);const Le=n.get(se);if(se.version!==Le.__version||ce===!0){t.activeTexture(r.TEXTURE0+K);const Me=rt.getPrimaries(rt.workingColorSpace),be=b.colorSpace===qn?null:rt.getPrimaries(b.colorSpace),Oe=b.colorSpace===qn||Me===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let de=g(b.image,!1,i.maxTextureSize);de=Be(b,de);const Ae=s.convert(b.format,b.colorSpace),qe=s.convert(b.type);let we=A(b.internalFormat,Ae,qe,b.colorSpace,b.isVideoTexture);Te(oe,b);let ve;const Ne=b.mipmaps,De=b.isVideoTexture!==!0,Ze=Le.__version===void 0||ce===!0,M=se.dataReady,W=R(b,de);if(b.isDepthTexture)we=E(b.format===Lr,b.type),Ze&&(De?t.texStorage2D(r.TEXTURE_2D,1,we,de.width,de.height):t.texImage2D(r.TEXTURE_2D,0,we,de.width,de.height,0,Ae,qe,null));else if(b.isDataTexture)if(Ne.length>0){De&&Ze&&t.texStorage2D(r.TEXTURE_2D,W,we,Ne[0].width,Ne[0].height);for(let F=0,J=Ne.length;F<J;F++)ve=Ne[F],De?M&&t.texSubImage2D(r.TEXTURE_2D,F,0,0,ve.width,ve.height,Ae,qe,ve.data):t.texImage2D(r.TEXTURE_2D,F,we,ve.width,ve.height,0,Ae,qe,ve.data);b.generateMipmaps=!1}else De?(Ze&&t.texStorage2D(r.TEXTURE_2D,W,we,de.width,de.height),M&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de.width,de.height,Ae,qe,de.data)):t.texImage2D(r.TEXTURE_2D,0,we,de.width,de.height,0,Ae,qe,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){De&&Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,W,we,Ne[0].width,Ne[0].height,de.depth);for(let F=0,J=Ne.length;F<J;F++)if(ve=Ne[F],b.format!==pn)if(Ae!==null)if(De){if(M)if(b.layerUpdates.size>0){const le=Uc(ve.width,ve.height,b.format,b.type);for(const Ce of b.layerUpdates){const Fe=ve.data.subarray(Ce*le/ve.data.BYTES_PER_ELEMENT,(Ce+1)*le/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,F,0,0,Ce,ve.width,ve.height,1,Ae,Fe,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,F,0,0,0,ve.width,ve.height,de.depth,Ae,ve.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,F,we,ve.width,ve.height,de.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?M&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,F,0,0,0,ve.width,ve.height,de.depth,Ae,qe,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,F,we,ve.width,ve.height,de.depth,0,Ae,qe,ve.data)}else{De&&Ze&&t.texStorage2D(r.TEXTURE_2D,W,we,Ne[0].width,Ne[0].height);for(let F=0,J=Ne.length;F<J;F++)ve=Ne[F],b.format!==pn?Ae!==null?De?M&&t.compressedTexSubImage2D(r.TEXTURE_2D,F,0,0,ve.width,ve.height,Ae,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,F,we,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?M&&t.texSubImage2D(r.TEXTURE_2D,F,0,0,ve.width,ve.height,Ae,qe,ve.data):t.texImage2D(r.TEXTURE_2D,F,we,ve.width,ve.height,0,Ae,qe,ve.data)}else if(b.isDataArrayTexture)if(De){if(Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,W,we,de.width,de.height,de.depth),M)if(b.layerUpdates.size>0){const F=Uc(de.width,de.height,b.format,b.type);for(const J of b.layerUpdates){const le=de.data.subarray(J*F/de.data.BYTES_PER_ELEMENT,(J+1)*F/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,de.width,de.height,1,Ae,qe,le)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,qe,de.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,Ae,qe,de.data);else if(b.isData3DTexture)De?(Ze&&t.texStorage3D(r.TEXTURE_3D,W,we,de.width,de.height,de.depth),M&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,qe,de.data)):t.texImage3D(r.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,Ae,qe,de.data);else if(b.isFramebufferTexture){if(Ze)if(De)t.texStorage2D(r.TEXTURE_2D,W,we,de.width,de.height);else{let F=de.width,J=de.height;for(let le=0;le<W;le++)t.texImage2D(r.TEXTURE_2D,le,we,F,J,0,Ae,qe,null),F>>=1,J>>=1}}else if(Ne.length>0){if(De&&Ze){const F=ke(Ne[0]);t.texStorage2D(r.TEXTURE_2D,W,we,F.width,F.height)}for(let F=0,J=Ne.length;F<J;F++)ve=Ne[F],De?M&&t.texSubImage2D(r.TEXTURE_2D,F,0,0,Ae,qe,ve):t.texImage2D(r.TEXTURE_2D,F,we,Ae,qe,ve);b.generateMipmaps=!1}else if(De){if(Ze){const F=ke(de);t.texStorage2D(r.TEXTURE_2D,W,we,F.width,F.height)}M&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,qe,de)}else t.texImage2D(r.TEXTURE_2D,0,we,Ae,qe,de);m(b)&&_(oe),Le.__version=se.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ee(I,b,K){if(b.image.length!==6)return;const oe=Pe(I,b),ce=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+K);const se=n.get(ce);if(ce.version!==se.__version||oe===!0){t.activeTexture(r.TEXTURE0+K);const Le=rt.getPrimaries(rt.workingColorSpace),Me=b.colorSpace===qn?null:rt.getPrimaries(b.colorSpace),be=b.colorSpace===qn||Le===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let J=0;J<6;J++)!Oe&&!de?Ae[J]=g(b.image[J],!0,i.maxCubemapSize):Ae[J]=de?b.image[J].image:b.image[J],Ae[J]=Be(b,Ae[J]);const qe=Ae[0],we=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),Ne=A(b.internalFormat,we,ve,b.colorSpace),De=b.isVideoTexture!==!0,Ze=se.__version===void 0||oe===!0,M=ce.dataReady;let W=R(b,qe);Te(r.TEXTURE_CUBE_MAP,b);let F;if(Oe){De&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,W,Ne,qe.width,qe.height);for(let J=0;J<6;J++){F=Ae[J].mipmaps;for(let le=0;le<F.length;le++){const Ce=F[le];b.format!==pn?we!==null?De?M&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ne,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?M&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Ce.width,Ce.height,we,ve,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ne,Ce.width,Ce.height,0,we,ve,Ce.data)}}}else{if(F=b.mipmaps,De&&Ze){F.length>0&&W++;const J=ke(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,W,Ne,J.width,J.height)}for(let J=0;J<6;J++)if(de){De?M&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae[J].width,Ae[J].height,we,ve,Ae[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ne,Ae[J].width,Ae[J].height,0,we,ve,Ae[J].data);for(let le=0;le<F.length;le++){const Fe=F[le].image[J].image;De?M&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Fe.width,Fe.height,we,ve,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ne,Fe.width,Fe.height,0,we,ve,Fe.data)}}else{De?M&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,ve,Ae[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ne,we,ve,Ae[J]);for(let le=0;le<F.length;le++){const Ce=F[le];De?M&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,we,ve,Ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ne,we,ve,Ce.image[J])}}}m(b)&&_(r.TEXTURE_CUBE_MAP),se.__version=ce.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ae(I,b,K,oe,ce,se){const Le=s.convert(K.format,K.colorSpace),Me=s.convert(K.type),be=A(K.internalFormat,Le,Me,K.colorSpace);if(!n.get(b).__hasExternalTextures){const de=Math.max(1,b.width>>se),Ae=Math.max(1,b.height>>se);ce===r.TEXTURE_3D||ce===r.TEXTURE_2D_ARRAY?t.texImage3D(ce,se,be,de,Ae,b.depth,0,Le,Me,null):t.texImage2D(ce,se,be,de,Ae,0,Le,Me,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Re(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ce,n.get(K).__webglTexture,0,Je(b)):(ce===r.TEXTURE_2D||ce>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ce,n.get(K).__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(I,b,K){if(r.bindRenderbuffer(r.RENDERBUFFER,I),b.depthBuffer){const oe=b.depthTexture,ce=oe&&oe.isDepthTexture?oe.type:null,se=E(b.stencilBuffer,ce),Le=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=Je(b);Re(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,se,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,se,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,se,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,I)}else{const oe=b.textures;for(let ce=0;ce<oe.length;ce++){const se=oe[ce],Le=s.convert(se.format,se.colorSpace),Me=s.convert(se.type),be=A(se.internalFormat,Le,Me,se.colorSpace),Oe=Je(b);K&&Re(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,be,b.width,b.height):Re(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,be,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,be,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const oe=n.get(b.depthTexture).__webglTexture,ce=Je(b);if(b.depthTexture.format===yr)Re(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(b.depthTexture.format===Lr)Re(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ue(I){const b=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,I)}else if(K){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]=r.createRenderbuffer(),he(b.__webglDepthbuffer[oe],I,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),he(b.__webglDepthbuffer,I,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(I,b,K){const oe=n.get(I);b!==void 0&&ae(oe.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Ue(I)}function Ge(I){const b=I.texture,K=n.get(I),oe=n.get(b);I.addEventListener("dispose",P);const ce=I.textures,se=I.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=b.version,a.memory.textures++),se){K.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Me]=[];for(let be=0;be<b.mipmaps.length;be++)K.__webglFramebuffer[Me][be]=r.createFramebuffer()}else K.__webglFramebuffer[Me]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Me=0;Me<b.mipmaps.length;Me++)K.__webglFramebuffer[Me]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Le)for(let Me=0,be=ce.length;Me<be;Me++){const Oe=n.get(ce[Me]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&Re(I)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Me=0;Me<ce.length;Me++){const be=ce[Me];K.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Me]);const Oe=s.convert(be.format,be.colorSpace),de=s.convert(be.type),Ae=A(be.internalFormat,Oe,de,be.colorSpace,I.isXRRenderTarget===!0),qe=Je(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ae,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,K.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),he(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Te(r.TEXTURE_CUBE_MAP,b);for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)ae(K.__webglFramebuffer[Me][be],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,be);else ae(K.__webglFramebuffer[Me],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(b)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Me=0,be=ce.length;Me<be;Me++){const Oe=ce[Me],de=n.get(Oe);t.bindTexture(r.TEXTURE_2D,de.__webglTexture),Te(r.TEXTURE_2D,Oe),ae(K.__webglFramebuffer,I,Oe,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,0),m(Oe)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Me=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,oe.__webglTexture),Te(Me,b),b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)ae(K.__webglFramebuffer[be],I,b,r.COLOR_ATTACHMENT0,Me,be);else ae(K.__webglFramebuffer,I,b,r.COLOR_ATTACHMENT0,Me,0);m(b)&&_(Me),t.unbindTexture()}I.depthBuffer&&Ue(I)}function et(I){const b=I.textures;for(let K=0,oe=b.length;K<oe;K++){const ce=b[K];if(m(ce)){const se=I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Le=n.get(ce).__webglTexture;t.bindTexture(se,Le),_(se),t.unbindTexture()}}}const O=[],at=[];function Ke(I){if(I.samples>0){if(Re(I)===!1){const b=I.textures,K=I.width,oe=I.height;let ce=r.COLOR_BUFFER_BIT;const se=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=n.get(I),Me=b.length>1;if(Me)for(let be=0;be<b.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let be=0;be<b.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ce|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ce|=r.STENCIL_BUFFER_BIT)),Me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[be]);const Oe=n.get(b[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Oe,0)}r.blitFramebuffer(0,0,K,oe,0,0,K,oe,ce,r.NEAREST),l===!0&&(O.length=0,at.length=0,O.push(r.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(O.push(se),at.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,at)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let be=0;be<b.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,Le.__webglColorRenderbuffer[be]);const Oe=n.get(b[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Je(I){return Math.min(i.maxSamples,I.samples)}function Re(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(I){const b=a.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Be(I,b){const K=I.colorSpace,oe=I.format,ce=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Un&&K!==qn&&(rt.getTransfer(K)===ht?(oe!==pn||ce!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}function ke(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=ne,this.setTexture3D=X,this.setTextureCube=re,this.rebindTextures=ze,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Re}function Vg(r,e){function t(n,i=qn){let s;const a=rt.getTransfer(i);if(n===Qn)return r.UNSIGNED_BYTE;if(n===fl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return r.BYTE;if(n===lu)return r.SHORT;if(n===es)return r.UNSIGNED_SHORT;if(n===hl)return r.INT;if(n===Xi)return r.UNSIGNED_INT;if(n===dn)return r.FLOAT;if(n===$n)return r.HALF_FLOAT;if(n===uu)return r.ALPHA;if(n===hu)return r.RGB;if(n===pn)return r.RGBA;if(n===fu)return r.LUMINANCE;if(n===du)return r.LUMINANCE_ALPHA;if(n===yr)return r.DEPTH_COMPONENT;if(n===Lr)return r.DEPTH_STENCIL;if(n===pl)return r.RED;if(n===ml)return r.RED_INTEGER;if(n===pu)return r.RG;if(n===_l)return r.RG_INTEGER;if(n===gl)return r.RGBA_INTEGER;if(n===$s||n===js||n===Js||n===Qs)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===So||n===Mo||n===Eo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===To||n===bo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yo||n===To)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Oo||n===Fo||n===Bo||n===zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ao)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===ko||n===Ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ea)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===Go||n===Vo||n===Wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ea)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Wg extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ws extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xg={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ws;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ht,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Si({vertexShader:Yg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends Ki{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,x=null;const g=new Zg,m=t.getContextAttributes();let _=null,A=null;const E=[],R=[],D=new Ve;let P=null;const C=new En;C.layers.enable(1),C.viewport=new Lt;const N=new En;N.layers.enable(2),N.viewport=new Lt;const y=[C,N],T=new Wg;T.layers.enable(1),T.layers.enable(2);let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=E[ee];return ae===void 0&&(ae=new eo,E[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=E[ee];return ae===void 0&&(ae=new eo,E[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=E[ee];return ae===void 0&&(ae=new eo,E[ee]=ae),ae.getHandSpace()};function H(ee){const ae=R.indexOf(ee.inputSource);if(ae===-1)return;const he=E[ae];he!==void 0&&(he.update(ee.inputSource,ee.frame,c||a),he.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<E.length;ee++){const ae=R[ee];ae!==null&&(R[ee]=null,E[ee].disconnect(ae))}U=null,V=null,g.reset(),e.setRenderTarget(_),p=null,d=null,h=null,i=null,A=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Yi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,he=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Lr:yr,he=m.stencil?Pr:Xi);const Ue={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Yi(d.textureWidth,d.textureHeight,{format:pn,type:Qn,depthTexture:new Lu(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(ee){for(let ae=0;ae<ee.removed.length;ae++){const he=ee.removed[ae],Se=R.indexOf(he);Se>=0&&(R[Se]=null,E[Se].disconnect(he))}for(let ae=0;ae<ee.added.length;ae++){const he=ee.added[ae];let Se=R.indexOf(he);if(Se===-1){for(let ze=0;ze<E.length;ze++)if(ze>=R.length){R.push(he),Se=ze;break}else if(R[ze]===null){R[ze]=he,Se=ze;break}if(Se===-1)break}const Ue=E[Se];Ue&&Ue.connect(he)}}const X=new q,re=new q;function j(ee,ae,he){X.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(he.matrixWorld);const Se=X.distanceTo(re),Ue=ae.projectionMatrix.elements,ze=he.projectionMatrix.elements,Ge=Ue[14]/(Ue[10]-1),et=Ue[14]/(Ue[10]+1),O=(Ue[9]+1)/Ue[5],at=(Ue[9]-1)/Ue[5],Ke=(Ue[8]-1)/Ue[0],Je=(ze[8]+1)/ze[0],Re=Ge*Ke,dt=Ge*Je,Be=Se/(-Ke+Je),ke=Be*-Ke;ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ke),ee.translateZ(Be),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const I=Ge+Be,b=et+Be,K=Re-ke,oe=dt+(Se-ke),ce=O*et/b*I,se=at*et/b*I;ee.projectionMatrix.makePerspective(K,oe,ce,se,I,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function me(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;g.texture!==null&&(ee.near=g.depthNear,ee.far=g.depthFar),T.near=N.near=C.near=ee.near,T.far=N.far=C.far=ee.far,(U!==T.near||V!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,V=T.far,C.near=U,C.far=V,N.near=U,N.far=V,C.updateProjectionMatrix(),N.updateProjectionMatrix(),ee.updateProjectionMatrix());const ae=ee.parent,he=T.cameras;me(T,ae);for(let Se=0;Se<he.length;Se++)me(he[Se],ae);he.length===2?j(T,C,N):T.projectionMatrix.copy(C.projectionMatrix),ge(ee,T,ae)};function ge(ee,ae,he){he===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(he.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Xo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let Te=null;function Pe(ee,ae){if(u=ae.getViewerPose(c||a),x=ae,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Se=!1;he.length!==T.cameras.length&&(T.cameras.length=0,Se=!0);for(let ze=0;ze<he.length;ze++){const Ge=he[ze];let et=null;if(p!==null)et=p.getViewport(Ge);else{const at=h.getViewSubImage(d,Ge);et=at.viewport,ze===0&&(e.setRenderTargetTextures(A,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(A))}let O=y[ze];O===void 0&&(O=new En,O.layers.enable(ze),O.viewport=new Lt,y[ze]=O),O.matrix.fromArray(Ge.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Ge.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(et.x,et.y,et.width,et.height),ze===0&&(T.matrix.copy(O.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Se===!0&&T.cameras.push(O)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const ze=h.getDepthInformation(he[0]);ze&&ze.isValid&&ze.texture&&g.init(e,ze,i.renderState)}}for(let he=0;he<E.length;he++){const Se=R[he],Ue=E[he];Se!==null&&Ue!==void 0&&Ue.update(Se,ae,c||a)}Te&&Te(ee,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),x=null}const He=new Pu;He.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){Te=ee},this.dispose=function(){}}}const Di=new ei,$g=new At;function jg(r,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,Au(r)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,A,E,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(m,_):_.isMeshToonMaterial?(s(m,_),h(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_)):_.isMeshStandardMaterial?(s(m,_),d(m,_),_.isMeshPhysicalMaterial&&p(m,_,R)):_.isMeshMatcapMaterial?(s(m,_),x(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),g(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?l(m,_,A,E):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===qt&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===qt&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const A=e.get(_),E=A.envMap,R=A.envMapRotation;E&&(m.envMap.value=E,Di.copy(R),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(Di)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,A,E){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*A,m.scale.value=E*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function h(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function p(m,_,A){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qt&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){const A=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jg(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const R=E.program;n.uniformBlockBinding(A,R)}function c(A,E){let R=i[A.id];R===void 0&&(x(A),R=u(A),i[A.id]=R,A.addEventListener("dispose",m));const D=E.program;n.updateUBOMapping(A,D);const P=e.render.frame;s[A.id]!==P&&(d(A),s[A.id]=P)}function u(A){const E=h();A.__bindingPointIndex=E;const R=r.createBuffer(),D=A.__size,P=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,D,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,R),R}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=i[A.id],R=A.uniforms,D=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let P=0,C=R.length;P<C;P++){const N=Array.isArray(R[P])?R[P]:[R[P]];for(let y=0,T=N.length;y<T;y++){const U=N[y];if(p(U,P,y,D)===!0){const V=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let ne=0;ne<H.length;ne++){const X=H[ne],re=g(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,V+$,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,$),$+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(A,E,R,D){const P=A.value,C=E+"_"+R;if(D[C]===void 0)return typeof P=="number"||typeof P=="boolean"?D[C]=P:D[C]=P.clone(),!0;{const N=D[C];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return D[C]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function x(A){const E=A.uniforms;let R=0;const D=16;for(let C=0,N=E.length;C<N;C++){const y=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,U=y.length;T<U;T++){const V=y[T],H=Array.isArray(V.value)?V.value:[V.value];for(let $=0,ne=H.length;$<ne;$++){const X=H[$],re=g(X),j=R%D;j!==0&&D-j<re.boundary&&(R+=D-j),V.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=re.storage}}}const P=R%D;return P>0&&(R+=D-P),A.__size=R,A.__cache={},this}function g(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const R=a.indexOf(E.__bindingPointIndex);a.splice(R,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function _(){for(const A in i)r.deleteBuffer(i[A]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}class Bv{constructor(e={}){const{canvas:t=kf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const _=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=_i,this.toneMappingExposure=1;const E=this;let R=!1,D=0,P=0,C=null,N=-1,y=null;const T=new Lt,U=new Lt;let V=null;const H=new st(0);let $=0,ne=t.width,X=t.height,re=1,j=null,me=null;const ge=new Lt(0,0,ne,X),Te=new Lt(0,0,ne,X);let Pe=!1;const He=new Cu;let ee=!1,ae=!1;const he=new At,Se=new q,Ue=new Lt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function et(){return C===null?re:1}let O=n;function at(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",F,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){const k="webgl2";if(O=at(k,w),O===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ke,Je,Re,dt,Be,ke,I,b,K,oe,ce,se,Le,Me,be,Oe,de,Ae,qe,we,ve,Ne,De,Ze;function M(){Ke=new a_(O),Ke.init(),Ne=new Vg(O,Ke),Je=new Qm(O,Ke,e,Ne),Re=new kg(O),dt=new c_(O),Be=new Ag,ke=new Gg(O,Ke,Re,Be,Je,Ne,dt),I=new t_(E),b=new s_(E),K=new md(O),De=new jm(O,K),oe=new o_(O,K,dt,De),ce=new h_(O,oe,K,dt),qe=new u_(O,Je,ke),Oe=new e_(Be),se=new bg(E,I,b,Ke,Je,De,Oe),Le=new jg(E,Be),Me=new Rg,be=new Ug(Ke),Ae=new $m(E,I,b,Re,ce,d,l),de=new zg(E,ce,Je),Ze=new Jg(O,dt,Je,Re),we=new Jm(O,Ke,dt),ve=new l_(O,Ke,dt),dt.programs=se.programs,E.capabilities=Je,E.extensions=Ke,E.properties=Be,E.renderLists=Me,E.shadowMap=de,E.state=Re,E.info=dt}M();const W=new Kg(E,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(ne,X,!1))},this.getSize=function(w){return w.set(ne,X)},this.setSize=function(w,k,f=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,X=k,t.width=Math.floor(w*re),t.height=Math.floor(k*re),f===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(ne*re,X*re).floor()},this.setDrawingBufferSize=function(w,k,f){ne=w,X=k,re=f,t.width=Math.floor(w*f),t.height=Math.floor(k*f),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,k,f,v){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,k,f,v),Re.viewport(T.copy(ge).multiplyScalar(re).round())},this.getScissor=function(w){return w.copy(Te)},this.setScissor=function(w,k,f,v){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,k,f,v),Re.scissor(U.copy(Te).multiplyScalar(re).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){Re.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(w=!0,k=!0,f=!0){let v=0;if(w){let S=!1;if(C!==null){const L=C.texture.format;S=L===gl||L===_l||L===ml}if(S){const L=C.texture.type,z=L===Qn||L===Xi||L===es||L===Pr||L===fl||L===dl,B=Ae.getClearColor(),G=Ae.getClearAlpha(),te=B.r,Z=B.g,Y=B.b;z?(p[0]=te,p[1]=Z,p[2]=Y,p[3]=G,O.clearBufferuiv(O.COLOR,0,p)):(x[0]=te,x[1]=Z,x[2]=Y,x[3]=G,O.clearBufferiv(O.COLOR,0,x))}else v|=O.COLOR_BUFFER_BIT}k&&(v|=O.DEPTH_BUFFER_BIT),f&&(v|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(v)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",F,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Me.dispose(),be.dispose(),Be.dispose(),I.dispose(),b.dispose(),ce.dispose(),De.dispose(),Ze.dispose(),se.dispose(),W.dispose(),W.removeEventListener("sessionstart",vt),W.removeEventListener("sessionend",yn),wt.stop()};function F(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=dt.autoReset,k=de.enabled,f=de.autoUpdate,v=de.needsUpdate,S=de.type;M(),dt.autoReset=w,de.enabled=k,de.autoUpdate=f,de.needsUpdate=v,de.type=S}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const k=w.target;k.removeEventListener("dispose",Ce),Fe(k)}function Fe(w){mt(w),Be.remove(w)}function mt(w){const k=Be.get(w).programs;k!==void 0&&(k.forEach(function(f){se.releaseProgram(f)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,f,v,S,L){k===null&&(k=ze);const z=S.isMesh&&S.matrixWorld.determinant()<0,B=xs(w,k,f,v,S);Re.setMaterial(v,z);let G=f.index,te=1;if(v.wireframe===!0){if(G=oe.getWireframeAttribute(f),G===void 0)return;te=2}const Z=f.drawRange,Y=f.attributes.position;let Q=Z.start*te,ue=(Z.start+Z.count)*te;L!==null&&(Q=Math.max(Q,L.start*te),ue=Math.min(ue,(L.start+L.count)*te)),G!==null?(Q=Math.max(Q,0),ue=Math.min(ue,G.count)):Y!=null&&(Q=Math.max(Q,0),ue=Math.min(ue,Y.count));const fe=ue-Q;if(fe<0||fe===1/0)return;De.setup(S,v,B,f,G);let _e,pe=we;if(G!==null&&(_e=K.get(G),pe=ve,pe.setIndex(_e)),S.isMesh)v.wireframe===!0?(Re.setLineWidth(v.wireframeLinewidth*et()),pe.setMode(O.LINES)):pe.setMode(O.TRIANGLES);else if(S.isLine){let ie=v.linewidth;ie===void 0&&(ie=1),Re.setLineWidth(ie*et()),S.isLineSegments?pe.setMode(O.LINES):S.isLineLoop?pe.setMode(O.LINE_LOOP):pe.setMode(O.LINE_STRIP)}else S.isPoints?pe.setMode(O.POINTS):S.isSprite&&pe.setMode(O.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)pe.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))pe.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const ie=S._multiDrawStarts,xe=S._multiDrawCounts,ye=S._multiDrawCount,We=G?K.get(G).bytesPerElement:1,nt=Be.get(v).currentProgram.getUniforms();for(let ct=0;ct<ye;ct++)nt.setValue(O,"_gl_DrawID",ct),pe.render(ie[ct]/We,xe[ct])}else if(S.isInstancedMesh)pe.renderInstances(Q,fe,S.count);else if(f.isInstancedBufferGeometry){const ie=f._maxInstanceCount!==void 0?f._maxInstanceCount:1/0,xe=Math.min(f.instanceCount,ie);pe.renderInstances(Q,fe,xe)}else pe.render(Q,fe)};function St(w,k,f){w.transparent===!0&&w.side===Yn&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,ji(w,k,f),w.side=xi,w.needsUpdate=!0,ji(w,k,f),w.side=Yn):ji(w,k,f)}this.compile=function(w,k,f=null){f===null&&(f=w),m=be.get(f),m.init(k),A.push(m),f.traverseVisible(function(S){S.isLight&&S.layers.test(k.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),w!==f&&w.traverseVisible(function(S){S.isLight&&S.layers.test(k.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),m.setupLights();const v=new Set;return w.traverse(function(S){const L=S.material;if(L)if(Array.isArray(L))for(let z=0;z<L.length;z++){const B=L[z];St(B,f,S),v.add(B)}else St(L,f,S),v.add(L)}),A.pop(),m=null,v},this.compileAsync=function(w,k,f=null){const v=this.compile(w,k,f);return new Promise(S=>{function L(){if(v.forEach(function(z){Be.get(z).currentProgram.isReady()&&v.delete(z)}),v.size===0){S(w);return}setTimeout(L,10)}Ke.get("KHR_parallel_shader_compile")!==null?L():setTimeout(L,10)})};let $e=null;function Mt(w){$e&&$e(w)}function vt(){wt.stop()}function yn(){wt.start()}const wt=new Pu;wt.setAnimationLoop(Mt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(w){$e=w,W.setAnimationLoop(w),w===null?wt.stop():wt.start()},W.addEventListener("sessionstart",vt),W.addEventListener("sessionend",yn),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(k),k=W.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,k,C),m=be.get(w,A.length),m.init(k),A.push(m),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),He.setFromProjectionMatrix(he),ae=this.localClippingEnabled,ee=Oe.init(this.clippingPlanes,ae),g=Me.get(w,_.length),g.init(),_.push(g),W.enabled===!0&&W.isPresenting===!0){const L=E.xr.getDepthSensingMesh();L!==null&&_n(L,k,-1/0,E.sortObjects)}_n(w,k,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(j,me),Ge=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(g,w),this.info.render.frame++,ee===!0&&Oe.beginShadows();const f=m.state.shadowsArray;de.render(f,w,k),ee===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const v=g.opaque,S=g.transmissive;if(m.setupLights(),k.isArrayCamera){const L=k.cameras;if(S.length>0)for(let z=0,B=L.length;z<B;z++){const G=L[z];bi(v,S,w,G)}Ge&&Ae.render(w);for(let z=0,B=L.length;z<B;z++){const G=L[z];On(g,w,G,G.viewport)}}else S.length>0&&bi(v,S,w,k),Ge&&Ae.render(w),On(g,w,k);C!==null&&(ke.updateMultisampleRenderTarget(C),ke.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(E,w,k),De.resetDefaultState(),N=-1,y=null,A.pop(),A.length>0?(m=A[A.length-1],ee===!0&&Oe.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function _n(w,k,f,v){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)f=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||He.intersectsSprite(w)){v&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const z=ce.update(w),B=w.material;B.visible&&g.push(w,z,B,f,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||He.intersectsObject(w))){const z=ce.update(w),B=w.material;if(v&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(z.boundingSphere===null&&z.computeBoundingSphere(),Ue.copy(z.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(B)){const G=z.groups;for(let te=0,Z=G.length;te<Z;te++){const Y=G[te],Q=B[Y.materialIndex];Q&&Q.visible&&g.push(w,z,Q,f,Ue.z,Y)}}else B.visible&&g.push(w,z,B,f,Ue.z,null)}}const L=w.children;for(let z=0,B=L.length;z<B;z++)_n(L[z],k,f,v)}function On(w,k,f,v){const S=w.opaque,L=w.transmissive,z=w.transparent;m.setupLightsView(f),ee===!0&&Oe.setGlobalState(E.clippingPlanes,f),v&&Re.viewport(T.copy(v)),S.length>0&&Ai(S,k,f),L.length>0&&Ai(L,k,f),z.length>0&&Ai(z,k,f),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function bi(w,k,f,v){if((f.isScene===!0?f.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[v.id]===void 0&&(m.state.transmissionRenderTarget[v.id]=new Yi(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?$n:Qn,minFilter:hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const L=m.state.transmissionRenderTarget[v.id],z=v.viewport||T;L.setSize(z.z,z.w);const B=E.getRenderTarget();E.setRenderTarget(L),E.getClearColor(H),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),Ge?Ae.render(f):E.clear();const G=E.toneMapping;E.toneMapping=_i;const te=v.viewport;if(v.viewport!==void 0&&(v.viewport=void 0),m.setupLightsView(v),ee===!0&&Oe.setGlobalState(E.clippingPlanes,v),Ai(w,f,v),ke.updateMultisampleRenderTarget(L),ke.updateRenderTargetMipmap(L),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Z=!1;for(let Y=0,Q=k.length;Y<Q;Y++){const ue=k[Y],fe=ue.object,_e=ue.geometry,pe=ue.material,ie=ue.group;if(pe.side===Yn&&fe.layers.test(v.layers)){const xe=pe.side;pe.side=qt,pe.needsUpdate=!0,_s(fe,f,v,_e,pe,ie),pe.side=xe,pe.needsUpdate=!0,Z=!0}}Z===!0&&(ke.updateMultisampleRenderTarget(L),ke.updateRenderTargetMipmap(L))}E.setRenderTarget(B),E.setClearColor(H,$),te!==void 0&&(v.viewport=te),E.toneMapping=G}function Ai(w,k,f){const v=k.isScene===!0?k.overrideMaterial:null;for(let S=0,L=w.length;S<L;S++){const z=w[S],B=z.object,G=z.geometry,te=v===null?z.material:v,Z=z.group;B.layers.test(f.layers)&&_s(B,k,f,G,te,Z)}}function _s(w,k,f,v,S,L){w.onBeforeRender(E,k,f,v,S,L),w.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),S.transparent===!0&&S.side===Yn&&S.forceSinglePass===!1?(S.side=qt,S.needsUpdate=!0,E.renderBufferDirect(f,k,v,S,w,L),S.side=xi,S.needsUpdate=!0,E.renderBufferDirect(f,k,v,S,w,L),S.side=Yn):E.renderBufferDirect(f,k,v,S,w,L),w.onAfterRender(E,k,f,v,S,L)}function ji(w,k,f){k.isScene!==!0&&(k=ze);const v=Be.get(w),S=m.state.lights,L=m.state.shadowsArray,z=S.state.version,B=se.getParameters(w,S.state,L,k,f),G=se.getProgramCacheKey(B);let te=v.programs;v.environment=w.isMeshStandardMaterial?k.environment:null,v.fog=k.fog,v.envMap=(w.isMeshStandardMaterial?b:I).get(w.envMap||v.environment),v.envMapRotation=v.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",Ce),te=new Map,v.programs=te);let Z=te.get(G);if(Z!==void 0){if(v.currentProgram===Z&&v.lightsStateVersion===z)return vs(w,B),Z}else B.uniforms=se.getUniforms(w),w.onBeforeCompile(B,E),Z=se.acquireProgram(B,G),te.set(G,Z),v.uniforms=B.uniforms;const Y=v.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Y.clippingPlanes=Oe.uniform),vs(w,B),v.needsLights=wa(w),v.lightsStateVersion=z,v.needsLights&&(Y.ambientLightColor.value=S.state.ambient,Y.lightProbe.value=S.state.probe,Y.directionalLights.value=S.state.directional,Y.directionalLightShadows.value=S.state.directionalShadow,Y.spotLights.value=S.state.spot,Y.spotLightShadows.value=S.state.spotShadow,Y.rectAreaLights.value=S.state.rectArea,Y.ltc_1.value=S.state.rectAreaLTC1,Y.ltc_2.value=S.state.rectAreaLTC2,Y.pointLights.value=S.state.point,Y.pointLightShadows.value=S.state.pointShadow,Y.hemisphereLights.value=S.state.hemi,Y.directionalShadowMap.value=S.state.directionalShadowMap,Y.directionalShadowMatrix.value=S.state.directionalShadowMatrix,Y.spotShadowMap.value=S.state.spotShadowMap,Y.spotLightMatrix.value=S.state.spotLightMatrix,Y.spotLightMap.value=S.state.spotLightMap,Y.pointShadowMap.value=S.state.pointShadowMap,Y.pointShadowMatrix.value=S.state.pointShadowMatrix),v.currentProgram=Z,v.uniformsList=null,Z}function gs(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=na.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function vs(w,k){const f=Be.get(w);f.outputColorSpace=k.outputColorSpace,f.batching=k.batching,f.batchingColor=k.batchingColor,f.instancing=k.instancing,f.instancingColor=k.instancingColor,f.instancingMorph=k.instancingMorph,f.skinning=k.skinning,f.morphTargets=k.morphTargets,f.morphNormals=k.morphNormals,f.morphColors=k.morphColors,f.morphTargetsCount=k.morphTargetsCount,f.numClippingPlanes=k.numClippingPlanes,f.numIntersection=k.numClipIntersection,f.vertexAlphas=k.vertexAlphas,f.vertexTangents=k.vertexTangents,f.toneMapping=k.toneMapping}function xs(w,k,f,v,S){k.isScene!==!0&&(k=ze),ke.resetTextureUnits();const L=k.fog,z=v.isMeshStandardMaterial?k.environment:null,B=C===null?E.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Un,G=(v.isMeshStandardMaterial?b:I).get(v.envMap||z),te=v.vertexColors===!0&&!!f.attributes.color&&f.attributes.color.itemSize===4,Z=!!f.attributes.tangent&&(!!v.normalMap||v.anisotropy>0),Y=!!f.morphAttributes.position,Q=!!f.morphAttributes.normal,ue=!!f.morphAttributes.color;let fe=_i;v.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=E.toneMapping);const _e=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,pe=_e!==void 0?_e.length:0,ie=Be.get(v),xe=m.state.lights;if(ee===!0&&(ae===!0||w!==y)){const tt=w===y&&v.id===N;Oe.setState(v,w,tt)}let ye=!1;v.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==xe.state.version||ie.outputColorSpace!==B||S.isBatchedMesh&&ie.batching===!1||!S.isBatchedMesh&&ie.batching===!0||S.isBatchedMesh&&ie.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&ie.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&ie.instancing===!1||!S.isInstancedMesh&&ie.instancing===!0||S.isSkinnedMesh&&ie.skinning===!1||!S.isSkinnedMesh&&ie.skinning===!0||S.isInstancedMesh&&ie.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&ie.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&ie.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&ie.instancingMorph===!1&&S.morphTexture!==null||ie.envMap!==G||v.fog===!0&&ie.fog!==L||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Oe.numPlanes||ie.numIntersection!==Oe.numIntersection)||ie.vertexAlphas!==te||ie.vertexTangents!==Z||ie.morphTargets!==Y||ie.morphNormals!==Q||ie.morphColors!==ue||ie.toneMapping!==fe||ie.morphTargetsCount!==pe)&&(ye=!0):(ye=!0,ie.__version=v.version);let We=ie.currentProgram;ye===!0&&(We=ji(v,k,S));let nt=!1,ct=!1,it=!1;const Ie=We.getUniforms(),ot=ie.uniforms;if(Re.useProgram(We.program)&&(nt=!0,ct=!0,it=!0),v.id!==N&&(N=v.id,ct=!0),nt||y!==w){Ie.setValue(O,"projectionMatrix",w.projectionMatrix),Ie.setValue(O,"viewMatrix",w.matrixWorldInverse);const tt=Ie.map.cameraPosition;tt!==void 0&&tt.setValue(O,Se.setFromMatrixPosition(w.matrixWorld)),Je.logarithmicDepthBuffer&&Ie.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(v.isMeshPhongMaterial||v.isMeshToonMaterial||v.isMeshLambertMaterial||v.isMeshBasicMaterial||v.isMeshStandardMaterial||v.isShaderMaterial)&&Ie.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,ct=!0,it=!0)}if(S.isSkinnedMesh){Ie.setOptional(O,S,"bindMatrix"),Ie.setOptional(O,S,"bindMatrixInverse");const tt=S.skeleton;tt&&(tt.boneTexture===null&&tt.computeBoneTexture(),Ie.setValue(O,"boneTexture",tt.boneTexture,ke))}S.isBatchedMesh&&(Ie.setOptional(O,S,"batchingTexture"),Ie.setValue(O,"batchingTexture",S._matricesTexture,ke),Ie.setOptional(O,S,"batchingIdTexture"),Ie.setValue(O,"batchingIdTexture",S._indirectTexture,ke),Ie.setOptional(O,S,"batchingColorTexture"),S._colorsTexture!==null&&Ie.setValue(O,"batchingColorTexture",S._colorsTexture,ke));const Ut=f.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&qe.update(S,f,We),(ct||ie.receiveShadow!==S.receiveShadow)&&(ie.receiveShadow=S.receiveShadow,Ie.setValue(O,"receiveShadow",S.receiveShadow)),v.isMeshGouraudMaterial&&v.envMap!==null&&(ot.envMap.value=G,ot.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),v.isMeshStandardMaterial&&v.envMap===null&&k.environment!==null&&(ot.envMapIntensity.value=k.environmentIntensity),ct&&(Ie.setValue(O,"toneMappingExposure",E.toneMappingExposure),ie.needsLights&&Ss(ot,it),L&&v.fog===!0&&Le.refreshFogUniforms(ot,L),Le.refreshMaterialUniforms(ot,v,re,X,m.state.transmissionRenderTarget[w.id]),na.upload(O,gs(ie),ot,ke)),v.isShaderMaterial&&v.uniformsNeedUpdate===!0&&(na.upload(O,gs(ie),ot,ke),v.uniformsNeedUpdate=!1),v.isSpriteMaterial&&Ie.setValue(O,"center",S.center),Ie.setValue(O,"modelViewMatrix",S.modelViewMatrix),Ie.setValue(O,"normalMatrix",S.normalMatrix),Ie.setValue(O,"modelMatrix",S.matrixWorld),v.isShaderMaterial||v.isRawShaderMaterial){const tt=v.uniformsGroups;for(let Qe=0,lt=tt.length;Qe<lt;Qe++){const cn=tt[Qe];Ze.update(cn,We),Ze.bind(cn,We)}}return We}function Ss(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function wa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,k,f){Be.get(w.texture).__webglTexture=k,Be.get(w.depthTexture).__webglTexture=f;const v=Be.get(w);v.__hasExternalTextures=!0,v.__autoAllocateDepthBuffer=f===void 0,v.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),v.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const f=Be.get(w);f.__webglFramebuffer=k,f.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,f=0){C=w,D=k,P=f;let v=!0,S=null,L=!1,z=!1;if(w){const G=Be.get(w);G.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(O.FRAMEBUFFER,null),v=!1):G.__webglFramebuffer===void 0?ke.setupRenderTarget(w):G.__hasExternalTextures&&ke.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(z=!0);const Z=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Z[k])?S=Z[k][f]:S=Z[k],L=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?S=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Z)?S=Z[f]:S=Z,T.copy(w.viewport),U.copy(w.scissor),V=w.scissorTest}else T.copy(ge).multiplyScalar(re).floor(),U.copy(Te).multiplyScalar(re).floor(),V=Pe;if(Re.bindFramebuffer(O.FRAMEBUFFER,S)&&v&&Re.drawBuffers(w,S),Re.viewport(T),Re.scissor(U),Re.setScissorTest(V),L){const G=Be.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,G.__webglTexture,f)}else if(z){const G=Be.get(w.texture),te=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.__webglTexture,f||0,te)}N=-1},this.readRenderTargetPixels=function(w,k,f,v,S,L,z){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&z!==void 0&&(B=B[z]),B){Re.bindFramebuffer(O.FRAMEBUFFER,B);try{const G=w.texture,te=G.format,Z=G.type;if(!Je.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-v&&f>=0&&f<=w.height-S&&O.readPixels(k,f,v,S,Ne.convert(te),Ne.convert(Z),L)}finally{const G=C!==null?Be.get(C).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,G)}}},this.readRenderTargetPixelsAsync=async function(w,k,f,v,S,L,z){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&z!==void 0&&(B=B[z]),B){Re.bindFramebuffer(O.FRAMEBUFFER,B);try{const G=w.texture,te=G.format,Z=G.type;if(!Je.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-v&&f>=0&&f<=w.height-S){const Y=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Y),O.bufferData(O.PIXEL_PACK_BUFFER,L.byteLength,O.STREAM_READ),O.readPixels(k,f,v,S,Ne.convert(te),Ne.convert(Z),0),O.flush();const Q=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await Hf(O,Q,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Y),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,L)}finally{O.deleteBuffer(Y),O.deleteSync(Q)}return L}}finally{const G=C!==null?Be.get(C).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,G)}}},this.copyFramebufferToTexture=function(w,k=null,f=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const v=Math.pow(2,-f),S=Math.floor(w.image.width*v),L=Math.floor(w.image.height*v),z=k!==null?k.x:0,B=k!==null?k.y:0;ke.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,f,0,0,z,B,S,L),Re.unbindTexture()},this.copyTextureToTexture=function(w,k,f=null,v=null,S=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),v=arguments[0]||null,w=arguments[1],k=arguments[2],S=arguments[3]||0,f=null);let L,z,B,G,te,Z;f!==null?(L=f.max.x-f.min.x,z=f.max.y-f.min.y,B=f.min.x,G=f.min.y):(L=w.image.width,z=w.image.height,B=0,G=0),v!==null?(te=v.x,Z=v.y):(te=0,Z=0);const Y=Ne.convert(k.format),Q=Ne.convert(k.type);ke.setTexture2D(k,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const ue=O.getParameter(O.UNPACK_ROW_LENGTH),fe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_e=O.getParameter(O.UNPACK_SKIP_PIXELS),pe=O.getParameter(O.UNPACK_SKIP_ROWS),ie=O.getParameter(O.UNPACK_SKIP_IMAGES),xe=w.isCompressedTexture?w.mipmaps[S]:w.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,xe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,B),O.pixelStorei(O.UNPACK_SKIP_ROWS,G),w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,S,te,Z,L,z,Y,Q,xe.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,S,te,Z,xe.width,xe.height,Y,xe.data):O.texSubImage2D(O.TEXTURE_2D,S,te,Z,L,z,Y,Q,xe),O.pixelStorei(O.UNPACK_ROW_LENGTH,ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_e),O.pixelStorei(O.UNPACK_SKIP_ROWS,pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ie),S===0&&k.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,k,f=null,v=null,S=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),f=arguments[0]||null,v=arguments[1]||null,w=arguments[2],k=arguments[3],S=arguments[4]||0);let L,z,B,G,te,Z,Y,Q,ue;const fe=w.isCompressedTexture?w.mipmaps[S]:w.image;f!==null?(L=f.max.x-f.min.x,z=f.max.y-f.min.y,B=f.max.z-f.min.z,G=f.min.x,te=f.min.y,Z=f.min.z):(L=fe.width,z=fe.height,B=fe.depth,G=0,te=0,Z=0),v!==null?(Y=v.x,Q=v.y,ue=v.z):(Y=0,Q=0,ue=0);const _e=Ne.convert(k.format),pe=Ne.convert(k.type);let ie;if(k.isData3DTexture)ke.setTexture3D(k,0),ie=O.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)ke.setTexture2DArray(k,0),ie=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const xe=O.getParameter(O.UNPACK_ROW_LENGTH),ye=O.getParameter(O.UNPACK_IMAGE_HEIGHT),We=O.getParameter(O.UNPACK_SKIP_PIXELS),nt=O.getParameter(O.UNPACK_SKIP_ROWS),ct=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,G),O.pixelStorei(O.UNPACK_SKIP_ROWS,te),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Z),w.isDataTexture||w.isData3DTexture?O.texSubImage3D(ie,S,Y,Q,ue,L,z,B,_e,pe,fe.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(ie,S,Y,Q,ue,L,z,B,_e,fe.data):O.texSubImage3D(ie,S,Y,Q,ue,L,z,B,_e,pe,fe),O.pixelStorei(O.UNPACK_ROW_LENGTH,xe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye),O.pixelStorei(O.UNPACK_SKIP_PIXELS,We),O.pixelStorei(O.UNPACK_SKIP_ROWS,nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ct),S===0&&k.generateMipmaps&&O.generateMipmap(ie),Re.unbindTexture()},this.initRenderTarget=function(w){Be.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){D=0,P=0,C=null,Re.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vl?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Sa?"display-p3":"srgb"}}class zv extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qg extends Ht{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Yt,u=Yt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e0 extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nc=new At,qo=new xl,Xs=new Ma,Ys=new q;class kv extends Zt{constructor(e=new yi,t=new e0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;Nc.copy(i).invert(),qo.copy(e.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=d,g=p;x<g;x++){const m=c.getX(x);Ys.fromBufferAttribute(h,m),Oc(Ys,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,g=p;x<g;x++)Ys.fromBufferAttribute(h,x),Oc(Ys,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Oc(r,e,t,n,i,s,a){const o=qo.distanceSqToPoint(r);if(o<t){const l=new q;qo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}const ha={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class t0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const n0=new t0;class ds{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class i0 extends Error{constructor(e,t){super(e),this.response=t}}class r0 extends ds{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ha.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,x=p!==0;let g=0;const m=new ReadableStream({start(_){A();function A(){h.read().then(({done:E,value:R})=>{if(E)_.close();else{g+=R.byteLength;const D=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:p});for(let P=0,C=u.length;P<C;P++){const N=u[P];N.onProgress&&N.onProgress(D)}_.enqueue(R),A()}},E=>{_.error(E)})}}});return new Response(m)}else throw new i0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{ha.add(e,c);const u=Gn[e];delete Gn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class s0 extends ds{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ha.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ts("img");function l(){u(),ha.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class a0 extends ds{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Qg,o=new r0(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Kn,a.wrapT=c.wrapT!==void 0?c.wrapT:Kn,a.magFilter=c.magFilter!==void 0?c.magFilter:Bt,a.minFilter=c.minFilter!==void 0?c.minFilter:Bt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=hi),c.mipmapCount===1&&(a.minFilter=Bt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class Hv extends ds{constructor(e){super(e)}load(e,t,n,i){const s=new Ht,a=new s0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ou{constructor(e){this.value=e}clone(){return new Ou(this.value.clone===void 0?this.value:this.value.clone())}}class Fc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);const Bc={type:"change"},to={type:"start"},zc={type:"end"},qs=new xl,kc=new ui,o0=Math.cos(70*zf.DEG2RAD);class Gv extends Ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",be),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bc),n.update(),s=i.NONE},this.update=function(){const M=new q,W=new qi().setFromUnitVectors(e.up,new q(0,1,0)),F=W.clone().invert(),J=new q,le=new qi,Ce=new q,Fe=2*Math.PI;return function(St=null){const $e=n.object.position;M.copy($e).sub(n.target),M.applyQuaternion(W),o.setFromVector3(M),n.autoRotate&&s===i.NONE&&V(T(St)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Mt=n.minAzimuthAngle,vt=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(vt)&&(Mt<-Math.PI?Mt+=Fe:Mt>Math.PI&&(Mt-=Fe),vt<-Math.PI?vt+=Fe:vt>Math.PI&&(vt-=Fe),Mt<=vt?o.theta=Math.max(Mt,Math.min(vt,o.theta)):o.theta=o.theta>(Mt+vt)/2?Math.max(Mt,o.theta):Math.min(vt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let yn=!1;if(n.zoomToCursor&&P||n.object.isOrthographicCamera)o.radius=ge(o.radius);else{const wt=o.radius;o.radius=ge(o.radius*c),yn=wt!=o.radius}if(M.setFromSpherical(o),M.applyQuaternion(F),$e.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&P){let wt=null;if(n.object.isPerspectiveCamera){const _n=M.length();wt=ge(_n*c);const On=_n-wt;n.object.position.addScaledVector(R,On),n.object.updateMatrixWorld(),yn=!!On}else if(n.object.isOrthographicCamera){const _n=new q(D.x,D.y,0);_n.unproject(n.object);const On=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),yn=On!==n.object.zoom;const bi=new q(D.x,D.y,0);bi.unproject(n.object),n.object.position.sub(bi).add(_n),n.object.updateMatrixWorld(),wt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wt).add(n.object.position):(qs.origin.copy(n.object.position),qs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(qs.direction))<o0?e.lookAt(n.target):(kc.setFromNormalAndCoplanarPoint(n.object.up,n.target),qs.intersectPlane(kc,n.target))))}else if(n.object.isOrthographicCamera){const wt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),wt!==n.object.zoom&&(n.object.updateProjectionMatrix(),yn=!0)}return c=1,P=!1,yn||J.distanceToSquared(n.object.position)>a||8*(1-le.dot(n.object.quaternion))>a||Ce.distanceToSquared(n.target)>a?(n.dispatchEvent(Bc),J.copy(n.object.position),le.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ae),n.domElement.removeEventListener("pointerdown",ke),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",b),n.domElement.getRootNode().removeEventListener("keydown",Le,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Fc,l=new Fc;let c=1;const u=new q,h=new Ve,d=new Ve,p=new Ve,x=new Ve,g=new Ve,m=new Ve,_=new Ve,A=new Ve,E=new Ve,R=new q,D=new Ve;let P=!1;const C=[],N={};let y=!1;function T(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function U(M){const W=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*W)}function V(M){l.theta-=M}function H(M){l.phi-=M}const $=function(){const M=new q;return function(F,J){M.setFromMatrixColumn(J,0),M.multiplyScalar(-F),u.add(M)}}(),ne=function(){const M=new q;return function(F,J){n.screenSpacePanning===!0?M.setFromMatrixColumn(J,1):(M.setFromMatrixColumn(J,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(F),u.add(M)}}(),X=function(){const M=new q;return function(F,J){const le=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;M.copy(Ce).sub(n.target);let Fe=M.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),$(2*F*Fe/le.clientHeight,n.object.matrix),ne(2*J*Fe/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(F*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),ne(J*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function re(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function me(M,W){if(!n.zoomToCursor)return;P=!0;const F=n.domElement.getBoundingClientRect(),J=M-F.left,le=W-F.top,Ce=F.width,Fe=F.height;D.x=J/Ce*2-1,D.y=-(le/Fe)*2+1,R.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function ge(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function Te(M){h.set(M.clientX,M.clientY)}function Pe(M){me(M.clientX,M.clientX),_.set(M.clientX,M.clientY)}function He(M){x.set(M.clientX,M.clientY)}function ee(M){d.set(M.clientX,M.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const W=n.domElement;V(2*Math.PI*p.x/W.clientHeight),H(2*Math.PI*p.y/W.clientHeight),h.copy(d),n.update()}function ae(M){A.set(M.clientX,M.clientY),E.subVectors(A,_),E.y>0?re(U(E.y)):E.y<0&&j(U(E.y)),_.copy(A),n.update()}function he(M){g.set(M.clientX,M.clientY),m.subVectors(g,x).multiplyScalar(n.panSpeed),X(m.x,m.y),x.copy(g),n.update()}function Se(M){me(M.clientX,M.clientY),M.deltaY<0?j(U(M.deltaY)):M.deltaY>0&&re(U(M.deltaY)),n.update()}function Ue(M){let W=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),W=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),W=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),W=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),W=!0;break}W&&(M.preventDefault(),n.update())}function ze(M){if(C.length===1)h.set(M.pageX,M.pageY);else{const W=De(M),F=.5*(M.pageX+W.x),J=.5*(M.pageY+W.y);h.set(F,J)}}function Ge(M){if(C.length===1)x.set(M.pageX,M.pageY);else{const W=De(M),F=.5*(M.pageX+W.x),J=.5*(M.pageY+W.y);x.set(F,J)}}function et(M){const W=De(M),F=M.pageX-W.x,J=M.pageY-W.y,le=Math.sqrt(F*F+J*J);_.set(0,le)}function O(M){n.enableZoom&&et(M),n.enablePan&&Ge(M)}function at(M){n.enableZoom&&et(M),n.enableRotate&&ze(M)}function Ke(M){if(C.length==1)d.set(M.pageX,M.pageY);else{const F=De(M),J=.5*(M.pageX+F.x),le=.5*(M.pageY+F.y);d.set(J,le)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const W=n.domElement;V(2*Math.PI*p.x/W.clientHeight),H(2*Math.PI*p.y/W.clientHeight),h.copy(d)}function Je(M){if(C.length===1)g.set(M.pageX,M.pageY);else{const W=De(M),F=.5*(M.pageX+W.x),J=.5*(M.pageY+W.y);g.set(F,J)}m.subVectors(g,x).multiplyScalar(n.panSpeed),X(m.x,m.y),x.copy(g)}function Re(M){const W=De(M),F=M.pageX-W.x,J=M.pageY-W.y,le=Math.sqrt(F*F+J*J);A.set(0,le),E.set(0,Math.pow(A.y/_.y,n.zoomSpeed)),re(E.y),_.copy(A);const Ce=(M.pageX+W.x)*.5,Fe=(M.pageY+W.y)*.5;me(Ce,Fe)}function dt(M){n.enableZoom&&Re(M),n.enablePan&&Je(M)}function Be(M){n.enableZoom&&Re(M),n.enableRotate&&Ke(M)}function ke(M){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",I),n.domElement.addEventListener("pointerup",b)),!ve(M)&&(qe(M),M.pointerType==="touch"?Oe(M):K(M)))}function I(M){n.enabled!==!1&&(M.pointerType==="touch"?de(M):oe(M))}function b(M){switch(we(M),C.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",b),n.dispatchEvent(zc),s=i.NONE;break;case 1:const W=C[0],F=N[W];Oe({pointerId:W,pageX:F.x,pageY:F.y});break}}function K(M){let W;switch(M.button){case 0:W=n.mouseButtons.LEFT;break;case 1:W=n.mouseButtons.MIDDLE;break;case 2:W=n.mouseButtons.RIGHT;break;default:W=-1}switch(W){case Ji.DOLLY:if(n.enableZoom===!1)return;Pe(M),s=i.DOLLY;break;case Ji.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;He(M),s=i.PAN}else{if(n.enableRotate===!1)return;Te(M),s=i.ROTATE}break;case Ji.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;Te(M),s=i.ROTATE}else{if(n.enablePan===!1)return;He(M),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(to)}function oe(M){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(M);break;case i.DOLLY:if(n.enableZoom===!1)return;ae(M);break;case i.PAN:if(n.enablePan===!1)return;he(M);break}}function ce(M){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(M.preventDefault(),n.dispatchEvent(to),Se(se(M)),n.dispatchEvent(zc))}function se(M){const W=M.deltaMode,F={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(W){case 1:F.deltaY*=16;break;case 2:F.deltaY*=100;break}return M.ctrlKey&&!y&&(F.deltaY*=10),F}function Le(M){M.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",Me,{passive:!0,capture:!0}))}function Me(M){M.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",Me,{passive:!0,capture:!0}))}function be(M){n.enabled===!1||n.enablePan===!1||Ue(M)}function Oe(M){switch(Ne(M),C.length){case 1:switch(n.touches.ONE){case Qi.ROTATE:if(n.enableRotate===!1)return;ze(M),s=i.TOUCH_ROTATE;break;case Qi.PAN:if(n.enablePan===!1)return;Ge(M),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(M),s=i.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;at(M),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(to)}function de(M){switch(Ne(M),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ke(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Je(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;dt(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(M),n.update();break;default:s=i.NONE}}function Ae(M){n.enabled!==!1&&M.preventDefault()}function qe(M){C.push(M.pointerId)}function we(M){delete N[M.pointerId];for(let W=0;W<C.length;W++)if(C[W]==M.pointerId){C.splice(W,1);return}}function ve(M){for(let W=0;W<C.length;W++)if(C[W]==M.pointerId)return!0;return!1}function Ne(M){let W=N[M.pointerId];W===void 0&&(W=new Ve,N[M.pointerId]=W),W.set(M.pageX,M.pageY)}function De(M){const W=M.pointerId===C[0]?C[1]:C[0];return N[W]}n.domElement.addEventListener("contextmenu",Ae),n.domElement.addEventListener("pointerdown",ke),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",ce,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Le,{passive:!0,capture:!0}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var fn=Uint8Array,xr=Uint16Array,l0=Int32Array,Fu=new fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Bu=new fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),c0=new fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zu=function(r,e){for(var t=new xr(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new l0(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},ku=zu(Fu,2),Hu=ku.b,u0=ku.r;Hu[28]=258,u0[258]=28;var h0=zu(Bu,0),f0=h0.b,Zo=new xr(32768);for(var ft=0;ft<32768;++ft){var ci=(ft&43690)>>1|(ft&21845)<<1;ci=(ci&52428)>>2|(ci&13107)<<2,ci=(ci&61680)>>4|(ci&3855)<<4,Zo[ft]=((ci&65280)>>8|(ci&255)<<8)>>1}var $r=function(r,e,t){for(var n=r.length,i=0,s=new xr(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new xr(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new xr(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=a[r[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[Zo[h]>>l]=c}else for(o=new xr(n),i=0;i<n;++i)r[i]&&(o[i]=Zo[a[r[i]-1]++]>>15-r[i]);return o},ps=new fn(288);for(var ft=0;ft<144;++ft)ps[ft]=8;for(var ft=144;ft<256;++ft)ps[ft]=9;for(var ft=256;ft<280;++ft)ps[ft]=7;for(var ft=280;ft<288;++ft)ps[ft]=8;var Gu=new fn(32);for(var ft=0;ft<32;++ft)Gu[ft]=5;var d0=$r(ps,9,1),p0=$r(Gu,5,1),no=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Sn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},io=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},m0=function(r){return(r+7)/8|0},_0=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new fn(r.subarray(e,t))},g0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mn=function(r,e,t){var n=new Error(e||g0[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Mn),!t)throw n;return n},v0=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new fn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new fn(i*3));var c=function(et){var O=t.length;if(et>O){var at=new fn(Math.max(O*2,et));at.set(t),t=at}},u=e.f||0,h=e.p||0,d=e.b||0,p=e.l,x=e.d,g=e.m,m=e.n,_=i*8;do{if(!p){u=Sn(r,h,1);var A=Sn(r,h+1,3);if(h+=3,A)if(A==1)p=d0,x=p0,g=9,m=5;else if(A==2){var P=Sn(r,h,31)+257,C=Sn(r,h+10,15)+4,N=P+Sn(r,h+5,31)+1;h+=14;for(var y=new fn(N),T=new fn(19),U=0;U<C;++U)T[c0[U]]=Sn(r,h+U*3,7);h+=C*3;for(var V=no(T),H=(1<<V)-1,$=$r(T,V,1),U=0;U<N;){var ne=$[Sn(r,h,H)];h+=ne&15;var E=ne>>4;if(E<16)y[U++]=E;else{var X=0,re=0;for(E==16?(re=3+Sn(r,h,3),h+=2,X=y[U-1]):E==17?(re=3+Sn(r,h,7),h+=3):E==18&&(re=11+Sn(r,h,127),h+=7);re--;)y[U++]=X}}var j=y.subarray(0,P),me=y.subarray(P);g=no(j),m=no(me),p=$r(j,g,1),x=$r(me,m,1)}else Mn(1);else{var E=m0(h)+4,R=r[E-4]|r[E-3]<<8,D=E+R;if(D>i){l&&Mn(0);break}o&&c(d+R),t.set(r.subarray(E,D),d),e.b=d+=R,e.p=h=D*8,e.f=u;continue}if(h>_){l&&Mn(0);break}}o&&c(d+131072);for(var ge=(1<<g)-1,Te=(1<<m)-1,Pe=h;;Pe=h){var X=p[io(r,h)&ge],He=X>>4;if(h+=X&15,h>_){l&&Mn(0);break}if(X||Mn(2),He<256)t[d++]=He;else if(He==256){Pe=h,p=null;break}else{var ee=He-254;if(He>264){var U=He-257,ae=Fu[U];ee=Sn(r,h,(1<<ae)-1)+Hu[U],h+=ae}var he=x[io(r,h)&Te],Se=he>>4;he||Mn(3),h+=he&15;var me=f0[Se];if(Se>3){var ae=Bu[Se];me+=io(r,h)&(1<<ae)-1,h+=ae}if(h>_){l&&Mn(0);break}o&&c(d+131072);var Ue=d+ee;if(d<me){var ze=s-me,Ge=Math.min(me,Ue);for(ze+d<0&&Mn(3);d<Ge;++d)t[d]=n[ze+d]}for(;d<Ue;++d)t[d]=t[d-me]}}e.l=p,e.p=Pe,e.b=d,e.f=u,p&&(u=1,e.m=g,e.d=x,e.n=m)}while(!u);return d!=t.length&&a?_0(t,0,d):t.subarray(0,d)},x0=new fn(0),S0=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Mn(6,"invalid zlib data"),(r[1]>>5&1)==1&&Mn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Zs(r,e){return v0(r.subarray(S0(r),-4),{i:2},e,e)}var M0=typeof TextDecoder<"u"&&new TextDecoder,E0=0;try{M0.decode(x0,{stream:!0}),E0=1}catch{}class Vv extends a0{constructor(e){super(e),this.type=$n}parse(e){const y=Math.pow(2.7182818,2.2);function T(f,v){let S=0;for(let z=0;z<65536;++z)(z==0||f[z>>3]&1<<(z&7))&&(v[S++]=z);const L=S-1;for(;S<65536;)v[S++]=0;return L}function U(f){for(let v=0;v<16384;v++)f[v]={},f[v].len=0,f[v].lit=0,f[v].p=null}const V={l:0,c:0,lc:0};function H(f,v,S,L,z){for(;S<f;)v=v<<8|Ne(L,z),S+=8;S-=f,V.l=v>>S&(1<<f)-1,V.c=v,V.lc=S}const $=new Array(59);function ne(f){for(let S=0;S<=58;++S)$[S]=0;for(let S=0;S<65537;++S)$[f[S]]+=1;let v=0;for(let S=58;S>0;--S){const L=v+$[S]>>1;$[S]=v,v=L}for(let S=0;S<65537;++S){const L=f[S];L>0&&(f[S]=L|$[L]++<<6)}}function X(f,v,S,L,z,B){const G=v;let te=0,Z=0;for(;L<=z;L++){if(G.value-v.value>S)return!1;H(6,te,Z,f,G);const Y=V.l;if(te=V.c,Z=V.lc,B[L]=Y,Y==63){if(G.value-v.value>S)throw new Error("Something wrong with hufUnpackEncTable");H(8,te,Z,f,G);let Q=V.l+6;if(te=V.c,Z=V.lc,L+Q>z+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)B[L++]=0;L--}else if(Y>=59){let Q=Y-59+2;if(L+Q>z+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)B[L++]=0;L--}}ne(B)}function re(f){return f&63}function j(f){return f>>6}function me(f,v,S,L){for(;v<=S;v++){const z=j(f[v]),B=re(f[v]);if(z>>B)throw new Error("Invalid table entry");if(B>14){const G=L[z>>B-14];if(G.len)throw new Error("Invalid table entry");if(G.lit++,G.p){const te=G.p;G.p=new Array(G.lit);for(let Z=0;Z<G.lit-1;++Z)G.p[Z]=te[Z]}else G.p=new Array(1);G.p[G.lit-1]=v}else if(B){let G=0;for(let te=1<<14-B;te>0;te--){const Z=L[(z<<14-B)+G];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=B,Z.lit=v,G++}}}return!0}const ge={c:0,lc:0};function Te(f,v,S,L){f=f<<8|Ne(S,L),v+=8,ge.c=f,ge.lc=v}const Pe={c:0,lc:0};function He(f,v,S,L,z,B,G,te,Z){if(f==v){L<8&&(Te(S,L,z,B),S=ge.c,L=ge.lc),L-=8;let Y=S>>L;if(Y=new Uint8Array([Y])[0],te.value+Y>Z)return!1;const Q=G[te.value-1];for(;Y-- >0;)G[te.value++]=Q}else if(te.value<Z)G[te.value++]=f;else return!1;Pe.c=S,Pe.lc=L}function ee(f){return f&65535}function ae(f){const v=ee(f);return v>32767?v-65536:v}const he={a:0,b:0};function Se(f,v){const S=ae(f),z=ae(v),B=S+(z&1)+(z>>1),G=B,te=B-z;he.a=G,he.b=te}function Ue(f,v){const S=ee(f),L=ee(v),z=S-(L>>1)&65535,B=L+z-32768&65535;he.a=B,he.b=z}function ze(f,v,S,L,z,B,G){const te=G<16384,Z=S>z?z:S;let Y=1,Q,ue;for(;Y<=Z;)Y<<=1;for(Y>>=1,Q=Y,Y>>=1;Y>=1;){ue=0;const fe=ue+B*(z-Q),_e=B*Y,pe=B*Q,ie=L*Y,xe=L*Q;let ye,We,nt,ct;for(;ue<=fe;ue+=pe){let it=ue;const Ie=ue+L*(S-Q);for(;it<=Ie;it+=xe){const ot=it+ie,Ut=it+_e,tt=Ut+ie;te?(Se(f[it+v],f[Ut+v]),ye=he.a,nt=he.b,Se(f[ot+v],f[tt+v]),We=he.a,ct=he.b,Se(ye,We),f[it+v]=he.a,f[ot+v]=he.b,Se(nt,ct),f[Ut+v]=he.a,f[tt+v]=he.b):(Ue(f[it+v],f[Ut+v]),ye=he.a,nt=he.b,Ue(f[ot+v],f[tt+v]),We=he.a,ct=he.b,Ue(ye,We),f[it+v]=he.a,f[ot+v]=he.b,Ue(nt,ct),f[Ut+v]=he.a,f[tt+v]=he.b)}if(S&Y){const ot=it+_e;te?Se(f[it+v],f[ot+v]):Ue(f[it+v],f[ot+v]),ye=he.a,f[ot+v]=he.b,f[it+v]=ye}}if(z&Y){let it=ue;const Ie=ue+L*(S-Q);for(;it<=Ie;it+=xe){const ot=it+ie;te?Se(f[it+v],f[ot+v]):Ue(f[it+v],f[ot+v]),ye=he.a,f[ot+v]=he.b,f[it+v]=ye}}Q=Y,Y>>=1}return ue}function Ge(f,v,S,L,z,B,G,te,Z){let Y=0,Q=0;const ue=G,fe=Math.trunc(L.value+(z+7)/8);for(;L.value<fe;)for(Te(Y,Q,S,L),Y=ge.c,Q=ge.lc;Q>=14;){const pe=Y>>Q-14&16383,ie=v[pe];if(ie.len)Q-=ie.len,He(ie.lit,B,Y,Q,S,L,te,Z,ue),Y=Pe.c,Q=Pe.lc;else{if(!ie.p)throw new Error("hufDecode issues");let xe;for(xe=0;xe<ie.lit;xe++){const ye=re(f[ie.p[xe]]);for(;Q<ye&&L.value<fe;)Te(Y,Q,S,L),Y=ge.c,Q=ge.lc;if(Q>=ye&&j(f[ie.p[xe]])==(Y>>Q-ye&(1<<ye)-1)){Q-=ye,He(ie.p[xe],B,Y,Q,S,L,te,Z,ue),Y=Pe.c,Q=Pe.lc;break}}if(xe==ie.lit)throw new Error("hufDecode issues")}}const _e=8-z&7;for(Y>>=_e,Q-=_e;Q>0;){const pe=v[Y<<14-Q&16383];if(pe.len)Q-=pe.len,He(pe.lit,B,Y,Q,S,L,te,Z,ue),Y=Pe.c,Q=Pe.lc;else throw new Error("hufDecode issues")}return!0}function et(f,v,S,L,z,B){const G={value:0},te=S.value,Z=ve(v,S),Y=ve(v,S);S.value+=4;const Q=ve(v,S);if(S.value+=4,Z<0||Z>=65537||Y<0||Y>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ue=new Array(65537),fe=new Array(16384);U(fe);const _e=L-(S.value-te);if(X(f,S,_e,Z,Y,ue),Q>8*(L-(S.value-te)))throw new Error("Something wrong with hufUncompress");me(ue,Z,Y,fe),Ge(ue,fe,f,S,Q,Y,B,z,G)}function O(f,v,S){for(let L=0;L<S;++L)v[L]=f[v[L]]}function at(f){for(let v=1;v<f.length;v++){const S=f[v-1]+f[v]-128;f[v]=S}}function Ke(f,v){let S=0,L=Math.floor((f.length+1)/2),z=0;const B=f.length-1;for(;!(z>B||(v[z++]=f[S++],z>B));)v[z++]=f[L++]}function Je(f){let v=f.byteLength;const S=new Array;let L=0;const z=new DataView(f);for(;v>0;){const B=z.getInt8(L++);if(B<0){const G=-B;v-=G+1;for(let te=0;te<G;te++)S.push(z.getUint8(L++))}else{const G=B;v-=2;const te=z.getUint8(L++);for(let Z=0;Z<G+1;Z++)S.push(te)}}return S}function Re(f,v,S,L,z,B){let G=new DataView(B.buffer);const te=S[f.idx[0]].width,Z=S[f.idx[0]].height,Y=3,Q=Math.floor(te/8),ue=Math.ceil(te/8),fe=Math.ceil(Z/8),_e=te-(ue-1)*8,pe=Z-(fe-1)*8,ie={value:0},xe=new Array(Y),ye=new Array(Y),We=new Array(Y),nt=new Array(Y),ct=new Array(Y);for(let Ie=0;Ie<Y;++Ie)ct[Ie]=v[f.idx[Ie]],xe[Ie]=Ie<1?0:xe[Ie-1]+ue*fe,ye[Ie]=new Float32Array(64),We[Ie]=new Uint16Array(64),nt[Ie]=new Uint16Array(ue*64);for(let Ie=0;Ie<fe;++Ie){let ot=8;Ie==fe-1&&(ot=pe);let Ut=8;for(let Qe=0;Qe<ue;++Qe){Qe==ue-1&&(Ut=_e);for(let lt=0;lt<Y;++lt)We[lt].fill(0),We[lt][0]=z[xe[lt]++],dt(ie,L,We[lt]),Be(We[lt],ye[lt]),ke(ye[lt]);I(ye);for(let lt=0;lt<Y;++lt)b(ye[lt],nt[lt],Qe*64)}let tt=0;for(let Qe=0;Qe<Y;++Qe){const lt=S[f.idx[Qe]].type;for(let cn=8*Ie;cn<8*Ie+ot;++cn){tt=ct[Qe][cn];for(let kr=0;kr<Q;++kr){const Tn=kr*64+(cn&7)*8;G.setUint16(tt+0*2*lt,nt[Qe][Tn+0],!0),G.setUint16(tt+1*2*lt,nt[Qe][Tn+1],!0),G.setUint16(tt+2*2*lt,nt[Qe][Tn+2],!0),G.setUint16(tt+3*2*lt,nt[Qe][Tn+3],!0),G.setUint16(tt+4*2*lt,nt[Qe][Tn+4],!0),G.setUint16(tt+5*2*lt,nt[Qe][Tn+5],!0),G.setUint16(tt+6*2*lt,nt[Qe][Tn+6],!0),G.setUint16(tt+7*2*lt,nt[Qe][Tn+7],!0),tt+=8*2*lt}}if(Q!=ue)for(let cn=8*Ie;cn<8*Ie+ot;++cn){const kr=ct[Qe][cn]+8*Q*2*lt,Tn=Q*64+(cn&7)*8;for(let Ms=0;Ms<Ut;++Ms)G.setUint16(kr+Ms*2*lt,nt[Qe][Tn+Ms],!0)}}}const it=new Uint16Array(te);G=new DataView(B.buffer);for(let Ie=0;Ie<Y;++Ie){S[f.idx[Ie]].decoded=!0;const ot=S[f.idx[Ie]].type;if(S[Ie].type==2)for(let Ut=0;Ut<Z;++Ut){const tt=ct[Ie][Ut];for(let Qe=0;Qe<te;++Qe)it[Qe]=G.getUint16(tt+Qe*2*ot,!0);for(let Qe=0;Qe<te;++Qe)G.setFloat32(tt+Qe*2*ot,F(it[Qe]),!0)}}}function dt(f,v,S){let L,z=1;for(;z<64;)L=v[f.value],L==65280?z=64:L>>8==255?z+=L&255:(S[z]=L,z++),f.value++}function Be(f,v){v[0]=F(f[0]),v[1]=F(f[1]),v[2]=F(f[5]),v[3]=F(f[6]),v[4]=F(f[14]),v[5]=F(f[15]),v[6]=F(f[27]),v[7]=F(f[28]),v[8]=F(f[2]),v[9]=F(f[4]),v[10]=F(f[7]),v[11]=F(f[13]),v[12]=F(f[16]),v[13]=F(f[26]),v[14]=F(f[29]),v[15]=F(f[42]),v[16]=F(f[3]),v[17]=F(f[8]),v[18]=F(f[12]),v[19]=F(f[17]),v[20]=F(f[25]),v[21]=F(f[30]),v[22]=F(f[41]),v[23]=F(f[43]),v[24]=F(f[9]),v[25]=F(f[11]),v[26]=F(f[18]),v[27]=F(f[24]),v[28]=F(f[31]),v[29]=F(f[40]),v[30]=F(f[44]),v[31]=F(f[53]),v[32]=F(f[10]),v[33]=F(f[19]),v[34]=F(f[23]),v[35]=F(f[32]),v[36]=F(f[39]),v[37]=F(f[45]),v[38]=F(f[52]),v[39]=F(f[54]),v[40]=F(f[20]),v[41]=F(f[22]),v[42]=F(f[33]),v[43]=F(f[38]),v[44]=F(f[46]),v[45]=F(f[51]),v[46]=F(f[55]),v[47]=F(f[60]),v[48]=F(f[21]),v[49]=F(f[34]),v[50]=F(f[37]),v[51]=F(f[47]),v[52]=F(f[50]),v[53]=F(f[56]),v[54]=F(f[59]),v[55]=F(f[61]),v[56]=F(f[35]),v[57]=F(f[36]),v[58]=F(f[48]),v[59]=F(f[49]),v[60]=F(f[57]),v[61]=F(f[58]),v[62]=F(f[62]),v[63]=F(f[63])}function ke(f){const v=.5*Math.cos(.7853975),S=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),z=.5*Math.cos(3*3.14159/16),B=.5*Math.cos(5*3.14159/16),G=.5*Math.cos(3*3.14159/8),te=.5*Math.cos(7*3.14159/16),Z=new Array(4),Y=new Array(4),Q=new Array(4),ue=new Array(4);for(let fe=0;fe<8;++fe){const _e=fe*8;Z[0]=L*f[_e+2],Z[1]=G*f[_e+2],Z[2]=L*f[_e+6],Z[3]=G*f[_e+6],Y[0]=S*f[_e+1]+z*f[_e+3]+B*f[_e+5]+te*f[_e+7],Y[1]=z*f[_e+1]-te*f[_e+3]-S*f[_e+5]-B*f[_e+7],Y[2]=B*f[_e+1]-S*f[_e+3]+te*f[_e+5]+z*f[_e+7],Y[3]=te*f[_e+1]-B*f[_e+3]+z*f[_e+5]-S*f[_e+7],Q[0]=v*(f[_e+0]+f[_e+4]),Q[3]=v*(f[_e+0]-f[_e+4]),Q[1]=Z[0]+Z[3],Q[2]=Z[1]-Z[2],ue[0]=Q[0]+Q[1],ue[1]=Q[3]+Q[2],ue[2]=Q[3]-Q[2],ue[3]=Q[0]-Q[1],f[_e+0]=ue[0]+Y[0],f[_e+1]=ue[1]+Y[1],f[_e+2]=ue[2]+Y[2],f[_e+3]=ue[3]+Y[3],f[_e+4]=ue[3]-Y[3],f[_e+5]=ue[2]-Y[2],f[_e+6]=ue[1]-Y[1],f[_e+7]=ue[0]-Y[0]}for(let fe=0;fe<8;++fe)Z[0]=L*f[16+fe],Z[1]=G*f[16+fe],Z[2]=L*f[48+fe],Z[3]=G*f[48+fe],Y[0]=S*f[8+fe]+z*f[24+fe]+B*f[40+fe]+te*f[56+fe],Y[1]=z*f[8+fe]-te*f[24+fe]-S*f[40+fe]-B*f[56+fe],Y[2]=B*f[8+fe]-S*f[24+fe]+te*f[40+fe]+z*f[56+fe],Y[3]=te*f[8+fe]-B*f[24+fe]+z*f[40+fe]-S*f[56+fe],Q[0]=v*(f[fe]+f[32+fe]),Q[3]=v*(f[fe]-f[32+fe]),Q[1]=Z[0]+Z[3],Q[2]=Z[1]-Z[2],ue[0]=Q[0]+Q[1],ue[1]=Q[3]+Q[2],ue[2]=Q[3]-Q[2],ue[3]=Q[0]-Q[1],f[0+fe]=ue[0]+Y[0],f[8+fe]=ue[1]+Y[1],f[16+fe]=ue[2]+Y[2],f[24+fe]=ue[3]+Y[3],f[32+fe]=ue[3]-Y[3],f[40+fe]=ue[2]-Y[2],f[48+fe]=ue[1]-Y[1],f[56+fe]=ue[0]-Y[0]}function I(f){for(let v=0;v<64;++v){const S=f[0][v],L=f[1][v],z=f[2][v];f[0][v]=S+1.5747*z,f[1][v]=S-.1873*L-.4682*z,f[2][v]=S+1.8556*L}}function b(f,v,S){for(let L=0;L<64;++L)v[S+L]=ic.toHalfFloat(K(f[L]))}function K(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(y,Math.abs(f)-1)}function oe(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function ce(f){const v=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),S=new Uint8Array(Je(v)),L=new Uint8Array(S.length);return at(S),Ke(S,L),new DataView(L.buffer)}function se(f){const v=f.array.slice(f.offset.value,f.offset.value+f.size),S=Zs(v),L=new Uint8Array(S.length);return at(S),Ke(S,L),new DataView(L.buffer)}function Le(f){const v=f.viewer,S={value:f.offset.value},L=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),z=new Uint8Array(8192);let B=0;const G=new Array(f.inputChannels.length);for(let pe=0,ie=f.inputChannels.length;pe<ie;pe++)G[pe]={},G[pe].start=B,G[pe].end=G[pe].start,G[pe].nx=f.columns,G[pe].ny=f.lines,G[pe].size=f.type,B+=G[pe].nx*G[pe].ny*G[pe].size;const te=J(v,S),Z=J(v,S);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(te<=Z)for(let pe=0;pe<Z-te+1;pe++)z[pe+te]=De(v,S);const Y=new Uint16Array(65536),Q=T(z,Y),ue=ve(v,S);et(f.array,v,S,ue,L,B);for(let pe=0;pe<f.inputChannels.length;++pe){const ie=G[pe];for(let xe=0;xe<G[pe].size;++xe)ze(L,ie.start+xe,ie.nx,ie.size,ie.ny,ie.nx*ie.size,Q)}O(Y,L,B);let fe=0;const _e=new Uint8Array(L.buffer.byteLength);for(let pe=0;pe<f.lines;pe++)for(let ie=0;ie<f.inputChannels.length;ie++){const xe=G[ie],ye=xe.nx*xe.size,We=new Uint8Array(L.buffer,xe.end*2,ye*2);_e.set(We,fe),fe+=ye*2,xe.end+=ye}return new DataView(_e.buffer)}function Me(f){const v=f.array.slice(f.offset.value,f.offset.value+f.size),S=Zs(v),L=f.inputChannels.length*f.lines*f.columns*f.totalBytes,z=new ArrayBuffer(L),B=new DataView(z);let G=0,te=0;const Z=new Array(4);for(let Y=0;Y<f.lines;Y++)for(let Q=0;Q<f.inputChannels.length;Q++){let ue=0;switch(f.inputChannels[Q].pixelType){case 1:Z[0]=G,Z[1]=Z[0]+f.columns,G=Z[1]+f.columns;for(let _e=0;_e<f.columns;++_e){const pe=S[Z[0]++]<<8|S[Z[1]++];ue+=pe,B.setUint16(te,ue,!0),te+=2}break;case 2:Z[0]=G,Z[1]=Z[0]+f.columns,Z[2]=Z[1]+f.columns,G=Z[2]+f.columns;for(let _e=0;_e<f.columns;++_e){const pe=S[Z[0]++]<<24|S[Z[1]++]<<16|S[Z[2]++]<<8;ue+=pe,B.setUint32(te,ue,!0),te+=4}break}}return B}function be(f){const v=f.viewer,S={value:f.offset.value},L=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),z={version:Ze(v,S),unknownUncompressedSize:Ze(v,S),unknownCompressedSize:Ze(v,S),acCompressedSize:Ze(v,S),dcCompressedSize:Ze(v,S),rleCompressedSize:Ze(v,S),rleUncompressedSize:Ze(v,S),rleRawSize:Ze(v,S),totalAcUncompressedCount:Ze(v,S),totalDcUncompressedCount:Ze(v,S),acCompression:Ze(v,S)};if(z.version<2)throw new Error("EXRLoader.parse: "+w.compression+" version "+z.version+" is unsupported");const B=new Array;let G=J(v,S)-2;for(;G>0;){const ie=Oe(v.buffer,S),xe=De(v,S),ye=xe>>2&3,We=(xe>>4)-1,nt=new Int8Array([We])[0],ct=De(v,S);B.push({name:ie,index:nt,type:ct,compression:ye}),G-=ie.length+3}const te=w.channels,Z=new Array(f.inputChannels.length);for(let ie=0;ie<f.inputChannels.length;++ie){const xe=Z[ie]={},ye=te[ie];xe.name=ye.name,xe.compression=0,xe.decoded=!1,xe.type=ye.pixelType,xe.pLinear=ye.pLinear,xe.width=f.columns,xe.height=f.lines}const Y={idx:new Array(3)};for(let ie=0;ie<f.inputChannels.length;++ie){const xe=Z[ie];for(let ye=0;ye<B.length;++ye){const We=B[ye];xe.name==We.name&&(xe.compression=We.compression,We.index>=0&&(Y.idx[We.index]=ie),xe.offset=ie)}}let Q,ue,fe;if(z.acCompressedSize>0)switch(z.acCompression){case 0:Q=new Uint16Array(z.totalAcUncompressedCount),et(f.array,v,S,z.acCompressedSize,Q,z.totalAcUncompressedCount);break;case 1:const ie=f.array.slice(S.value,S.value+z.totalAcUncompressedCount),xe=Zs(ie);Q=new Uint16Array(xe.buffer),S.value+=z.totalAcUncompressedCount;break}if(z.dcCompressedSize>0){const ie={array:f.array,offset:S,size:z.dcCompressedSize};ue=new Uint16Array(se(ie).buffer),S.value+=z.dcCompressedSize}if(z.rleRawSize>0){const ie=f.array.slice(S.value,S.value+z.rleCompressedSize),xe=Zs(ie);fe=Je(xe.buffer),S.value+=z.rleCompressedSize}let _e=0;const pe=new Array(Z.length);for(let ie=0;ie<pe.length;++ie)pe[ie]=new Array;for(let ie=0;ie<f.lines;++ie)for(let xe=0;xe<Z.length;++xe)pe[xe].push(_e),_e+=Z[xe].width*f.type*2;Re(Y,pe,Z,Q,ue,L);for(let ie=0;ie<Z.length;++ie){const xe=Z[ie];if(!xe.decoded)switch(xe.compression){case 2:let ye=0,We=0;for(let nt=0;nt<f.lines;++nt){let ct=pe[ie][ye];for(let it=0;it<xe.width;++it){for(let Ie=0;Ie<2*xe.type;++Ie)L[ct++]=fe[We+Ie*xe.width*xe.height];We++}ye++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function Oe(f,v){const S=new Uint8Array(f);let L=0;for(;S[v.value+L]!=0;)L+=1;const z=new TextDecoder().decode(S.slice(v.value,v.value+L));return v.value=v.value+L+1,z}function de(f,v,S){const L=new TextDecoder().decode(new Uint8Array(f).slice(v.value,v.value+S));return v.value=v.value+S,L}function Ae(f,v){const S=we(f,v),L=ve(f,v);return[S,L]}function qe(f,v){const S=ve(f,v),L=ve(f,v);return[S,L]}function we(f,v){const S=f.getInt32(v.value,!0);return v.value=v.value+4,S}function ve(f,v){const S=f.getUint32(v.value,!0);return v.value=v.value+4,S}function Ne(f,v){const S=f[v.value];return v.value=v.value+1,S}function De(f,v){const S=f.getUint8(v.value);return v.value=v.value+1,S}const Ze=function(f,v){let S;return"getBigInt64"in DataView.prototype?S=Number(f.getBigInt64(v.value,!0)):S=f.getUint32(v.value+4,!0)+Number(f.getUint32(v.value,!0)<<32),v.value+=8,S};function M(f,v){const S=f.getFloat32(v.value,!0);return v.value+=4,S}function W(f,v){return ic.toHalfFloat(M(f,v))}function F(f){const v=(f&31744)>>10,S=f&1023;return(f>>15?-1:1)*(v?v===31?S?NaN:1/0:Math.pow(2,v-15)*(1+S/1024):6103515625e-14*(S/1024))}function J(f,v){const S=f.getUint16(v.value,!0);return v.value+=2,S}function le(f,v){return F(J(f,v))}function Ce(f,v,S,L){const z=S.value,B=[];for(;S.value<z+L-1;){const G=Oe(v,S),te=we(f,S),Z=De(f,S);S.value+=3;const Y=we(f,S),Q=we(f,S);B.push({name:G,pixelType:te,pLinear:Z,xSampling:Y,ySampling:Q})}return S.value+=1,B}function Fe(f,v){const S=M(f,v),L=M(f,v),z=M(f,v),B=M(f,v),G=M(f,v),te=M(f,v),Z=M(f,v),Y=M(f,v);return{redX:S,redY:L,greenX:z,greenY:B,blueX:G,blueY:te,whiteX:Z,whiteY:Y}}function mt(f,v){const S=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=De(f,v);return S[L]}function St(f,v){const S=we(f,v),L=we(f,v),z=we(f,v),B=we(f,v);return{xMin:S,yMin:L,xMax:z,yMax:B}}function $e(f,v){const S=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],L=De(f,v);return S[L]}function Mt(f,v){const S=["ENVMAP_LATLONG","ENVMAP_CUBE"],L=De(f,v);return S[L]}function vt(f,v){const S=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],L=["ROUND_DOWN","ROUND_UP"],z=ve(f,v),B=ve(f,v),G=De(f,v);return{xSize:z,ySize:B,levelMode:S[G&15],roundingMode:L[G>>4]}}function yn(f,v){const S=M(f,v),L=M(f,v);return[S,L]}function wt(f,v){const S=M(f,v),L=M(f,v),z=M(f,v);return[S,L,z]}function _n(f,v,S,L,z){if(L==="string"||L==="stringvector"||L==="iccProfile")return de(v,S,z);if(L==="chlist")return Ce(f,v,S,z);if(L==="chromaticities")return Fe(f,S);if(L==="compression")return mt(f,S);if(L==="box2i")return St(f,S);if(L==="envmap")return Mt(f,S);if(L==="tiledesc")return vt(f,S);if(L==="lineOrder")return $e(f,S);if(L==="float")return M(f,S);if(L==="v2f")return yn(f,S);if(L==="v3f")return wt(f,S);if(L==="int")return we(f,S);if(L==="rational")return Ae(f,S);if(L==="timecode")return qe(f,S);if(L==="preview")return S.value+=z,"skipped";S.value+=z}function On(f,v){const S=Math.log2(f);return v=="ROUND_DOWN"?Math.floor(S):Math.ceil(S)}function bi(f,v,S){let L=0;switch(f.levelMode){case"ONE_LEVEL":L=1;break;case"MIPMAP_LEVELS":L=On(Math.max(v,S),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return L}function Ai(f,v,S,L){const z=new Array(f);for(let B=0;B<f;B++){const G=1<<B;let te=v/G|0;L=="ROUND_UP"&&te*G<v&&(te+=1);const Z=Math.max(te,1);z[B]=(Z+S-1)/S|0}return z}function _s(){const f=this,v=f.offset,S={value:0};for(let L=0;L<f.tileCount;L++){const z=we(f.viewer,v),B=we(f.viewer,v);v.value+=8,f.size=ve(f.viewer,v);const G=z*f.blockWidth,te=B*f.blockHeight;f.columns=G+f.blockWidth>f.width?f.width-G:f.blockWidth,f.lines=te+f.blockHeight>f.height?f.height-te:f.blockHeight;const Z=f.columns*f.totalBytes,Q=f.size<f.lines*Z?f.uncompress(f):oe(f);v.value+=f.size;for(let ue=0;ue<f.lines;ue++){const fe=ue*f.columns*f.totalBytes;for(let _e=0;_e<f.inputChannels.length;_e++){const pe=w.channels[_e].name,ie=f.channelByteOffsets[pe]*f.columns,xe=f.decodeChannels[pe];if(xe===void 0)continue;S.value=fe+ie;const ye=(f.height-(1+te+ue))*f.outLineWidth;for(let We=0;We<f.columns;We++){const nt=ye+(We+G)*f.outputChannels+xe;f.byteArray[nt]=f.getter(Q,S)}}}}}function ji(){const f=this,v=f.offset,S={value:0};for(let L=0;L<f.height/f.blockHeight;L++){const z=we(f.viewer,v)-w.dataWindow.yMin;f.size=ve(f.viewer,v),f.lines=z+f.blockHeight>f.height?f.height-z:f.blockHeight;const B=f.columns*f.totalBytes,te=f.size<f.lines*B?f.uncompress(f):oe(f);v.value+=f.size;for(let Z=0;Z<f.blockHeight;Z++){const Y=L*f.blockHeight,Q=Z+f.scanOrder(Y);if(Q>=f.height)continue;const ue=Z*B,fe=(f.height-1-Q)*f.outLineWidth;for(let _e=0;_e<f.inputChannels.length;_e++){const pe=w.channels[_e].name,ie=f.channelByteOffsets[pe]*f.columns,xe=f.decodeChannels[pe];if(xe!==void 0){S.value=ue+ie;for(let ye=0;ye<f.columns;ye++){const We=fe+ye*f.outputChannels+xe;f.byteArray[We]=f.getter(te,S)}}}}}}function gs(f,v,S){const L={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");L.version=f.getUint8(4);const z=f.getUint8(5);L.spec={singleTile:!!(z&2),longName:!!(z&4),deepFormat:!!(z&8),multiPart:!!(z&16)},S.value=8;let B=!0;for(;B;){const G=Oe(v,S);if(G==0)B=!1;else{const te=Oe(v,S),Z=ve(f,S),Y=_n(f,v,S,te,Z);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${te}'.`):L[G]=Y}}if(z&-7)throw console.error("THREE.EXRHeader:",L),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return L}function vs(f,v,S,L,z){const B={size:0,viewer:v,array:S,offset:L,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Un};switch(f.compression){case"NO_COMPRESSION":B.blockHeight=1,B.uncompress=oe;break;case"RLE_COMPRESSION":B.blockHeight=1,B.uncompress=ce;break;case"ZIPS_COMPRESSION":B.blockHeight=1,B.uncompress=se;break;case"ZIP_COMPRESSION":B.blockHeight=16,B.uncompress=se;break;case"PIZ_COMPRESSION":B.blockHeight=32,B.uncompress=Le;break;case"PXR24_COMPRESSION":B.blockHeight=16,B.uncompress=Me;break;case"DWAA_COMPRESSION":B.blockHeight=32,B.uncompress=be;break;case"DWAB_COMPRESSION":B.blockHeight=256,B.uncompress=be;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const G={};for(const Q of f.channels)switch(Q.name){case"Y":case"R":case"G":case"B":case"A":G[Q.name]=!0,B.type=Q.pixelType}let te=!1;if(G.R&&G.G&&G.B)te=!G.A,B.outputChannels=4,B.decodeChannels={R:0,G:1,B:2,A:3};else if(G.Y)B.outputChannels=1,B.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(B.type==1)switch(z){case dn:B.getter=le;break;case $n:B.getter=J;break}else if(B.type==2)switch(z){case dn:B.getter=M;break;case $n:B.getter=W}else throw new Error("EXRLoader.parse: unsupported pixelType "+B.type+" for "+f.compression+".");B.columns=B.width;const Z=B.width*B.height*B.outputChannels;switch(z){case dn:B.byteArray=new Float32Array(Z),te&&B.byteArray.fill(1,0,Z);break;case $n:B.byteArray=new Uint16Array(Z),te&&B.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",z);break}let Y=0;for(const Q of f.channels)B.decodeChannels[Q.name]!==void 0&&(B.channelByteOffsets[Q.name]=Y),Y+=Q.pixelType*2;if(B.totalBytes=Y,B.outLineWidth=B.width*B.outputChannels,f.lineOrder==="INCREASING_Y"?B.scanOrder=Q=>Q:B.scanOrder=Q=>B.height-1-Q,B.outputChannels==4?(B.format=pn,B.colorSpace=Un):(B.format=pl,B.colorSpace=qn),f.spec.singleTile){B.blockHeight=f.tiles.ySize,B.blockWidth=f.tiles.xSize;const Q=bi(f.tiles,B.width,B.height),ue=Ai(Q,B.width,f.tiles.xSize,f.tiles.roundingMode),fe=Ai(Q,B.height,f.tiles.ySize,f.tiles.roundingMode);B.tileCount=ue[0]*fe[0];for(let _e=0;_e<Q;_e++)for(let pe=0;pe<fe[_e];pe++)for(let ie=0;ie<ue[_e];ie++)Ze(v,L);B.decode=_s.bind(B)}else{B.blockWidth=B.width;const Q=Math.ceil(B.height/B.blockHeight);for(let ue=0;ue<Q;ue++)Ze(v,L);B.decode=ji.bind(B)}return B}const xs={value:0},Ss=new DataView(e),wa=new Uint8Array(e),w=gs(Ss,e,xs),k=vs(w,Ss,wa,xs,this.type);return k.decode(),{header:w,width:k.width,height:k.height,data:k.byteArray,format:k.format,colorSpace:k.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Bt,a.magFilter=Bt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}}function Wn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ir={duration:.5,overwrite:!1,delay:0},Ml,It,pt,Dn=1e8,kt=1/Dn,Ko=Math.PI*2,y0=Ko/4,T0=0,Wu=Math.sqrt,b0=Math.cos,A0=Math.sin,Dt=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},El=function(e){return typeof e>"u"},Nn=function(e){return typeof e=="object"},Kt=function(e){return e!==!1},yl=function(){return typeof window<"u"},Ks=function(e){return xt(e)||Dt(e)},Xu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,$o=/(?:-?\.?\d|\.)+/gi,Yu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ro=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qu=/[+-]=-?[.\d]+/,Zu=/[^,'"\[\]\s]+/gi,w0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,An,jo,Tl,on={},fa={},Ku,$u=function(e){return(fa=Ur(e,on))&&Qt},bl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ns=function(e,t){return!t&&console.warn(e)},ju=function(e,t){return e&&(on[e]=t)&&fa&&(fa[e]=t)||on},is=function(){return 0},R0={suppressEvents:!0,isStart:!0,kill:!1},ia={suppressEvents:!0,kill:!1},C0={suppressEvents:!0},Al={},gi=[],Jo={},Ju,nn={},so={},Hc=30,ra=[],wl="",Rl=function(e){var t=e[0],n,i;if(Nn(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ra.length;i--&&!ra[i].targetTest(t););n=ra[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Eh(e[i],n)))||e.splice(i,1);return e},Hi=function(e){return e._gsap||Rl(mn(e))[0]._gsap},Qu=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():El(n)&&e.getAttribute&&e.getAttribute(t)||n},$t=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},br=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},P0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},da=function(){var e=gi.length,t=gi.slice(0),n,i;for(Jo={},gi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},eh=function(e,t,n,i){gi.length&&!It&&da(),e.render(t,n,It&&t<0&&(e._initted||e._startAt)),gi.length&&!It&&da()},th=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zu).length<2?t:Dt(e)?e.trim():e},nh=function(e){return e},ln=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},L0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ur=function(e,t){for(var n in t)e[n]=t[n];return e},Gc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Nn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},pa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},jr=function(e){var t=e.parent||_t,n=e.keyframes?L0(Gt(e.keyframes)):ln;if(Kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},D0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ih=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ta=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Mi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},I0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qo=function(e,t,n,i){return e._startAt&&(It?e._startAt.revert(ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},U0=function r(e){return!e||e._ts&&r(e.parent)},Vc=function(e){return e._repeat?Nr(e._tTime,e=e.duration()+e._rDelay)*e:0},Nr=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},ma=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ba=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},Aa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ba(e),n._dirty||Gi(n,e)),e},rh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ma(e.rawTime(),t),(!t._dur||ms(0,t.totalDuration(),n)-t._tTime>kt)&&t.render(n,!0)),Gi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Cn=function(e,t,n,i){return t.parent&&Mi(t),t._start=bt((ti(n)?n:n||e!==_t?hn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ih(e,t,"_first","_last",e._sort?"_start":0),el(t)||(e._recent=t),i||rh(e,t),e._ts<0&&Aa(e,e._tTime),e},sh=function(e,t){return(on.ScrollTrigger||bl("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},ah=function(e,t,n,i,s){if(Pl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ju!==rn.frame)return gi.push(e),e._lazy=[s,i],1},N0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},el=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},O0=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&N0(e)&&!(!e._initted&&el(e))||(e._ts<0||e._dp._ts<0)&&!el(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ms(0,e._tDur,t),u=Nr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Nr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||It||i||e._zTime===kt||!t&&e._zTime){if(!e._initted&&ah(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?kt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Qo(e,t,n,!0),e._onUpdate&&!n&&sn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Mi(e,1),!n&&!It&&(sn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},F0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Or=function(e,t,n,i){var s=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:bt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Aa(e,e._tTime=e._tDur*o),e.parent&&ba(e),n||Gi(e.parent,e),e},Wc=function(e){return e instanceof Wt?Gi(e):Or(e,e._dur)},B0={_start:0,endTime:is,totalDuration:is},hn=function r(e,t,n){var i=e.labels,s=e._recent||B0,a=e.duration()>=Dn?s.endTime(!1):e._dur,o,l,c;return Dt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Gt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Jr=function(e,t,n){var i=ti(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kt(l.vars.inherit)&&l.parent;a.immediateRender=Kt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Tt(t[0],a,t[s+1])},Ti=function(e,t){return e||e===0?t(e):t},ms=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Dt(e)||!(t=w0.exec(e))?"":t[1]},z0=function(e,t,n){return Ti(n,function(i){return ms(e,t,i)})},tl=[].slice,oh=function(e,t){return e&&Nn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Nn(e[0]))&&!e.nodeType&&e!==An},k0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Dt(i)&&!t||oh(i,1)?(s=n).push.apply(s,mn(i)):n.push(i)})||n},mn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):Dt(e)&&!n&&(jo||!Fr())?tl.call((t||Tl).querySelectorAll(e),0):Gt(e)?k0(e,n):oh(e)?tl.call(e,0):e?[e]:[]},nl=function(e){return e=mn(e)[0]||ns("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mn(t,n.querySelectorAll?n:n===e?ns("Invalid scope")||Tl.createElement("div"):e)}},lh=function(e){return e.sort(function(){return .5-Math.random()})},ch=function(e){if(xt(e))return e;var t=Nn(e)?e:{each:e},n=Vi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Dt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,p,x){var g=(x||t).length,m=a[g],_,A,E,R,D,P,C,N,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Dn])[1],!y){for(C=-1e8;C<(C=x[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=a[g]=[],_=l?Math.min(y,g)*u-.5:i%y,A=y===Dn?0:l?g*h/y-.5:i/y|0,C=0,N=Dn,P=0;P<g;P++)E=P%y-_,R=A-(P/y|0),m[P]=D=c?Math.abs(c==="y"?R:E):Wu(E*E+R*R),D>C&&(C=D),D<N&&(N=D);i==="random"&&lh(m),m.max=C-N,m.min=N,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=zt(t.amount||t.each)||0,n=n&&g<0?xh(n):n}return g=(m[d]-m.min)/m.max||0,bt(m.b+(n?n(g):g)*m.v)+m.u}},il=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ti(n)?0:zt(n))}},uh=function(e,t){var n=Gt(e),i,s;return!n&&Nn(e)&&(i=n=e.radius||Dn,e.values?(e=mn(e.values),(s=!ti(e[0]))&&(i*=i)):e=il(e.increment)),Ti(t,n?xt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Dn,u=0,h=e.length,d,p;h--;)s?(d=e[h].x-o,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||ti(a)?u:u+zt(a)}:il(e))},hh=function(e,t,n,i){return Ti(Gt(e)?!t:n===!0?!!(n=0):!i,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},H0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},G0=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},V0=function(e,t,n){return dh(e,t,0,1,n)},fh=function(e,t,n){return Ti(n,function(i){return e[~~t(i)]})},W0=function r(e,t,n){var i=t-e;return Gt(e)?fh(e,r(0,e.length),t):Ti(n,function(s){return(i+(s-e)%i)%i+e})},X0=function r(e,t,n){var i=t-e,s=i*2;return Gt(e)?fh(e,r(0,e.length-1),t):Ti(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},rs=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Zu:$o),n+=e.substr(t,i-t)+hh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},dh=function(e,t,n,i,s){var a=t-e,o=i-n;return Ti(s,function(l){return n+((l-e)/a*o||0)})},Y0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Dt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(x){x*=h;var g=Math.min(d,~~x);return u[g](x-g)},n=t}else i||(e=Ur(Gt(e)?[]:{},e));if(!u){for(l in t)Cl.call(o,e,l,"get",t[l]);s=function(x){return Il(x,o)||(a?e.p:e)}}}return Ti(n,s)},Xc=function(e,t,n){var i=e.labels,s=Dn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},sn=function(e,t,n){var i=e.vars,s=i[t],a=pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&gi.length&&da(),o&&(pt=o),u=l?s.apply(c,l):s.call(c),pt=a,u},Zr=function(e){return Mi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&sn(e,"onInterrupt"),e},Mr,ph=[],mh=function(e){if(e)if(e=!e.name&&e.default||e,yl()||e.headless){var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:is,render:Il,add:Cl,kill:lv,modifier:ov,rawVars:0},a={targetTest:0,get:0,getSetter:Dl,aliases:{},register:0};if(Fr(),e!==i){if(nn[t])return;ln(i,ln(pa(e,s),a)),Ur(i.prototype,Ur(s,pa(e,a))),nn[i.prop=t]=i,e.targetTest&&(ra.push(i),Al[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ju(t,i),e.register&&e.register(Qt,i,jt)}else ph.push(e)},ut=255,Kr={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},ao=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},_h=function(e,t,n){var i=e?ti(e)?[e>>16,e>>8&ut,e&ut]:0:Kr.black,s,a,o,l,c,u,h,d,p,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Kr[e])i=Kr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match($o),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ao(l+1/3,s,a),i[1]=ao(l,s,a),i[2]=ao(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Yu),n&&i.length<4&&(i[3]=1),i}else i=e.match($o)||Kr.transparent;i=i.map(Number)}return t&&!x&&(s=i[0]/ut,a=i[1]/ut,o=i[2]/ut,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},gh=function(e){var t=[],n=[],i=-1;return e.split(vi).forEach(function(s){var a=s.match(Sr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Yc=function(e,t,n){var i="",s=(e+i).match(vi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=_h(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=gh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vi,"1").split(Sr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},vi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Kr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),q0=/hsl[a]?\(/,vh=function(e){var t=e.join(" "),n;if(vi.lastIndex=0,vi.test(t))return n=q0.test(t),e[1]=Yc(e[1],n),e[0]=Yc(e[0],n,gh(e[1])),!0},ss,rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,p,x=function g(m){var _=r()-i,A=m===!0,E,R,D,P;if((_>e||_<0)&&(n+=_-t),i+=_,D=i-n,E=D-a,(E>0||A)&&(P=++h.frame,d=D-h.time*1e3,h.time=D=D/1e3,a+=E+(E>=s?4:s-E),R=1),A||(l=c(g)),R)for(p=0;p<o.length;p++)o[p](D,d,P,m)};return h={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ku&&(!jo&&yl()&&(An=jo=window,Tl=An.document||{},on.gsap=Qt,(An.gsapVersions||(An.gsapVersions=[])).push(Qt.version),$u(fa||An.GreenSockGlobals||!An.gsap&&An||{}),ph.forEach(mh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ss=1,x(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ss=0,c=is},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,_,A){var E=_?function(R,D,P,C){m(R,D,P,C),h.remove(E)}:m;return h.remove(m),o[A?"unshift":"push"](E),Fr(),E},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},h}(),Fr=function(){return!ss&&rn.wake()},je={},Z0=/^[\d.\-M][\d.\-,\s]/,K0=/["']/g,$0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(K0,"").trim():+c,i=l.substr(o+1).trim();return t},j0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},J0=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$0(t[1])]:j0(e).split(",").map(th)):je._CE&&Z0.test(e)?je._CE("",e):n},xh=function(e){return function(t){return 1-e(1-t)}},Sh=function r(e,t){for(var n=e._first,i;n;)n instanceof Wt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Vi=function(e,t){return e&&(xt(e)?e:je[e]||J0(e))||t},$i=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return $t(e,function(o){je[o]=on[o]=s,je[a=o.toLowerCase()]=n;for(var l in s)je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[o+"."+l]=s[l]}),s},Mh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ko*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*A0((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Mh(o);return s=Ko/s,l.config=function(c,u){return r(e,c,u)},l},lo=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Mh(n);return i.config=function(s){return r(e,s)},i};$t("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;$i(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;$i("Elastic",oo("in"),oo("out"),oo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};$i("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);$i("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});$i("Circ",function(r){return-(Wu(1-r*r)-1)});$i("Sine",function(r){return r===1?1:-b0(r*y0)+1});$i("Back",lo("in"),lo("out"),lo());je.SteppedEase=je.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-kt;return function(o){return((i*ms(0,a,o)|0)+s)*n}}};Ir.ease=je["quad.out"];$t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return wl+=r+","+r+"Params,"});var Eh=function(e,t){this.id=T0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qu,this.set=t?t.getSetter:Dl},as=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Or(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),ss||rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Or(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Aa(this,n),!s._dp||s.parent||rh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===kt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Nr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(ms(-Math.abs(this._delay),this._tDur,s),i!==!1),ba(this),I0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ma(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=C0);var i=It;return It=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),It=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(hn(this,n),Kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kt(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-kt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=xt(n)?n:nh,o=function(){var c=i.then;i.then=null,xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Zr(this)},r}();ln(as.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Wt=function(r){Vu(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kt(n.sortChildren),_t&&Cn(n.parent||_t,Wn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sh(Wn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Jr(0,arguments,this),this},t.from=function(i,s,a){return Jr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Jr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,jr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(i,s,hn(this,a),1),this},t.call=function(i,s,a){return Cn(this,Tt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Tt(i,a,hn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,jr(a).immediateRender=Kt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,jr(o).immediateRender=Kt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,x,g,m,_,A,E,R,D,P,C;if(this!==_t&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,R=this._start,E=this._ts,_=!E,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=bt(u%m),u===l?(g=this._repeat,d=c):(D=bt(u/m),g=~~D,g&&g===D&&(d=c,g--),d>c&&(d=c)),D=Nr(this._tTime,m),!o&&this._tTime&&D!==g&&this._tTime-D*m-this._dur<=0&&(D=g),P&&g&1&&(d=c-d,C=1),g!==D&&!this._lock){var N=P&&D&1,y=N===(P&&g&1);if(g<D&&(N=!N),o=N?0:u%c?c:u,this._lock=1,this.render(o||(C?0:bt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=N?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Sh(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=F0(this,bt(o),bt(d)),A&&(u-=d-(d=A._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!g&&(sn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(x=p._next,(p._act||d>=p._start)&&p._ts&&A!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!_){A=0,x&&(u+=this._zTime=-1e-8);break}}p=x}else{p=this._last;for(var T=i<0?i:d;p;){if(x=p._prev,(p._act||T<=p._end)&&p._ts&&A!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,a||It&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!_){A=0,x&&(u+=this._zTime=T?-1e-8:kt);break}}p=x}}if(A&&!s&&(this.pause(),A.render(d>=o?0:-1e-8)._zTime=d>=o?1:-1,this._ts))return this._start=R,ba(this),this.render(i,s,a);this._onUpdate&&!s&&sn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(R===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(sn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ti(s)||(s=hn(this,s,i)),!(i instanceof as)){if(Gt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Dt(i))return this.addLabel(i,s);if(xt(i))i=Tt.delayedCall(0,i);else return this}return this!==i?Cn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Tt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Dt(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(i.parent===this&&Ta(this,i),i===this._recent&&(this._recent=this._last),Gi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=hn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Tt.delayedCall(0,s||is,a);return o.data="isPause",this._hasPause=1,Cn(this,o,hn(this,i))},t.removePause=function(i){var s=this._first;for(i=hn(this,i);s;)s._start===i&&s.data==="isPause"&&Mi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)fi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=mn(i),l=this._first,c=ti(s),u;l;)l instanceof Tt?P0(l._targets,o)&&(c?(!fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=hn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,x=Tt.to(a,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||kt,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());x._dur!==m&&Or(x,m,0,1).render(x._time,!0,!0),p=1}u&&u.apply(x,h||[])}},s));return d?x.render(0):x},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ln({startAt:{time:hn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xc(this,hn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xc(this,hn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Gi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gi(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Dn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Cn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Or(a,a===_t&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(_t._ts&&(eh(_t,ma(i,_t)),Ju=rn.frame),rn.frame>=Hc){Hc+=an.autoSleep||120;var s=_t._first;if((!s||!s._ts)&&an.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(as);ln(Wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Q0=function(e,t,n,i,s,a,o){var l=new jt(this._pt,e,t,0,1,Rh,null,s),c=0,u=0,h,d,p,x,g,m,_,A;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=rs(i)),a&&(A=[n,i],a(A,e,t),n=A[0],i=A[1]),d=n.match(ro)||[];h=ro.exec(i);)x=h[0],g=i.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),x!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:x.charAt(1)==="="?br(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},c=ro.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(qu.test(i)||_)&&(l.e=0),this._pt=l,l},Cl=function(e,t,n,i,s,a,o,l,c,u){xt(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:xt(h)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=xt(h)?c?rv:Ah:Ll,x;if(Dt(i)&&(~i.indexOf("random(")&&(i=rs(i)),i.charAt(1)==="="&&(x=br(d,i)+(zt(d)||0),(x||x===0)&&(i=x))),!u||d!==i||rl)return!isNaN(d*i)&&i!==""?(x=new jt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?av:wh,0,p),c&&(x.fp=c),o&&x.modifier(o,this,e),this._pt=x):(!h&&!(t in e)&&bl(t,i),Q0.call(this,e,t,d,i,p,l||an.stringFilter,c))},ev=function(e,t,n,i,s){if(xt(e)&&(e=Qr(e,s,t,n,i)),!Nn(e)||e.style&&e.nodeType||Gt(e)||Xu(e))return Dt(e)?Qr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Qr(e[o],s,t,n,i);return a},yh=function(e,t,n,i,s,a){var o,l,c,u;if(nn[e]&&(o=new nn[e]).init(s,o.rawVars?t[e]:ev(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new jt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Mr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},fi,rl,Pl=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,p=i.autoRevert,x=e._dur,g=e._startAt,m=e._targets,_=e.parent,A=_&&_.data==="nested"?_.vars.targets:m,E=e._overwrite==="auto"&&!Ml,R=e.timeline,D,P,C,N,y,T,U,V,H,$,ne,X,re;if(R&&(!d||!s)&&(s="none"),e._ease=Vi(s,Ir.ease),e._yEase=h?xh(Vi(h===!0?s:h,Ir.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!R&&!!i.runBackwards,!R||d&&!i.stagger){if(V=m[0]?Hi(m[0]).harness:0,X=V&&i[V.prop],D=pa(i,Al),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&x?ia:R0),g._lazy=0),a){if(Mi(e._startAt=Tt.set(m,ln({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&Kt(l),startAt:null,delay:0,onUpdate:c&&function(){return sn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!o&&!p)&&e._startAt.revert(ia),o&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&x&&!g){if(t&&(o=!1),C=ln({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Kt(l),immediateRender:o,stagger:0,parent:_},D),X&&(C[V.prop]=X),Mi(e._startAt=Tt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(ia):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&Kt(l)||l&&!x,P=0;P<m.length;P++){if(y=m[P],U=y._gsap||Rl(m)[P]._gsap,e._ptLookup[P]=$={},Jo[U.id]&&gi.length&&da(),ne=A===m?P:A.indexOf(y),V&&(H=new V).init(y,X||D,e,ne,A)!==!1&&(e._pt=N=new jt(e._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(j){$[j]=N}),H.priority&&(T=1)),!V||X)for(C in D)nn[C]&&(H=yh(C,D,e,ne,y,A))?H.priority&&(T=1):$[C]=N=Cl.call(e,y,C,"get",D[C],ne,A,0,i.stringFilter);e._op&&e._op[P]&&e.kill(y,e._op[P]),E&&e._pt&&(fi=e,_t.killTweensOf(y,$,e.globalTime(t)),re=!e.parent,fi=0),e._pt&&l&&(Jo[U.id]=1)}T&&Ch(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!re,d&&t<=0&&R.render(Dn,!0,!0)},tv=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return rl=1,e.vars[t]="+=0",Pl(e,o),rl=0,l?ns(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Et(n)+zt(h.e)),h.b&&(h.b=u.s+zt(h.b))},nv=function(e,t){var n=e[0]?Hi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ur({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},iv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Gt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Qr=function(e,t,n,i,s){return xt(e)?e.call(t,n,i,s):Dt(e)&&~e.indexOf("random(")?rs(e):e},Th=wl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bh={};$t(Th+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return bh[r]=1});var Tt=function(r){Vu(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:jr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,x=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,A=i.parent||_t,E=(Gt(n)||Xu(n)?ti(n[0]):"length"in i)?[n]:mn(n),R,D,P,C,N,y,T,U;if(o._targets=E.length?Rl(E):ns("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,x||d||Ks(c)||Ks(u)){if(i=o.vars,R=o.timeline=new Wt({data:"nested",defaults:g||{},targets:A&&A.data==="nested"?A.vars.targets:E}),R.kill(),R.parent=R._dp=Wn(o),R._start=0,d||Ks(c)||Ks(u)){if(C=E.length,T=d&&ch(d),Nn(d))for(N in d)~Th.indexOf(N)&&(U||(U={}),U[N]=d[N]);for(D=0;D<C;D++)P=pa(i,bh),P.stagger=0,_&&(P.yoyoEase=_),U&&Ur(P,U),y=E[D],P.duration=+Qr(c,Wn(o),D,y,E),P.delay=(+Qr(u,Wn(o),D,y,E)||0)-o._delay,!d&&C===1&&P.delay&&(o._delay=u=P.delay,o._start+=u,P.delay=0),R.to(y,P,T?T(D,y,E):0),R._ease=je.none;R.duration()?c=u=0:o.timeline=0}else if(x){jr(ln(R.vars.defaults,{ease:"none"})),R._ease=Vi(x.ease||i.ease||"none");var V=0,H,$,ne;if(Gt(x))x.forEach(function(X){return R.to(E,X,">")}),R.duration();else{P={};for(N in x)N==="ease"||N==="easeEach"||iv(N,x[N],P,x.easeEach);for(N in P)for(H=P[N].sort(function(X,re){return X.t-re.t}),V=0,D=0;D<H.length;D++)$=H[D],ne={ease:$.e,duration:($.t-(D?H[D-1].t:0))/100*c},ne[N]=$.v,R.to(E,ne,V),V+=ne.duration;R.duration()<c&&R.to({},{duration:c-R.duration()})}}c||o.duration(c=R.duration())}else o.timeline=0;return p===!0&&!Ml&&(fi=Wn(o),_t.killTweensOf(E),fi=0),Cn(A,Wn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!x&&o._start===bt(A._time)&&Kt(h)&&U0(Wn(o))&&A.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),m&&sh(Wn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-kt&&!u?l:i<kt?0:i,d,p,x,g,m,_,A,E,R;if(!c)O0(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=bt(h%g),h===l?(x=this._repeat,d=c):(m=bt(h/g),x=~~m,x&&x===m?(d=c,x--):d>c&&(d=c)),_=this._yoyo&&x&1,_&&(R=this._yEase,d=c-d),m=Nr(this._tTime,g),d===o&&!a&&this._initted&&x===m)return this._tTime=h,this;x!==m&&(E&&this._yEase&&Sh(E,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(bt(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(ah(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(R||this._ease)(d/c),this._from&&(this.ratio=A=1-A),d&&!o&&!s&&!x&&(sn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(A,p.d),p=p._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Qo(this,i,s,a),sn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Qo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Mi(this,1),!s&&!(u&&!o)&&(h||o||_)&&(sn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ss||rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pl(this,c),u=this._ease(c/this._dur),tv(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Aa(this,0),this.parent||ih(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!It),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fi&&fi.vars.overwrite!==!0)._first||Zr(this),this.parent&&a!==this.timeline.totalDuration()&&Or(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?mn(i):o,c=this._ptLookup,u=this._pt,h,d,p,x,g,m,_;if((!s||s==="all")&&D0(o,l))return s==="all"&&(this._pt=0),Zr(this);for(h=this._op=this._op||[],s!=="all"&&(Dt(s)&&(g={},$t(s,function(A){return g[A]=1}),s=g),s=nv(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){d=c[_],s==="all"?(h[_]=s,x=d,p={}):(p=h[_]=h[_]||{},x=s);for(g in x)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ta(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Zr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Jr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Jr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return _t.killTweensOf(i,s,a)},e}(as);ln(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$t("staggerTo,staggerFrom,staggerFromTo",function(r){Tt[r]=function(){var e=new Wt,t=tl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ll=function(e,t,n){return e[t]=n},Ah=function(e,t,n){return e[t](n)},rv=function(e,t,n,i){return e[t](i.fp,n)},sv=function(e,t,n){return e.setAttribute(t,n)},Dl=function(e,t){return xt(e[t])?Ah:El(e[t])&&e.setAttribute?sv:Ll},wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},av=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Il=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ov=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},lv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ta(this,t,"_pt"):t.dep||(n=1),t=i;return!n},cv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ch=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},jt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||wh,this.d=l||this,this.set=c||Ll,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=cv,this.m=n,this.mt=s,this.tween=i},r}();$t(wl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Al[r]=1});on.TweenMax=on.TweenLite=Tt;on.TimelineLite=on.TimelineMax=Wt;_t=new Wt({sortChildren:!1,defaults:Ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=vh;var Wi=[],sa={},uv=[],qc=0,hv=0,co=function(e){return(sa[e]||uv).map(function(t){return t()})},sl=function(){var e=Date.now(),t=[];e-qc>2&&(co("matchMediaInit"),Wi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=An.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),co("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qc=e,co("matchMedia"))},Ph=function(){function r(t,n){this.selector=n&&nl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){xt(n)&&(s=i,i=n,n=xt);var a=this,o=function(){var c=pt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=nl(s)),pt=a,h=i.apply(a,arguments),xt(h)&&a._r.push(h),pt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=pt;pt=null,n(this),pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Tt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Wt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wi.length;a--;)Wi[a].id===this.id&&Wi.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),fv=function(){function r(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Nn(n)||(n={matches:n});var a=new Ph(0,s||this.scope),o=a.conditions={},l,c,u;pt&&!a.selector&&(a.selector=pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=An.matchMedia(n[c]),l&&(Wi.indexOf(a)<0&&Wi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(sl):l.addEventListener("change",sl)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),_a={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return mh(i)})},timeline:function(e){return new Wt(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,i){Dt(e)&&(e=mn(e)[0]);var s=Hi(e||{}).get,a=n?nh:th;return n==="native"&&(n=""),e&&(t?a((nn[t]&&nn[t].get||s)(e,t,n,i)):function(o,l,c){return a((nn[o]&&nn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mn(e),e.length>1){var i=e.map(function(u){return Qt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=nn[t],o=Hi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Mr._pt=0,h.init(e,n?u+n:u,Mr,0,[e]),h.render(1,h),Mr._pt&&Il(1,Mr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Qt.to(e,ln((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vi(e.ease,Ir.ease)),Gc(Ir,e||{})},config:function(e){return Gc(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!nn[o]&&!on[o]&&ns(t+" effect requires "+o+" plugin.")}),so[t]=function(o,l,c){return n(mn(o),ln(l||{},s),c)},a&&(Wt.prototype[t]=function(o,l,c){return this.add(so[t](o,Nn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=Vi(t)},parseEase:function(e,t){return arguments.length?Vi(e,t):je},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wt(e),i,s;for(n.smoothChildTiming=Kt(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,i=_t._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Tt&&i.vars.onComplete===i._targets[0]))&&Cn(n,i,i._start-i._delay),i=s;return Cn(_t,n,0),n},context:function(e,t){return e?new Ph(e,t):pt},matchMedia:function(e){return new fv(e)},matchMediaRefresh:function(){return Wi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||sl()},addEventListener:function(e,t){var n=sa[e]||(sa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=sa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:W0,wrapYoyo:X0,distribute:ch,random:hh,snap:uh,normalize:V0,getUnit:zt,clamp:z0,splitColor:_h,toArray:mn,selector:nl,mapRange:dh,pipe:H0,unitize:G0,interpolate:Y0,shuffle:lh},install:$u,effects:so,ticker:rn,updateRoot:Wt.updateRoot,plugins:nn,globalTimeline:_t,core:{PropTween:jt,globals:ju,Tween:Tt,Timeline:Wt,Animation:as,getCache:Hi,_removeLinkedListItem:Ta,reverting:function(){return It},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Ml=e}}};$t("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _a[r]=Tt[r]});rn.add(Wt.updateRoot);Mr=_a.to({},{duration:0});var dv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},pv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=dv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},uo=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Dt(s)&&(l={},$t(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}pv(o,s)}}}},Qt=_a.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)It?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uo("roundProps",il),uo("modifiers"),uo("snap",uh))||_a;Tt.version=Wt.version=Qt.version="3.12.7";Ku=1;yl()&&Fr();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zc,di,Ar,Ul,zi,Kc,Nl,mv=function(){return typeof window<"u"},ni={},Oi=180/Math.PI,wr=Math.PI/180,gr=Math.atan2,$c=1e8,Ol=/([A-Z])/g,_v=/(left|right|width|margin|padding|x)/i,gv=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},al=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Lh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Mv=function(e,t,n){return e.style[t]=n},Ev=function(e,t,n){return e.style.setProperty(t,n)},yv=function(e,t,n){return e._gsap[t]=n},Tv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},bv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Av=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},gt="transform",Jt=gt+"Origin",wv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ni&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Xn(i,o)}):this.tfm[e]=a.x?a[e]:Xn(i,e),e===Jt&&(this.tfm.zOrigin=a.zOrigin);else return Pn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jt,t,"")),e=gt}(s||t)&&this.props.push(e,t,s[e])},Ih=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Rv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ol,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Nl(),(!s||!s.isStart)&&!n[gt]&&(Ih(n),i.zOrigin&&n[Jt]&&(n[Jt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Uh=function(e,t){var n={target:e,props:[],revert:Rv,save:wv};return e._gsap||Qt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Nh,ol=function(e,t){var n=di.createElementNS?di.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):di.createElement(e);return n&&n.style?n:di.createElement(e)},In=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ol,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Br(t)||t,1)||""},jc="O,Moz,ms,Ms,Webkit".split(","),Br=function(e,t,n){var i=t||zi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(jc[a]+e in s););return a<0?null:(a===3?"ms":a>=0?jc[a]:"")+e},ll=function(){mv()&&window.document&&(Zc=window,di=Zc.document,Ar=di.documentElement,zi=ol("div")||{style:{}},ol("div"),gt=Br(gt),Jt=gt+"Origin",zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nh=!!Br("perspective"),Nl=Qt.core.reverting,Ul=1)},Jc=function(e){var t=e.ownerSVGElement,n=ol("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ar.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ar.removeChild(n),s},Qc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Oh=function(e){var t,n;try{t=e.getBBox()}catch{t=Jc(e),n=1}return t&&(t.width||t.height)||n||(t=Jc(e)),t&&!t.width&&!t.x&&!t.y?{x:+Qc(e,["x","cx","x1"])||0,y:+Qc(e,["y","cy","y1"])||0,width:0,height:0}:t},Fh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Oh(e))},Zi=function(e,t){if(t){var n=e.style,i;t in ni&&t!==Jt&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ol,"-$1").toLowerCase())):n.removeAttribute(t)}},pi=function(e,t,n,i,s,a){var o=new jt(e._pt,t,n,0,1,a?Dh:Lh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},eu={deg:1,rad:1,turn:1},Cv={grid:1,flex:1},Ei=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=zi.style,l=_v.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",x,g,m,_;if(i===a||!s||eu[i]||eu[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),_=e.getCTM&&Fh(e),(p||a==="%")&&(ni[t]||~t.indexOf("adius")))return x=_?e.getBBox()[l?"width":"height"]:e[u],Et(p?s/x*h:s/100*x);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===di||!g.appendChild)&&(g=di.body),m=g._gsap,m&&p&&m.width&&l&&m.time===rn.time&&!m.uncache)return Et(s/m.width*h);if(p&&(t==="height"||t==="width")){var A=e.style[t];e.style[t]=h+i,x=e[u],A?e.style[t]=A:Zi(e,t)}else(p||a==="%")&&!Cv[In(g,"display")]&&(o.position=In(e,"position")),g===e&&(o.position="static"),g.appendChild(zi),x=zi[u],g.removeChild(zi),o.position="absolute";return l&&p&&(m=Hi(g),m.time=rn.time,m.width=g[u]),Et(d?x*s/h:x&&s?h/x*s:0)},Xn=function(e,t,n,i){var s;return Ul||ll(),t in Pn&&t!=="transform"&&(t=Pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ni[t]&&t!=="transform"?(s=ls(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:va(In(e,Jt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ga[t]&&ga[t](e,t,n)||In(e,t)||Qu(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ei(e,t,s,n)+n:s},Pv=function(e,t,n,i){if(!n||n==="none"){var s=Br(t,e,1),a=s&&In(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=In(e,"borderTopColor"))}var o=new jt(this._pt,e.style,t,0,1,Rh),l=0,c=0,u,h,d,p,x,g,m,_,A,E,R,D;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=In(e,t)||i,g?e.style[t]=g:Zi(e,t)),u=[n,i],vh(u),n=u[0],i=u[1],d=n.match(Sr)||[],D=i.match(Sr)||[],D.length){for(;h=Sr.exec(i);)m=h[0],A=i.substring(l,h.index),x?x=(x+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(x=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,R=g.substr((p+"").length),m.charAt(1)==="="&&(m=br(p,m)+R),_=parseFloat(m),E=m.substr((_+"").length),l=Sr.lastIndex-E.length,E||(E=E||an.units[t]||R,l===i.length&&(i+=E,o.e+=E)),R!==E&&(p=Ei(e,t,g,E)||0),o._pt={_next:o._pt,p:A||c===1?A:",",s:p,c:_-p,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Dh:Lh;return qu.test(i)&&(o.e=0),this._pt=o,o},tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tu[n]||n,t[1]=tu[i]||i,t.join(" ")},Dv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ni[o]&&(l=1,o=o==="transformOrigin"?Jt:gt),Zi(n,o);l&&(Zi(n,gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ls(n,1),a.uncache=1,Ih(i)))}},ga={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new jt(e._pt,t,n,0,0,Dv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},os=[1,0,0,1,0,0],Bh={},zh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nu=function(e){var t=In(e,gt);return zh(t)?os:t.substr(7).match(Yu).map(Et)},Fl=function(e,t){var n=e._gsap||Hi(e),i=e.style,s=nu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?os:s):(s===os&&!e.offsetParent&&e!==Ar&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ar.appendChild(e)),s=nu(e),l?i.display=l:Zi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ar.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Fl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,p=l[0],x=l[1],g=l[2],m=l[3],_=l[4],A=l[5],E=t.split(" "),R=parseFloat(E[0])||0,D=parseFloat(E[1])||0,P,C,N,y;n?l!==os&&(C=p*m-x*g)&&(N=R*(m/C)+D*(-g/C)+(g*A-m*_)/C,y=R*(-x/C)+D*(p/C)-(p*A-x*_)/C,R=N,D=y):(P=Oh(e),R=P.x+(~E[0].indexOf("%")?R/100*P.width:R),D=P.y+(~(E[1]||E[0]).indexOf("%")?D/100*P.height:D)),i||i!==!1&&o.smooth?(_=R-c,A=D-u,o.xOffset=h+(_*p+A*g)-_,o.yOffset=d+(_*x+A*m)-A):o.xOffset=o.yOffset=0,o.xOrigin=R,o.yOrigin=D,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Jt]="0px 0px",a&&(pi(a,o,"xOrigin",c,R),pi(a,o,"yOrigin",u,D),pi(a,o,"xOffset",h,o.xOffset),pi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",R+" "+D)},ls=function(e,t){var n=e._gsap||new Eh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=In(e,Jt)||"0",u,h,d,p,x,g,m,_,A,E,R,D,P,C,N,y,T,U,V,H,$,ne,X,re,j,me,ge,Te,Pe,He,ee,ae;return u=h=d=g=m=_=A=E=R=0,p=x=1,n.svg=!!(e.getCTM&&Fh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),C=Fl(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",re=""):re=!t&&e.getAttribute("data-svg-origin"),cl(e,re||c,!!re||n.originIsAbsolute,n.smooth!==!1,C)),D=n.xOrigin||0,P=n.yOrigin||0,C!==os&&(U=C[0],V=C[1],H=C[2],$=C[3],u=ne=C[4],h=X=C[5],C.length===6?(p=Math.sqrt(U*U+V*V),x=Math.sqrt($*$+H*H),g=U||V?gr(V,U)*Oi:0,A=H||$?gr(H,$)*Oi+g:0,A&&(x*=Math.abs(Math.cos(A*wr))),n.svg&&(u-=D-(D*U+P*H),h-=P-(D*V+P*$))):(ae=C[6],He=C[7],ge=C[8],Te=C[9],Pe=C[10],ee=C[11],u=C[12],h=C[13],d=C[14],N=gr(ae,Pe),m=N*Oi,N&&(y=Math.cos(-N),T=Math.sin(-N),re=ne*y+ge*T,j=X*y+Te*T,me=ae*y+Pe*T,ge=ne*-T+ge*y,Te=X*-T+Te*y,Pe=ae*-T+Pe*y,ee=He*-T+ee*y,ne=re,X=j,ae=me),N=gr(-H,Pe),_=N*Oi,N&&(y=Math.cos(-N),T=Math.sin(-N),re=U*y-ge*T,j=V*y-Te*T,me=H*y-Pe*T,ee=$*T+ee*y,U=re,V=j,H=me),N=gr(V,U),g=N*Oi,N&&(y=Math.cos(N),T=Math.sin(N),re=U*y+V*T,j=ne*y+X*T,V=V*y-U*T,X=X*y-ne*T,U=re,ne=j),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),p=Et(Math.sqrt(U*U+V*V+H*H)),x=Et(Math.sqrt(X*X+ae*ae)),N=gr(ne,X),A=Math.abs(N)>2e-4?N*Oi:0,R=ee?1/(ee<0?-ee:ee):0),n.svg&&(re=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zh(In(e,gt)),re&&e.setAttribute("transform",re))),Math.abs(A)>90&&Math.abs(A)<270&&(s?(p*=-1,A+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,A+=A<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Et(p),n.scaleY=Et(x),n.rotation=Et(g)+o,n.rotationX=Et(m)+o,n.rotationY=Et(_)+o,n.skewX=A+o,n.skewY=E+o,n.transformPerspective=R+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Jt]=va(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?Uv:Nh?kh:Iv,n.uncache=0,n},va=function(e){return(e=e.split(" "))[0]+" "+e[1]},ho=function(e,t,n){var i=zt(t);return Et(parseFloat(t)+parseFloat(Ei(e,"x",n+"px",i)))+i},Iv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kh(e,t)},Ii="0deg",Yr="0px",Ui=") ",kh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,x=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,A=n.target,E=n.zOrigin,R="",D=_==="auto"&&e&&e!==1||_===!0;if(E&&(h!==Ii||u!==Ii)){var P=parseFloat(u)*wr,C=Math.sin(P),N=Math.cos(P),y;P=parseFloat(h)*wr,y=Math.cos(P),a=ho(A,a,C*y*-E),o=ho(A,o,-Math.sin(P)*-E),l=ho(A,l,N*y*-E+E)}m!==Yr&&(R+="perspective("+m+Ui),(i||s)&&(R+="translate("+i+"%, "+s+"%) "),(D||a!==Yr||o!==Yr||l!==Yr)&&(R+=l!==Yr||D?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ui),c!==Ii&&(R+="rotate("+c+Ui),u!==Ii&&(R+="rotateY("+u+Ui),h!==Ii&&(R+="rotateX("+h+Ui),(d!==Ii||p!==Ii)&&(R+="skew("+d+", "+p+Ui),(x!==1||g!==1)&&(R+="scale("+x+", "+g+Ui),A.style[gt]=R||"translate(0, 0)"},Uv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,x=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,A=n.forceCSS,E=parseFloat(a),R=parseFloat(o),D,P,C,N,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=wr,c*=wr,D=Math.cos(l)*h,P=Math.sin(l)*h,C=Math.sin(l-c)*-d,N=Math.cos(l-c)*d,c&&(u*=wr,y=Math.tan(c-u),y=Math.sqrt(1+y*y),C*=y,N*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),D*=y,P*=y)),D=Et(D),P=Et(P),C=Et(C),N=Et(N)):(D=h,N=d,P=C=0),(E&&!~(a+"").indexOf("px")||R&&!~(o+"").indexOf("px"))&&(E=Ei(p,"x",a,"px"),R=Ei(p,"y",o,"px")),(x||g||m||_)&&(E=Et(E+x-(x*D+g*C)+m),R=Et(R+g-(x*P+g*N)+_)),(i||s)&&(y=p.getBBox(),E=Et(E+i/100*y.width),R=Et(R+s/100*y.height)),y="matrix("+D+","+P+","+C+","+N+","+E+","+R+")",p.setAttribute("transform",y),A&&(p.style[gt]=y)},Nv=function(e,t,n,i,s){var a=360,o=Dt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Oi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),h==="cw"&&c<0?c=(c+a*$c)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*$c)%a-~~(c/a)*a)),e._pt=d=new jt(e._pt,t,n,i,c,vv),d.e=u,d.u="deg",e._props.push(n),d},iu=function(e,t){for(var n in t)e[n]=t[n];return e},Ov=function(e,t,n){var i=iu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,p,x;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=ls(n,1),Zi(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=ls(n,1),a[gt]=c);for(l in ni)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=zt(c),x=zt(u),h=p!==x?Ei(n,l,c,x):parseFloat(c),d=parseFloat(u),e._pt=new jt(e._pt,o,l,h,d-h,al),e._pt.u=x||0,e._props.push(l));iu(o,i)};$t("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ga[e>1?"border"+r:r]=function(o,l,c,u,h){var d,p;if(arguments.length<4)return d=a.map(function(x){return Xn(o,x,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},a.forEach(function(x,g){return p[x]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,h)}});var Hh={name:"css",register:ll,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,p,x,g,m,_,A,E,R,D,P,C,N;Ul||ll(),this.styles=this.styles||Uh(e),N=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(nn[g]&&yh(g,t,n,i,e,s)))){if(p=typeof u,x=ga[g],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=rs(u)),x)x(this,e,g,u,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",vi.lastIndex=0,vi.test(c)||(m=zt(c),_=zt(u)),_?m!==_&&(c=Ei(e,g,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),N.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Dt(c)&&~c.indexOf("random(")&&(c=rs(c)),zt(c+"")||c==="auto"||(c+=an.units[g]||zt(Xn(e,g))||""),(c+"").charAt(1)==="="&&(c=Xn(e,g))):c=Xn(e,g),d=parseFloat(c),A=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),A&&(u=u.substr(2)),h=parseFloat(u),g in Pn&&(g==="autoAlpha"&&(d===1&&Xn(e,"visibility")==="hidden"&&h&&(d=0),N.push("visibility",0,o.visibility),pi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in ni,E){if(this.styles.save(g),R||(D=e._gsap,D.renderTransform&&!t.parseTransform||ls(e,t.parseTransform),P=t.smoothOrigin!==!1&&D.smooth,R=this._pt=new jt(this._pt,o,gt,0,1,D.renderTransform,D,0,-1),R.dep=1),g==="scale")this._pt=new jt(this._pt,D,"scaleY",D.scaleY,(A?br(D.scaleY,A+h):h)-D.scaleY||0,al),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){N.push(Jt,0,o[Jt]),u=Lv(u),D.svg?cl(e,u,0,P,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==D.zOrigin&&pi(this,D,"zOrigin",D.zOrigin,_),pi(this,o,g,va(c),va(u)));continue}else if(g==="svgOrigin"){cl(e,u,1,P,0,this);continue}else if(g in Bh){Nv(this,D,g,d,A?br(d,A+u):u);continue}else if(g==="smoothOrigin"){pi(this,D,"smooth",D.smooth,u);continue}else if(g==="force3D"){D[g]=u;continue}else if(g==="transform"){Ov(this,u,e);continue}}else g in o||(g=Br(g)||g);if(E||(h||h===0)&&(d||d===0)&&!gv.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),_=zt(u)||(g in an.units?an.units[g]:m),m!==_&&(d=Ei(e,g,c,_)),this._pt=new jt(this._pt,E?D:o,g,d,(A?br(d,A+h):h)-d,!E&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?Sv:al),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=xv);else if(g in o)Pv.call(this,e,g,c,A?A+u:u);else if(g in e)this.add(e,g,c||e[g],A?A+u:u,i,s);else if(g!=="parseTransform"){bl(g,u);continue}E||(g in o?N.push(g,0,o[g]):typeof e[g]=="function"?N.push(g,2,e[g]()):N.push(g,1,c||e[g])),a.push(g)}}C&&Ch(this)},render:function(e,t){if(t.tween._time||!Nl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xn,aliases:Pn,getSetter:function(e,t,n){var i=Pn[t];return i&&i.indexOf(",")<0&&(t=i),t in ni&&t!==Jt&&(e._gsap.x||Xn(e,"x"))?n&&Kc===n?t==="scale"?Tv:yv:(Kc=n||{})&&(t==="scale"?bv:Av):e.style&&!El(e.style[t])?Mv:~t.indexOf("-")?Ev:Dl(e,t)},core:{_removeProperty:Zi,_getMatrix:Fl}};Qt.utils.checkPrefix=Br;Qt.core.getStyleSaver=Uh;(function(r,e,t,n){var i=$t(r+","+e+","+t,function(s){ni[s]=1});$t(e,function(s){an.units[s]="deg",Bh[s]=1}),Pn[i[13]]=r+","+e,$t(n,function(s){var a=s.split(":");Pn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){an.units[r]="px"});Qt.registerPlugin(Hh);var Fv=Qt.registerPlugin(Hh)||Qt;Fv.core.Tween;export{zl as A,yi as B,st as C,Vv as E,ki as F,Gv as O,En as P,zv as S,Hv as T,Ou as U,q as V,Bv as W,mo as a,Fc as b,Si as c,kv as d,Ve as e,Fv as g};
//# sourceMappingURL=vendor-DBsiivnE.js.map
