var albums = [];
var times = [];
var weathers = [];
var moods = [];
var songData = [

	//ACNL
	"ACNL_1AM_rainy_relax", 
	"ACNL_1AM_snowy_relax", 
	"ACNL_1AM_sunny_relax", 
	"ACNL_1PM_rainy_normal", 
	"ACNL_1PM_snowy_normal", 
	"ACNL_1PM_sunny_normal", 
	"ACNL_2AM_rainy_relax", 
	"ACNL_2AM_snowy_relax", 
	"ACNL_2AM_sunny_relax", 
	"ACNL_2PM_rainy_normal", 
	"ACNL_2PM_snowy_normal", 
	"ACNL_2PM_sunny_normal", 
	"ACNL_3AM_rainy_relax", 
	"ACNL_3AM_snowy_relax", 
	"ACNL_3AM_sunny_relax", 
	"ACNL_3PM_rainy_normal", 
	"ACNL_3PM_snowy_normal", 
	"ACNL_3PM_sunny_normal", 
	"ACNL_4AM_rainy_relax", 
	"ACNL_4AM_snowy_relax", 
	"ACNL_4AM_sunny_relax", 
	"ACNL_4PM_rainy_normal", 
	"ACNL_4PM_snowy_normal", 
	"ACNL_4PM_sunny_normal", 
	"ACNL_5AM_rainy_normal", 
	"ACNL_5AM_snowy_relax", 
	"ACNL_5AM_sunny_normal", 
	"ACNL_5PM_rainy_relax", 
	"ACNL_5PM_snowy_relax", 
	"ACNL_5PM_sunny_relax", 
	"ACNL_6AM_rainy_relax", 
	"ACNL_6AM_snowy_relax", 
	"ACNL_6AM_sunny_relax", 
	"ACNL_6PM_rainy_relax", 
	"ACNL_6PM_snowy_relax", 
	"ACNL_6PM_sunny_relax", 
	"ACNL_7AM_rainy_relax", 
	"ACNL_7AM_snowy_relax", 
	"ACNL_7AM_sunny_relax", 
	"ACNL_7PM_rainy_relax", 
	"ACNL_7PM_snowy_relax", 
	"ACNL_7PM_sunny_relax", 
	"ACNL_8AM_rainy_relax", 
	"ACNL_8AM_snowy_relax", 
	"ACNL_8AM_sunny_relax", 
	"ACNL_8PM_rainy_relax", 
	"ACNL_8PM_snowy_relax", 
	"ACNL_8PM_sunny_relax", 
	"ACNL_9AM_rainy_normal", 
	"ACNL_9AM_snowy_normal", 
	"ACNL_9AM_sunny_normal", 
	"ACNL_9PM_rainy_normal", 
	"ACNL_9PM_snowy_normal", 
	"ACNL_9PM_sunny_normal", 
	"ACNL_10AM_rainy_normal", 
	"ACNL_10AM_snowy_normal", 
	"ACNL_10AM_sunny_normal", 
	"ACNL_10PM_rainy_relax", 
	"ACNL_10PM_snowy_relax", 
	"ACNL_10PM_sunny_relax", 
	"ACNL_11AM_rainy_relax", 
	"ACNL_11AM_snowy_relax", 
	"ACNL_11AM_sunny_relax", 
	"ACNL_11PM_rainy_relax", 
	"ACNL_11PM_snowy_relax", 
	"ACNL_11PM_sunny_relax", 
	"ACNL_12AM_rainy_relax", 
	"ACNL_12AM_snowy_relax", 
	"ACNL_12AM_sunny_relax", 
	"ACNL_12PM_rainy_normal", 
	"ACNL_12PM_snowy_normal", 
	"ACNL_12PM_sunny_normal",

	//ACNH

	"ACNH_1AM_rainy_relax", 
	"ACNH_1AM_snowy_relax", 
	"ACNH_1AM_sunny_relax", 
	"ACNH_1PM_rainy_normal", 
	"ACNH_1PM_snowy_normal", 
	"ACNH_1PM_sunny_normal", 
	"ACNH_2AM_rainy_relax", 
	"ACNH_2AM_snowy_relax", 
	"ACNH_2AM_sunny_relax", 
	"ACNH_2PM_rainy_normal", 
	"ACNH_2PM_snowy_normal", 
	"ACNH_2PM_sunny_normal", 
	"ACNH_3AM_rainy_normal", 
	"ACNH_3AM_snowy_normal", 
	"ACNH_3AM_sunny_normal", 
	"ACNH_3PM_rainy_normal", 
	"ACNH_3PM_snowy_normal", 
	"ACNH_3PM_sunny_normal", 
	"ACNH_4AM_rainy_relax", 
	"ACNH_4AM_snowy_relax", 
	"ACNH_4AM_sunny_relax", 
	"ACNH_4PM_rainy_relax", 
	"ACNH_4PM_snowy_relax", 
	"ACNH_4PM_sunny_normal", 
	"ACNH_5AM_rainy_relax", 
	"ACNH_5AM_snowy_relax", 
	"ACNH_5AM_sunny_relax", 
	"ACNH_5PM_rainy_normal", 
	"ACNH_5PM_snowy_normal", 
	"ACNH_5PM_sunny_normal", 
	"ACNH_6AM_rainy_relax", 
	"ACNH_6AM_snowy_relax", 
	"ACNH_6AM_sunny_normal", 
	"ACNH_6PM_rainy_relax", 
	"ACNH_6PM_snowy_relax", 
	"ACNH_6PM_sunny_relax", 
	"ACNH_7AM_rainy_normal", 
	"ACNH_7AM_snowy_normal", 
	"ACNH_7AM_sunny_normal", 
	"ACNH_7PM_rainy_relax", 
	"ACNH_7PM_snowy_relax", 
	"ACNH_7PM_sunny_relax", 
	"ACNH_8AM_rainy_normal", 
	"ACNH_8AM_snowy_normal", 
	"ACNH_8AM_sunny_normal", 
	"ACNH_8PM_rainy_relax", 
	"ACNH_8PM_snowy_normal", 
	"ACNH_8PM_sunny_normal", 
	"ACNH_9AM_rainy_normal", 
	"ACNH_9AM_snowy_normal", 
	"ACNH_9AM_sunny_normal", 
	"ACNH_9PM_rainy_normal", 
	"ACNH_9PM_snowy_normal", 
	"ACNH_9PM_sunny_normal", 
	"ACNH_10AM_rainy_relax", 
	"ACNH_10AM_snowy_normal", 
	"ACNH_10AM_sunny_normal", 
	"ACNH_10PM_rainy_relax", 
	"ACNH_10PM_snowy_normal", 
	"ACNH_10PM_sunny_relax", 
	"ACNH_11AM_rainy_relax", 
	"ACNH_11AM_snowy_relax", 
	"ACNH_11AM_sunny_relax", 
	"ACNH_11PM_rainy_relax", 
	"ACNH_11PM_snowy_relax", 
	"ACNH_11PM_sunny_relax", 
	"ACNH_12AM_rainy_relax", 
	"ACNH_12AM_snowy_relax", 
	"ACNH_12AM_sunny_relax", 
	"ACNH_12PM_rainy_relax", 
	"ACNH_12PM_snowy_normal", 
	"ACNH_12PM_sunny_normal",

	//ACWWCF
	"ACWWCF_1AM_rainy_relax",
	"ACWWCF_1AM_snowy_relax",
	"ACWWCF_1AM_sunny_relax",
	"ACWWCF_1PM_rainy_normal",
	"ACWWCF_1PM_snowy_normal",
	"ACWWCF_1PM_sunny_normal",
	"ACWWCF_2AM_rainy_relax",
	"ACWWCF_2AM_snowy_relax",
	"ACWWCF_2AM_sunny_relax",
	"ACWWCF_2PM_rainy_relax",
	"ACWWCF_2PM_snowy_relax",
	"ACWWCF_2PM_sunny_normal",
	"ACWWCF_3AM_rainy_relax",
	"ACWWCF_3AM_snowy_relax",
	"ACWWCF_3AM_sunny_relax",
	"ACWWCF_3PM_rainy_normal",
	"ACWWCF_3PM_snowy_normal",
	"ACWWCF_3PM_sunny_normal",
	"ACWWCF_4AM_rainy_relax",
	"ACWWCF_4AM_snowy_relax",
	"ACWWCF_4AM_sunny_normal",
	"ACWWCF_4PM_rainy_normal",
	"ACWWCF_4PM_snowy_normal",
	"ACWWCF_4PM_sunny_normal",
	"ACWWCF_5AM_rainy_relax",
	"ACWWCF_5AM_snowy_relax",
	"ACWWCF_5AM_sunny_relax",
	"ACWWCF_5PM_rainy_relax",
	"ACWWCF_5PM_snowy_relax",
	"ACWWCF_5PM_sunny_relax",
	"ACWWCF_6AM_rainy_normal",
	"ACWWCF_6AM_snowy_normal",
	"ACWWCF_6AM_sunny_normal",
	"ACWWCF_6PM_rainy_relax",
	"ACWWCF_6PM_snowy_relax",
	"ACWWCF_6PM_sunny_relax",
	"ACWWCF_7AM_rainy_normal",
	"ACWWCF_7AM_snowy_normal",
	"ACWWCF_7AM_sunny_normal",
	"ACWWCF_7PM_rainy_relax",
	"ACWWCF_7PM_snowy_relax",
	"ACWWCF_7PM_sunny_relax",
	"ACWWCF_8AM_rainy_normal",
	"ACWWCF_8AM_snowy_normal",
	"ACWWCF_8AM_sunny_normal",
	"ACWWCF_8PM_rainy_relax",
	"ACWWCF_8PM_snowy_relax",
	"ACWWCF_8PM_sunny_relax",
	"ACWWCF_9AM_rainy_normal",
	"ACWWCF_9AM_snowy_normal",
	"ACWWCF_9AM_sunny_normal",
	"ACWWCF_9PM_rainy_relax",
	"ACWWCF_9PM_snowy_relax",
	"ACWWCF_9PM_sunny_relax",
	"ACWWCF_10AM_rainy_relax",
	"ACWWCF_10AM_snowy_relax",
	"ACWWCF_10AM_sunny_relax",
	"ACWWCF_10PM_rainy_relax",
	"ACWWCF_10PM_snowy_relax",
	"ACWWCF_10PM_sunny_relax",
	"ACWWCF_11AM_rainy_normal",
	"ACWWCF_11AM_snowy_normal",
	"ACWWCF_11AM_sunny_normal",
	"ACWWCF_11PM_rainy_relax",
	"ACWWCF_11PM_snowy_relax",
	"ACWWCF_11PM_sunny_relax",
	"ACWWCF_12AM_rainy_relax",
	"ACWWCF_12AM_snowy_relax",
	"ACWWCF_12AM_sunny_relax",
	"ACWWCF_12PM_rainy_relax",
	"ACWWCF_12PM_snowy_relax",
	"ACWWCF_12PM_sunny_relax"
	]

