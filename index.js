function import$(t,e){var r={}.hasOwnProperty;for(var o in e)r.call(e,o)&&(t[o]=e[o]);return t}var cancelAll,ldColorPicker,i;cancelAll=function(t){return t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1},ldColorPicker=import$(function(t,e){var r,o,l,i=this;return null==e&&(e=null),this.node=t,this.target=e,this.idx=0,r="<div class='ldcp-2d'><div class='ldcp-ptr'></div><div class='ldcp-mask'></div></div>",o="<div class='ldcp-1d'><div></div><div></div><div class='ldcp-bar'></div><div class='ldcp-mask'></div></div>",l="<div class='ldcp-colors'><div class='ldcp-color'></div><div class='ldcp-color'></div><div class='ldcp-color'></div><div class='ldcp-color'></div><div class='ldcp-color'></div><div class='ldcp-color'></div><div class='ldcp-color'></div></div>",t.innerHTML=r+o+l,t.querySelector(".ldcp-2d .ldcp-mask").addEventListener("mousedown",function(){return ldColorPicker.mouse.start(i,2)}),t.querySelector(".ldcp-1d .ldcp-mask").addEventListener("mousedown",function(){return ldColorPicker.mouse.start(i,1)}),setTimeout(function(){function e(t){return i.setIdx(t.target.idx)}var r,o,l,s;for(i.P2D={ptr:t.querySelector(".ldcp-ptr")},i.P1D={ptr:t.querySelector(".ldcp-bar")},i.updateDimension(),i.width=t.offsetWidth,i.height=t.offsetHeight,i.color={nodes:t.querySelectorAll(".ldcp-color"),vals:ldColorPicker.palette.getVal(i)},r=0,o=i.color.nodes.length;o>r;++r)l=r,s=i.color.nodes[l],s.idx=l,s.addEventListener("click",e);return s=i.color.vals[i.idx],i.setHsl(s.hue,s.sat,s.lit)},0),this},{dom:null,palette:{members:[],getVal:function(t){return t&&this.members.push(t),this.val},update:function(){var t,e,r,o,l=[];for(t=0,r=(e=this.members).length;r>t;++t)o=e[t],l.push(o.updatePalette());return l},val:function(){var t,e=[];for(t=0;7>t;++t)i=t,e.push({hue:parseInt(360*Math.random()),sat:50,lit:50});return e}()},mouse:{start:function(t,e){var r;return r=[["selectstart",function(t){return cancelAll(t)}],["mousemove",function(r){return t.move(r,e)}],["mouseup",function(){return r.map(function(t){return document.removeEventListener(t[0],t[1])})}]],r.map(function(t){return document.addEventListener(t[0],t[1])})}},init:function(t,e){var r,o,l,i=[];if(null==e&&(e=null),t)return t._ldcp=new ldColorPicker(t,e);for(r=document.querySelectorAll(".ldColorPicker"),o=0,l=r.length;l>o;++o)t=r[o],i.push(t._ldcp=new ldColorPicker(t));return i},prototype:{updateDimension:function(){var t,e,r;return t=[this.node.querySelector(".ldcp-2d"),this.node.querySelector(".ldcp-2d")],e=t[0],r=t[1],t=this.P2D,t.w=e.offsetWidth,t.h=e.offsetHeight,t=this.P1D,t.w=r.offsetWidth,t.h=r.offsetHeight,t},toggle:function(){var t;return"block"===this.node.style.display?this.node.style.display="none":(this.node.style.display="block",this.updateDimension(),this.palette.splice(7),this.color.vals.splice(0,0,this.random()),t=this.color.vals[this.idx],this.setHsl(t.hue,t.sat,t.lit),ldColorPicker.palette.update())},random:function(){return{hue:360*Math.random(),sat:50,lit:50}},updatePalette:function(){var t,e,r,o=[];for(t=0,e=this.color.nodes.length;e>t;++t)r=t,o.push(this.updateColor(r));return o},updateColor:function(t){var e;return e=this.color.vals[t],this.color.nodes[t].style.background="hsl("+(e.hue||0)+","+(e.sat||0)+"%,"+(e.lit||0)+"%)"},toRgb:function(t){var e,r,o,l,i,s,n;return e=(1-Math.abs(2*t.lit/100-1))*t.sat/100,r=e*(1-Math.abs(t.hue/60%2-1)),o=t.lit/100-e/2,l=function(){switch(parseInt(t.hue/60)){case 0:return[e,r,0];case 1:return[r,e,0];case 2:return[0,e,r];case 3:return[0,r,e];case 4:return[r,0,e];case 5:return[e,0,r];case 6:return[e,r,0]}}(),i=l[0],s=l[1],n=l[2],l=[i+o,s+o,n+o],i=l[0],s=l[1],n=l[2],l},hex:function(t){var e,r;return t=(e=(r=parseInt(255*t))>0?r:0)<255?e:255,t=t.toString(16),t.length<2?"0"+t:t},toHexString:function(t){var e,r,o,l;return e=this.toRgb(t),r=e[0],o=e[1],l=e[2],"#"+this.hex(r)+this.hex(o)+this.hex(l)},setIdx:function(t){var e;return this.idx=t,e=this.color.vals[t],this.setHsl(e.hue,e.sat,e.lit)},setHsl:function(t,e,r,o){var l,i,s,n;return null==o&&(o=!1),l=this.color.vals[this.idx],l.hue=t,l.sat=e,l.lit=r,this.target&&(this.target.value=this.toHexString(this.color.vals[this.idx])),o?void 0:(i=(this.P2D.w*t/360+.02*this.P2D.w)/1.04,s=(this.P2D.h*(100-e)/100+.02*this.P2D.h)/1.04,n=(this.P1D.h*(100-r)/100+.02*this.P1D.h)/1.04,this.setPos(2,i,s,!0),this.setPos(1,i,n,!0),this.updateColor(this.idx))},setPos:function(t,e,r,o){var l,i,s,n,c,d,a,u,h;return null==o&&(o=!1),l=2===t?this.P2D:this.P1D,e=(i=e>0?e:0)<(s=l.w)?i:s,r=(i=r>0?r:0)<(s=l.h)?i:s,l.ptr.style.top=r+"px",2===t&&(l.ptr.style.left=e+"px"),o?void 0:(i=[1.04*e-.02*l.w,1.04*r-.02*l.h],n=i[0],c=i[1],n=(i=(s=100*n/l.w)>0?s:0)<100?i:100,c=(i=(s=100*c/l.h)>0?s:0)<100?i:100,d=this.color.vals[this.idx],a=2===t?3.6*n:d.hue,u=2===t?100-c:d.sat,h=1===t?100-c:d.lit,this.setHsl(a,u,h,!0),this.updateColor(this.idx))},move:function(t,e){var r,o,l,i;if(t.buttons)return r=this.node.getBoundingClientRect(),o=[t.clientY-r.top,t.clientX-r.left],l=o[0],i=o[1],this.setPos(e,i,l),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1},palette:[],add:function(t){var e,r,o,l,i,s,n,c=[];for(e=t.parentNode.parentNode,this.palette.push({hue:e.hue,sat:e.sat,lit:e.lit}),this.palette.length>7&&this.palette.splice(7),r=t.parentNode.querySelectorAll(".ldcp-color"),o=0,l=r.length;l>o&&(i=o,s=r[i],n=this.palette[i],n);++o)c.push(s.style.background="hsl("+(n.hue||0)+","+(n.sat||0)+"%,"+(n.lit||0)+"%)");return c}}}),$(document).ready(function(){function t(){return this._ldcpnode._ldcp.toggle()}var e,r,o,l,i,s,n,c,d=[];for(ldColorPicker.init(),e=document.querySelectorAll("*[data-toggle='colorpicker']"),r=0,o=e.length;o>r;++r)l=e[r],l._ldcpnode=i=document.createElement("div"),i.setAttribute("class","ldColorPicker "+l.getAttribute("data-cpclass")+" bottom bubble"),ldColorPicker.init(i,l),document.body.appendChild(i),s=l.offsetTop+l.offsetHeight+10+"px",n=l.offsetLeft+(l.offsetWidth-i.offsetWidth)/2+"px",c=i.style,c.position="absolute",c.display="none",c.top=s,c.left=n,d.push(l.addEventListener("click",t));return d});