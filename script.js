function decimalToBinary(num) {
  // your code here
	let str="";
	while (n>=1) {
		if(n==1){
			str+=1;
		break;
		}
			let rem=n%2;
			str+=rem;
	
		n=n/2;
		
	}
	return str;
}
const num = parseInt(prompt("Enter a number.")); 
alert(decimalToBinary(num));
