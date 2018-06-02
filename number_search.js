var arr = [1, 2, 3];
console.log(ls(1));
console.log(bs(1));
function bs(x) {

    lb = 0, ub = arr.length - 1;
    while (lb <= ub) {
        m = lb + ub / 2;

        if (arr[m] == x) {
            return m;
        } else if (arr[m] > x) {
            ub = m - 1;
        } else if (arr[m] < x) {
            lb = m + 1;
        }
    }
    return -1;
}
function ls(num) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {

            return i;
        }
    }

}