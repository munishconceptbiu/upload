export const SET_UPLOADING_DOCUMENT = "SET_UPLOADING_DOCUMENT";
export const UploadingDocumentAction = (bool) => {
	return{
		type: SET_UPLOADING_DOCUMENT,
		payload: bool,
	}
}