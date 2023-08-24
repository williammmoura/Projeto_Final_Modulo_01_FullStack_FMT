import {Modal as BModal, Button} from 'react-bootstrap';

export const Modal = ({
  title,
  children,
  onClose,
  open,
  ...props
}) => {

  return (
    <BModal
      {...props}
      onHide={onClose}
      show={open}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BModal.Header closeButton>
        <BModal.Title id="contained-modal-title-vcenter">
          Nome Medicamento:{title}
        </BModal.Title>
      </BModal.Header>
      <BModal.Body>
        Descrição:{children}      
      </BModal.Body>
      <BModal.Footer>
        <Button onClick={onClose}>Fechar</Button>
      </BModal.Footer>
    </BModal>
  );
}