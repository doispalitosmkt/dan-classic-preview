(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,34823,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(39072),i=e.i(90072),u=e.i(38408),c=e.i(30353),c=c;let l=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function n(e,t){let r=(0,u.f)(e=>e.gl),n=(0,c.H)(i.H5,l(e)?Object.values(e):e);return(0,a.useLayoutEffect)(()=>{null==t||t(n)},[t]),(0,a.useEffect)(()=>{if("initTexture"in r){let e=[];Array.isArray(n)?e=n:n instanceof i.Sk?e=[n]:l(n)&&(e=Object.values(n)),e.forEach(e=>{e instanceof i.Sk&&r.initTexture(e)})}},[r,n]),(0,a.useMemo)(()=>{if(!l(e))return n;{let t={},a=0;for(let r in e)t[r]=n[a++];return t}},[e,n])}n.preload=e=>c.H.preload(i.H5,e),n.clear=e=>c.H.clear(i.H5,e);var s=e.i(98903),o=e.i(49448),v=e.i(4421),f=e.i(54192);let h=`
varying vec2 vUv;uniform sampler2D uImage,uTechnical;
uniform vec2 uFocal;
uniform float uProgress,uAspect,uImageAspect;
void main(){
 vec2 uv=vUv;
 if(uAspect>uImageAspect){float ratio=uImageAspect/uAspect;uv.y=uv.y*ratio+(1.-ratio)*(1.-uFocal.y);}
 else{float ratio=uAspect/uImageAspect;uv.x=uv.x*ratio+(1.-ratio)*uFocal.x;}
 vec3 real=texture2D(uImage,uv).rgb;
 vec3 tech=texture2D(uTechnical,uv).rgb;
 float scan=clamp((uProgress-.18)/.3,0.,1.);
 float reveal=step(1.-scan,vUv.y)*step(.18,uProgress);
 gl_FragColor=vec4(mix(real,tech,reveal),1.);
}`;function p(){let e=(0,a.useRef)(null),r=n((0,f.J)(o.f["IMG-PD-A"].src)),c=n((0,f.J)(o.f["IMG-PD-A-tecnico"].src)),l=(0,u.f)(e=>e.invalidate),p=(0,a.useMemo)(()=>({uImage:{value:r},uTechnical:{value:c},uImageAspect:{value:o.f["IMG-PD-A"].width/o.f["IMG-PD-A"].height},uProgress:{value:0},uAspect:{value:1.5},uFocal:{value:new i.wq(.58,.5)}}),[r,c]);return(0,a.useEffect)(()=>{l()},[p,l]),(0,s.f)(t=>{let a=e.current?.uniforms;a&&(a.uProgress.value=v.P.technical,a.uAspect.value=v.P.technicalSize.width/v.P.technicalSize.height,a.uFocal.value.set(v.P.technicalFocal.x,v.P.technicalFocal.y),"por-dentro"!==v.i.getState().chapter||document.hidden||t.invalidate())}),(0,t.jsxs)("mesh",{frustumCulled:!1,children:[(0,t.jsx)("planeGeometry",{args:[2,2]}),(0,t.jsx)("shaderMaterial",{ref:e,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:h,uniforms:p,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})]})}e.s(["TechnicalView",0,function(){return(0,v.i)(e=>e.webgl)?(0,t.jsx)(r.f,{className:"technical-view",index:2,children:(0,t.jsx)(a.Suspense,{fallback:null,children:(0,t.jsx)(p,{})})}):null}],34823)},45927,function(e){e.n(e.i(34823))}]);