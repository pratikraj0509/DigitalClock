const clock = document.getElementById('clock')

// const clock = document.querySelector('#clock')

// both will store the same value


setInterval(function(){
    let date = new Date()
// console.log(date.toLocaleDateString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)  