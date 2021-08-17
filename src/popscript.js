function gotoPage(url)
{
	chrome.tabs.create({"url": url, "active":true});
}

function getCharacter()
{
	gotoPage(document.getElementById("char1").getAttribute("data-url"));
}

function getCharacter2()
{
	gotoPage(document.getElementById("char2").getAttribute("data-url"));
}

function getCharacter3()
{
	gotoPage(document.getElementById("char3").getAttribute("data-url"));
}

function getBackground()
{
	gotoPage(document.getElementById("bg1").getAttribute("data-url"));
}

function getBackground2()
{
	gotoPage(document.getElementById("bg2").getAttribute("data-url"));
}

const setDOMInfo = info =>
{
	//Add that data-url tag to store DOMInfo
	document.getElementById("char1").setAttribute("data-url", info.character);
	document.getElementById("char1").getElementsByTagName("img")[0].setAttribute("src", info.character);
	document.getElementById("char2").setAttribute("data-url", info.character2);
	document.getElementById("char2").getElementsByTagName("img")[0].setAttribute("src", info.character2);
	document.getElementById("char3").setAttribute("data-url", info.character3);
	document.getElementById("char3").getElementsByTagName("img")[0].setAttribute("src", info.character3);
	
	document.getElementById("bg1").setAttribute("data-url", info.background);
	document.getElementById("bg1").getElementsByTagName("img")[0].setAttribute("src", info.background);
	document.getElementById("bg2").setAttribute("data-url", info.background2);
	document.getElementById("bg2").getElementsByTagName("img")[0].setAttribute("src", info.background2);	
	
	//Add listener for each 
	document.getElementById("char1").addEventListener("click", getCharacter);
	document.getElementById("char2").addEventListener("click", getCharacter2);
	document.getElementById("char3").addEventListener("click", getCharacter3);
	
	document.getElementById("bg1").addEventListener("click", getBackground);
	document.getElementById("bg2").addEventListener("click", getBackground2);
}

//When popup loads
window.onload = function()
{
	chrome.tabs.query
	(
		{active:true, currentWindow:true},	//get current tab.
		tabs =>	//get information from current tab
		{
			chrome.tabs.sendMessage
			(
				tabs[0].id,
				{from: "popup", subject: "DOMInfo"},	//request info
				setDOMInfo	//set info
			)
		}
	)
}