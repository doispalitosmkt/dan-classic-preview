(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,34823,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(39072),u=e.i(90072),l=e.i(38408),a=e.i(30353),a=a;let o=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function n(e,t){let r=(0,l.f)(e=>e.gl),n=(0,a.H)(u.H5,o(e)?Object.values(e):e);return(0,i.useLayoutEffect)(()=>{null==t||t(n)},[t]),(0,i.useEffect)(()=>{if("initTexture"in r){let e=[];Array.isArray(n)?e=n:n instanceof u.Sk?e=[n]:o(n)&&(e=Object.values(n)),e.forEach(e=>{e instanceof u.Sk&&r.initTexture(e)})}},[r,n]),(0,i.useMemo)(()=>{if(!o(e))return n;{let t={},i=0;for(let r in e)t[r]=n[i++];return t}},[e,n])}n.preload=e=>a.H.preload(u.H5,e),n.clear=e=>a.H.clear(u.H5,e);var c=e.i(98903),s=e.i(49448),v=e.i(4421),f=e.i(54192);let d=`
varying vec2 vUv;uniform sampler2D uImage;
uniform vec2 uTexel,uThresholds,uFocal;
uniform float uProgress,uAspect,uMaxMagnitude,uGridPx,uGridOpacity;
uniform vec3 uSilver;
float lum(vec2 p){return dot(texture2D(uImage,p).rgb,vec3(.299,.587,.114));}
float deriv(int i){if(i==-2)return -1.;if(i==-1)return -2.;if(i==1)return 2.;if(i==2)return 1.;return 0.;}
float smoothWeight(int i){if(i==-2||i==2)return 1.;if(i==-1||i==1)return 4.;return 6.;}
void main(){
 vec2 uv=vUv;float imageAspect=uTexel.y/uTexel.x;
 if(uAspect>imageAspect){float ratio=imageAspect/uAspect;uv.y=uv.y*ratio+(1.-ratio)*(1.-uFocal.y);}
 else{float ratio=uAspect/imageAspect;uv.x=uv.x*ratio+(1.-ratio)*uFocal.x;}
 vec3 real=texture2D(uImage,uv).rgb;
 float gx=0.,gy=0.;for(int y=-2;y<=2;y++){for(int x=-2;x<=2;x++){float l=lum(uv+vec2(float(x),float(y))*uTexel);gx+=l*deriv(x)*smoothWeight(y)/16.;gy+=l*smoothWeight(x)*deriv(y)/16.;}}
 float edge=smoothstep(uThresholds.x,uThresholds.y,length(vec2(gx,gy))/uMaxMagnitude);
 vec2 pixel=uv/uTexel;vec2 grid=step(mod(pixel,uGridPx),vec2(1.));
 vec3 tech=mix(vec3(0.),uSilver,edge);tech=mix(tech,uSilver,max(grid.x,grid.y)*uGridOpacity);
 float scan=clamp((uProgress-.18)/.3,0.,1.);
 float reveal=step(1.-scan,vUv.y)*step(.18,uProgress);
 gl_FragColor=vec4(mix(real,tech,reveal),1.);
}`;function g(){let e=(0,i.useRef)(null),r=n((0,f.J)(s.f["IMG-PD-A"].src)),a=(0,l.f)(e=>e.invalidate),o=(0,i.useMemo)(()=>({uImage:{value:r},uTexel:{value:new u.wq(1/s.l.inputSize[0],1/s.l.inputSize[1])},uProgress:{value:0},uAspect:{value:1.5},uFocal:{value:new u.wq(.58,.5)},uMaxMagnitude:{value:s.l.edgeNormalizationMax},uThresholds:{value:new u.wq(...s.l.smoothstep)},uGridPx:{value:s.l.gridPx},uGridOpacity:{value:s.l.gridOpacity},uSilver:{value:new u.Es}}),[r]);return(0,i.useEffect)(()=>{o.uSilver.value.set(getComputedStyle(document.documentElement).getPropertyValue("--c-silver-light").trim()).convertLinearToSRGB(),a()},[o,a]),(0,c.f)(t=>{let i=e.current?.uniforms;i&&(i.uProgress.value=v.P.technical,i.uAspect.value=v.P.technicalSize.width/v.P.technicalSize.height,i.uFocal.value.set(v.P.technicalFocal.x,v.P.technicalFocal.y),"por-dentro"!==v.i.getState().chapter||document.hidden||t.invalidate())}),(0,t.jsxs)("mesh",{frustumCulled:!1,children:[(0,t.jsx)("planeGeometry",{args:[2,2]}),(0,t.jsx)("shaderMaterial",{ref:e,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:d,uniforms:o,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})]})}e.s(["TechnicalView",0,function(){return(0,v.i)(e=>e.webgl)?(0,t.jsx)(r.f,{className:"technical-view",index:2,children:(0,t.jsx)(i.Suspense,{fallback:null,children:(0,t.jsx)(g,{})})}):null}],34823)},45927,function(e){e.n(e.i(34823))}]);