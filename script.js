function decimalToBinary(num) {
  // your code here
	let str="";
	while (num>=0) {
		if(num==1 || num==0){
			str+=num;
		break;
		}
			let rem=num%2;
			str+=rem;
	
		num=Math.floor(num/2);
		
	}
	 // str.split("").reduce((acc, char) => char + acc, "");
	return str.split("").reduce((acc, char) => char + acc, "");; 
} 
const num = parseInt(prompt("Enter a number.")); 
alert(decimalToBinary(num));
