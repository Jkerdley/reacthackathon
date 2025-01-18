import { BADGE_TYPE } from '../constants/badge-type';

export const getBadgeTypeStyles = (type) => {
	switch (type) {
		case BADGE_TYPE.PRIMARY:
			return {
				color: '#fff',
				backgroundColor: '#0d6efd',
				borderColor: '#0d6efd',
			};
		case BADGE_TYPE.SECONDARY:
			return {
				color: '#fff',
				backgroundColor: '#6c757d',
				borderColor: '#6c757d',
			};
		case BADGE_TYPE.SUCCESS:
			return {
				color: '#fff',
				backgroundColor: '##198754',
				borderColor: '##198754',
			};
		case BADGE_TYPE.DANGER:
			return {
				color: '#fff',
				backgroundColor: '#dc3545',
				borderColor: '#dc3545',
			};
		case BADGE_TYPE.WARNING:
			return {
				color: '#000',
				backgroundColor: '#ffc107',
				borderColor: '#ffc107',
			};
		case BADGE_TYPE.INFO:
			return {
				color: '#000',
				backgroundColor: '#0dcaf0',
				borderColor: '#0dcaf0',
			};
		case BADGE_TYPE.LIGHT:
			return {
				color: '#000',
				backgroundColor: '#f8f9fa',
				borderColor: '#f8f9fa',
			};
		case BADGE_TYPE.DARK:
			return {
				color: '#fff',
				backgroundColor: '#212529',
				borderColor: '#212529',
			};
		default:
			return null;
	}
};
