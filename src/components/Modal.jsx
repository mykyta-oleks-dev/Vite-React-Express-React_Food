import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;

		if (open) {
			modal.showModal();
		} else {
			modal.close();
		}

		return () => {
			modal.close();
		};
	}, [open]);

	return createPortal(
		<dialog className="modal" ref={dialog} onClose={onClose}>
			{open ? children : null}
		</dialog>,
		document.getElementById('modal')
	);
}

export default Modal;
