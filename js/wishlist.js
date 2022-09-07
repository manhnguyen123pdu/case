
// function add
let wishlist = []
function add(i) {
    check = true;
    for (k = 0; k < wishlist.length; k++) {
        if (product[i].name == wishlist[k].name) {
            check = false;
            break;
        }
    }
    if (check) {
        wishlist.push(product[i]);
    }
    vd()
}
