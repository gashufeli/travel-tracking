$(document).ready(function() {
    $('#staff').validate({
       rules: {
        
        name: {required:true, maxlength:255 },
        venue:{require:true, maxlength:255},
        date:{require:true},
        justification:{require:true ,maxlength:255},
        project:{require:true},
        budgetline:{require:true, int},
        travelcost:{require:true, int},
        extracost:{require:true, int},
        percentage:{require:true, int},
        department:{required:true, maxlength:255 },
        
        quarter:{require:true, int},
        allocated:{required:true, int},
        budget:{required:true, int },
        office:{required:true, maxlength:255 },
        }, 
    });
    });