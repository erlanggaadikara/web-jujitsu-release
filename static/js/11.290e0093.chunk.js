(this["webpackJsonpjjt-web"]=this["webpackJsonpjjt-web"]||[]).push([[11],{626:function(t,e,n){"use strict";n.r(e);var o=n(45),r=n(0),i=0,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.iframeNode=null,e.id="react-embed-gist-"+i++,e}return Object(o.__extends)(e,t),e.prototype.componentDidMount=function(){this._updateIframeContent()},e.prototype.componentDidUpdate=function(t,e){this._updateIframeContent()},e.prototype._defineUrl=function(){var t=this.props,e=t.id,n=t.file;return"https://gist.github.com/"+e+".js"+(n?"?file="+n:"")},e.prototype._updateIframeContent=function(){var t=this.iframeNode,e=t.document;t.contentDocument?e=t.contentDocument:t.contentWindow&&(e=t.contentWindow.document);var n='<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>',o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body style="margin:0" '+("onload=\"parent.document.getElementById('"+this.id+"').style.height=document.body.scrollHeight + 'px'\"")+">"+n+"</body></html>";e.open(),e.writeln(o),e.close()},e.prototype.render=function(){var t=this;return(0,this.props.renderWrap)(r.createElement("iframe",{id:this.id,ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,style:{margin:"0 0 -12px"}}))},e}(r.PureComponent);e.default=p}}]);
//# sourceMappingURL=11.290e0093.chunk.js.map