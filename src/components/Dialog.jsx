import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DialogContainer = styled.div`
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled.div`

`;

const Dialog = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <DialogContainer $isOpen={isOpen}>
      <DialogContent ref={dialogRef}>
        {children}
      </DialogContent>
    </DialogContainer>
  );
};

export default Dialog;