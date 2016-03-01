/**
* 创建一个react组件
* @ability: 可以新增节点，删除节点
*/
import React from "react";
var Panel = React.createClass({
	render:function(){
		return (
			<div className="container" id="container">
    	<h2><button onClick>新增</button></h2>
    	<ul>
    		{this.calNum()}
    	</ul>
    </div>
			)
	},
	calNum:function(){
		var num = this.props.num,
			allBar=[];
		for(var i in num){
			allBar.push(); //添加子节点
		}
	},
	addBar:function(){
		var num = this.props.num,
			max = num[num.length-1];
		this.porps.num.push(++max);
		return Bar({
			num:max
		});
	},
	//查找执行的num并且删除，并更新state
	removeBar:function(num){
		var index = 0,
			num = this.props.num;
		for(var i in num){  //找到执行的num的Index
			if(num[i]===num){
				index = i;
				break;
			}
		}
		//更新props
	}
});
var Bar = React.createClass({
	render:function(){
		return (
			<li>{this.props.num}<span onClick={this.deleteBar}>-</span></li>
			)
	},
	deleteBar:function(e){
		var num = e.target.parentNode.innerHTML.match(/\d+/);
	}
})