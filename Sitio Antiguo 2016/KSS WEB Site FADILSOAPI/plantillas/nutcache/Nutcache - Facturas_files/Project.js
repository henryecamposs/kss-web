ProjectFunctions={getProjectUrl:function(a){if(a==null||a==""){return GetUrl("Project")}return GetUrl("Project")+a},getProjectMemberUrl:function(a){if(a==null||a==""){return GetUrl("ProjectMember")}return GetUrl("ProjectMember")+a},getProjectItemUrl:function(a){if(a==null||a==""){return GetUrl("ProjectItem")}return GetUrl("ProjectItem")+a},getProjectInformations:function(a,b){if(a==null){a=0}Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectUrl("GetProject"),contentType:"application/x-www-form-urlencoded; charset=UTF-8",type:"POST",data:{projectId:a},dataType:"json",success:function(c){if(b){b(c.Content)}},error:ManageAjaxError})},projectsIndexGrid_OnRecordSelected:function(b,a){var c=ProjectFunctions.getProjectUrl("Edit")+"/"+b.ID;if(a.ctrlKey||a.metaKey){window.open(c,"_blank")}else{Nutcache.Waitingwindow.Show();window.location=c}},projectsIndexGrid_OnRecordSelectedForceNewTab:function(b,a){var c=ProjectFunctions.getProjectUrl("Edit")+"/"+b.ID;window.open(c,"_blank")},projectActionEdit:function(a){window.location=ProjectFunctions.getProjectUrl("Edit")+"/"+a.recordId},projectActionGenerateInvoice:function(a){ProjectPageFunctions.executeAction(this,2)},projectActionGenerateInvoiceFromIndex:function(a){PopupGenerateInvoiceWindow(a.recordId,GenerateInvoiceFunctions.CreateInvoice)},projectActionDelete:function(a){ProjectPageFunctions.executeAction(this,1,a.menuData.messages.deleteConfirmTitle,a.menuData.messages.deleteConfirmMessage)},projectActionDeleteFromIndex:function(a){OpenDeleteDialogWindow(a.menuData.messages.deleteConfirmTitle,a.menuData.messages.deleteConfirmMessage,function(){ProjectPopupFunctions.completeExecuteAction(a.recordId,1)})},projectActionStartTimer:function(a){TimerFunctions.addTimer({projectId:a.recordId});GoogleAnalyticsFunctions.TrackEvent("timer","create","FromProjectActionMenu",Nutcache.Context.UserProfileID)},activateProjectMember:function(a){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectMemberUrl("Activate"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({id:a}),dataType:"json",success:function(b){Nutcache.Waitingwindow.Hide();if(b.IsSaved){NutcacheGridFunctions.refreshGrids("#gridMembers");ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError})},deleteProjectMember:function(b){var c=$("#ConfirmationPopupTitle").val();var a=$("#RemoveSingleMemberConfirmationMessage").val();OpenDialogWindow(c,a,function(){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectMemberUrl("Delete"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({projectMemberId:b}),dataType:"json",success:function(d){Nutcache.Waitingwindow.Hide();if(d.IsSaved){NutcacheGridFunctions.refreshGrids("#gridMembers");ProjectPageFunctions.refreshProjectMemberDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(d.Messages,"#floating-message-window")},error:ManageAjaxError})})},createProjectMember:function(b,a){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectMemberUrl("Create"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({userCompanyId:b,projectId:a}),dataType:"json",success:function(c){Nutcache.Waitingwindow.Hide();if(c.IsSaved){NutcacheGridFunctions.refreshGrids("#gridMembers");ProjectPageFunctions.refreshProjectMemberDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(c.Messages,"#floating-message-window")},error:ManageAjaxError})},createAllProjectMember:function(a){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectMemberUrl("CreateAllForProject"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({projectId:a}),dataType:"json",success:function(b){Nutcache.Waitingwindow.Hide();if(b.IsSaved){NutcacheGridFunctions.refreshGrids("#gridMembers");ProjectPageFunctions.refreshProjectMemberDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError})},deleteAllProjectMember:function(a){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectMemberUrl("DeleteAllForProject"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({projectId:a}),dataType:"json",success:function(b){Nutcache.Waitingwindow.Hide();if(b.IsSaved){NutcacheGridFunctions.refreshGrids("#gridMembers");ProjectPageFunctions.refreshProjectMemberDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError})},activateProjectItem:function(a){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectItemUrl("Activate"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({id:a}),dataType:"json",success:function(b){Nutcache.Waitingwindow.Hide();if(b.IsSaved){NutcacheGridFunctions.refreshGrids("#gridItems");ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError})},deleteProjectItem:function(b){var c=$("#ConfirmationPopupTitle").val();var a=$("#RemoveSingleTaskConfirmationMessage").val();OpenDialogWindow(c,a,function(){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectItemUrl("Delete"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({id:b}),dataType:"json",success:function(d){Nutcache.Waitingwindow.Hide();if(d.IsSaved){NutcacheGridFunctions.refreshGrids("#gridItems");ProjectPageFunctions.refreshProjectItemDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(d.Messages,"#floating-message-window")},error:ManageAjaxError})})},createProjectItem:function(a,b){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectItemUrl("Create"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({itemId:a,projectId:b}),dataType:"json",success:function(c){Nutcache.Waitingwindow.Hide();if(c.IsSaved){NutcacheGridFunctions.refreshGrids("#gridItems");ProjectPageFunctions.refreshProjectItemDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(c.Messages,"#floating-message-window")},error:ManageAjaxError})},createAllProjectItem:function(a){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectItemUrl("CreateAll"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({projectId:a}),dataType:"json",success:function(b){Nutcache.Waitingwindow.Hide();if(b.IsSaved){NutcacheGridFunctions.refreshGrids("#gridItems");ProjectPageFunctions.refreshProjectItemDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError})},deleteAllProjectItem:function(a){Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectItemUrl("DeleteAll"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({projectId:a}),dataType:"json",success:function(b){Nutcache.Waitingwindow.Hide();if(b.IsSaved){NutcacheGridFunctions.refreshGrids("#gridItems");ProjectPageFunctions.refreshProjectItemDDL();ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError})},taskDropDownList_onChange:function(b){var d=function(e){Nutcache.KendoUI.dropDownListWithAddNewSuccess(e,b.sender,NutcacheGridFunctions.refreshGrids("#gridItems"))};var c=function(){Nutcache.KendoUI.dropDownListWithAddNewCancel(b.sender)};var a=function(){ItemPopupFunctions.showPopupWindow(0,1,d,c)};Nutcache.KendoUI.dropDownListWithAddNew_onChange(b.sender,a,null)},getProjectSummary:function(a,b){Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectUrl("GetSummary"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({projectId:a}),dataType:"json",success:function(c){if(c.IsSaved&&b){b(c.Content)}},error:ManageAjaxError})},refreshBubbleCounts:function(a){if((typeof a!="undefined")&&(a>0)){ProjectFunctions.getProjectSummary(a,function(b){ProjectFunctions.refreshBubbleCount($("#tabMembers .bubble-count"),b.IsPublic?0:b.MembersCount);ProjectFunctions.refreshBubbleCount($("#tabTasks .bubble-count"),b.ItemsCount);ProjectFunctions.refreshBubbleCount($("#tabBoards .bubble-count"),b.BoardsCount);ProjectFunctions.refreshBubbleCount($("#tabWorkedHours .bubble-count"),b.WorkingHoursCount);ProjectFunctions.refreshBubbleCount($("#tabExpenses .bubble-count"),b.ExpensesCount);ProjectFunctions.refreshBubbleCount($("#tabEstimates .bubble-count"),b.EstimatesCount);ProjectFunctions.refreshBubbleCount($("#tabInvoices .bubble-count"),b.InvoicesCount);ProjectFunctions.refreshBubbleCount($("#tabAttachments .bubble-count"),b.AttachmentsCount);ProjectFunctions.refreshBubbleCount($("#tabNotes .bubble-count"),b.NotesCount)})}},refreshBubbleCount:function(b,a){if(a>0){b.show();b.text(a>99?"99+":a)}else{b.hide()}},setIsPublic:function(b,a){Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectUrl("SetIsPublic"),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({projectId:b,isPublic:a}),dataType:"json",success:function(c){if(c.IsSaved){$("#Version").val(c.Content);$("#ProjectIsPublic").val($("#IsPublic").is(":checked"));ProjectFunctions.refreshBubbleCounts($("#CreateEditHeaderContainer #ID").val())}LoadMessagesSection(c.Messages,"#floating-message-window")},error:ManageAjaxError})},initializePublicSwitch:function(c,a){var b=$("#IsPublic");b.prop("checked",a);ProjectFunctions.setContentVisibility();b.bootstrapSwitch();b.on("switchChange.bootstrapSwitch",function(d,e){ProjectFunctions.setIsPublic(c,$("#IsPublic").is(":checked"));ProjectFunctions.setContentVisibility()})},setContentVisibility:function(){if($("#IsPublic").is(":checked")){$(".public-content").show();$(".restricted-content").hide()}else{$(".public-content").hide();$(".restricted-content").show()}}};var ProjectPageFunctions={saveAndNew:function(a){ProjectPageFunctions.save(a,true)},discardAndNew:function(){GoogleAnalyticsFunctions.TrackEvent("link","create","ProjectFromPlusButton","0");window.location=ProjectFunctions.getProjectUrl("Create")},save:function(e,d){var f=$("#uploadsInProgress");if(f.length&&f.val()!="0"){ShowErrorMessages($("#uploadsInProgressText").val());return}var b=$("#ID",".project-section-container").val();var a=(typeof b=="undefined"||b=="0")?"Create":"Edit";var c=ProjectPageFunctions.getProjectData();if(c==null){return}Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectUrl(a),contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify(c),dataType:"json",success:function(g){ProjectPageFunctions.saveSuccess(g,e,d)},error:ManageAjaxError})},saveSuccess:function(a,c,b){if(a.IsRedirect){if(b){GoogleAnalyticsFunctions.TrackEvent("link","create","ProjectFromPlusButton","0");window.location=ProjectFunctions.getProjectUrl("Create")}else{window.location=a.Content}return}Nutcache.Waitingwindow.Close();$("#CreateEditHeaderContainer").html(a.Content);if(a.IsSaved){if(c){c()}}LoadMessagesSection(a.Messages,"#floating-message-window")},newProject:function(){if(ProjectPageFunctions.isProjectDirty()){var c=$("#HideDirtyConfirmationTitle").val();var b=$("#HideDirtyConfirmationMessage").val();var a=[{buttonClass:"nc-button nutcache-button ripplelink",onClickFunction:function(){ProjectPageFunctions.saveAndNew()},text:window.saveString},{buttonClass:"nc-button nutcache-button ripplelink",onClickFunction:function(){ProjectPageFunctions.discardAndNew()},text:window.discardString},{buttonClass:"nc-button nutcache-cancel-button ripplelink",onClickFunction:null,text:window.cancelString}];OpenDialogWindowWithButtons(c,b,a)}else{GoogleAnalyticsFunctions.TrackEvent("link","create","ProjectFromPlusButton","0");window.location=ProjectFunctions.getProjectUrl("Create")}},getProjectData:function(){var a=".project-section-container";var b={Id:$("#ID",a).val(),Code:$("#Code",a).val(),Status:$("#ProjectStatus",a).val(),Customer:{ID:$("#ProjectCustomerId",a).val(),Name:$("#ProjectCustomerName",a).val()},Billable:$("#ProjectBillable",a).is(":checked"),Description:$("#Description",a).val(),PrimaryContactName:$("#PrimaryContactName",a).val(),PrimaryContactEmail:$("#PrimaryContactEmail",a).val(),PrimaryContactPhone:$("#PrimaryContactPhone",a).val(),SecondaryContactName:$("#SecondaryContactName",a).val(),SecondaryContactEmail:$("#SecondaryContactEmail",a).val(),SecondaryContactPhone:$("#SecondaryContactPhone",a).val(),ManagerUserCompany:{ID:$("#ProjectManagerId",a).val()},StartDate:Nutcache.Dates.ToISODateString($("#StartDate",a).data("kendoDatePicker").value()),EndDate:Nutcache.Dates.ToISODateString($("#EndDate",a).data("kendoDatePicker").value()),TimeEstimate:Nutcache.Time.GetDecimalValueFromString($("#TimeEstimate").val()),ExpenseEstimate:$("#ExpenseEstimate",a).val(),CostEstimate:$("#CostEstimate",a).val(),SendEmailNotification:$("#SendEmailNotification",a).is(":checked"),EmailNotificationThreshold:$("#EmailNotificationThreshold",a).val(),IsPublic:$("#ProjectIsPublic").val(),Version:$("#Version",a).val()};return b},executeAction:function(f,a,g,d){var e=$("#ID").val();if(a==1){OpenDeleteDialogWindow(g,d,"ProjectPageFunctions.completeExecuteAction("+e+","+a+")")}else{if(ProjectPageFunctions.isProjectDirty()){var c=$("#HideDirtyConfirmationTitle").val();var b=$("#HideDirtyConfirmationMessage").val();OpenDialogWindow(c,b,"ProjectPageFunctions.save(function() { ProjectPageFunctions.completeExecuteAction("+e+","+a+"); })")}else{ProjectPageFunctions.completeExecuteAction(e,a)}}},completeExecuteAction:function(b,a){if(a==2){PopupGenerateInvoiceWindow(b,GenerateInvoiceFunctions.CreateInvoice)}else{Nutcache.Waitingwindow.Show();Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectUrl("ExecuteAction"),contentType:"application/x-www-form-urlencoded; charset=utf-8",type:"POST",data:{projectId:b,projectAction:a},dataType:"json",success:function(c){Nutcache.Waitingwindow.Hide();if(c.IsSaved){if(a==1){window.location=ProjectFunctions.getProjectUrl("Index")}else{window.location.reload()}}LoadMessagesSection(c.Messages,"#floating-message-window")},error:ManageAjaxError})}return true},isProjectDirty:function(){var c=document.getElementById("main");if(!c){return false}var a=Nutcache.ChangeDetection.FindChanges(c);Nutcache.ChangeDetection.FindChangesForDecimalInput($("#TimeEstimate"),a);Nutcache.ChangeDetection.FindChangesForDecimalInput($("#ExpenseEstimate"),a);Nutcache.ChangeDetection.FindChangesForDecimalInput($("#CostEstimate"),a);var b=a.length>0;return b},CustomerDropDown_Open:function(b){var a=b.sender;var c=a.value();a.element.prop("previousValue",c)},CustomerDropDown_Change:function(b){var a=b.sender;var c=a.element.prop("previousValue");if(b.sender.value()==ID_NEW){CustomerPopupFunctions.showPopupWindow(0,function(d){a.dataSource.read().done(function(){a.value(d.ID)})},function(){a.value(c);return true})}},onAttachmentDeleteConfirmed:function(a){Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectUrl("DeleteAttachment"),contentType:"application/json; charset=utf-8",type:"POST",dataType:"json",data:JSON.stringify({ID:a.data("id")}),success:function(b){if(b.IsSaved){$(".attachment-container[data-id="+a.data("id")+"]").remove();AttachmentFunctions.removeAttachmentConfirmed(a)}LoadMessagesSection(b.Messages,"#floating-message-window")},error:ManageAjaxError},true)},displayInvoiceProjectButton:function(){var c=$("#tabInvoices").attr("aria-controls");if(c!=undefined){var b=$("#"+c).find(".button-list-container .nutcache-secondary-button");if(b!=undefined){var a=ProjectPageFunctions.getProjectData();if(a.Billable&&(a.Status=="InProgress"||a.Status=="Completed")){b.show()}else{b.hide()}}}},displayEstimateProjectButton:function(){var c=$("#tabEstimates").attr("aria-controls");if(c!=undefined){var b=$("#"+c).find(".button-list-container .nutcache-secondary-button");if(b!=undefined){var a=ProjectPageFunctions.getProjectData();if(a.Billable&&(a.Status=="InProgress"||a.Status=="Completed")){b.show()}else{b.hide()}}}},refreshProjectMemberDDL:function(){var a=$("#ProjectMember_ID").data("kendoDropDownList");a.dataSource.read().done(function(){a.select(0)});$("#ProjectMember_ID").data("kendoDropDownList").select(0)},addSelectedUserCompanyToProjectMember:function(){var b=$("#ProjectMember_ID").val();var a=$("#ID").val();if(b!=""){ProjectFunctions.createProjectMember(b,a)}},addAllProjectMember:function(){var b=$("#ConfirmationPopupTitle").val();var a=$("#AddAllMembersConfirmationMessage").val();OpenDialogWindow(b,a,function(){var c=$("#ID").val();ProjectFunctions.createAllProjectMember(c)})},removeAllProjectMember:function(){var b=$("#ConfirmationPopupTitle").val();var a=$("#RemoveAllMembersConfirmationMessage").val();OpenDialogWindow(b,a,function(){var c=$("#ID").val();ProjectFunctions.deleteAllProjectMember(c)})},gridMembers_OnDataBound:function(a){var b=a.sender.dataSource.view();for(var c=0;c<b.length;c++){if(b[c].Status==0){a.sender.table.find("tr[data-uid='"+b[c].uid+"']").addClass("deleted-row")}}NutcacheGridFunctions.setNoDataMinHeight(a.sender,true)},refreshProjectItemDDL:function(){var a=$("#ProjectItem_ID").data("kendoDropDownList");a.dataSource.read().done(function(){a.select(0)});$("#ProjectItem_ID").data("kendoDropDownList").select(0)},addSelectedItemToProjectItem:function(){var a=$("#ProjectItem_ID").val();var b=$("#ID").val();if(a!=""){ProjectFunctions.createProjectItem(a,b)}},addAllProjectItem:function(){var b=$("#ConfirmationPopupTitle").val();var a=$("#AddAllTasksConfirmationMessage").val();OpenDialogWindow(b,a,function(){var c=$("#ID").val();ProjectFunctions.createAllProjectItem(c)})},removeAllProjectItem:function(){var b=$("#ConfirmationPopupTitle").val();var a=$("#RemoveAllTasksConfirmationMessage").val();OpenDialogWindow(b,a,function(){var c=$("#ID").val();ProjectFunctions.deleteAllProjectItem(c)})},gridItems_OnDataBound:function(a){var b=a.sender.dataSource.view();for(var c=0;c<b.length;c++){if(b[c].Status==0){a.sender.table.find("tr[data-uid='"+b[c].uid+"']").addClass("deleted-row")}}NutcacheGridFunctions.setNoDataMinHeight(a.sender,true)}};var ProjectPopupFunctions={showProjectPopup:function(c,e,a,b){var d=null;if(typeof b!="undefined"){d={id:c,customerId:b}}else{d={id:c}}var f=ProjectFunctions.getProjectUrl("GetView")+"?"+$.param(d);PopupWindowFunctions.openPopupWindow(f,function(g){ProjectPopupFunctions.save(g,e)},a,null)},save:function(c,e){var b=$("#popup-window #ID").val();var a=(typeof b=="undefined"||b=="0")?"CreateFromPopup":"EditFromPopup";var d=ProjectPopupFunctions.getProjectData(c.wrapper);if(d==null){return}var f=ProjectFunctions.getProjectUrl(a);Nutcache.Ajax.TryAjaxCall({url:f,contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify(d),dataType:"json",success:function(g){ProjectPopupFunctions.saveSuccess(c,g,e)},error:ManageAjaxError})},saveSuccess:function(b,a,c){if(!a.IsSaved&&a.IsRedirect){Nutcache.Messages.handleAjaxErrors(a)}else{if(a.IsSaved){b.close();if(c){c(a.Content)}Nutcache.Messages.displayMessageHtml(a.Messages)}}},getProjectData:function(a){var b={Id:$("#ID",a).val(),Code:$("#Code",a).val(),Status:$("#ProjectQuickEntryStatus",a).val(),Description:$("#Description",a).val(),CustomerID:$("#ProjectQuickEntryCustomer",a).val(),CustomerName:$("#CustomerName",a).val(),Billable:$("#ProjectBillable",a).is(":checked"),Version:$("#Version",a).val(),DisableCustomerDropDown:$("#disableCustomerDropDown",a).val().toLowerCase()=="true"};return b},executeAction:function(d,a,e,b){var c=$(d).parents(".k-grid").data("kendoGrid").dataItem($(d).parents("tr")).ID;if(a==1){OpenDialogWindow(e,b,"ProjectPopupFunctions.completeExecuteAction("+c+","+a+")")}else{ProjectPopupFunctions.completeExecuteAction(c,a)}},completeExecuteAction:function(b,a){if(a==0){window.location=ProjectFunctions.getProjectUrl("Edit")+"/"+b}else{if(a==2){PopupGenerateInvoiceWindow(b,GenerateInvoiceFunctions.CreateInvoice)}else{Nutcache.Ajax.TryAjaxCall({url:ProjectFunctions.getProjectUrl("ExecuteAction"),contentType:"application/x-www-form-urlencoded; charset=utf-8",type:"POST",data:{projectId:b,projectAction:a},dataType:"json",success:function(c){if(c.IsSaved){NutcacheGridFunctions.refreshGrids("#gridProjects")}LoadMessagesSection(c.Messages,"#floating-message-window")},error:ManageAjaxError})}}return true},customerDropDownList_Change:function(b){var f=function(){};var d=function(e){Nutcache.KendoUI.dropDownListWithAddNewSuccess(e,b.sender,f)};var c=function(){return Nutcache.KendoUI.dropDownListWithAddNewCancel(b.sender)};var a=function(){CustomerPopupFunctions.showPopupWindow(0,d,c)};var g=f;Nutcache.KendoUI.dropDownListWithAddNew_onChange(b.sender,a,g)}};