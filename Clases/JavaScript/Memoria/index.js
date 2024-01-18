

function sum(a, b){
    return a+b
}
// Make a GET request
function fetchURL(apiurl){
    fetch(apiurl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        data = data
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function main(){
    let num = 2

    var caca
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
    caca = fetchURL(apiUrl)



    console.log(sum(1,2))
    document.write("hola " + sum(2,5))
}
main()