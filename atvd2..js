function questao1(){
    let txt = "abcdefghijklm";
    let resultado = txt.charAt(7);
    console.log("O caractere que está na posiçao 7 é: " + resultado);
  }
  
  function questao2(){
    let txt = "Posso comer bananas o dia todo.";
    var banana = txt.slice(12,19);
    console.log(banana);
  }
  
  function questao3(){
    let txt = "Olá, mundo!";
    let resultado = txt.replace("Olá", "Bem Vindo");
    console.log(resultado);
  }
  
  function questao4(){
    let txt = "Olá, mundo!";
    let resultado = txt.toUpperCase();
    console.log(resultado);
  }
  
  function questao5(){
    let txt = "Olá, mundo!";
    let resultado = txt.toLowerCase();
    console.log(resultado);
  }
  
  function questao6(){
    let txt = "Posso comer bananas o dia todo.";
    console.log(txt.length);
  }
  
  function questao7(){
    let str1 = "Hello ";
    let str2 = "World!";
    var str3 = str1 + str2;
    console.log(str3);
  }
  
  function questao8(){
    const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.sort();
    console.log(fruits);
  }
  
  function questao9(){
    const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.shift();
    fruits.pop();
    console.log(fruits);
  }
  
  function questao10(){
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Uva", "Caju", "Kiwi");
    console.log(fruits);
  }
  
  function questao11(){
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.unshift("Pera", "Manga");
    console.log(fruits);
  }