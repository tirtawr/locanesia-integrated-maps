(this["webpackJsonplocanesia-integrated-maps"]=this["webpackJsonplocanesia-integrated-maps"]||[]).push([[0],{31:function(e,a,t){e.exports=t(62)},36:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(24),i=t.n(r),c=(t(36),t(25)),l=t(26),s=t(29),u=t(30),d=t(6),m=t.n(d),p=t(9),h=t(27),f=t.n(h),g=t(7),b=t.n(g),k=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(c.a)(this,t),n=a.call(this,e),m.a.accessToken="pk.eyJ1Ijoic2V0YXBhazIwMTkiLCJhIjoiY2szdzJhdGx3MDVpaDNpcGltZ3luNDUyMSJ9.lwsV4FsgU1SfbS6QRFlO_A",n.state={lng:113.69315,lat:-7.87643,zoom:10},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params,t=a.mountainId,n=a.trackId;this.setState({mountainId:t,trackId:n});var o=b.a.get("/map-data/".concat(t,"/").concat(n,"/track.json")),r=b.a.get("/map-data/".concat(t,"/").concat(n,"/points.json"));b.a.all([o,r]).then(b.a.spread((function(){for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];var o=t[0].data,r=t[1].data,i=f()(Object(p.centroid)(o))[0],c=new m.a.Map({container:e.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:i,zoom:e.state.zoom});e._insertMapLayers(c,o,r),e._centerMapOnTrack(c,o)}))).catch((function(e){console.error(e)}))}},{key:"_insertMapLayers",value:function(e,a,t){e.on("load",(function(){e.addSource("route",{type:"geojson",data:a}),e.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"square"},paint:{"line-color":"#e25c64","line-width":8}}),e.addSource("points",{type:"geojson",data:t}),e.addLayer({id:"points",type:"symbol",source:"points",layout:{"icon-image":["concat",["get","icon"],"-15"],"text-field":["get","title"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"}}),e.addControl(new m.a.NavigationControl),e.addControl(new m.a.ScaleControl({maxWidth:240,unit:"metric"}))}))}},{key:"_centerMapOnTrack",value:function(e,a){var t=Object(p.bbox)(a),n=[[t[0],t[1]],[t[2],t[3]]];e.fitBounds(n,{padding:{top:50,bottom:50,left:50,right:50}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{ref:function(a){return e.mapContainer=a},className:"mapContainer"}))}}]),t}(o.a.Component),y=t(13),v=t(1);function w(){return o.a.createElement(y.a,null,o.a.createElement(v.c,null,o.a.createElement(v.a,{path:"/:mountainId/:trackId",component:k}),o.a.createElement(v.a,{path:"/"},o.a.createElement("ul",null,["/agropuro/baderan","/ijen/paltuding","/kerinci/kerisik-tuo","/lawu/cemoro-kandang","/merapi/selo","/merbabu/selo","/merbabu/suwanting","/rinjani/sembalun","/rinjani/senaru","/semeru/raung-kalibaru","/sindoro/kledung"].map((function(e){return o.a.createElement("li",{key:e},o.a.createElement(y.b,{to:e},e))}))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b3a0b8cd.chunk.js.map