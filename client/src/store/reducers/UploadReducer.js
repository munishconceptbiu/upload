import { SET_UPLOADING_DOCUMENT } from '../actions/UploadingDocumentAction';

const uploadState = {
	uploadingDocument: false,
}

export function UploadReducer(state = uploadState, action) {
	if(action.type === SET_UPLOADING_DOCUMENT) {
		return {
			...state,
			uploadingDocument: action.payload,
		}
	}
	return state;
}
