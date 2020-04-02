function isMobile() {
	if(navigator.userAgent.match(/(android|iphone|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
		return true;
	}
	return false;
}

function isMailValid(mail) {
	if(mail.match(/[a-z0-9_\-.]+@[a-z0-9_\-.]+\.[a-z]+/i)) {
		return true;
	}
	return false;
}

function shuffleArray(arrayToShuffle) {
	for(let i = arrayToShuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
  }
  return arrayToShuffle;
}

export {
	isMobile,
	isMailValid,
	shuffleArray
};