$(document).ready(function(){
	function rand(n)
	{
		return Math.floor(Math.random()*n + 1);
	}
	$("#btnSubtract").click(function(){
		$("#numOne").val(rand(10));
		$("#numTwo").val(rand(10));
	});
	for(var i=0; i<=10; i++){
		var countCorrect=0;
		var countIncorrect=0;
		var countSum=0;
		$("#btn"+ i).click(function(){
			var result=$("#numOne").val()-$("#numTwo").val();
			countSum += 1;
			if (result == $(this).val()){
				$("#notify").val("correct");
				countCorrect += 1;
				$("#countCorrect").val(countCorrect);
				$("#countIncorrect").val(countIncorrect);
				$("#percentCorrect").val((countCorrect/countSum)*100);
			} else {
				$("#notify").val("incorrect");
				countIncorrect +=1;
				$("#countIncorrect").val(countIncorrect);
				$("#countCorrect").val(countCorrect);
				$("#percentCorrect").val((countCorrect/countSum)*100);
			}
		});
	}
	$("#btnCaculate").click(function(){
		var resultConvert = $("#valueConvert").val() / 0.45359237;
		$("#result").text(resultConvert + " lb");
	});
	$("#btnConvert").click(function(){
		var resultConvertCel = 1.8 * $("#valueConvertCel").val() + 32;
		$("#resultConvert").text(resultConvertCel + " F");
	});
});