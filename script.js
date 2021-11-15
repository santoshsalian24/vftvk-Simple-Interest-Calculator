function compute() {
	console.log("Computing....");
	p = document.getElementById("principal").value;
	n = document.getElementById("rate").value;
	r = document.getElementById("years").value;
	simpleInterest = (p * n * r) / 100;
	document.getElementById("result").textContent = simpleInterest;
	console.log("Computing Done");
}
