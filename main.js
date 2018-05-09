// 初始化
let $buttons = $('#buttonsWrapper>button')
let $slides = $('#slides') 
let $images = $slides.children('img')
let current = 0 


克隆元素()
$slides.css({transform:'translateX(-400px)'}) //复位
监听button()

$(xx).on('click',function(){
	goToSlide(current + 1)
})
$(ss).on('click',function(){
	goToSlide(current - 1)
})

let timer = setInterval(function(){
	goToSlide(current + 1)
},1500)

$('.container').on('mouseenter',function(){
	window.clearInterval(timer)
}).on('mouseleave',function(){
	setInterval(function(){
		goToSlide(current + 1)
	},1500)
})

//封装函数
function 克隆元素(){
	let $firstCopy = $images.eq(0).clone(true) 
	let $lastCopy = $images.eq($images.length-1).clone(true) 

	$slides.append($firstCopy) 
	$slides.prepend($lastCopy) 
}
//监听button
function 监听button(){
	$('#buttonsWrapper').on('click','button', function(e){ //只有点击buttonsWrapper下的button才生效
		let $button = $(e.currentTarget) //点击的那个按钮（就是当前展示的那张图）
		let index = $button.index() // 点击的是第几个按钮
		goToSlide(index)
	})
}

function goToSlide(index){
	if(index > $buttons.length - 1){
		index = 0
	} else if(index < 0){
		index = $buttons.length
	}
	console.log(current,index)
	//最后一张
		if(current === $buttons.length - 1 && index === 0){ //如果当前是最后一张且
			$slides.css({transform:`translateX(${-($buttons.length + 1) * 400}px)`})
				.one(`transitionend`,function(){
					$slides.hide().offset()
					$slides.css({transform:`translateX(${-(index + 1) * 400}px)`}).show()
				})
		}else if(current === 0 && index === $buttons.length - 1){
			$slides.css({transform:`translateX(0px)`})
				.one(`transitionend'`,function(){
					$slides.hide().offset()
					$slides.css({transform:`translateX(${-(index + 1) * 400}px)`}).show()
				})
		}else{
			$slides.css({transform:`translateX(${-(index+1 ) *400}px)`})
		}
		current = index
}