var greenPanelWidth = (window.innerWidth * .5) - (.05 * .5 * window.innerWidth) - (window.innerHeight * .2688)
document.getElementById("greenPanel").style.width = greenPanelWidth + "px"

var allSongs = [];
var chosenSongs;

for (let i = 0; i < songData.length; i++) {
	var properties = songData[i].split('_');
	var obj = {};
	obj["url"] = songData[i];
	properties.forEach(function() {
	    obj["album"] = properties[0];
	    obj["time"] = properties[1];
	    obj["weather"] = properties[2];
	    obj["mood"] = properties[3];
	});
	allSongs.push(obj);		
}

var loopHourState = false;

var playCounter = 0;

function weatherUncheck(obj) {
	var weatherCheckboxes = document.getElementsByClassName("weather");
	var weatherSync = document.getElementById("weatherSync");

	if (weatherSync.checked == true && obj.id != "weatherSync") {
		weatherSync.checked = false;
	} else if (weatherSync.checked == true && obj.id == "weatherSync") {
		for(i=0; i < weatherCheckboxes.length; i++) {
			weatherCheckboxes[i].checked = false;
		}
	}

}

function disableMood(cb) {
	var moodTab = document.getElementById("moodTab");
	var pointerWrapper = document.getElementById("pointerWrapper");
	if (cb.checked == true) {
		moodTab.style.color ="lightgray";
		moodTab.style.pointerEvents = "none";
		pointerWrapper.style.cursor = "not-allowed";
	} else {
		moodTab.style.color ="black";
		moodTab.style.pointerEvents = "auto";
		pointerWrapper.style.cursor = "auto";
	}
}


