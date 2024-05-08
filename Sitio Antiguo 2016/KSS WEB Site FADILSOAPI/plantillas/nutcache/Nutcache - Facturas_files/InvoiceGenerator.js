function PopupGenerateInvoiceWindow(b,c,a){PopupWindowGet(b,"InvoiceGenerator",c,a,null,"GetView")}function PopupGenerateInvoiceFromProjectBoardWindow(a){PopupWindowGet(a,"InvoiceGenerator",GenerateInvoiceFunctions.CreateInvoiceFromBoard,null,null,"GetViewFromProjectBoard")}function PopupGenerateInvoiceFromProjectBoardListWindow(a){PopupWindowGet(a,"InvoiceGenerator",GenerateInvoiceFunctions.CreateInvoiceFromBoardList,null,null,"GetViewFromProjectBoardList")}function GetInvoiceGeneratorUrl(){return GetUrl("InvoiceGenerator")}function IncludeHours_OnChange(){var b=$("#IncludeHours").is(":checked");$("#popup-window #HoursIncludeProjects").attr("checked",false);$("#popup-window #HoursIncludeNotes").attr("checked",false);$("#popup-window #HoursIncludeDates").attr("checked",false);$("#popup-window #HoursIncludeUserCompanies").attr("checked",false);$("#popup-window #HoursIncludeHoursRange").attr("checked",false);$("#popup-window #HoursIncludeProjects").prop("disabled",!b);$("#popup-window #HoursIncludeNotes").prop("disabled",!b);$("#popup-window #HoursIncludeDates").prop("disabled",!b);$("#popup-window #HoursIncludeUserCompanies").prop("disabled",!b);$("#popup-window #HoursIncludeHoursRange").prop("disabled",!b);$("input:radio[id=HoursDetailed_False]").prop("disabled",!b);$("input:radio[id=HoursDetailed_True]").prop("disabled",!b);var a=$("#popup-window #DisableApprovedOnlyCheckboxes").val().toLowerCase()=="true";$("#IncludeApprovedTimeEntries").prop("disabled",a||!b);Hours_Detail_OnChange()}function IncludeExpenses_OnChange(){var b=$("#IncludeExpenses").is(":checked");$("#popup-window #ExpensesIncludeProjects").attr("checked",false);$("#popup-window #ExpensesIncludeDates").attr("checked",false);$("input:radio[id=ExpensesDetailed_False]").prop("disabled",!b);$("input:radio[id=ExpensesDetailed_True]").prop("disabled",!b);$("#popup-window #ExpensesIncludeProjects").prop("disabled",!b);$("#popup-window #ExpensesIncludeDates").prop("disabled",!b);var a=$("#popup-window #DisableApprovedOnlyCheckboxes").val().toLowerCase()=="true";$("#IncludeApprovedExpenses").prop("disabled",a||!b);Expenses_Detail_OnChange()}function Hours_Detail_OnChange(){var b=$("#IncludeHours").is(":checked");var a=$("input[name=HoursDetailed]:checked").val().toLowerCase()=="true";$("#popup-window #HoursIncludeProjects").prop("checked",false);$("#popup-window #HoursIncludeNotes").prop("checked",false);$("#popup-window #HoursIncludeDates").prop("checked",false);$("#popup-window #HoursIncludeUserCompanies").prop("checked",false);$("#popup-window #HoursIncludeHoursRange").prop("checked",false);$("#popup-window #HoursIncludeProjects").prop("disabled",!b||!a);$("#popup-window #HoursIncludeNotes").prop("disabled",!b||!a);$("#popup-window #HoursIncludeDates").prop("disabled",!b||!a);$("#popup-window #HoursIncludeUserCompanies").prop("disabled",!b||!a);$("#popup-window #HoursIncludeHoursRange").prop("disabled",!b||!a)}function Expenses_Detail_OnChange(){var b=$("#IncludeExpenses").is(":checked");var a=$("input[name=ExpensesDetailed]:checked").val().toLowerCase()=="true";$("#popup-window #ExpensesIncludeProjects").prop("disabled",!b||!a);$("#popup-window #ExpensesIncludeDates").prop("disabled",!b||!a)}var GenerateInvoiceFunctions={GetCustomerId:function(){var a=$("#popup-window #Customer_ID");return a.val()||0},GetProjectBoardId:function(){var a=$("#popup-window #ProjectBoard_ID");return a.val()||0},GetProjectBoardListId:function(){var a=$("#popup-window #ProjectBoardList_ID");return a.val()||0},GetProjectId:function(){var a=$('#popup-window [id="Project.ID"] option:selected');if(typeof a!="undefined"&&a.length>0){return a.val()}else{return $("#popup-window  #Project_ID").val()}},LoadSelectedProjects:function(){var b=new Array();if($("#ProjectListView").length>0){$(".proj_cb:checked").each(function(){var c={ID:$(this).val()};b.push(c)})}else{var a={ID:$("#Project_ID").val()};b.push(a)}return b},GetInvoiceGeneratorObject:function(){var a={Customer:{ID:GenerateInvoiceFunctions.GetCustomerId()},ProjectBoard:{ID:GenerateInvoiceFunctions.GetProjectBoardId()},ProjectBoardList:{ID:GenerateInvoiceFunctions.GetProjectBoardListId()},Projects:GenerateInvoiceFunctions.LoadSelectedProjects(),withProjectSelection:$("#popup-window #withProjectSelection").is(":checked"),PeriodFrom:Nutcache.Dates.ToISODateString($("#popup-window #PeriodFrom").data("kendoDatePicker").value()),PeriodTo:Nutcache.Dates.ToISODateString($("#popup-window #PeriodTo").data("kendoDatePicker").value()),IncludeHours:$("#popup-window #IncludeHours").is(":checked"),HoursDetailed:$("input:radio[name=HoursDetailed]:checked").val(),HoursIncludeProjects:$("#popup-window #HoursIncludeProjects").is(":checked"),HoursIncludeDates:$("#popup-window #HoursIncludeDates").is(":checked"),HoursIncludeUserCompanies:$("#popup-window #HoursIncludeUserCompanies").is(":checked"),HoursIncludeHoursRange:$("#popup-window #HoursIncludeHoursRange").is(":checked"),HoursIncludeNotes:$("#popup-window #HoursIncludeNotes").is(":checked"),IncludeExpenses:$("#popup-window #IncludeExpenses").is(":checked"),ExpensesDetailed:$("input:radio[name=ExpensesDetailed]:checked").val(),ExpensesIncludeProjects:$("#popup-window #ExpensesIncludeProjects").is(":checked"),ExpensesIncludeDates:$("#popup-window #ExpensesIncludeDates").is(":checked"),PreSelectedProjectID:GenerateInvoiceFunctions.GetProjectId(),OnlyIncludeApprovedHours:$("#popup-window #IncludeApprovedTimeEntries").is(":checked"),OnlyIncludeApprovedExpenses:$("#popup-window #IncludeApprovedExpenses").is(":checked"),DisableApprovedOnlyCheckboxes:$("#popup-window #DisableApprovedOnlyCheckboxes").val().toLowerCase()=="true",DisplayApprovedOnlyCheckboxes:$("#popup-window #DisplayApprovedOnlyCheckboxes").val().toLowerCase()=="true"};return a},CreateInvoice:function(){var a=GetUrl("InvoiceGenerator")+"Create/";GenerateInvoiceFunctions.CreateInvoiceProcess(a)},CreateInvoiceFromProject:function(){var a=GetUrl("InvoiceGenerator")+"CreateFromProject";GenerateInvoiceFunctions.CreateInvoiceProcess(a)},CreateInvoiceFromBoard:function(){var a=GetUrl("InvoiceGenerator")+"CreateFromBoard";GenerateInvoiceFunctions.CreateInvoiceProcess(a)},CreateInvoiceFromBoardList:function(){var a=GetUrl("InvoiceGenerator")+"CreateFromBoardList";GenerateInvoiceFunctions.CreateInvoiceProcess(a)},CreateInvoiceProcess:function(b){Nutcache.Waitingwindow.Show();var a=GenerateInvoiceFunctions.GetInvoiceGeneratorObject();Nutcache.Ajax.TryAjaxCall({url:b,contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify(a),dataType:"json",success:function(c){GenerateInvoiceFunctions.InvoiceGeneratorValidationSuccess(c)},error:ManageAjaxError})},InvoiceGeneratorValidationSuccess:function(a){if(a.IsRedirect){ShowErrors(a)}else{if(a.IsSaved){window.location=GetUrl("Invoice")+"Create"}else{UpdatePopupWindowContent(a);IncludeHours_OnChange();IncludeExpenses_OnChange()}}Nutcache.Waitingwindow.Hide()},LoadProjectsForCustomer:function(){$("#ProjectListView").data("kendoListView").dataSource.read()},filterProjects:function(a){return{customerId:GenerateInvoiceFunctions.GetCustomerId(),selectedProjectIds:$("#SelectedProjectIDs").val()}}};