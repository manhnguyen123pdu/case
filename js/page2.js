
    let content1=document.querySelector('.content');
let item1="";
for(k=0;k<3;k++){
item1+=`
<div class="item">
<img src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic1-800x800.webp"
    alt="">
<div class="right">
    <a>Batchata lamp</a>
    <h2>$15.00</h2>
    <p>Tellus aliquam laoreet elit accumsan fusce turpis maximus tempus nostra nisi litora ex dolor aliquet
        mus viverra netus ac mollis</p>
    <span>SKU: FS/2022/06/01</span>
    <p> Categories: <a href="">Lamps</a></p>
    <p>Tag: <a id="tag" href=""> Cabinet</a></p>
</div>
<div class="but">
    <button>Select options</button>
</div>
</div>
`
}
content1.innerHTML=item1;
