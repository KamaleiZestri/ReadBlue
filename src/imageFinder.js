//Tell background to give this tab the page action.
chrome.runtime.sendMessage
({
	from: "content",
	subject: "showPageAction"
});

//Listen for messages from popup
chrome.runtime.onMessage.addListener
(
	//Open new page when requested.
	(mess,sender, response)=>
	{
		if((mess.from === "popup")&& (mess.subject==="DOMInfo"))
		{
			var domInfo =
			{
				character: document.getElementById("char1").src,
				character2: document.getElementById("char2").src,
				character3: document.getElementById("char3").src,
				background: document.getElementById("bg1").src,
				background2: document.getElementById("bg2").src
			}
			
			response(domInfo);	//send via callback
		}
	}
);