let n 
inrize()
setInterval(() => {
	// $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
	leaveActive(indexImg(n)) //leaveActive这个函数返回值是undefined，
		.one('transitionend',(e) => { // undefined后边接事件肯定不行，可以让leaveActive把这个节点当做返回值返回
			// $(e.currentTarget).removeClass('leave').addClass('enter')
			enterActive($(e.currentTarget))
		})
	// $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
	currentActive(indexImg(n+1))
	n += 1
},2000)



//封装函数

// 限制n/n+1在1,2,3,范围内
function x(n){	
	if(n > 3){
		n = n%3
		if(n === 0){
			n = 3
		}
	}
	return n
} //n只能等于1，2,3

//初始化
function inrize(){
	n = 1
	$(`.images > img:nth-child(${n})`).addClass('current')
	.siblings().addClass('enter') //第一个current状态，其他所有兄弟全部在enter状态
	
}
//current状态
function currentActive($node){
	$node.removeClass('enter leave').addClass('current')
}
//leave状态
function leaveActive($node){
	$node.removeClass('current enter').addClass('leave')
	return $node //返回节点 这样返回值就不是undefined了.或则直接return $node.removeClass('current enter').addClass('leave')
}
//enter状态
function enterActive($node){
	$node.removeClass('current leave').addClass('enter')
}
//选择器优化
function indexImg(n){
	return $(`.images > img:nth-child(${x(n)})`)
}