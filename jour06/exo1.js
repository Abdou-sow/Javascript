function formatDate(str) {

    var x = str.split("-").reverse().join("/")
    console.log(x)

}

formatDate("2008-04-15")