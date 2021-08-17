chrome.runtime.onMessage.addListener
(
	//create function that only responds to correct input.
	(mess,sender)=>
		{
			if((mess.from==="content") && (mess.subject==="showPageAction"))
				chrome.pageAction.show(sender.tab.id);	//Enable page action for the requesting tab.
		}
);