// JavaScript Document
$(document).ready(function validateStaff(){
	$(":text").after("<span>*</span>");
	var today = new Date();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var year = today.getFullYear();
	var dateText = ((month<10)? "0" + month : month) + "/";
	dateText +=((day < 10) ? "0" + day: day) + "/";
	dateText += year;
	$("#date").val(dateText);
	
	$("#staff").submit(
	function (event){
		var isValid = true;
		var no = 0123456789;
		var name = $("#name").val();
		if(name == ""){
			$("name").next().text("This field is required.");
			isValid = false;
			}else{
				$("#name").val(name);
				$("#name").next().text("");
				}
		var meeting = $("#meeting").val();
		if(meeting == ""){
			$("meeting").next().text("This field is required.");
			isValid = false;
			}else{
				$("#meeting").val(meeting);
				$("#meeting").next().text("");
				}
		var venue = $("#venue").val();
		if(venue == ""){
			$("venue").next().text("This field is required.");
			isValid = false;
			}else{
				$("#venue").val(venue);
				$("#venue").next().text("");
				}
		var justification = $("#justification").val();
		if(justification == ""){
			$("justification").next().text("This field is required.");
			isValid = false;
			}else{
				$("#justification").val(justification);
				$("#justification").next().text("");
				}
		var project = $("#project").val();
		if(project == ""){
			$("project").next().text("This field is required.");
			isValid = false;
			}else{
				$("#project").val(project);
				$("#project").next().text("");
				}
		var budgetline = $("#budgetline").val();
		if(budgetline == ""){
			$("budgetline").next().text("This field is required.");
			isValid = false;
			}else{
				$("#budgetline").val(budgetline);
				$("#budgetline").next().text("");
				}	
		var travelcost = $("#travelcost").val();
		if(travelcost == ""){
			$("travelcost").next().text("This field is required.");
			isValid = false;
			}else{
				$("#travelcost").val(travelcost);
				$("#travelcost").next().text("");
				}
		var extracost = $("#extracost").val();
		if(extracost == ""){
			$("extracost").next().text("This field is required.");
			isValid = false;
			}else{
				$("#extracost").val(extracost);
				$("#extracost").next().text("");
				}
		var percentage = $("#percentage").val();
		if(percentage == ""){
			$("percentage").next().text("This field is required.");
			isValid = false;
			}else if(no.test(percentage)){
				$("#percentage").next().text("Must be a number.");
				isValid = false;
				}else{
				$("#percentage").next().text("");
				}
		var department = $("#department").val();
		if(department == ""){
			$("department").next().text("This field is required.");
			isValid = false;
			}else{
				$("#department").val(department);
				$("#department").next().text("");
				}
		var quarter = $("#quarter").val();
		if(quarter == ""){
			$("quarter").next().text("This field is required.");
			isValid = false;
			}else if(no.test(quarter)){
				$("#quarter").next().text("Must be a number.");
				isValid = false;
				}else{
				$("#quarter").next().text("");
				}
		var allocated = $("#allocated").val();
		if(allocated == ""){
			$("allocated").next().text("This field is required.");
			isValid = false;
			}else if(no.test(allocated)){
				$("#allocated").next().text("Must be a number.");
				isValid = false;
				}else{
				$("#allocated").next().text("");
				}
		var budget = $("#budget").val();
		if(budget == ""){
			$("budget").next().text("This field is required.");
			isValid = false;
			}else if(no.test(budget)){
				$("#budget").next().text("Must be a number.");
				isValid = false;
				}else{
				$("#budget").next().text("");
				}
		var office = $("#office").val();
		if(office == ""){
			$("office").next().text("This field is required.");
			isValid = false;
			}else{
				$("#office").val(office);
				$("#office").next().text("");
				} //end function
	})  //end submit
}) //end ready