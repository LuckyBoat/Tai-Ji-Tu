let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 大家好，这里是前端在线课程
* 接下来将给你们展示前端代码的魅力
* 首先我需要一个div
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px; 
}
/* 接下来我会把这个div
* 变成一个太极八卦图
* 请注意观看
* 首先把这个div变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 因为太极八卦图是由阴阳调和而成的
* 所以是一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 再加入两个神奇的小鱼眼 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    //如果是回车，就不照搬
    //如果不是回车，就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 88888);
    html.scrollTo(0, 88888);
    if (n < string.length - 1) {
      //如果n不是最后一个,就继续
      n += 1;
      step();
    }
  }, 50);
};

step(); //1=>2
