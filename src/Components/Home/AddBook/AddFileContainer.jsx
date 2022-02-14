import React from "react";
import AddFile from "./AddFile";
import { addDocs, wipeDocs } from "../../../store/uploadDocSlice";
import { useUploadFileMutation } from "../../../store/data-layer-level/postRequests";
import { useSelector, useDispatch } from "react-redux";
const AddFileContainer = ({ refetchCatalog }) => {
	const dispatch = useDispatch();
	const addDocsToState = docs => dispatch(addDocs(docs));
	const wipeFilesState = () => dispatch(wipeDocs());
	const stateAddition = useSelector(state => state.uploadDocSlice.DocsToUpload);
	const [updatePost, result] = useUploadFileMutation();

	return (
		<AddFile
			addDocsToState={addDocsToState}
			wipeFilesState={wipeFilesState}
			refetchCatalog={refetchCatalog}
			updatePost={updatePost}
			result={result}
			stateAddition={stateAddition}
		/>
	);
};

export default AddFileContainer;