function openSetting(evt, setting) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(setting).style.display = "block";
  evt.currentTarget.className += " active";

}

function addAlbums() {
	const collection = document.getElementsByClassName("albums");
	for (let i = 0; i < collection.length; i++) {
			if (collection[i].checked == true) {
				albums.push(collection[i].value)
			}
	}
}

function addTimes() {
	if (document.getElementById("timeSync").checked == true) {
		var currentTime = new Date();
		var time = currentTime.toLocaleString('en-US', { hour: 'numeric', hour12: true })
		time = time.replace(/\s+/g, '');
		times.push(time);
	} else {
		times.push("1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12PM")
	}

	var loopHourCb = document.getElementById("loopHour")
	if (loopHourCb.checked == true) {
		loopHourState = true;
	} 
}

function addWeathers() {
	var weatherSync = document.getElementById("weatherSync");
	if (weatherSync.checked == true) {
		var currentWeather = "placeholder";
		weathers.push(currentWeather);
	} else {
		var weatherCheckboxes = document.getElementsByClassName("weather");
		for(i=0; i < weatherCheckboxes.length; i++) {
			if (weatherCheckboxes[i].checked == true) {
				weathers.push(weatherCheckboxes[i].value);
			}
		}
	}
}

function addMoods() {
	const selected = document.getElementsByClassName("mood");
	for (let i = 0; i < selected.length; i++) {
			if (selected[i].checked == true) {
				moods.push(selected[i].value)
			}
	}
}

