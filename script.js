let string = prompt("String typedagi malumot kiriting")

let number = +prompt("Number typedagi malumot kiriting")

let boolean = prompt("Boolean typedagi malumot kiriting")

confirm("Hamma malumotni to'g'ri kiritganizga ishonchingiz komilmi?")

if (typeof (string) == 'string', typeof (number) == 'number', boolean == 'true' || boolean == 'false') {
    alert("Siz kiritkan " + string + " sozi string typega tegishli\n" + "Siz kiritkan " + number + " sozi number typega tegishli\n" + "Siz kiritkan " + boolean + " sozi boolean typega tegishli")
} else if (typeof (string) == 'string', typeof (number) == 'number') {
    alert("Siz kiritkan " + string + " sozi string typega tegishli\n" + "Siz kiritkan " + number + " sozi number typega tegishli\n" + "Siz kiritkan " + boolean + " sozi boolean typega tegishli emas")
} else if (typeof (string) == 'string', boolean == 'true' || boolean == 'false') {
    alert("Siz kiritkan " + string + " sozi string typega tegishli\n" + "Siz kiritkan " + number + " sozi number typega tegishli emas\n" + "Siz kiritkan " + boolean + " sozi boolean typega tegishli")
} else if (typeof (number) == 'number', boolean == 'true' || boolean == 'false') {
    alert("Siz kiritkan " + string + " sozi string typega tegishli emas\n" + "Siz kiritkan " + number + " sozi number typega tegishli\n" + "Siz kiritkan " + boolean + " sozi boolean typega tegishli")
} else {
    alert("Siz kiritkan " + string + " sozi string typega tegishli emas\n" + "Siz kiritkan " + number + " sozi number typega tegishli emas\n" + "Siz kiritkan " + boolean + " sozi boolean typega tegishli emas")
}