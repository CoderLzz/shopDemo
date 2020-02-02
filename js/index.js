/**
 *顶部导航栏下拉列表特效 
 */
$(function () {
    $('.drop_down_mypyg').mouseenter(function () {
        $('.header,.nav').css('zIndex', '-1')
        $('.my_pyg').stop().slideDown(200)
        $(this).css({
            'backgroundColor': '#fff',
            border: '1px solid #ccc',
            borderTop: 'none',
            borderBottom: 'none',
        })
    }).mouseleave(function () {
        $('.my_pyg').stop().slideUp(200, function () {
            $('.header,.nav').css('zIndex', '0')

        })
        $(this).css({
            'backgroundColor': '',
            border: 'none',
        })
    })
})
/**
 * 查询框的默认值变化
 */
var arr = ['闪迪存储卡', '儿童运动鞋', '监控摄像头', '键鼠套装', '榨汁机家用', '联想一体机', '自然堂套装', '移动硬盘']
$(function () {
    var i = 0
    setInterval(function () {
        $('#search').prop('placeholder', arr[i + 1])
        i++
        if (i > arr.length) {
            i = -1
        }
    }, 6000)
})
/**
 * nav部分展示特效
 */
$(function () {
    $('.nav .content li').mouseenter(function () {
        $('.main').css('zIndex', -1)
        $(this).children('.goods_detail_left').stop().show(200)
    }).mouseleave(function () {
        $('.main').css('zIndex', 0)
        $(this).children('.goods_detail_left').stop().hide(200)
    })
})
/**
 * 右侧边栏特效
 */
window.addEventListener('load', function () {
    var recommend = document.querySelector('.recommend')
    var aside_right = document.querySelector('.aside_right')
    var one = document.querySelector('.one')
    var two = document.querySelector('.two')
    var footer = document.querySelector('.footer')
    var liArr = aside_right.getElementsByTagName('li')
    document.addEventListener('scroll', function () {
        var topObj = getScroll().top
        if (topObj >= recommend.offsetTop && topObj < one.offsetTop) {
            aside_right.style.position = 'fixed'
            aside_right.style.top = '60px'
            aside_right.style.right = '30px'
            for (var i = 0; i < liArr.length - 3; i++) {
                liArr[i].children[0].style.color = ''
            }
            liArr[0].children[0].style.color = 'red'
        } else if (topObj >= (one.offsetTop) && topObj < two.offsetTop) {
            for (var i = 0; i < liArr.length - 3; i++) {
                liArr[i].children[0].style.color = ''
            }
            liArr[1].children[0].style.color = 'red'
        } else if (topObj >= (two.offsetTop) && topObj < footer.offsetTop) {
            for (var i = 0; i < liArr.length - 3; i++) {
                liArr[i].children[0].style.color = ''
            }
            liArr[2].children[0].style.color = 'red'
        } else {
            aside_right.style.position = 'absolute'
            aside_right.style.top = '674px'
            aside_right.style.right = '30px'
        }
    })
})

function getScroll() {
    return {
        left: window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop,
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    }
}
/**
 * 返回顶部实现
 */
$(function () {
    $('#backTop').click(function () {
        animation1(document.documentElement, 0)
    })

    $('.aside_right li').eq(0).click(function () {
        animation1(document.documentElement, Math.ceil($('.recommend')[0].offsetTop + 10))
    })
    $('.aside_right li').eq(1).click(function () {
        animation1(document.documentElement, Math.ceil($('.one')[0].offsetTop + 10))
    })
    $('.aside_right li').eq(2).click(function () {
        animation1(document.documentElement, Math.ceil($('.two')[0].offsetTop + 10))
    })

    function animation1(ele, target) {
        clearInterval(ele.timeId)
        ele.timeId = setInterval(function () {
            var current = Math.ceil(ele.scrollTop)
            console.log(current);
            var step = (target - current) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            console.log(step);
            current += step
            console.log(current);
            if (current == target) {
                console.log("object");
                ele.scrollTop = target
                clearInterval(ele.timeId)
            }
            ele.scrollTop = current
        }, 20)

    }
})
/**
 * 购物车数量
 */
// $(function(){
//     setInterval(function(){
//         if(localStorage.getItem('goodsNumber')){
//             $('.shopcar .number').html(localStorage.getItem('goodsNumber'))
//         }else{
//             $('.shopcar .number').html(0)
//         }
//     },10)
// })
/**
 * 跳转页面
 */
window.addEventListener('load', function () {
    var register = document.querySelector('.register')
    var phone = document.querySelector('.phone')
    var mycar = document.querySelector('.mycar')
    register.addEventListener('click', function () {
        location.href = 'module/register.html'
        return false
    })
    phone.addEventListener('click', function () {
        location.href = 'module/list.html'
        return false
    })
    mycar.addEventListener('click', function () {
        location.href = 'module/car.html'
        return false
    })
})
/**
 * 图片懒加载
 */
$(function () {
    lazyLoadInit({
        showTime: 1100,
        onLoadBackEnd: function (i, e) {
            console.log("onLoadBackEnd:" + i);
        },
        onLoadBackStart: function (i, e) {
            console.log("onLoadBackStart:" + i);
        }
    });
})