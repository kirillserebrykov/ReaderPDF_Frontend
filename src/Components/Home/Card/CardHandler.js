/**
 * @param {string} filename
 * @param {Boolean} isSelect
 * @param {FC} navigate
 */
export const redirectHandler = (filename, isSelect, navigate) => () => {
	if (isSelect) return;
	else navigate(`/File/${filename}`);
};

/**
 * @param {Dispatch} addSelect
 * @param {FC} setIsSelect
 * @param {string} filename
 * @param {Boolean} isSelect
 *
 */
export const selectHandler = (addSelect, setIsSelect, filename, isSelect) => () => {
	if (!isSelect) addSelect(filename);
	setIsSelect(true);
};
/**
 * @param {event} e
 * @param {FC} setIsSelect
 * @param {string} filename
 * @param {Dispatch} deleteHandler
 */
export const cancelSelectionHandler = (e, setIsSelect, filename, deleteHandler) => {
	setIsSelect(false);
	deleteHandler(filename);
	e.stopPropagation();
};
