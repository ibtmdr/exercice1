function afficheTable(tab)
{
    for( let i=0; i< tab.length; i++)
       {console.log("\n")
       for( let j=0; j< tab[i].length; j++)
          { console.log(" " + tab[i][j] + " ")}
       }
}

function createTables()
{
	let tab=[]
	do {
	let size= prompt(" insert longeur de nouveau table :");
	s=parseInt(size);
	for(let i = 0 ; i < parseInt(size) ; i++ )
	   { 
		   num=prompt(" insert item  " + i + " : ");
		   tab[i]=parseInt(num);
	   }
	tab.push();
	} while ( parseInt(s) != 0);
	   
	console.log("thanks");
    return tab
}

function triTable(tab){
    let tab=[]
     do {
        isSwapped = false
        for (let i = 0; i < arrayLength - 1; i++) {
          if (array[i] > array[i + 1]) {
            const tempLeftValue = array[i]
            array[i] = array[i + 1]
            array[i + 1] = tempLeftValue
            isSwapped = true
          }
    }
  } while (isSwapped)
}

let tab=createTables()
triTable(tab)
afficheTable(tab)
