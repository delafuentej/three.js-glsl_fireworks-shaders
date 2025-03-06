import{S as F,T as L,E as T,P as _,W as O,O as E,a as W,V as S,C as j,b as q,B,F as M,c as H,A as I,U as u,d as N,g as V,e as D}from"./vendor-DBsiivnE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();var G=`uniform float uSize;
uniform vec2 uResolution;
uniform float uProgress;

attribute float aSize;
attribute float aTimeMultiplier;

float remap(float value, float originMin, float originMax, float destinationMin, float destinationMax){
    return destinationMin + (value - originMin) * (destinationMax - destinationMin)/ (originMax - originMin);
}

void main(){
    
    float progress = uProgress * aTimeMultiplier;
    
    vec3 newPosition = position;

     
     
     
     float explodingProgress = remap(progress, 0.0, 0.1, 0.0, 1.0);
     
     explodingProgress = clamp(explodingProgress, 0.0, 1.0);
     
     explodingProgress = 1.0 - pow( 1.0 - explodingProgress, 3.0);
     
     newPosition *= explodingProgress;

    
    
     float fallingProgress = remap(progress, 0.1, 1.0, 0.0, 1.0);
    fallingProgress = clamp(fallingProgress, 0.0, 1.0);
    
    fallingProgress = 1.0 - pow( 1.0 - fallingProgress, 3.0);
    newPosition.y -= fallingProgress * 0.2;

    
    
     float sizeOpeningProgress = remap(progress, 0.0, 0.125, 0.0, 1.0);
   
    float sizeClosingProgress = remap(progress, 0.125, 1.0, 1.0, 0.0);
    
    float sizeProgress = min(sizeOpeningProgress, sizeClosingProgress);
    
    sizeProgress = clamp(sizeProgress, 0.0, 1.0);

    
   
     float twinklingProgress = remap(progress, 0.2, 0.8, 0.0, 1.0);
    twinklingProgress = clamp(twinklingProgress, 0.0, 1.0);
    
    
   
     float sizeTwinkling = sin(progress * 30.0)  * 0.5 + 0.5;
    
     sizeTwinkling = 1.0 - sizeTwinkling * twinklingProgress;

    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);

   
   
   

    
 
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectedPosition;

    
    
    gl_PointSize = uSize * uResolution.y * aSize * sizeProgress * sizeTwinkling;
    
    gl_PointSize *= 1.0 / - viewPosition.z;

    if(gl_PointSize < 1.0) gl_Position = vec4(9999.9);
}`,U=`uniform sampler2D uTexture;
uniform vec3 uColor;

void main(){
    
    
    
    
    
    
     float textureAlpha = texture(uTexture, gl_PointCoord).r;
    

    
   
   gl_FragColor = vec4(uColor, textureAlpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;const A=document.querySelector("canvas.webgl"),d=new F,s=new L,K=new T,e={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};e.resolution=new D(e.width*e.pixelRatio,e.height*e.pixelRatio);window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,e.pixelRatio=Math.min(window.devicePixelRatio,2),e.resolution.set(e.width,e.height),c.aspect=e.width/e.height,c.updateProjectionMatrix(),m.setSize(e.width,e.height),m.setPixelRatio(e.pixelRatio)});const c=new _(25,e.width/e.height,.1,100);c.position.set(1.5,0,6);d.add(c);const R=new E(c,A);R.enableDamping=!0;const m=new O({canvas:A,antialias:!0});m.setSize(e.width,e.height);m.setPixelRatio(e.pixelRatio);const X=async()=>{try{const i=await new Promise((r,a)=>{K.load("./environmentMap/night_countryside.exr",r,void 0,a)});i.mapping=W,d.environment=i,d.background=i}catch(i){console.error("Error loading environment map:",i)}};X();const y=[s.load("./particles/1.png"),s.load("./particles/2.png"),s.load("./particles/3.png"),s.load("./particles/4.png"),s.load("./particles/5.png"),s.load("./particles/6.png"),s.load("./particles/7.png"),s.load("./particles/8.png")],Y=(i,r,a,l,n,o)=>{const t=new Float32Array(i*3),v=new Float32Array(i),x=new Float32Array(i);for(let p=0;p<i;p++){const P=p*3,C=new q(n*(.75+Math.random()*.25),Math.random()*Math.PI,Math.random()*Math.PI*2),w=new S;w.setFromSpherical(C),t[P+0]=w.x,t[P+1]=w.y,t[P+2]=w.z,v[p]=Math.random(),x[p]=1+Math.random()}const g=new B;g.setAttribute("position",new M(t,3)),g.setAttribute("aSize",new M(v,1)),g.setAttribute("aTimeMultiplier",new M(x,1)),l.flipY=!1;const f=new H({vertexShader:G,fragmentShader:U,uniforms:{uSize:new u(a),uResolution:new u(e.resolution),uTexture:new u(l),uColor:new u(o),uProgress:new u(0)},transparent:!0,depthWrite:!1,blending:I}),h=new N(g,f);h.position.copy(r),d.add(h);const k=()=>{d.remove(h),g.dispose(),f.dispose(),console.log("destroy")};V.to(f.uniforms.uProgress,{value:1,duration:3,ease:"linear",onComplete:k})},z=new Audio("./sounds/fireworks_sound.wav"),J=()=>{z.currentTime=0,z.play().catch(i=>console.error("Error al reproducir el sonido:",i))},Q=()=>{const i=Math.round(400+Math.random()*1e3),r=new S((Math.random()-.5)*2,Math.random(),(Math.random()-.5)*2),a=.1+Math.random()*.1,l=y[Math.floor(Math.random()*y.length)],n=.5+Math.random(),o=new j;o.setHSL(Math.random(),1,.5+Math.random()*.3),Y(i,r,a,l,n,o)},Z=()=>{J(),Q()};window.addEventListener("click",Z);const b=()=>{R.update(),m.render(d,c),window.requestAnimationFrame(b)};b();
//# sourceMappingURL=index-CJpY9JcV.js.map
