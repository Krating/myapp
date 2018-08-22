module.exports = class errorMessage {
	constructor() {
		this.STATUS = null;
		this.TEXT = null;
		this.MESSAGE_CODE = {};
	}

	setStatus (status, text) {
		this.STATUS = status;
		this.TEXT = text;
		this.MESSAGE_CODE = this.setMessage(status);
		if (status != 200) {
			return {
				'error': this.STATUS,
				'code': this.MESSAGE_CODE.CODE,
				'message': this.MESSAGE_CODE.MESSAGE,
				'description': this.TEXT
			};
		}
	}

	setMessage (status) {
		let obj = {};
		switch(status) {
		case 401:
			obj['CODE'] = 'ACCESS_DENIED';
			obj['MESSAGE'] = 'The authentication credentials for the API are incorrect.';
			break;
		case 402:
			obj['CODE'] = 'INSUFFICIENT_FUNDS';
			obj['MESSAGE'] = 'Player has insufficient funds.';
			break;
		case 403:
			obj['CODE'] = 'TOKEN_EXPIRED';
			obj['MESSAGE'] = 'The session token expired.';
			break;
		case 404:
			obj['CODE'] = 'TOKEN_NOT_FOUND';
			obj['MESSAGE'] = 'The session token is invalid.';
			break;
		case 500:
			obj['CODE'] = 'INTERNAL_ERROR';
			obj['MESSAGE'] = 'Internal server error.';
			break;
		}
		return obj;
	}
};