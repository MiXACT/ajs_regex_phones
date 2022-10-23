import PhoneNumFixer from '../app';

test('testing Phone Number Fixer', () => {
	function checkNum(phoneNumber) {
		const tester = new PhoneNumFixer(phoneNumber);
		return tester.fixNum();
	}

	expect(checkNum('8 (927) 000-00-00')).toEqual('+79270000000');
	expect(checkNum('+7 960 000 00 00')).toEqual('+79600000000');
	expect(checkNum('+86 000 000 0000')).toEqual('+860000000000');

	expect(checkNum('not a phone number')).toBeFalsy();
});
