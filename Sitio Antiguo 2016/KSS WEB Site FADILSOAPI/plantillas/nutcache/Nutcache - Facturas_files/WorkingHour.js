var WorkingHourFunctions={observers:new Array(),notifyObservers:function(){if(WorkingHourFunctions.observers!=null&&WorkingHourFunctions.observers.length>0){$.each(WorkingHourFunctions.observers,function(){this()})}},getWorkingHourUrl:function(a){if(a==null||a==""){return GetUrl("WorkingHour")}return GetUrl("WorkingHour")+a},showWorkingHourPopup:function(d,i,a,b,h,l,c){var e={id:d,enforcedProjectId:h,enforcedUserCompanyId:l,date:b,disableProjectDropDown:c};var k=WorkingHourFunctions.getWorkingHourUrl("RenderCreateEditPopup")+"?"+$.param(e);var f=PopupWindowFunctions.getPopupWindow("WorkingHourEditPopup","Id",d);if(f!=null){PopupWindowFunctions.refreshPopupWindowContent(f,k,function(){WorkingHourFunctions.setSuccessJsCallbackFunction(f.wrapper,i)})}else{var j=function(m){WorkingHourFunctions.saveWithConfirmation(m,i)};var g=function(m){WorkingHourFunctions.initializeHoursEvent();WorkingHourFunctions.manageDropDownListState();WorkingHourFunctions.setSuccessJsCallbackFunction(m.wrapper,i)};PopupWindowFunctions.openPopupWindow(k,j,null,g)}},showWorkingHourDeleteConfirmationPopup:function(c,a){var b=WorkingHourFunctions.getWorkingHourUrl("RenderWorkingHourDeleteConfirmationPopup");PopupWindowFunctions.openPopupWindow(b,a,null,null,{workingHourId:c})},showWorkingHourSaveConfirmationPopup:function(c,a){var b=WorkingHourFunctions.getWorkingHourUrl("RenderWorkingHourSaveConfirmationPopup");PopupWindowFunctions.openPopupWindow(b,a,null,null,c)},setSuccessJsCallbackFunction:function(a,b){$("#SuccessJsCallbackFunction",a).val(String(b).replace(/"/g,"'"))},createWorkingHourFromTimer:function(d){var a={timerId:d};var c=function(f){WorkingHourFunctions.save(f,function(){TimerFunctions.removeTimerBox(d)})};var b=function(){WorkingHourFunctions.initializeHoursEvent();WorkingHourFunctions.manageDropDownListState()};var e=WorkingHourFunctions.getWorkingHourUrl("RenderCreatePopupFromTimer")+"?"+$.param(a);PopupWindowFunctions.openPopupWindow(e,c,null,b)},save:function(b,c){var d=WorkingHourFunctions.getWorkingHourData(b.wrapper);var a=(typeof d.Id=="undefined"||d.Id=="0"||d.Id=="")?"Create":"Edit";Nutcache.Ajax.TryAjaxCall({url:WorkingHourFunctions.getWorkingHourUrl(a),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify(d),dataType:"json",success:function(e){if(e.IsSaved){b.close();if(c){c(e.Content)}WorkingHourFunctions.notifyObservers();Nutcache.Messages.displayMessageHtml(e.Messages)}else{Nutcache.Messages.handleAjaxErrors(e);WorkingHourFunctions.initializeHoursEvent();WorkingHourFunctions.manageDropDownListState()}},error:ManageAjaxError})},saveWithConfirmation:function(a,b){var c=WorkingHourFunctions.getWorkingHourData(a.wrapper);Nutcache.Ajax.TryAjaxCall({url:WorkingHourFunctions.getWorkingHourUrl("ShouldDisplayWorkingHourSaveConfirmation"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify(c),dataType:"json",success:function(e){if(!e.IsSaved){Nutcache.Messages.handleAjaxErrors(e);WorkingHourFunctions.initializeHoursEvent();WorkingHourFunctions.manageDropDownListState();return}if(e.Content.ShouldDisplaySaveConfirmation){var d=function(f){var g=TimesheetEntryConfirmationDialogFunctions.getTimesheetEntryConfirmationData(f.wrapper);$("#ConfirmationRecipientUserCompanyIds",a.wrapper).val(g.RecipientUserCompanyIds.join(";"));$("#ConfirmationEmailBody",a.wrapper).val(g.EmailBody);f.close();WorkingHourFunctions.save(a,b)};WorkingHourFunctions.showWorkingHourSaveConfirmationPopup(c,d)}else{WorkingHourFunctions.save(a,b)}},error:ManageAjaxError})},sendWorkingHourEditEmail:function(c,a,b){var d=TimesheetEntryConfirmationDialogFunctions.getTimesheetEntryConfirmationData(c,a.wrapper);Nutcache.Ajax.TryAjaxCall({url:WorkingHourFunctions.getWorkingHourUrl("SendWorkingHourModificationEmail"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify(d),dataType:"json",success:function(e){if(e.IsSaved){if(b){b()}a.close()}else{LoadMessagesSection(e.Messages,"#floating-message-window")}},error:ManageAjaxError})},getWorkingHourData:function(a){var b={Id:$("#Id",a).val(),ProjectId:$("#WorkingHourProjectId",a).val(),ProjectIsBillable:$("#IsProjectBillable",a).val(),ItemId:$("#WorkingHourItemId",a).val(),UserCompanyId:$("#WorkingHourUserCompanyId",a).val(),Date:Nutcache.Dates.ToISODateString($("#Date",a).data("kendoDatePicker").value()),Hours:Nutcache.Time.GetDecimalValueFromString($("#Hours",a).val()),BillableHours:Nutcache.Time.GetDecimalValueFromString($("#BillableHours",a).val()),Note:$("#Note",a).val(),Version:$("#Version",a).val(),DisableProjectDropDown:$("#DisableProjectDropDown",a).val().toLowerCase()==="true",StartTime:Nutcache.Dates.ToDateTimeString($("#StartTime",a).data("kendoTimePicker").value(),Nutcache.Dates.isoDateTimeFormatString),EndTime:Nutcache.Dates.ToDateTimeString($("#EndTime",a).data("kendoTimePicker").value(),Nutcache.Dates.isoDateTimeFormatString),TimerId:$("#TimerId",a).val(),EnforcedProjectId:$("#EnforcedProjectId",a).val(),EnforcedUserCompanyId:$("#EnforcedUserCompanyId",a).val(),SuccessJsCallbackFunction:$("#SuccessJsCallbackFunction",a).val(),ConfirmationRecipientUserCompanyIds:$("#ConfirmationRecipientUserCompanyIds",a).val(),ConfirmationEmailBody:$("#ConfirmationEmailBody",a).val()};return b},manageBillableHours:function(){var c=$("#WorkingHourEditPopup #WorkingHourProjectId").val();var a=$("#WorkingHourEditPopup #BillableHours");var b=$("#WorkingHourEditPopup #billable-hours-message");if(c==null||c==0){a.prop("disabled",true).addClass("k-state-disabled");b.addClass("hidden");return}Nutcache.Ajax.TryAjaxCall({url:GetUrl("Project")+"GetProjectBillableState/"+c,contentType:"application/x-www-form-urlencoded; charset=UTF-8",type:"GET",dataType:"json",success:function(d){var e=d.Content;var f=$("#IsReadonly").val().toLowerCase()=="true";$("#IsProjectBillable").val(e);a.prop("disabled",f||!e);f||!e?a.addClass("k-state-disabled"):a.removeClass("k-state-disabled");e?b.addClass("hidden"):b.removeClass("hidden");WorkingHourFunctions.hours_onChange()},error:ManageAjaxError})},manageDropDownListState:function(){var a="#WorkingHourEditPopup";var e=$("#IsReadonly",a).val().toLowerCase()=="true";var b=$("#DisableProjectDropDown",a).val().toLowerCase()=="true";var d=$("#EnforcedUserCompanyId",a).val();var c=$("#EnforcedProjectId",a).val();var i=$("#WorkingHourProjectId",a).data("kendoDropDownList").value();var h=$("#WorkingHourUserCompanyId",a).data("kendoDropDownList").value();var f=!e&&(d==undefined||d<=0);var g=!e&&!b&&(c==undefined||c<=0)&&h!=undefined&&h>0;var j=!e&&i!=undefined&&i>0;$("#WorkingHourUserCompanyId",a).data("kendoDropDownList").enable(f);$("#WorkingHourProjectId",a).data("kendoDropDownList").enable(g);$("#WorkingHourItemId",a).data("kendoDropDownList").enable(j)},workingHoursIndexGrid_OnRecordSelected:function(b,a){WorkingHourFunctions.showWorkingHourPopup(b.ID,function(){NutcacheGridFunctions.refreshGrids("#gridWorkingHours")})},workingHoursProjectIndexGrid_OnRecordSelected:function(b,a){WorkingHourFunctions.showWorkingHourPopup(b.ID,function(){NutcacheGridFunctions.refreshGrids("#gridWorkingHours")},null,null,null,null,true)},deleteWorkingHour:function(c,b,a){Nutcache.Ajax.TryAjaxCall({url:GetUrl("WorkingHour")+"Delete",contentType:"application/x-www-form-urlencoded; charset=UTF-8",type:"POST",data:{id:c,confirmationRecipientUserCompanyIds:b,confirmationEmailBody:a},dataType:"json",success:function(d){if(d.IsSaved){NutcacheGridFunctions.refreshGrids("#gridWorkingHours");WorkingHourFunctions.notifyObservers()}LoadMessagesSection(d.Messages,"#floating-message-window")},error:ManageAjaxError})},deleteWorkingHourWithConfirmation:function(a){Nutcache.Ajax.TryAjaxCall({url:WorkingHourFunctions.getWorkingHourUrl("ShouldDisplayWorkingHourDeleteConfirmation"),contentType:"application/x-www-form-urlencoded; charset=UTF-8",type:"POST",data:{workingHourId:a},dataType:"json",success:function(c){if(!c.IsSaved){Nutcache.Messages.displayMessageHtml(c.Messages);return}if(c.Content.ShouldDisplayConfirmation){var b=function(e){var g=TimesheetEntryConfirmationDialogFunctions.getTimesheetEntryConfirmationData(e.wrapper);var f=g.RecipientUserCompanyIds.join(";");var d=g.EmailBody;e.close();WorkingHourFunctions.deleteWorkingHour(a,f,d)};WorkingHourFunctions.showWorkingHourDeleteConfirmationPopup(a,b)}else{WorkingHourFunctions.deleteWorkingHour(a,null,null)}},error:ManageAjaxError})},unlinkFromInvoiceConfirmed:function(a){Nutcache.Ajax.TryAjaxCall({url:GetUrl("WorkingHour")+"UnlinkFromInvoice",contentType:"application/x-www-form-urlencoded; charset=UTF-8",type:"POST",data:{id:a},dataType:"json",success:function(b){if(b.IsSaved){NutcacheGridFunctions.refreshGrids("#gridWorkingHours");WorkingHourFunctions.notifyObservers()}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError})},workingHourActionEdit:function(a){WorkingHourFunctions.showWorkingHourPopup(a.recordId,function(){NutcacheGridFunctions.refreshGrids("#gridWorkingHours")})},workingHourActionUnlinkInvoice:function(a){var c=a.menuData.messages.unlinkInvoiceConfirmTitle;var b=a.menuData.messages.unlinkInvoiceConfirmMessage;OpenDialogWindow(c,b,"WorkingHourFunctions.unlinkFromInvoiceConfirmed("+a.recordId+")")},workingHourActionDelete:function(a){var c=a.menuData.messages.deleteConfirmTitle;var b=a.menuData.messages.deleteConfirmMessage;OpenDeleteDialogWindow(c,b,"WorkingHourFunctions.deleteWorkingHourWithConfirmation("+a.recordId+")")},projectDropDownList_onChange:function(c){var b=$("#WorkingHourEditPopup");var g=function(){WorkingHourFunctions.manageBillableHours();$("#WorkingHourItemId",b).data("kendoDropDownList").dataSource.read();WorkingHourFunctions.manageDropDownListState()};var f=function(e){Nutcache.KendoUI.dropDownListWithAddNewSuccess(e,c.sender,g)};var d=function(){Nutcache.KendoUI.dropDownListWithAddNewCancel(c.sender)};var a=function(){ProjectPopupFunctions.showProjectPopup(0,f,d,null)};var h=g;Nutcache.KendoUI.dropDownListWithAddNew_onChange(c.sender,a,h)},taskDropDownList_onChange:function(b){var d=function(e){Nutcache.KendoUI.dropDownListWithAddNewSuccess(e,b.sender,null)};var c=function(){Nutcache.KendoUI.dropDownListWithAddNewCancel(b.sender)};var a=function(){ItemPopupFunctions.showPopupWindow(0,1,d,c,WorkingHourFunctions.getProjectId().projectId)};Nutcache.KendoUI.dropDownListWithAddNew_onChange(b.sender,a,null)},userCompanyDropDownList_onChange:function(c){var b=$("#WorkingHourEditPopup");var g=function(){WorkingHourFunctions.manageBillableHours();$("#WorkingHourProjectId",b).data("kendoDropDownList").dataSource.read();$("#WorkingHourItemId",b).data("kendoDropDownList").dataSource.read();WorkingHourFunctions.manageDropDownListState()};var f=function(e){Nutcache.KendoUI.dropDownListWithAddNewSuccess(e,c.sender,null)};var d=function(){Nutcache.KendoUI.dropDownListWithAddNewCancel(c.sender)};var a=function(){UserPopupFunctions.ShowUserCompanyPopup(0,f,d)};Nutcache.KendoUI.dropDownListWithAddNew_onChange(c.sender,a,g)},initializeHoursEvent:function(){WorkingHourFunctions.manageBillableHours();$("input[name=Hours]").on("change",function(){WorkingHourFunctions.hours_onChange()});$("#recalculate-billable-hours").on("click",function(){WorkingHourFunctions.hours_onChange(true)});$("#WorkingHourEditPopup #BillableHours").on("change",function(){if($("#WorkingHourEditPopup #BillableHours").val()==""){$("#WorkingHourEditPopup #BillableHours").val(0)}WorkingHourFunctions.hours_onChange()});WorkingHourFunctions.hours_onChange()},hours_onChange:function(e){if($("#WorkingHourEditPopup #IsReadonly").val().toLowerCase()=="true"){return}var g=parseInt($("#WorkingHourEditPopup #TimeRounding").val());var h=parseInt($("#WorkingHourEditPopup #TimeRoundingMinutes").val());var i=Nutcache.Time.GetTotalMinutesFromString($("#WorkingHourEditPopup #Hours").val());var b=i;var d=i%h;switch(g){case 0:b=i;break;case 1:b=i+(d>0?(d>=(h/2)?h:0)-d:0);break;case 2:b=i+(d>0?h-d:0);break}var c=Nutcache.Time.GetDecimalValue(Math.floor(b/60),b%60);var f=$("#WorkingHourEditPopup #IsProjectBillable").val().toLowerCase()=="true";if(f&&i>0&&($("#WorkingHourEditPopup #BillableHours").val()==""||e)){$("#WorkingHourEditPopup #BillableHours").val(Nutcache.Time.GetTimeSpanString(c))}var a=Nutcache.Time.GetDecimalValueFromString($("#WorkingHourEditPopup #BillableHours").val());if(f&&c!=a){$("#recalculate-billable-hours").removeClass("nc-disabled").removeClass("k-state-disabled")}else{$("#recalculate-billable-hours").addClass("nc-disabled").addClass("k-state-disabled")}},startEndTime_onChange:function(){var d=$("#WorkingHourEditPopup #StartTime").data("kendoTimePicker");var b=$("#WorkingHourEditPopup #EndTime").data("kendoTimePicker");if(d.value()!=null&&b.value()!=null){var c=moment(d.value());var a=moment(b.value());if(a<c&&a.hour()<12){a=moment(b.value()).add(12,"hour");b.value(a.toDate())}WorkingHourFunctions.setHoursFromStartEndTimePicker(d.value(),b.value())}},setHoursFromStartEndTimePicker:function(d,b){var e=moment(d);var c=moment(b);var a=c.diff(e,"minutes");if(a<0){a=0}$("#WorkingHourEditPopup #Hours").val(Nutcache.Time.formatTimeSpanString(a+Nutcache.Time.minuteSeparator));WorkingHourFunctions.hours_onChange()},getProjectId:function(){return{projectId:$("#WorkingHourEditPopup #WorkingHourProjectId").val()}},getEnforcedUserCompanyId:function(){return{userCompanyId:$("#WorkingHourEditPopup #EnforcedUserCompanyId").val()}},getSelectedUserCompanyId:function(){return{userCompanyId:$("#WorkingHourEditPopup #WorkingHourUserCompanyId").val()}}};