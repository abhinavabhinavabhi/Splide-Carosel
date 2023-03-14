(function(){
    
    document.addEventListener( 'DOMContentLoaded', function() {
        var splide = new Splide( '.splide',{
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            focus  : 'center',
          } );
          splide.on( 'move', function (newIndex,prevIndex,destIndex) {
            if(newIndex == 0 && prevIndex > 0){
                let firstid = "splide01-slide01"
                let item =  document.getElementById(firstid);
                if(item){
                        item.classList.add("is-active");
                }
            }
            else if(prevIndex< newIndex ){
                document.getElementsByClassName("is-next")[0].classList.add("is-active");
            }else if(newIndex < prevIndex){
                document.getElementsByClassName("is-prev")[0].classList.add("is-active");
            }
          } );


          splide.on( 'ready', function (newIndex,prevIndex,destIndex) {
            let firstid = "splide01-slide01"
            let item =  document.getElementById(firstid);
            if(item){
                item.classList.add("is-active");
            }
          } );
        splide.mount();
    } );

    var item1 = document.getElementsByClassName("item1");
    var item2 = document.getElementsByClassName("item2");
    var item3 = document.getElementsByClassName("item3");
    var item = document.getElementsByClassName("items");
    var slider = document.getElementsByClassName("slider")[0];

    console.log(item)
    for (let i =0 ; i< item.length;i++){
        item[i].addEventListener("click",myFunction);
    }
   
    function myFunction(e) {
        for (let i =0 ; i< item.length;i++){
            item[i].classList.remove("active");
        }
        e.target.classList.add("active");
        let id = e.target.id;
        console.log(id);
        document.getElementsByClassName("slider")[0].style.transform = "translateX("+e.target.offsetLeft+"px)";
       }
    

})()