function createQueuedSongs() {
	chosenSongs = allSongs;
	albums = [];
	times = [];
	weathers = [];
	moods = [];
	addAlbums();
	addTimes();
	addWeathers();
	addMoods();

	if (moods.length == 0) {
		chosenSongs = allSongs.filter(song => albums.includes(song.album) && times.includes(song.time) && weathers.includes(song.weather));
	} else {
		chosenSongs = allSongs.filter(song => albums.includes(song.album) && times.includes(song.time) && weathers.includes(song.weather) && moods.includes(song.mood));
	}
	shuffleSongs(chosenSongs);		
}



function shuffleSongs(songList) {
	let index = songList.length, randomIndex;
	  // While there remain elements to shuffle.
	while (index != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * index);
		index--;

		// And swap it with the current element.
		[songList[index], songList[randomIndex]] = [songList[randomIndex], songList[index]];
	}
}

function playSong() {
	var audio = document.getElementById("currentSong");
	var current = chosenSongs[playCounter];
	var url = current.url
	audio.src = "assets/audio/" + current.album + "/" + url + ".mp3"
	audio.play();
	displaySongTitle(current);
	audio.onended = function() {
		playCounter++;
		playSong();
	};	
	// showGif();
}

function displaySongTitle(song) {
	var title;
	var hour = song.time.slice(0, -2) + " " + song.time.slice(-2);
	var weatherTitle = song.weather.charAt(0).toUpperCase() + song.weather.slice(1);
	switch(song.album) {
		case "AC":
			title = "Animal Crossing";
			break;

		case "ACWWCF":
			title = "Animal Crossing Wild World/City Folk";
			break;

		case "ACNL":
			title = "Animal Crossing New Leaf";
			break;

		case "ACNH":
			title = "Animal Crossing New Horizons";
			break;
	}
	document.getElementById("testSong").innerHTML = title +": " + hour + " (" + weatherTitle + ")";
}

function forward() {
	playCounter++
	playSong();
}

function back() {
	playCounter--;
	playSong();
}

function togglePlay(button) {
	var audio = document.getElementById("currentSong")
	var button = document.getElementById("playButton")
	if (audio.paused == true && button.value == "play") {
		button.value = "pause";
		playButton.innerHTML = "&#9647;&#9647;";
		playSong();
	} else if (audio.paused == true) {
		audio.play();
		button.value = "pause";
		playButton.innerHTML = "&#9647;&#9647;";
	} else {
		button.value = "pause";
		playButton.innerHTML = "&#9654;"
		audio.pause();
	}
}

// function showGif() {
// 	var current = allSongs[playCounter];
// 	var gif = document.getElementById("gif");
// 	var time = current.time;
// 	var dayStatus = "";
// 	var gifStatus;

// 		if (time == "5am"|| time =="6am"|| time =="7am"||time =="8am"||time =="9am"||time =="10am"||time =="11am"||time =="12pm"||time =="1pm"||time =="2pm"||time =="3pm"||time =="4pm"||time =="5pm") {
// 			dayStatus = "Day";
// 		} else if (time == null) {
// 			var rand = Math.random();
// 			dayStatus = "Night";
// 		}

// 		gifStatus = current.weather + dayStatus
// 		console.log(gifStatus)
// 	}

	// switch (current.weather + dayStatus) {
	// 	case "rainy":
	// 		gifStatus = 11;
	// 		break;
	// 	case "snowy":
	// 		gifStatus = 7;
	// 		break;
	// 	case "sunnyDay":
	// 		gifStatus = 7;
	// 		break;
	// 	case "sunnyNight":
	// 		gifStatus = 10;
	// 		break;
	// }
	// var num = Math.floor(Math.random() * (gifStatus + 1))
	// gif.src = "assets/gifs/" + current.weather + dayStatus + "/" + current.weather + dayStatus + num + ".gif";
	// console.log(current.weather)
	// console.log(dayStatus)
	// console.log(num)
		
	