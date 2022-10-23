export default class PhoneNumFixer {
	constructor(num) {
		this.num = num;
	}

	fixNum() {
		const regex = /(\+?\d+)(\s+)(\(?[\d]{3,}\)?)(\s+)([\d]{2,3})(\s+|-+)([\d]{2})(\s+|-+)?(\d{2})/g;
		const arr = this.num.match(regex);
		if (arr !== null) {
			let fixedNum = '';
			for (let i = 0; i < arr[0].length; i += 1) {
				if (i === 0 && arr[0].charAt(i) === '8') {
					fixedNum += '+7';
				} else if ((arr[0].charAt(i) === '+' || !Number.isNaN(Number(arr[0].charAt(i)))) && arr[0].charAt(i) !== ' ') {
					fixedNum += arr[0].charAt(i);
				}
			}
			return fixedNum;
		}
		return false;
	}
}
